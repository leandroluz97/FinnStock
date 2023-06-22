using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FinnStock.SQLWork.Migrations
{
    /// <inheritdoc />
    public partial class added_sell_Buy_Order_logo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Logo",
                table: "SellOrders",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Logo",
                table: "BuyOrders",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Logo",
                table: "SellOrders");

            migrationBuilder.DropColumn(
                name: "Logo",
                table: "BuyOrders");
        }
    }
}
