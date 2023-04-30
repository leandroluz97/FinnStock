using FinnStock.Domain;
using FinnStock.Domain.Helper;
using FinnStock.Infrastructure.Abstractions;
using FinnStock.Infrastructure.Abstractions.Repositories;
using FinnStock.SQLWork;
using FinnStock.UnitOfWork.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace FinnStock.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _dbContext;
        public IOrderRepository _orderRepository;
        public IFavoriteRepository _favoriteRepository;

        public UnitOfWork(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public IOrderRepository OrderRepository
        {
            get { return _orderRepository = _orderRepository ?? new OrderRepository(_dbContext); }
        }

        public IFavoriteRepository FavoriteRepository
        {
            get { return _favoriteRepository = _favoriteRepository ?? new FavoriteRepository(_dbContext); }
        }

        public void SaveChanges()
        {
             _dbContext.SaveChanges();
        }

        public async Task SaveChangesAsync()
        {
            foreach (var entry in _dbContext.ChangeTracker.Entries<ISignature>())
            {
                if (entry.State == EntityState.Added)
                {
                    entry.Entity.CreatedAt = DateTime.UtcNow;
                }
                else if (entry.State == EntityState.Modified)
                {
                    entry.Entity.UpdatedAt = DateTime.UtcNow;
                }
            }

            await _dbContext.SaveChangesAsync();
        }

    
        public void Rollback()
        {
            _dbContext.Dispose();
        }

        public async Task RollbackAsync()
        {
            await _dbContext.DisposeAsync();
        }
    }
}