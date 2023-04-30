using FinnStock.Infrastructure.Abstractions.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Tests.Repositories
{
    public class OrderTests
    {
        public readonly IOrderRepository _orderRepository;
        public OrderTests()
        {

        }
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Assert.Pass();
        }
    }
}
