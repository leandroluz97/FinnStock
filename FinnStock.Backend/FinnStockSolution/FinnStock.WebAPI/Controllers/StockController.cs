using FinnStock.Dtos;
using FinnStock.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinnStock.WebAPI.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly ILogger<StockController> _logger;
        private readonly StockService _stockService;
        public StockController(ILogger<StockController> logger, StockService stockService)
        {
            _logger = logger;
            _stockService = stockService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IEnumerable<StockDto>> Stocks()
        {
           var stocks =  await _stockService.GetAllAsync();
           return stocks; 
        }
        
        [HttpGet]
        [Route("{symbol}")]
        public async Task<CompanyDto> GetCompanyAsync(string symbol)
        {
           var company =  await _stockService.GetCompanyAsync(symbol);
           return company; 
        }

    }
}
