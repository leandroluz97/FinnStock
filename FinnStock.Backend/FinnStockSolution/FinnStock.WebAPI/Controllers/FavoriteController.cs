using FinnStock.Dtos;
using FinnStock.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinnStock.WebAPI.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        private readonly FavoriteService _favoriteService;

        public FavoriteController(FavoriteService favoriteService)
        {
            _favoriteService = favoriteService;
        }

        [HttpGet]
        [Route("{userId}")]
        public async Task<IEnumerable<FavoriteDto>> GetAllAsync(Guid userId, CancellationToken cancellationToken)
        {
          return  await _favoriteService.GetAllAsync(userId, cancellationToken);
        }

        [HttpDelete]
        [Route("{userId}/{favoriteId}")]
        public async Task DeleteAsync(Guid userId, Guid favoriteId, CancellationToken cancellationToken)
        {
            await _favoriteService.RemoveAsync(userId, favoriteId, cancellationToken);
        }

        [HttpPost]
        [Route("{userId}")]
        public async Task<FavoriteDto> CreateAsync(Guid userId, FavoriteDto favorite, CancellationToken cancellationToken)
        {
            return await _favoriteService.CreateAsync(userId, favorite, cancellationToken);
        }

    }
}
