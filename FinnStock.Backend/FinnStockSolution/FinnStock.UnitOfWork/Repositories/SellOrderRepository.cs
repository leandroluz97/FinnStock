using FinnStock.Domain;
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
    internal class SellOrderRepository : BaseRepository<SellOrder>, ISellOrderRepository
    {
        private readonly DbSet<SellOrder> _dbSet;
        public SellOrderRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
            _dbSet = this._dbContext.Set<SellOrder>();
        }

        public async Task<SellOrder> GetByGlobalIdAsync(Guid globalId, CancellationToken cancellationToken = default)
        {
            return await _dbSet.FirstOrDefaultAsync(order => order.GlobalId.Equals(globalId), cancellationToken);
        }

        public async Task<IEnumerable<SellOrder>> GetByUserIdAsync(Guid userId, CancellationToken cancellationToken)
        {
            return await _dbSet.Where(order => order.UserId.Equals(userId)).ToListAsync(cancellationToken);
        }
    }
}
