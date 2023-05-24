using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FinnStock.SQLWork.Migrations
{
    /// <inheritdoc />
    public partial class added_description_favorite : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Favorites",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Favorites");
        }
    }
}
