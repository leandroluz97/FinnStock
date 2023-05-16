using FinnStock.Clients.Finnhub;
using FinnStock.Dtos;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Services
{
    public class StockService
    {
        private readonly ILogger<StockService> _logger;
        private readonly FinnhubClient _finnhubClient;
        public StockService(ILogger<StockService> logger, FinnhubClient finnhubClient)
        {
            _logger = logger;
            _finnhubClient = finnhubClient;
        }

        public async Task<IEnumerable<StockDto>> GetAllAsync()
        {
            _logger.LogInformation("{GetAllAsync} request", nameof(GetAllAsync));

            var stocks = await _finnhubClient.GetStocksAsync();

            if (stocks == null)
            {
                return null;
            }

            _logger.LogInformation("{GetAllAsync} found: {stocks}", nameof(GetAllAsync), stocks.Count());

            return stocks;
        }

        public async Task<IEnumerable<SymbolDto>> SearchStockAsync(string searchText)
        {
            _logger.LogInformation("{SearchStockAsync} param value {searchText}", nameof(SearchStockAsync), searchText);

            var stocks = await _finnhubClient.SearchStocksAsync(searchText);

            if (stocks == null)
            {
                return null;
            }

            _logger.LogInformation("{SearchStockAsync} found: {stocks}", nameof(GetAllAsync), stocks.Count());

            return stocks;
        }

        public async Task<CompanyDto> GetCompanyAsync(string symbol)
        {
            _logger.LogInformation("{GetCompanyAsync} param value {symbol}", nameof(GetCompanyAsync), symbol);

            if (string.IsNullOrWhiteSpace(symbol))
            {
                throw new ArgumentNullException(nameof(symbol));
            }
            var company = await _finnhubClient.GetCompaniesAsync(symbol);

            if (company == null)
            {
                return null;
            }

            _logger.LogInformation("{GetCompanyAsync} found: {company}", nameof(GetAllAsync), company.Name);

            return company;
        }
    }
}
