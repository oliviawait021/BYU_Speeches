using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BYUSpeechesApp.Migrations
{
    /// <inheritdoc />
    public partial class start : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                    Speaker = table.Column<string>(type: "TEXT", nullable: false),
                    SpeakerBio = table.Column<string>(type: "TEXT", nullable: true),
                    SpeechTitle = table.Column<string>(type: "TEXT", nullable: false),
                    Topic = table.Column<string>(type: "TEXT", nullable: false),
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

            migrationBuilder.CreateTable(
                name: "SavedSpeeches",
                columns: table => new
                {
                    SaveId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false),
                    SpeechId = table.Column<int>(type: "INTEGER", nullable: false),
                    SpeechTitle = table.Column<string>(type: "TEXT", nullable: true),
                    Status = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SavedSpeeches", x => x.SaveId);
                    table.ForeignKey(
                        name: "FK_SavedSpeeches_SpeechInfos_SpeechId",
                        column: x => x.SpeechId,
                        principalTable: "SpeechInfos",
                        principalColumn: "SpeechId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SavedSpeeches_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SpeechNotes",
                columns: table => new
                {
                    NoteId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false),
                    SpeechId = table.Column<int>(type: "INTEGER", nullable: false),
                    NoteText = table.Column<string>(type: "TEXT", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpeechNotes", x => x.NoteId);
                    table.ForeignKey(
                        name: "FK_SpeechNotes_SpeechInfos_SpeechId",
                        column: x => x.SpeechId,
                        principalTable: "SpeechInfos",
                        principalColumn: "SpeechId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SpeechNotes_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SavedSpeeches_SpeechId",
                table: "SavedSpeeches",
                column: "SpeechId");

            migrationBuilder.CreateIndex(
                name: "IX_SavedSpeeches_UserId",
                table: "SavedSpeeches",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_SpeechNotes_SpeechId",
                table: "SpeechNotes",
                column: "SpeechId");

            migrationBuilder.CreateIndex(
                name: "IX_SpeechNotes_UserId",
                table: "SpeechNotes",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SavedSpeeches");

            migrationBuilder.DropTable(
                name: "SpeechContents");

            migrationBuilder.DropTable(
                name: "SpeechNotes");

            migrationBuilder.DropTable(
                name: "SpeechInfos");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
