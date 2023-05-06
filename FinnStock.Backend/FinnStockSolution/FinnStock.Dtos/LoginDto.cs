using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class LoginDto
    {
        public string Email { get; set; }
        public string Password { get; set; }

        public void EnsureValidation()
        {
            if (string.IsNullOrEmpty(Email))
            {
                throw new ArgumentException(nameof(Email));
            }
            if (string.IsNullOrEmpty(Password))
            {
                throw new ArgumentException(nameof(Password));
            }
        }
    }
}
