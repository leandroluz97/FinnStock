using FinnStock.Business.Abstractions;
using FinnStock.Domain;
using FinnStock.Dtos;
using FinnStock.Infrastructure.Abstractions.Clients;
using FinnStock.Services.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Services
{
    public class AuthenticationService 
    {
        private readonly ILogger<AuthenticationService> _logger;
        private readonly IConfiguration _configuration;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IEmailClient _sendgridClient;
        private readonly IMessageClient _twilioClient;

        public AuthenticationService(
            ILogger<AuthenticationService> logger, 
            IConfiguration configuration, 
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IEmailClient sendgridClient,
            IMessageClient twilioClient)
        {
            _logger = logger;
            _configuration = configuration;
            _userManager = userManager;
            _signInManager = signInManager;
            _sendgridClient = sendgridClient;
            _twilioClient = twilioClient;
        }
        public async Task Register(RegisterDto registerDto)
        {
            if(registerDto == null)
            {
                throw new ArgumentNullException(nameof(registerDto));
            }
            registerDto.EnsureValidation();

            var user = new User()
            {
                Email = registerDto.Email,
                PhoneNumber = registerDto.PhoneNumber,
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                UserName = registerDto.Email
            };
            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
            {
                throw new InvalidOperationException(result.Errors.ToList().ToString());
            }

            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            var uriBuilder = new UriBuilder("https://localhost:3000/auth/confirm");
            uriBuilder.Query = $"token={token}&email={user.Email}";
            var confirmationLink = uriBuilder.Uri.ToString();

            await _sendgridClient.SendAccountConfirmationAsync(user.Email, confirmationLink);
    
        }

        public async Task ConfirmEmail(ConfirmEmailDto confirmEmailDto)
        {
            if(confirmEmailDto == null)
            {
                throw new ArgumentNullException();
            }
            confirmEmailDto.EnsureValidation();

            var user = await _userManager.FindByEmailAsync(confirmEmailDto.Email);
            if (user == null)
            {
                throw new NotFoundException($"{nameof(user)} with {confirmEmailDto.Email} not found");
            }

            var result = await _userManager.ConfirmEmailAsync(user, confirmEmailDto.Token);

            if (!result.Succeeded)
            {
                throw new InvalidOperationException();
            }
        }

        public async Task<LoginResponseDto> Login(LoginDto loginDto)
        {
            if (loginDto == null)
            {
                throw new ArgumentNullException(nameof(loginDto));
            }
            loginDto.EnsureValidation();

            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            if(user == null)
            {
                throw new NotFoundException($"{nameof(user)} with {loginDto.Email} not found");
            }

            var result = await _signInManager.PasswordSignInAsync(loginDto.Email, loginDto.Password, isPersistent: false, lockoutOnFailure: false);
            if (result.RequiresTwoFactor)
            {
                var code = await _userManager.GenerateTwoFactorTokenAsync(user, "Phone");
                var message = "Your security code is: " + code;
                await _twilioClient.SendOTPMessageAsync(user.PhoneNumber, message);
            }
            if (!result.Succeeded)
            {
                throw new InvalidOperationException("Unable to load two-factor authentication user.");
            }

            return new LoginResponseDto() { UserId = user.Id.ToString() };


        }

        public async Task<ResponseToken> ValidateOTP(ValidateOtpDto validateOtpDto)
        {
           if(validateOtpDto == null)
            {
                throw new ArgumentNullException(nameof(validateOtpDto));
            }
            validateOtpDto.EnsureValidation();

             var result = await _signInManager.TwoFactorSignInAsync("Phone", validateOtpDto.OtpCode, isPersistent:true, rememberClient:true);
            if (!result.Succeeded)
            {
                throw new InvalidOperationException($"Invalid {nameof(validateOtpDto.OtpCode)}");
            }
            
            var user = await _userManager.FindByIdAsync(validateOtpDto.UserId);

            return CreateJWToken(user);
        }

        public async Task ResetPassword()
        {
           
            throw new NotImplementedException();
        }

        private ResponseToken CreateJWToken(User user)
        {
            DateTime expiration = DateTime.UtcNow.AddMinutes(Convert.ToDouble(_configuration["Jwt:Exp_time"]));
            Claim[] claims = new Claim[] {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()), //Subject (userId)
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()), //JWT unique ID
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()), //Issued at (date and timeof token generation)
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()), //Unit name Identifier of the user (Id or email)
            };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Secret_key"]));

            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            JwtSecurityToken tokenGenerator = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: expiration,
                signingCredentials: signingCredentials
                );

            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.WriteToken(tokenGenerator);


            return new ResponseToken() { Token = token };
           
        }




    }
}
