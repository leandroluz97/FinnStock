﻿using FinnStock.Domain;
using FinnStock.Infrastructure.Abstractions.Repositories;
using FinnStock.SQLWork;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.UnitOfWork.Repositories
{
    public class BuyOrderRepository : BaseRepository<BuyOrder>, IBuyOrderRepository
    {
        //private readonly ApplicationDbContext _dbContext;
        private readonly DbSet<BuyOrder> _dbSet;
        public BuyOrderRepository(ApplicationDbContext dbContext): base(dbContext)
        {
            _dbSet = this._dbContext.Set<BuyOrder>();
        }

        public async Task<BuyOrder> GetByGlobalIdAsync(Guid globalId, CancellationToken cancellationToken = default)
        {
            return await _dbSet.FirstOrDefaultAsync(order => order.GlobalId.Equals(globalId), cancellationToken);
        }

        public async Task<IEnumerable<BuyOrder>> GetByUserIdAsync(Guid userId, CancellationToken cancellationToken)
        {
            return await _dbSet.Where(order => order.UserId.Equals(userId)).ToListAsync(cancellationToken);
        }
    }
}
