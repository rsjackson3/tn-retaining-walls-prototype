using System.Threading.Tasks;
using RetainingWalls.API.Models;

namespace RetainingWalls.API.Data
{
    public class WallRepository : IWallRepository
    {
        // need WallContext to add user to database
        private readonly WallContext _context;

        public WallRepository(WallContext context)
        {
            _context = context;
        }

        // This function will add a new wall to the database
        public async Task<RetainingWall> AddWall(RetainingWall wall) 
        {
            await _context.RetainingWalls.AddAsync(wall);
            await _context.SaveChangesAsync();
            
            return wall;
        }

    }
}