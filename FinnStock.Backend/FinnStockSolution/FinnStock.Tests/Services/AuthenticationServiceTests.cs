

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
            _authenticationService = this.ServiceProvider.GetRequiredService<AuthenticationService>();
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
                Email = "leandroluz97@gmai.com",
                FirstName = "Leandro",
                LastName = "Luz",
                Password = "Password12$",
                PhoneNumber = "99999999"
            };
            await _authenticationService.Register(user);

            Assert.IsNotNull(user);
        }
    }
}



