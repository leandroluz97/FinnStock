using FinnStock.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Business.Abstractions
{
    public interface IAuthorizationService
    {
        public Task Register(RegisterDto registerDto);
        public Task ConfirmEmail(string token, string email);
        public Task  Login();
        public Task  TwoWayFactorAuthentication();
        public Task  ResetPassword();
    }
}
