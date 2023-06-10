using FinnStock.Domain;
using FinnStock.Dtos;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Services
{
    public class UserService
    {
        private readonly ILogger<UserService> _logger;
        private readonly UserManager<User> _userManager;
        public UserService(ILogger<UserService> logger, UserManager<User> userManager)
        {
            _logger = logger;
            _userManager = userManager;
        }

        public async Task<UserDto> GetByIdAsync()
        {

        }
        public async Task<UserDto> UpdateAsync()
        {

        }

        public async Task<UserDto> GetProfileImageAsync()
        {

        }
        public async Task<UserDto> UploadProfileImageAsync()
        {

        }

    }
}
