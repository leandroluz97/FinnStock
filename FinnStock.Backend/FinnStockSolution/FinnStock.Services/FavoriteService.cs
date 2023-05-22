using FinnStock.Domain;
using FinnStock.Dtos;
using FinnStock.Infrastructure.Abstractions;
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
    public class FavoriteService
    {
        private readonly ILogger<FavoriteService> _logger;
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<User> _userManager;

        public FavoriteService(ILogger<FavoriteService> logger, IUnitOfWork unitOfWork)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
        }

        public async Task<FavoriteDto> CreateAsync(Guid userId, FavoriteDto favoriteDto)
        {
            if (favoriteDto == null)
            {
                throw new ArgumentNullException(nameof(favoriteDto));
            }
            favoriteDto.EnsureValidation();

            if(userId == default)
            {
                throw new ArgumentNullException(nameof(favoriteDto));
            }

            var user = _userManager.Users.FirstOrDefault(u => u.Id.Equals(userId));

            if(user == null)
            {
                throw new NotFoundException(nameof(user));
            }

            favoriteDto.Id = Guid.NewGuid();

            var favorite = FavoriteMapper.ToDomain(favoriteDto);

            _unitOfWork.FavoriteRepository.Add(favorite);

            await _unitOfWork.SaveChangesAsync();

            return FavoriteMapper.ToDto(favorite);
        }
    }
}
