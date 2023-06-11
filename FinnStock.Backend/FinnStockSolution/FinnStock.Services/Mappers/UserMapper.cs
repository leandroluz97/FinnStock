using FinnStock.Domain;
using FinnStock.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Services.Mappers
{
    public class UserMapper
    {
        public static User ToDomain(UserDto dto)
        {
            return new User()
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                PhoneNumber = dto.PhoneNumber,
                //ProfileId = dto.ProfileId,
                BirthDate = dto.BirthDate,
            };
        }

        public static UserDto ToDto(User domain)
        {
            return new UserDto()
            {
                Id = domain.Id,
                FirstName = domain.FirstName,
                LastName = domain.LastName,
                Email = domain.Email,
                PhoneNumber = domain.PhoneNumber,
                //ProfileId = domain.ProfileId,
                BirthDate = domain.BirthDate,
            };
        }
    }
}
