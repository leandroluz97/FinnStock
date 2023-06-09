﻿using FinnStock.Domain;
using FinnStock.Infrastructure.Abstractions.Repositories;
using FinnStock.SQLWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.UnitOfWork.Repositories
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        public OrderRepository(ApplicationDbContext dbContext) :base(dbContext)
        {

        }
    }
}
