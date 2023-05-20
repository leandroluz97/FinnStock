using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using System.Net.WebSockets;
using System.Text;

namespace FinnStock.WebSocket
{
    public class WebSocketClient
    {
        private readonly IHubContext<StockHub> _hubContext;
        private readonly ClientWebSocket _clientWebSocket;
        private readonly IConfiguration _configuration;

        public WebSocketClient(IHubContext<StockHub> hubContext, IConfiguration configuration)
        {
            _hubContext = hubContext;
            _clientWebSocket = new ClientWebSocket();
            _configuration = configuration;
        }

        public async Task CloseConnectionAsync()
        {
            await _clientWebSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing connection", CancellationToken.None);
        }
        public async Task StartSendingFinancialData(string symbol)
        {
            //using (var clientWebSocket = new ClientWebSocket())
            //{
            // Add the required headers
            _clientWebSocket.Options.SetRequestHeader("X-Finnhub-Secret", "chk1e31r01qnu4tqug30");
              
                // Connect to the WebSocket provider
                await _clientWebSocket.ConnectAsync(new Uri(_configuration["Finnhub:Socket_Url"]), CancellationToken.None);

                // Subscribe to the desired stock symbol
                await SubscribeToSymbol(_clientWebSocket, symbol);

                // Start receiving and sending financial data
                await ReceiveAndSendData(_clientWebSocket);
            //}
        }

        private async Task SubscribeToSymbol(ClientWebSocket clientWebSocket, string symbol)
        {
            var subscribeCommand = $"{{\"type\":\"subscribe\",\"symbol\":\"{symbol}\"}}";

            var subscribeData = Encoding.UTF8.GetBytes(subscribeCommand);

            await clientWebSocket.SendAsync(new ArraySegment<byte>(subscribeData), WebSocketMessageType.Text, true, CancellationToken.None);
        }


        private async Task ReceiveAndSendData(ClientWebSocket clientWebSocket)
        {
            var buffer = new byte[1024];

            var data = new StringBuilder();

            while (clientWebSocket.State == WebSocketState.Open)
            {
                var receiveResult = await clientWebSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

                if (receiveResult.MessageType == WebSocketMessageType.Close)
                {
                    await clientWebSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, string.Empty, CancellationToken.None);
                    break;
                }

                data.Append(Encoding.UTF8.GetString(buffer, 0, receiveResult.Count));

                if (receiveResult.EndOfMessage)
                {
                    // Process the received financial data
                    var financialData = data.ToString();

                    await ProcessWebSocketData(financialData);

                    // Clear the data buffer for the next message
                    data.Clear();
                }
            }
        }

        private async Task ProcessWebSocketData(string data)
        {
            // Send the data to connected clients
            await _hubContext.Clients.All.SendAsync("ReceiveData", data); 
        }
    }
}