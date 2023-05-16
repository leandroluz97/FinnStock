﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class StockDto
    {
        public string Currency { get; set; }
        public string Description { get; set; }
        public string DisplaySymbol { get; set; }
        public string Figi { get; set; }
        public string Mic { get; set; }
        public string Symbol { get; set; }
        public string Type { get; set; }

    }
}
