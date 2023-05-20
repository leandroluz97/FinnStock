using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class QuoteDto
    {
        public double C { get; set; }
        public double H { get; set; }
        public double L { get; set; }
        public double O { get; set; } 
        public double Pc { get; set; }
        public double T { get; set; }
    }
}

