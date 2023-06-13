using FinnStock.Dtos;
using FinnStock.Services;
using FinnStock.Utils;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinnStock.WebAPI.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class StocksController : ControllerBase
    {
        private readonly ILogger<StocksController> _logger;
        private readonly StockService _stockService;
        public StocksController(ILogger<StocksController> logger, StockService stockService)
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
        [Route("{symbol}/profile")]
        public async Task<CompanyDto> GetCompanyAsync(string symbol)
        {
           var company =  await _stockService.GetCompanyProfileAsync(symbol);
           return company; 
        }
        
        [HttpGet]
        [Route("{symbol}/quote")]
        public async Task<QuoteDto> GetStockQuoteAsync(string symbol)
        {
           var quote =  await _stockService.GetStockQuoteAsync(symbol);
           return quote; 
        }
        
        [HttpGet]
        [Route("{symbol}/socket")]
        public async Task Connect(string symbol)
        {
           await _stockService.ConnectToWebSocket(symbol);
        }

    }
}
