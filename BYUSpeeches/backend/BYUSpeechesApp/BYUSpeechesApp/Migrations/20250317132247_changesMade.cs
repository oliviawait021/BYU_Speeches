using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BYUSpeechesApp.Migrations
{
    /// <inheritdoc />
    public partial class changesMade : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_SpeechNotes",
                table: "SpeechNotes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SavedSpeeches",
                table: "SavedSpeeches");

            migrationBuilder.AlterColumn<int>(
                name: "NoteId",
                table: "SpeechNotes",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AlterColumn<string>(
                name: "SpeechTitle",
                table: "SpeechInfos",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Speaker",
                table: "SpeechInfos",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SaveId",
                table: "SavedSpeeches",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0)
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_SpeechNotes",
                table: "SpeechNotes",
                column: "NoteId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SavedSpeeches",
                table: "SavedSpeeches",
                column: "SaveId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_SpeechNotes",
                table: "SpeechNotes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SavedSpeeches",
                table: "SavedSpeeches");

            migrationBuilder.DropColumn(
                name: "SaveId",
                table: "SavedSpeeches");

            migrationBuilder.AlterColumn<int>(
                name: "NoteId",
                table: "SpeechNotes",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AlterColumn<string>(
                name: "SpeechTitle",
                table: "SpeechInfos",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<string>(
                name: "Speaker",
                table: "SpeechInfos",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SpeechNotes",
                table: "SpeechNotes",
                columns: new[] { "UserId", "SpeechId", "NoteId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_SavedSpeeches",
                table: "SavedSpeeches",
                columns: new[] { "UserId", "SpeechId" });
        }
    }
}
