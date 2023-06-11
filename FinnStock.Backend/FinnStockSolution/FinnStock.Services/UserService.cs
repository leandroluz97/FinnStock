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
using FinnStock.Azure;

namespace FinnStock.Services
{
    public class UserService
    {
        private readonly ILogger<UserService> _logger;
        private readonly UserManager<User> _userManager;
        private readonly BlobClient _blobClient;
        private readonly string _containerName;
        public UserService(ILogger<UserService> logger, UserManager<User> userManager, BlobClient blobClient)
        {
            _logger = logger;
            _userManager = userManager;
            _blobClient = blobClient;
            _containerName = "profile";
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
            //userDomain.ProfileId = user.ProfileId;

            var updatedUserResponse = await _userManager.UpdateAsync(userDomain);

            if (!updatedUserResponse.Succeeded)
            {
                throw new InvalidOperationException($"Could not pdate user {userDomain.Id}");
            }

            return UserMapper.ToDto(userDomain);
        }

        public async Task<string> GetProfileImageAsync(Guid userId)
        {
            if(userId == default) 
            { 
                throw new ArgumentNullException(nameof(userId)); 
            }
            var fileLink = await _blobClient.GetByUserIdAsync(_containerName, userId.ToString());

            if (string.IsNullOrWhiteSpace(fileLink))
            {
                throw new NotFoundException(nameof(fileLink));
            }

            return fileLink;
        }
        public async Task UploadProfileImageAsync(Guid userId, Stream file, CancellationToken cancellationToken = default)
        {
            if (userId == default)
            {
                throw new ArgumentNullException(nameof(userId));
            }

            if (file == null)
            {
                throw new ArgumentNullException(nameof(file));
            }

           var isUploaded =  await _blobClient.UploadAsync(_containerName, userId.ToString(), file);

            if (!isUploaded)
            {
                throw new InvalidOperationException("Could not upload file");
            }
        }

    }
}
