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
        //public Task<SellOrder> GetByIdAsync(int id);
        //public Task<SellOrder> GetByGlobalIdAsync(string globalId);
        //public Task<IEnumerable<SellOrder>> GetAllAsync();
        //public Task<SellOrder> CreateAsync(SellOrder order);
    }
}
