﻿using FinnStock.Dtos;
using FinnStock.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinnStock.WebAPI.Controllers
{
    [Route("api/v1/Users/{userId}/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class FavoritesController : ControllerBase
    {
        private readonly FavoriteService _favoriteService;

        public FavoritesController(FavoriteService favoriteService)
        {
            _favoriteService = favoriteService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IEnumerable<FavoriteDto>> GetAllAsync(Guid userId, CancellationToken cancellationToken)
        {
          return  await _favoriteService.GetAllAsync(userId, cancellationToken);
        }

        [HttpPost]
        [Route("")]
        public async Task<FavoriteDto> CreateAsync(Guid userId, FavoriteDto favorite, CancellationToken cancellationToken)
        {
            return await _favoriteService.CreateAsync(userId, favorite, cancellationToken);
        }

        [HttpDelete]
        [Route("{favoriteId}")]
        public async Task DeleteAsync(Guid userId, Guid favoriteId, CancellationToken cancellationToken)
        {
            await _favoriteService.RemoveAsync(userId, favoriteId, cancellationToken);
        }


    }
}
