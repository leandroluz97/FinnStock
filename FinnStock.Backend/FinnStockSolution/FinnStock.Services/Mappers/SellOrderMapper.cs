using FinnStock.Domain;
using FinnStock.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Services.Mappers
{
    public static class SellOrderMapper
    {
        public static SellOrder ToDomain(SellOrderDto dto)
        {
            return new SellOrder()
            {
                GlobalId = dto.Id,
                Amount = dto.Amount,
                CreatedAt = dto.CreatedAt,
                Quantity = dto.Quantity,
                Logo = dto.Logo,
                Symbol = dto.Symbol,
                UserId = dto.UserId,
            };
        }

        public static SellOrderDto ToDto(SellOrder domain)
        {
            return new SellOrderDto()
            {
                Id = domain.GlobalId,
                Amount = domain.Amount,
                CreatedAt = domain.CreatedAt,
                Quantity = domain.Quantity,
                Logo = domain.Logo,
                Symbol = domain.Symbol,
                UserId = domain.UserId,
            };
        }
    }
}
