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
            _jsonSerializerOptions = new JsonSerializerOptions() { };

            _configuration = configuration;

            var authHandler = new AuthHandler(_configuration["Finnhub:Api_Key"]);

            _httpClient = new HttpClient(authHandler);

            _httpClient.BaseAddress = new Uri(_configuration["Finnhub:Base_Url"]);
        }


        public async Task<IEnumerable<StockDto>> GetStocksAsync()
        {
            var response = await _httpClient.GetAsync("/stock/symbol?exchange=US");

            response.EnsureSuccessStatusCode();

            var responseJson = await response.Content.ReadAsStringAsync();

            var responseData = JsonSerializer.Deserialize<IEnumerable<StockDto>>(responseJson, _jsonSerializerOptions);

            return responseData;
        }

        public async Task<IEnumerable<SymbolDto>> SearchStocksAsync(string searchText)
        {
            var response = await _httpClient.GetAsync($"/search?q={searchText}");

            response.EnsureSuccessStatusCode();

            var responseJson = await response.Content.ReadAsStringAsync();

            var responseData = JsonSerializer.Deserialize<IEnumerable<SymbolDto>>(responseJson, _jsonSerializerOptions);

            return responseData;
        }

        public async Task<CompanyDto> GetCompaniesAsync(string symbol)
        {
            var response = await _httpClient.GetAsync($"/stock/profile2?symbol={symbol}");

            response.EnsureSuccessStatusCode();

            var responseJson = await response.Content.ReadAsStringAsync();

            var responseData = JsonSerializer.Deserialize<CompanyDto>(responseJson, _jsonSerializerOptions);

            return responseData;
        }
    }
}
