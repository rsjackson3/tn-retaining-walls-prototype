using Microsoft.EntityFrameworkCore;
using RetainingWalls.API.Models;

namespace RetainingWalls.API.Data
{
    public class WallContext : DbContext
    {
        public WallContext(DbContextOptions<WallContext> options) : base(options){}

        public DbSet<RetainingWall> RetainingWalls {get; set;}
    }
}