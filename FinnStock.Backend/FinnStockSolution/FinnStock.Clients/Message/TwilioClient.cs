using FinnStock.Infrastructure.Abstractions.Clients;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;

namespace FinnStock.Clients.Message
{
    public class TwilioClient : IMessageClient
    {
        private readonly IConfiguration _configuration;
        public TwilioClient(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public Task SendOTPMessageAsync(string number, string message)
        {
            var accountSid = _configuration["Twilio:SID"];
            // Your Auth Token from twilio.com/console
            var authToken = _configuration["Twilio:Token"];

            Twilio.TwilioClient.Init(accountSid, authToken);

            return MessageResource.CreateAsync(
              to: new PhoneNumber(number),
              from: new PhoneNumber(_configuration["Twilio:Phone"]),
              body: message);
        }
    }
}
