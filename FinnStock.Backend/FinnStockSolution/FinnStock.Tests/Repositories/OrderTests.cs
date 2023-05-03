using FinnStock.Domain;
using FinnStock.Infrastructure.Abstractions;
using FinnStock.Infrastructure.Abstractions.Repositories;
using FinnStock.Utils.Enums;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Tests.Repositories
{
    public class OrderTests : BaseTest
    {
        public readonly IOrderRepository _orderRepository;
        public readonly IUnitOfWork _unitOfWork;
        public OrderTests()
        {
            _unitOfWork = this._serviceProvider.GetService<IUnitOfWork>();
            _orderRepository = _unitOfWork.OrderRepository;
        }
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public async Task GetOrder_Empty_Successfull()
        {
            var orders = await _orderRepository.GetAllAsync();

            Assert.IsEmpty(orders);
        }

        [Test]
        public async Task CreateOrder_Order_Successfull()
        {
            var order = new Order()
            {
                Amount = 20,
                Quantity = 300,
                Symbol =  "AMZ",
                Type = OrderType.BUY,
                UserId = Guid.NewGuid(),
            };
             _orderRepository.AddAsync(order);
            await _unitOfWork.SaveChangesAsync();
            Assert.IsNotNull(order);
            
         
        }
    }
}
