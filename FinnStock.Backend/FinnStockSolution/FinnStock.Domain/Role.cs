using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Domain
{
    public class Role : IdentityRole<int>
    {
        public Guid GlobalId { get; set; }
    }
}
