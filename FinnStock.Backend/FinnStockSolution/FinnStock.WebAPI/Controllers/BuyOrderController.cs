using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FinnStock.Services;
using FinnStock.Dtos;

namespace FinnStock.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyOrderController : ControllerBase
    {
        private readonly BuyOrderService _buyOrderService;
        public BuyOrderController(BuyOrderService buyOrderService)
        {
            _buyOrderService = buyOrderService;
        }
    

        [HttpGet]
        [Route("{userId}")]
        public async Task<IEnumerable<BuyOrderDto>> GetAllAsync(Guid userId)
        {
            return await _buyOrderService.GetByUserIdAsync(userId);
        }

        [HttpPost]
        [Route("{userId}/orders")]
        public async Task<BuyOrderDto> CreateOrderAsync(Guid userId, BuyOrderDto buyOrder)
        {
            return await _buyOrderService.CreateOrderAsync(userId, buyOrder);
        }

        [HttpGet]
        [Route("{userId}/orders/{orderId}")]
        public async Task<BuyOrderDto> GetByIdAsync(Guid orderId)
        {
            return await _buyOrderService.GetByIdAsync(orderId);
        }
    }
}
