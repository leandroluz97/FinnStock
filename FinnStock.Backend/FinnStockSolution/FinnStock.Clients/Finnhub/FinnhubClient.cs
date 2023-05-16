using FinnStock.Dtos;
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
        public FinnhubClient(string accessToken)
        {
            _jsonSerializerOptions = new JsonSerializerOptions() { };

            var authHandler = new AuthHandler(accessToken);

            _httpClient = new HttpClient(authHandler);

            _httpClient.BaseAddress = new Uri("https://finnhub.io/api/v1");
        }

        public async Task<IEnumerable<StockDto>> GetStocks()
        {
            var response = await _httpClient.GetAsync("/stock/symbol?exchange=US");

            response.EnsureSuccessStatusCode();

            var responseJson = await response.Content.ReadAsStringAsync();

            var responseData = JsonSerializer.Deserialize<IEnumerable<StockDto>>(responseJson, _jsonSerializerOptions);

            return responseData;
        }
    }
}
