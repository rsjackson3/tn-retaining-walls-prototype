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

        // function to retrieve a specific wall based on its id
        public async Task<RetainingWall> GetWallByIdAsync(int id)
        {
            return await _context.RetainingWalls.FindAsync(id);
        }

        // function to update wall information for existing wall
        public async Task<bool> UpdateWall(RetainingWall wall)
        {
            // make update
            _context.RetainingWalls.Update(wall);
            return await _context.SaveChangesAsync() > 0;
        }

    }
}