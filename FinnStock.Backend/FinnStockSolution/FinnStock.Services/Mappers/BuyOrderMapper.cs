using FinnStock.Domain;
using FinnStock.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Services.Mappers
{
    public static class BuyOrderMapper
    {
        public static BuyOrder ToDomain(BuyOrderDto dto)
        {
            return new BuyOrder()
            {
                GlobalId = dto.Id,
                Amount = dto.Amount,
                Logo = dto.Logo,
                CreatedAt = dto.CreatedAt,
                Quantity = dto.Quantity,
                Symbol = dto.Symbol,
                UserId = dto.UserId,
            };
        }

        public static BuyOrderDto ToDto(BuyOrder domain)
        {
            return new BuyOrderDto()
            {
                Id = domain.GlobalId,
                Amount = domain.Amount,
                Logo = domain.Logo,
                CreatedAt = domain.CreatedAt,
                Quantity = domain.Quantity,
                Symbol = domain.Symbol,
                UserId = domain.UserId,
            };
        }
    }
}
