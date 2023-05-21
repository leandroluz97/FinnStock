using FinnStock.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Infrastructure.Abstractions.Repositories
{
    public interface IBuyOrderRepository : IBaseRepository<BuyOrder>
    {
        public Task<BuyOrder> GetByGlobalIdAsync(Guid globalId, CancellationToken cancellationToken);
        public Task<IEnumerable<BuyOrder>> GetByUserIdAsync(Guid userId, CancellationToken cancellationToken);
    }
}
