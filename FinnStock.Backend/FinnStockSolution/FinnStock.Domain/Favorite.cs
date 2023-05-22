using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Domain
{
    public class Favorite : Entity
    {
        public string Symbol { get; set; }
        public string Description { get; set; }
        virtual public User User { get; set; }
        public Guid UserId { get; set; }
    }
}
