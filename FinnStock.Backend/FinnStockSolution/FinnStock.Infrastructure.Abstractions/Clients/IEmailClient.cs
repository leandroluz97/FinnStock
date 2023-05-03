using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Infrastructure.Abstractions.Clients
{
    public interface IEmailClient
    {
        public Task SendAccountConfirmationAsync(string recipientEmail, string confirmationLink);
    }
}
