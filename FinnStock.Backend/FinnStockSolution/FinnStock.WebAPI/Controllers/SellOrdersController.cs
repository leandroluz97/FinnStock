using FinnStock.Dtos;
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
    public class SellOrdersController : ControllerBase
    {
        private readonly SellOrderService _sellOrderService;

        public SellOrdersController(SellOrderService sellOrderService)
        {
            _sellOrderService = sellOrderService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IEnumerable<SellOrderDto>> GetAllAsync(Guid userId)
        {
            return await _sellOrderService.GetByUserIdAsync(userId);
        }

        [HttpPost]
        [Route("")]
        public async Task<SellOrderDto> CreateOrderAsync(Guid userId, SellOrderDto buyOrder)
        {
            return await _sellOrderService.CreateOrderAsync(userId, buyOrder);
        }

        [HttpGet]
        [Route("{orderId}")]
        public async Task<SellOrderDto> GetByIdAsync(Guid orderId)
        {
            return await _sellOrderService.GetByIdAsync(orderId);
        }
    }

    
}
