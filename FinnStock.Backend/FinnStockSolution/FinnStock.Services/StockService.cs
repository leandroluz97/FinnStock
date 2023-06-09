﻿using FinnStock.Clients.Finnhub;
using FinnStock.Dtos;
using FinnStock.Utils;
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

        public async Task<Pagination<StockDto>> GetAllAsync(int pageSize = 50, int pageNumber = 1)
        {
            _logger.LogInformation("{GetAllAsync} request", nameof(GetAllAsync));

            var stocks = await _finnhubClient.GetStocksAsync();

            if (stocks == null)
            {
                return null;
            }
            
            var pagedStocks = stocks.Skip((pageNumber - 1 ) * pageSize).Take(pageSize).ToList();

            _logger.LogInformation("{GetAllAsync} found: {stocks}", nameof(GetAllAsync), stocks.Count());

            return new Pagination<StockDto>() 
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalPages = stocks.Count(),
                Items = pagedStocks
            };
        }

        public async Task<Pagination<SymbolDto>> SearchStockAsync(string searchText, int pageSize = 50, int pageNumber = 1)
        {
            _logger.LogInformation("{SearchStockAsync} param value {searchText}", nameof(SearchStockAsync), searchText);

            var stocks = await _finnhubClient.SearchStocksAsync(searchText);

            if (stocks == null)
            {
                return null;
            }

            _logger.LogInformation("{SearchStockAsync} found: {stocks}", nameof(GetAllAsync), stocks.Count());

            var pagedStocks = stocks.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList();

            return new Pagination<SymbolDto>()
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalPages = stocks.Count() / pageSize,
                Items = pagedStocks
            };
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
            var from = DateTime.Today.AddMonths(-1);
            var to = DateTime.Today;
            var quote = await _finnhubClient.GetStockPriceQuoteAsync(symbol, from, to);

            if (quote == null)
            {
                return null;
            }

            _logger.LogInformation("{GetStockQuoteAsync} found: {company}", nameof(GetAllAsync), quote.C); 

            return quote;
        }

        public async Task<Pagination<NewsDto>> GetMarketNewsAsync(int pageSize, int pageNumber)
        {
            _logger.LogInformation("{GetMarketNewsAsync} param value", nameof(GetStockQuoteAsync));

            var news = await _finnhubClient.GetMarketNewsAsync();

            var pagedNews = news.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList();

            _logger.LogInformation("{GetStockQuoteAsync} found {news}", nameof(GetAllAsync), news.Count());

            return new Pagination<NewsDto>()
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalPages = news.Count() / pageSize, 
                Items = pagedNews
            };
        }
        public async Task<Pagination<NewsDto>> GetCompanyNewsAsync(int pageSize, int pageNumber, string symbol, string? fromDate, string? toDate )
        {
            _logger.LogInformation("{GetMarketNewsAsync} param value", nameof(GetStockQuoteAsync));

            var from = DateTime.Today.AddMonths(-1);
            var to = DateTime.Now;

            if (!string.IsNullOrWhiteSpace(fromDate))
            {
                DateTime.TryParse(fromDate, out from);
            }
            if (!string.IsNullOrWhiteSpace(toDate))
            {
                DateTime.TryParse(toDate, out to);
            }

            var news = await _finnhubClient.GetCompanyNewsAsync(symbol, from.ToString("yyyy-MM-dd"),to.ToString("yyyy-MM-dd"));

            var pagedNews = news.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList();

            _logger.LogInformation("{GetStockQuoteAsync} found {news}", nameof(GetAllAsync), news.Count());

            return new Pagination<NewsDto>()
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalPages = news.Count() / pageSize, 
                Items = pagedNews
            };
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
