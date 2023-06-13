using FinnStock.Dtos;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace FinnStock.Clients.Finnhub
{
    public class FinnhubClient
    {
        private readonly HttpClient _httpClient;
        private readonly JsonSerializerOptions _jsonSerializerOptions;
        private readonly IConfiguration _configuration;
        public FinnhubClient(IConfiguration configuration)
        {
            _jsonSerializerOptions = new JsonSerializerOptions() 
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            };

            _configuration = configuration;

            var authHandler = new AuthHandler(_configuration["Finnhub:Api_Key"])
            {
                InnerHandler = new HttpClientHandler()
            };

            _httpClient = new HttpClient(authHandler);

            _httpClient.BaseAddress = new Uri(_configuration["Finnhub:Base_Url"]);
        }

        public async Task<QuoteDto> GetStockPriceQuoteAsync(string symbol)
        {
            var response = await _httpClient.GetAsync($"/api/v1/quote?symbol={symbol}");

            response.EnsureSuccessStatusCode();

            var responseJson = await response.Content.ReadAsStringAsync();

            var responseData = JsonSerializer.Deserialize<QuoteDto>(responseJson, _jsonSerializerOptions);

            return responseData;
        }

        public async Task<IEnumerable<StockDto>> GetStocksAsync()
        {
            var response = await _httpClient.GetAsync("/api/v1/stock/symbol?exchange=US");

            response.EnsureSuccessStatusCode();

            var responseJson = await response.Content.ReadAsStringAsync();

             var responseData = JsonSerializer.Deserialize<IEnumerable<StockDto>>(responseJson, _jsonSerializerOptions);

            return responseData;
        }

        public async Task<IEnumerable<SymbolDto>> SearchStocksAsync(string searchText)
        {
            var response = await _httpClient.GetAsync($"/api/v1/search?q={searchText}");

            response.EnsureSuccessStatusCode();

            var responseJson = await response.Content.ReadAsStringAsync();

            var responseData = JsonSerializer.Deserialize<SearchResponseDto>(responseJson, _jsonSerializerOptions);

            return responseData.Result;
        }

        public async Task<CompanyDto> GetCompanyProfileAsync(string symbol)
        {
            var response = await _httpClient.GetAsync($"/api/v1/stock/profile2?symbol={symbol}");

            response.EnsureSuccessStatusCode();

            var responseJson = await response.Content.ReadAsStringAsync();

            var responseData = JsonSerializer.Deserialize<CompanyDto>(responseJson, _jsonSerializerOptions);

            return responseData;
        }

        public async Task<IEnumerable<NewsDto>> GetMarketNewsAsync()
        {
            var response = await _httpClient.GetAsync($"/api/v1/news?category=general");

            response.EnsureSuccessStatusCode();

            var responseJson = await response.Content.ReadAsStringAsync();

            var responseData = JsonSerializer.Deserialize<IEnumerable<NewsDto>>(responseJson, _jsonSerializerOptions);

            return responseData;
        }
    }
}
