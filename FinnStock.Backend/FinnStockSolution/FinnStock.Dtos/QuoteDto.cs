using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class QuoteDto
    {
        public string C { get; set; }
        public string H{ get; set; }
        public string L { get; set; }
        public string O { get; set; } 
        public string Pc { get; set; }
        public string T { get; set; }
    }
}

