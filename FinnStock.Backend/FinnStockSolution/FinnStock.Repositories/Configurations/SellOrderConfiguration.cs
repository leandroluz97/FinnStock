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
    public class SellOrderConfiguration : IEntityTypeConfiguration<SellOrder>
    {
        public void Configure(EntityTypeBuilder<SellOrder> builder)
        {
            builder.ToTable("SellOrders");
            builder.HasKey(o => o.Id);
            builder.Property(x => x.Id).IsRequired();
            builder.HasOne<User>(o => o.User)
                    .WithMany(c => c.SellOrders)
                    .HasForeignKey(o => o.UserId);

        }
    }
}
