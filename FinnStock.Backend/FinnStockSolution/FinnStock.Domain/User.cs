
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Domain
{
    public class User :  IdentityUser<Guid>
    {
        public ICollection<Order> Orders { get; set; }
        public ICollection<Favorite> Favorites { get; set; }
    }
}
