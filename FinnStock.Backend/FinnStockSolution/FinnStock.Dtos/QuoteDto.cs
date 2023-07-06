using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class QuoteDto
    {
        public IEnumerable<double> C { get; set; }
        public IEnumerable<double> H { get; set; }
        public IEnumerable<double> L { get; set; }
        public IEnumerable<double> O { get; set; } 
        public string S { get; set; }
        public IEnumerable<int> T { get; set; }
        public IEnumerable<int> V { get; set; }
    }
}

