using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class NewsDto
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public DateTime Datetime { get; set; }
        public string Headline { get; set; }
        public string Image { get; set; }
        public string Related { get; set; }
        public string Source { get; set; }
        public string Summary { get; set; }
        public string Url { get; set; }
    }
}
