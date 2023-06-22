using FinnStock.Utils.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Domain
{
    public class SellOrder : Entity
    {
        public double Amount { get; set; }
        public int Quantity { get; set; }
        public string Symbol { get; set; }
        public string Logo { get; set; }
        virtual public User User { get; set; }
        public Guid UserId  { get; set; }
    }
}
