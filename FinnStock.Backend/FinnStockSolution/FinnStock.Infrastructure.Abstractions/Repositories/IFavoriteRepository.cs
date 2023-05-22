using FinnStock.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Infrastructure.Abstractions.Repositories
{
    public interface IFavoriteRepository : IBaseRepository<Favorite>
    {
        public Task<IEnumerable<Favorite>> GetAllAsync(Guid userId, CancellationToken cancellationToken);
    }
}
