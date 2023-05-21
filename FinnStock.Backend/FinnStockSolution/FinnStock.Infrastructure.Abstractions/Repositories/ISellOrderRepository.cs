using FinnStock.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Infrastructure.Abstractions.Repositories
{
    public interface ISellOrderRepository :  IBaseRepository<SellOrder>
    {
        public Task<SellOrder> GetByGlobalIdAsync(Guid globalId, CancellationToken cancellationToken);
        public Task<IEnumerable<SellOrder>> GetByUserIdAsync(Guid userId, CancellationToken cancellationToken);
    }
}
