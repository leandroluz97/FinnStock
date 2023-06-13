using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class UserDto
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; } 
        public DateTime? BirthDate { get; set; }
        public string? ProfileUrl { get; set; }

        public void EnsureValidation()
        {
            if (Id == default)
            {
                throw new ArgumentException(nameof(Id));
            }
            if (string.IsNullOrWhiteSpace(PhoneNumber))
            {
                throw new ArgumentException(nameof(PhoneNumber));
            }
            if (string.IsNullOrWhiteSpace(Email))
            {
                throw new ArgumentException(nameof(Email));
            }
        }
    }
}
