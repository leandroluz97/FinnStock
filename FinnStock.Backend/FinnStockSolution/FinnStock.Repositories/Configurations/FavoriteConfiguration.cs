using FinnStock.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.SQLWork.Configurations
{
    internal class FavoriteConfiguration : IEntityTypeConfiguration<Favorite>
    {
        public void Configure(EntityTypeBuilder<Favorite> builder)
        {
            builder.ToTable("Favorites");
            builder.HasKey(o => o.Id);
            builder.HasOne<User>(o => o.User)
                  .WithMany(c => c.Favorites)
                  .HasForeignKey(o => o.UserId);
        }
    }
}
