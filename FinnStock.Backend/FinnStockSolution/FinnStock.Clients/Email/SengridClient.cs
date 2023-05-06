﻿using System;
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

        public async Task SendAccountConfirmationAsync(string recipientEmail, string confirmationLink)
        {
            var client = new SendGridClient(_configuration["SendGrid:Api_Key"]);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress("lsluz@yopmail.com", "Leandro Luz"),
                Subject = "Confirm your email address",
                HtmlContent = $"<p>This is your confirmation link: <a href={confirmationLink} ></a></p>"
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
