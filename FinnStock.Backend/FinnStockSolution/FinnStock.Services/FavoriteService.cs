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

        public FavoriteService(ILogger<FavoriteService> logger, IUnitOfWork unitOfWork, UserManager<User> userManager)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
            _userManager = userManager;
        }

        public async Task<IEnumerable<FavoriteDto>> GetAllAsync(Guid userId, CancellationToken cancellationToken = default)
        {
            if(userId == default)
            {
                throw new ArgumentNullException(nameof(userId));
            }

            var user =  _userManager.Users.FirstOrDefault(u => u.Id.Equals(userId));

            if (user == null)
            {
                throw new NotFoundException(nameof(user));
            }

            var favorites = await _unitOfWork.FavoriteRepository.GetByUserIdAsync(userId, cancellationToken);

            if(favorites == null)
            {
                return default(IEnumerable<FavoriteDto>) ;
            }

            return favorites.Select(f => FavoriteMapper.ToDto(f));
        }

        public async Task<FavoriteDto> CreateAsync(Guid userId, FavoriteDto favoriteDto, CancellationToken cancellationToken = default)
        {
            if (favoriteDto == null)
            {
                throw new ArgumentNullException(nameof(favoriteDto));
            }
            favoriteDto.EnsureValidation();

            if(userId == default)
            {
                throw new ArgumentNullException(nameof(userId));
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

        public async Task RemoveAsync(Guid userId, Guid favoriteId, CancellationToken cancellationToken = default)
        {
            if(userId == default)
            {
                throw new ArgumentNullException(nameof(userId));
            }

            if (favoriteId == default)
            {
                throw new ArgumentNullException(nameof(favoriteId));
            }

            var user = _userManager.Users.FirstOrDefault(u => u.Id.Equals(userId));

            if (user == null)
            {
                throw new NotFoundException(nameof(user));
            }

            var favorite = await _unitOfWork.FavoriteRepository.GetByGloablIdAsync(favoriteId, cancellationToken);

            if (favorite == null)
            {
                throw new NotFoundException(nameof(favorite));
            }

            _unitOfWork.FavoriteRepository.Remove(favorite);   
            
            await _unitOfWork.SaveChangesAsync(); 
        }

       
    }
}
