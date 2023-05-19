using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class CompanyDto
    {
        public string Country { get; set; }
        public string Currency { get; set; }
        public string Exchange { get; set; }
        public DateTime Ipo { get; set; }
        public double MarketCapitalization { get; set; }
        public string Name { get; set; }
        public string Ticker { get; set; }
        public string Weburl { get; set; }
        public string Logo { get; set; }
    }
}