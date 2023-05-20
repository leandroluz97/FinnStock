using FinnStock.Clients.Finnhub;
using FinnStock.Dtos;
using FinnStock.WebSocket;
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
        private readonly WebSocketClient _webSocketClient;
        public StockService(ILogger<StockService> logger, FinnhubClient finnhubClient, WebSocketClient webSocketClient)
        {
            _logger = logger;
            _finnhubClient = finnhubClient;
            _webSocketClient = webSocketClient;
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

        public async Task<CompanyDto> GetCompanyProfileAsync(string symbol)
        {
            _logger.LogInformation("{GetCompanyProfileAsync} param value {symbol}", nameof(GetCompanyProfileAsync), symbol);

            if (string.IsNullOrWhiteSpace(symbol))
            {
                throw new ArgumentNullException(nameof(symbol));
            }
            var company = await _finnhubClient.GetCompanyProfileAsync(symbol);

            if (company == null)
            {
                return null;
            }

            _logger.LogInformation("{GetCompanyProfileAsync} found: {company}", nameof(GetAllAsync), company.Name);

            return company;
        }

        public async Task<QuoteDto> GetStockQuoteAsync(string symbol)
        {
            _logger.LogInformation("{GetStockQuoteAsync} param value {symbol}", nameof(GetStockQuoteAsync), symbol);

            if (string.IsNullOrWhiteSpace(symbol))
            {
                throw new ArgumentNullException(nameof(symbol));
            }
            var quote = await _finnhubClient.GetStockPriceQuoteAsync(symbol);

            if (quote == null)
            {
                return null;
            }

            _logger.LogInformation("{GetStockQuoteAsync} found: {company}", nameof(GetAllAsync), quote.C); 

            return quote;
        }

        public async Task ConnectToWebSocket(string symbol)
        {
            await _webSocketClient.StartSendingFinancialData(symbol);
        }

        public async Task CloseWebSocketConnection(string symbol)
        {
            await _webSocketClient.CloseConnectionAsync();
        }

    }
}
