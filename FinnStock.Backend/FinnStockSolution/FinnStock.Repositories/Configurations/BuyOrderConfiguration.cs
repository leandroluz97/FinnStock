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
    public class BuyOrderConfiguration : IEntityTypeConfiguration<BuyOrder>
    {
        public void Configure(EntityTypeBuilder<BuyOrder> builder)
        {
            builder.ToTable("BuyOrders");
            builder.HasKey(o => o.Id);
            builder.Property(x => x.Id).IsRequired();
            builder.HasOne<User>(o => o.User)
                    .WithMany(c => c.BuyOrders)
                    .HasForeignKey(o => o.UserId);

        }
    }
}
