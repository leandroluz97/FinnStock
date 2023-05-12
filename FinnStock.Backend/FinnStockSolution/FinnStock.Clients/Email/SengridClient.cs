using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FinnStock.Infrastructure.Abstractions.Clients;
using Microsoft.Extensions.Configuration;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace FinnStock.Clients.Email
{
    public class SengridClient : IEmailClient
    {
        private readonly IConfiguration _configuration;
        public SengridClient(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendEmailAsync(string recipientEmail, string subject, string htmlContent)
        {
            var client = new SendGridClient(_configuration["SendGrid:Api_Key"]);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress("reiscv@yopmail.com", "Leia Reis"),
                Subject = subject,
                HtmlContent = htmlContent
            };
            msg.AddTo(new EmailAddress(recipientEmail));

            var response = await client.SendEmailAsync(msg);

            if (!response.IsSuccessStatusCode)
            {
                throw new Exception($"Failed to send confirmation email.StatusCode ={ response.StatusCode }, Body ={ await response.Body.ReadAsStringAsync()}");
            }
        }

    }
}
