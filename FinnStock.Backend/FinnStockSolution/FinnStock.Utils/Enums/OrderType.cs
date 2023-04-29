using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Utils.Enums
{
    public class OrderType : Enumeration
    {
        public static readonly OrderType SOLD = new OrderType(0, "SOLD");

        public static readonly OrderType BUY = new OrderType(1, "BUY");

        public OrderType() { }
        public OrderType(int value, string displayName) : 
            base(value, displayName) { }
       
    }
}
