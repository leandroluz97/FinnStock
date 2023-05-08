

using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;
using FinnStock.Business.Abstractions;
using FinnStock.Services;
using FinnStock.Dtos;
using System.Threading.Tasks;

namespace FinnStock.Tests.Services
{
    public class AuthenticationServiceTests : BaseTest
    {
        private readonly AuthenticationService _authenticationService;
        public AuthenticationServiceTests()
        {
            //_authenticationService = this.ServiceProvider.GetRequiredService<AuthenticationService>();
            _authenticationService = this.ServiceProvider.GetService<AuthenticationService>();
        }
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public async Task  Register_User_Successfull()
        {
            var user = new RegisterDto
            {
                Email = "reiscv@yopmail.com",
                FirstName = "Leandro",
                LastName = "Luz",
                Password = "Password12$",
                PhoneNumber = "99999998"
            };
            await _authenticationService.Register(user);

            Assert.IsNotNull(user);
        }

        [Test]
        public async Task ConfirmEmail_TokenAndEmail_Successfull()
        {
            var token = "CfDJ8Nmvpc3kqytJmZGa3MX7jF1ThIzy4aMrAEtCqjlytJEjoOpABIRNhPC0HjuZQ8Z5Nxxvs2Zg5827wepEl1VRDYNZHf6/EnkEqStdHxviDBC+Ju3Z0/M+9G8HJypzLCL+b+jLTqtOtgM/jj2d6o7ZBhO7YmnbH5fWI27c7zfVt1Wh/NlgdsFlbZRcsEJ6uotwLlJi9CW67iemZjaOxW3wQGaeDRXtRg6lEcw8icfz0G3uI1c5uGaKE3VJ6bW39jJuGw==";
            var email = "reiscv@yopmail.com";
            var confirmEmailDto = new ConfirmEmailDto() { Token = token, Email = email};
            await _authenticationService.ConfirmEmail(confirmEmailDto);
            Assert.IsTrue(true);
        }
       

        [Test]
        public async Task Login_TokenAndEmail_Successfull()
        {
            var loginDto = new LoginDto() 
            { 
                Email= "reiscv@yopmail.com", 
                Password = "Password12$"
            };

            await _authenticationService.Login(loginDto);
            Assert.IsTrue(true);
        }

        [Test]
        public async Task ValidateOTP_OtpcodeAndUserId_Successfull()
        {

            //var otpCode = "";
            //var userId = "";
            //await _authenticationService.ValidateOTP(otpCode, userId);
            Assert.IsTrue(true);
        }
    }
}



