using FinnStock.Domain;
using FinnStock.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Services.Mappers
{
    public class FavoriteMapper
    {
        public static Favorite ToDomain(FavoriteDto dto)
        {
            return new Favorite()
            {
                GlobalId = dto.Id,
                Symbol = dto.Symbol,
                Description = dto.Description,
                UserId = dto.UserId,
            };
        }

        public static FavoriteDto ToDto(Favorite domain)
        {
            return new FavoriteDto()
            {
                Id = domain.GlobalId,
                Symbol = domain.Symbol,
                UserId = domain.UserId,
                Description = domain.Description,
            };
        }
    }
}
