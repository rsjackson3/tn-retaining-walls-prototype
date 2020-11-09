using AutoMapper;
using RetainingWalls.API.Dtos;
using RetainingWalls.API.Models;

namespace RetainingWalls.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<RetainingWall, WallForAddDto>();
            CreateMap<WallForAddDto, RetainingWall>();
            CreateMap<WallForUpdateDto, RetainingWall>();
            CreateMap<RetainingWall, WallForUpdateDto>();
        }
    }
}