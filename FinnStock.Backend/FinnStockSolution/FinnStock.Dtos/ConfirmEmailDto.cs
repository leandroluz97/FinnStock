using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class ConfirmEmailDto
    {
        public string Token { get; set; }
        public string Email { get; set; }

        public void EnsureValidation()
        {
            if (string.IsNullOrEmpty(Token))
            {
                throw new ArgumentException(nameof(Token));
            }
            if (string.IsNullOrEmpty(Email))
            {
                throw new ArgumentException(nameof(Email));
            }
        }
    }
}
