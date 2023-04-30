using FinnStock.Domain;
using FinnStock.Utils.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.SQLWork.Configurations
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.ToTable("Orders");
            builder.HasKey(o => o.Id);
            builder.Property(x => x.Id).IsRequired();
            builder.Property(o => o.Type).HasConversion(type => type.DisplayName, displayName => OrderType.FromDisplayName<OrderType>(displayName));
            builder.HasOne<User>(o => o.User)
                    .WithMany(c => c.Orders)
                    .HasForeignKey(o => o.UserId);

        }
    }
}
