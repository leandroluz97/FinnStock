using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Clients.Finnhub
{
    public class AuthHandler : DelegatingHandler
    {
        private readonly string _accessToken;

        public AuthHandler(string accessToken)
        {
            _accessToken = accessToken;
        }

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            // Add authentication header to the request
            request.Headers.Add("X-Finnhub-Token", _accessToken);
            request.Headers.Add("Accept", "application/json");

            // Perform custom logic before sending the request
            // For example, you can modify the request headers or content

            // Call the inner handler to send the request
            var response = await base.SendAsync(request, cancellationToken);

            // Perform custom logic after receiving the response
            // For example, you can modify the response headers or content

            return response;
        }
    }
}
