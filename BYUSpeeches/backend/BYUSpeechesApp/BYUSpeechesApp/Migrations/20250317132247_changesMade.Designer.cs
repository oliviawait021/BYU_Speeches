﻿// <auto-generated />
using System;
using BYUSpeechesApp.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BYUSpeechesApp.Migrations
{
    [DbContext(typeof(SpeechDbContext))]
    [Migration("20250317132247_changesMade")]
    partial class changesMade
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.14");

            modelBuilder.Entity("BYUSpeechesApp.Data.SavedSpeeches", b =>
                {
                    b.Property<int>("SaveId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("SpeechId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("SpeechTitle")
                        .HasColumnType("TEXT");

                    b.Property<string>("Status")
                        .HasColumnType("TEXT");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("SaveId");

                    b.ToTable("SavedSpeeches");
                });

            modelBuilder.Entity("BYUSpeechesApp.Data.SpeechContent", b =>
                {
                    b.Property<int>("SpeechId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("AudioUrl")
                        .HasColumnType("TEXT");

                    b.Property<string>("SpeechHighlightText")
                        .HasColumnType("TEXT");

                    b.Property<string>("SpeechText")
                        .HasColumnType("TEXT");

                    b.Property<string>("VideoUrl")
                        .HasColumnType("TEXT");

                    b.HasKey("SpeechId");

                    b.ToTable("SpeechContents");
                });

            modelBuilder.Entity("BYUSpeechesApp.Data.SpeechInfo", b =>
                {
                    b.Property<int>("SpeechId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("DateSpeechGiven")
                        .HasColumnType("TEXT");

                    b.Property<TimeSpan?>("DurationOfSpeech")
                        .HasColumnType("TEXT");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("ScheduleDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("Speaker")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("SpeakerBio")
                        .HasColumnType("TEXT");

                    b.Property<string>("SpeechTitle")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("SpeechId");

                    b.ToTable("SpeechInfos");
                });

            modelBuilder.Entity("BYUSpeechesApp.Data.SpeechNotes", b =>
                {
                    b.Property<int>("NoteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("NoteText")
                        .HasColumnType("TEXT");

                    b.Property<int>("SpeechId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("NoteId");

                    b.ToTable("SpeechNotes");
                });

            modelBuilder.Entity("BYUSpeechesApp.Data.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
