﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Dtos
{
    public class SearchResponseDto
    {
        public int Count { get; set; }
        public IEnumerable<SymbolDto> Result { get; set; }
    }
}
