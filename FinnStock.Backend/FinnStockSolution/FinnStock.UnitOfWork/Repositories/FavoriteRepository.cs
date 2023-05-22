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
    public class FavoriteRepository : BaseRepository<Favorite>, IFavoriteRepository
    {
        private readonly DbSet<Favorite> _dbSet;
        public FavoriteRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
            _dbSet = this._dbContext.Set<Favorite>();
        }

        public async Task<IEnumerable<Favorite>> GetAllAsync(Guid userId, CancellationToken cancellationToken = default)
        {
            return await _dbSet.Where(favorite => favorite.UserId.Equals(userId)).ToListAsync(cancellationToken);
        }
    }
}
