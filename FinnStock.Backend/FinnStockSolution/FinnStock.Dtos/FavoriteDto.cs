using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class FavoriteDto
    {
        public Guid Id { get; set; }
        public string Symbol { get; set; }
        public string Description { get; set; }
        public Guid UserId { get; set; }

        public void EnsureValidation()
        {
            if (string.IsNullOrEmpty(Symbol))
            {
                throw new ArgumentException(nameof(Symbol));
            }

            if (string.IsNullOrEmpty(Description))
            {
                throw new ArgumentException(nameof(Description));
            }


            if (UserId == default)
            {
                throw new ArgumentException(nameof(UserId));
            }

        }
    }
}
