using FinnStock.Infrastructure.Abstractions.Repositories;

namespace FinnStock.Infrastructure.Abstractions
{
    public interface IUnitOfWork
    {
        IOrderRepository OrderRepository { get; }
        IFavoriteRepository FavoriteRepository { get; }
        void SaveChanges();
        void Rollback();
        Task SaveChangesAsync();
        Task RollbackAsync();
    }
}