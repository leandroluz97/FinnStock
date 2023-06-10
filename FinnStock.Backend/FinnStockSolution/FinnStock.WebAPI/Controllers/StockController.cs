using FinnStock.Dtos;
using FinnStock.Services;
using FinnStock.Utils;
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
        public async Task<Pagination<StockDto>> Stocks()
        {
           var stocks =  await _stockService.GetAllAsync();
           return stocks; 
        }
        
        [HttpGet]
        [Route("profile/{symbol}")]
        public async Task<CompanyDto> GetCompanyAsync(string symbol)
        {
           var company =  await _stockService.GetCompanyProfileAsync(symbol);
           return company; 
        }
        
        [HttpGet]
        [Route("quote/{symbol}")]
        public async Task<QuoteDto> GetStockQuoteAsync(string symbol)
        {
           var quote =  await _stockService.GetStockQuoteAsync(symbol);
           return quote; 
        }
        
        [HttpGet]
        [Route("socket/{symbol}")]
        public async Task Connect(string symbol)
        {
           await _stockService.ConnectToWebSocket(symbol);
        }

    }
}
