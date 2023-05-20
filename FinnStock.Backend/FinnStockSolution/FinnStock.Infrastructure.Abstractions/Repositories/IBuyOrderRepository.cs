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
        //public Task<BuyOrder> GetByIdAsync(int id);
        //public Task<BuyOrder> GetByGlobalIdAsync(string globalId);
        //public Task<IEnumerable<BuyOrder>> GetAllAsync();
        //public Task<BuyOrder> CreateAsync(BuyOrder order);
    }
}
