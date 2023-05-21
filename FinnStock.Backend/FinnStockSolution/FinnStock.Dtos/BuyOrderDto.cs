using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class BuyOrderDto
    {
        public Guid Id { get; set; }
        public double Amount { get; set; }
        public int Quantity { get; set; }
        public string Symbol { get; set; }
        public Guid UserId { get; set; }
        public DateTime CreatedAt { get; set; } 

        public void EnsureValidation()
        {
            if (Amount == default)
            {
                throw new ArgumentException(nameof(Amount));
            }

            if (Quantity == default)
            {
                throw new ArgumentException(nameof(Quantity));
            }
            
            if (string.IsNullOrEmpty(Symbol))
            {
                throw new ArgumentException(nameof(Symbol));
            }
            
            if (UserId == default)
            {
                throw new ArgumentException(nameof(UserId));
            }

        }
    }
}
