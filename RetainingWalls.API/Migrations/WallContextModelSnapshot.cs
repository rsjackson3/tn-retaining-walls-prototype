﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RetainingWalls.API.Data;

namespace RetainingWalls.API.Migrations
{
    [DbContext(typeof(WallContext))]
    partial class WallContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3");

            modelBuilder.Entity("RetainingWalls.API.Models.RetainingWall", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("Latitude")
                        .HasColumnType("REAL");

                    b.Property<double>("Length")
                        .HasColumnType("REAL");

                    b.Property<string>("Location")
                        .HasColumnType("TEXT");

                    b.Property<double>("Longitude")
                        .HasColumnType("REAL");

                    b.Property<double>("MaxHeight")
                        .HasColumnType("REAL");

                    b.Property<double>("MinHeight")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.ToTable("RetainingWalls");
                });
#pragma warning restore 612, 618
        }
    }
}