using FinnStock.DependencyInjection;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Moq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Tests
{
    public class BaseTest
    {
        protected IServiceProvider ServiceProvider;
        public BaseTest()
        {
            var configuration = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile("appsettings.json")
               .Build();

            var service = new ServiceCollection();
            service.ConfigureServices(configuration);

            ServiceProvider = service.BuildServiceProvider();

        }
    }
}
