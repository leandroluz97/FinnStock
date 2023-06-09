﻿using FinnStock.Business.Abstractions;
using FinnStock.Domain;
using FinnStock.Dtos;
using FinnStock.Infrastructure.Abstractions.Clients;
using FinnStock.Services.Exceptions;
using FinnStock.Utils;
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
            _logger.LogInformation("{Register} param value {registerDto}", nameof(Register), registerDto);

            if (registerDto == null)
            {
                throw new ArgumentNullException(nameof(registerDto));
            }
            registerDto.EnsureValidation();

            var phoneNumberUtil = PhoneNumbers.PhoneNumberUtil.GetInstance();
            var phoneNumber = phoneNumberUtil.Parse(registerDto.PhoneNumber, null);

            if(phoneNumber == null)
            {
                throw new ArgumentException(nameof(registerDto.PhoneNumber));
            }

            var user = new User()
            {
                Email = registerDto.Email,
                PhoneNumber = registerDto.PhoneNumber,
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                UserName = registerDto.Email,
                TwoFactorEnabled = true,
                PhoneNumberConfirmed = true,
            };
            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
            {
                throw new InvalidOperationException(result.Errors.ToList().ToString());
            }

            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            var tokenString = Conversor.ToBase64(token);

            var uriBuilder = new UriBuilder("http://localhost:3000/auth/confirm-email");
            uriBuilder.Query = $"token={tokenString}&email={user.Email}";
            var confirmationLink = uriBuilder.Uri.ToString();

            var subject = "Confirm your email address";
            var htmlContent = $"<p>This is your confirmation link: <a href={confirmationLink} >Click here to confirm</a></p>";

            await _sendgridClient.SendEmailAsync(user.Email, subject, htmlContent);

            _logger.LogInformation("{Register} send email: {subject}", nameof(Register), subject);
        }

        public async Task ConfirmEmail(ConfirmEmailDto confirmEmailDto)
        {
            _logger.LogInformation("{ConfirmEmail} param value {confirmEmailDto}", nameof(ConfirmEmail), confirmEmailDto);

            if (confirmEmailDto == null)
            {
                throw new ArgumentNullException();
            }
            confirmEmailDto.EnsureValidation();

            var user = await _userManager.FindByEmailAsync(confirmEmailDto.Email);
            if (user == null)
            {
                throw new NotFoundException($"{nameof(user)} with {confirmEmailDto.Email} not found");
            }

            var token= Conversor.ToString(confirmEmailDto.Token);

            var result = await _userManager.ConfirmEmailAsync(user, token);

            if (!result.Succeeded)
            {
                throw new InvalidOperationException();
            }

            _logger.LogInformation("{ConfirmEmail} {user}", nameof(ConfirmEmail), user);
        }

        public async Task<LoginResponseDto> Login(LoginDto loginDto)
        {
            _logger.LogInformation("{Login} param value {loginDto}", nameof(Login), loginDto);

            if (loginDto == null)
            {
                throw new ArgumentNullException(nameof(loginDto));
            }
            loginDto.EnsureValidation();

            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            if (user == null)
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
            else if (!result.Succeeded)
            {
                throw new InvalidOperationException("Unable to load two-factor authentication user.");
            }

            _logger.LogInformation("{Login} with {user}", nameof(Login), user);

            return new LoginResponseDto() { UserId = user.Id.ToString() };
        }

        public async Task<ResponseToken> ValidateOTP(ValidateOtpDto validateOtpDto)
        {
            _logger.LogInformation("{ValidateOTP} param value {validateOtpDto}", nameof(ValidateOTP), validateOtpDto);

            if (validateOtpDto == null)
            {
                throw new ArgumentNullException(nameof(validateOtpDto));
            }
            validateOtpDto.EnsureValidation();

            var user = await _userManager.FindByIdAsync(validateOtpDto.UserId);

            var isVerified = await _userManager.VerifyTwoFactorTokenAsync(user, "Phone", validateOtpDto.OtpCode);

            if(isVerified != true)
            {
                throw new InvalidOperationException($"Invalid {nameof(validateOtpDto.OtpCode)}");
            }

            _logger.LogInformation("{ValidateOTP} validated {user}", nameof(ValidateOTP), user);

            return CreateJWToken(user);
        }

        public async Task LoginWithGoogle()
        {
            var info = await _signInManager.GetExternalLoginInfoAsync();
            if (info == null)
            {
                throw new ArgumentNullException();
            }

            var result = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, isPersistent: false, bypassTwoFactor: true);
            if (!result.Succeeded)
            {
                var email = info.Principal.FindFirstValue(ClaimTypes.Email);
                var user = new User()
                {
                    Email = email,
                    UserName = email,
                    TwoFactorEnabled = false
                };

                var createResult = await _userManager.CreateAsync(user);
                if (createResult.Succeeded)
                {
                    var addLoginResult = await _userManager.AddLoginAsync(user, info);
                    if (addLoginResult.Succeeded)
                    {
                        await _signInManager.SignInAsync(user, isPersistent: false);
                    }
                }
            }
        }

        public async Task<ResponseToken> ExternalLogin(ExternalLoginInfo externalLoginInfo)
        {
            _logger.LogInformation("{ExternalLogin} param value {externalLoginInfo}", nameof(ExternalLogin), externalLoginInfo);

            if (externalLoginInfo == null)
            {
                return null;
            }

            var signinResult = await _signInManager.ExternalLoginSignInAsync(externalLoginInfo.LoginProvider, externalLoginInfo.ProviderKey, false);
            var email = externalLoginInfo.Principal.FindFirstValue(ClaimTypes.Email);
            var user = await _userManager.FindByEmailAsync(email);

            if (signinResult.Succeeded)
            {
                var jwt = CreateJWToken(user);

                await _userManager.SetAuthenticationTokenAsync(user, TokenOptions.DefaultProvider, "jwt", jwt.Token);

                return jwt;
            }

            if (!string.IsNullOrEmpty(email))
            {
                if (user == null)
                {
                    user = new User()
                    {
                        FirstName = externalLoginInfo.Principal.FindFirstValue(ClaimTypes.GivenName),
                        LastName = externalLoginInfo.Principal.FindFirstValue(ClaimTypes.Surname),
                        UserName = externalLoginInfo.Principal.FindFirstValue(ClaimTypes.Email),
                        Email = externalLoginInfo.Principal.FindFirstValue(ClaimTypes.Email),
                        TwoFactorEnabled = false,
                        EmailConfirmed = true
                    };
                    await _userManager.CreateAsync(user);
                }
                await _userManager.AddLoginAsync(user, externalLoginInfo);
                await _signInManager.SignInAsync(user, false);

                var jwt = CreateJWToken(user);
                await _userManager.SetAuthenticationTokenAsync(user, TokenOptions.DefaultProvider, "jwt", jwt.Token);
                return jwt;
            }

            _logger.LogInformation("{ExternalLogin} failed", nameof(ExternalLogin));

            return null;
        }

        public async Task RequestResetPassword(string email)
        {
            _logger.LogInformation("{RequestResetPassword} param value {email}", nameof(RequestResetPassword), email);

            if (string.IsNullOrWhiteSpace(email))
            {
                throw new ArgumentNullException(nameof(email));
            }

            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
            {
                throw new NotFoundException();
            }

            var code = await _userManager.GeneratePasswordResetTokenAsync(user);
            var codeString = Conversor.ToBase64(code);

            var uriBuilder = new UriBuilder("http://localhost:3000/auth/reset-password");
            uriBuilder.Query = $"activationToken={codeString}&email={user.Email}";
            var confirmationLink = uriBuilder.Uri.ToString();

            var subject = "Reset Password";
            var htmlContent = $"<p>This is your Reset Password link: <a href={confirmationLink} >Click here to confirm</a></p>";

            await _sendgridClient.SendEmailAsync(user.Email, subject, htmlContent);

            _logger.LogInformation("{RequestResetPassword} {user}", nameof(RequestResetPassword), user);
        }

        public async Task ResetPassword(ResetPasswordDto resetDto)
        {
            _logger.LogInformation("{ResetPassword} param value {email}", nameof(ResetPassword), resetDto);

            if (resetDto == null)
            {
                throw new ArgumentNullException(nameof(resetDto));
            }

            var user = await _userManager.FindByEmailAsync(resetDto.Email);

            if (user == null)
            {
                throw new NotFoundException(nameof(user));
            }

            var activationToken = Conversor.ToString(resetDto.ActivationToken);

            var result = await _userManager.ResetPasswordAsync(user, activationToken, resetDto.Password);
            
            if (!result.Succeeded)
            {
                throw new InvalidOperationException();
            }

            _logger.LogInformation("{ResetPassword} failed {email}", nameof(ResetPassword));
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
