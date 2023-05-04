using FinnStock.Business.Abstractions;
using FinnStock.Domain;
using FinnStock.Dtos;
using FinnStock.Infrastructure.Abstractions.Clients;
using FinnStock.Services.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Services
{
    public class AuthenticationService 
    {
        private readonly UserManager<User> _userManager;
        private readonly ILogger<AuthenticationService> _logger;
        private readonly IEmailClient _sendgridClient;

        public AuthenticationService(ILogger<AuthenticationService> logger, UserManager<User> userManager, IEmailClient sendgridClient)
        {
            _logger = logger;
            _userManager = userManager;
            _sendgridClient = sendgridClient;
        }
        public async Task Register(RegisterDto registerDto)
        {

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
                throw new Exception(result.Errors.ToList().ToString());
            }

            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            var uriBuilder = new UriBuilder("https://localhost:3000/auth/confirm");
            uriBuilder.Query = $"token={token}";
            var confirmationLink = uriBuilder.Uri.ToString();

            await _sendgridClient.SendAccountConfirmationAsync(user.Email, confirmationLink);
    
        }
        public Task Login()
        {
            throw new NotImplementedException();
        }


        public Task ResetPassword()
        {
            throw new NotImplementedException();
        }

        public Task TwoWayFactorAuthentication()
        {
            throw new NotImplementedException();
        }

        public async Task ConfirmEmail(string token, string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if(user == null)
            {
                throw new NotFoundException($"{nameof(user)} with {nameof(email)} not found");
            }

            var result = await _userManager.ConfirmEmailAsync(user, token);

            if (!result.Succeeded)
            {
                throw new Exception();
            }
            //TODO: Generate JWT
        }
    }
}
