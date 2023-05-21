using FinnStock.Dtos;
using FinnStock.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinnStock.WebAPI.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class SellOrderController : ControllerBase
    {
        private readonly SellOrderService _sellOrderService;

        public SellOrderController(SellOrderService sellOrderService)
        {
            _sellOrderService = sellOrderService;
        }

        [HttpGet]
        [Route("{userId}")]
        public async Task<IEnumerable<SellOrderDto>> GetAllAsync(Guid userId)
        {
            return await _sellOrderService.GetByUserIdAsync(userId);
        }

        [HttpPost]
        [Route("{userId}/orders")]
        public async Task<SellOrderDto> CreateOrderAsync(Guid userId, SellOrderDto buyOrder)
        {
            return await _sellOrderService.CreateOrderAsync(userId, buyOrder);
        }

        [HttpGet]
        [Route("{userId}/orders/{orderId}")]
        public async Task<SellOrderDto> GetByIdAsync(Guid orderId)
        {
            return await _sellOrderService.GetByIdAsync(orderId);
        }
    }

    
}
