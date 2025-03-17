using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BYUSpeechesApp.Migrations
{
    /// <inheritdoc />
    public partial class First : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SavedSpeeches",
                columns: table => new
                {
                    SpeechId = table.Column<int>(type: "INTEGER", nullable: false),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false),
                    SpeechTitle = table.Column<string>(type: "TEXT", nullable: true),
                    Status = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SavedSpeeches", x => new { x.UserId, x.SpeechId });
                });

            migrationBuilder.CreateTable(
                name: "SpeechContents",
                columns: table => new
                {
                    SpeechId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SpeechText = table.Column<string>(type: "TEXT", nullable: true),
                    SpeechHighlightText = table.Column<string>(type: "TEXT", nullable: true),
                    AudioUrl = table.Column<string>(type: "TEXT", nullable: true),
                    VideoUrl = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpeechContents", x => x.SpeechId);
                });

            migrationBuilder.CreateTable(
                name: "SpeechInfos",
                columns: table => new
                {
                    SpeechId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Speaker = table.Column<string>(type: "TEXT", nullable: true),
                    SpeakerBio = table.Column<string>(type: "TEXT", nullable: true),
                    SpeechTitle = table.Column<string>(type: "TEXT", nullable: true),
                    DurationOfSpeech = table.Column<TimeSpan>(type: "TEXT", nullable: true),
                    ScheduleDate = table.Column<DateTime>(type: "TEXT", nullable: true),
                    DateSpeechGiven = table.Column<DateTime>(type: "TEXT", nullable: true),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpeechInfos", x => x.SpeechId);
                });

            migrationBuilder.CreateTable(
                name: "SpeechNotes",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "INTEGER", nullable: false),
                    SpeechId = table.Column<int>(type: "INTEGER", nullable: false),
                    NoteId = table.Column<int>(type: "INTEGER", nullable: false),
                    NoteText = table.Column<string>(type: "TEXT", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpeechNotes", x => new { x.UserId, x.SpeechId, x.NoteId });
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    LastName = table.Column<string>(type: "TEXT", nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Password = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SavedSpeeches");

            migrationBuilder.DropTable(
                name: "SpeechContents");

            migrationBuilder.DropTable(
                name: "SpeechInfos");

            migrationBuilder.DropTable(
                name: "SpeechNotes");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
