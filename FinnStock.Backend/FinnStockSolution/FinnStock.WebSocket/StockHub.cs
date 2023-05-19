using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.WebSocket
{
    public class StockHub : Hub
    {
        public async Task SendDataToClientsAsync(string data)
        {
            await Clients.All.SendAsync("ReceiveData", data);
        }
    }
}
