﻿using FinnStock.Infrastructure.Abstractions.Cache;
using FinnStock.Infrastructure.Abstractions.Repositories;

namespace FinnStock.Infrastructure.Abstractions
{
    public interface IUnitOfWork
    {
        IOrderRepository OrderRepository { get; }
        IBuyOrderRepository BuyOrderRepository { get; }
        ISellOrderRepository SellOrderRepository { get; }
        IFavoriteRepository FavoriteRepository { get; }
        ICacheRepository CacheRepository { get; }

        void SaveChanges();
        void Rollback();
        Task SaveChangesAsync();
        Task RollbackAsync();
    }
}