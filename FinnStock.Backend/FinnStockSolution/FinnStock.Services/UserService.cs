using FinnStock.Domain;
using FinnStock.Dtos;
using FinnStock.Services.Exceptions;
using FinnStock.Services.Mappers;
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

        public async Task<UserDto> GetByIdAsync(Guid userId, CancellationToken cancellationToken = default)
        {
            if (userId == default)
            {
                throw new ArgumentNullException(nameof(userId));
            }

            var user = await _userManager.FindByIdAsync(userId.ToString());

            if(user == null)
            {
                throw new NotFoundException(nameof(userId));
            }

            return UserMapper.ToDto(user);
        }

        public async Task<UserDto> UpdateAsync(Guid userId, UserDto user, CancellationToken cancellationToken = default)
        {
            if(userId == default)
            {
                throw new ArgumentNullException(nameof(userId));
            }

            if(user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            user.EnsureValidation();

            var  userDomain = await _userManager.FindByIdAsync(userId.ToString());

            if(userDomain == null)
            {
                throw new NotFoundException(nameof(userDomain));
            }

            userDomain.FirstName = user.FirstName;
            userDomain.LastName = user.LastName;
            userDomain.BirthDate = user.BirthDate;
            userDomain.ProfileId = user.ProfileId;

            var updatedUserResponse = await _userManager.UpdateAsync(userDomain);

            if (!updatedUserResponse.Succeeded)
            {
                throw new InvalidOperationException($"Could not pdate user {userDomain.Id}");
            }

            return UserMapper.ToDto(userDomain);
        }

        public async Task<UserDto> GetProfileImageAsync()
        {

        }
        public async Task<byte[]> UploadProfileImageAsync(Guid userId, byte[] bytes, CancellationToken cancellationToken = default)
        {
            if(bytes == null)
            {
                throw new ArgumentNullException(nameof(bytes));
            }

            var fileToBase64 = Convert.ToBase64String(bytes);

            return Convert.FromBase64String(fileToBase64);  
        }

    }
}
