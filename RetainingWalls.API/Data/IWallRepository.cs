using System.Threading.Tasks;
using RetainingWalls.API.Dtos;
using RetainingWalls.API.Models;

namespace RetainingWalls.API.Data
{
    public interface IWallRepository
    {
         Task<RetainingWall> AddWall(RetainingWall retainingWall);

         Task<RetainingWall> GetWallByIdAsync(int id);
    }
}