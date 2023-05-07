using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class ValidateOtpDto
    {
        public string OtpCode { get; set; }
        public string UserId { get; set; }

        public void EnsureValidation()
        {
            if (string.IsNullOrEmpty(OtpCode))
            {
                throw new ArgumentException(nameof(OtpCode));
            }
            if (string.IsNullOrEmpty(UserId))
            {
                throw new ArgumentException(nameof(UserId));
            }
        }
    }
}
