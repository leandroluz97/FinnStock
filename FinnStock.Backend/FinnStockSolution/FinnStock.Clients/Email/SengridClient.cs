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
    public class SengridClient : EmailClient
    {
        private readonly IConfiguration _configuration;
        public SengridClient(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendAccountConfirmationAsync(string recipientEmail, string confirmationLink)
        {
            var client = new SendGridClient("");
            var msg = new SendGridMessage()
            {
                From = new EmailAddress("leandroluz97@gmail.com", "Leandro Luz"),
                ReplyTo = new EmailAddress(recipientEmail),
                Subject = "Confirm your email address",
                HtmlContent = $"<p>This is your confirmation link: <a href={confirmationLink} ></a></p>"
            };

            var response = await client.SendEmailAsync(msg);

            if (!response.IsSuccessStatusCode)
            {
                throw new Exception($"Couldn't send {nameof(recipientEmail)} account confirmation email.");
            }
        }
    }
}
