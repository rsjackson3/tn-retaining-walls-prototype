using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using RetainingWalls.API.Data;
using RetainingWalls.API.Dtos;
using RetainingWalls.API.Models;

namespace RetainingWalls.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RetainingWallsController : ControllerBase
    {
        private readonly WallContext _context;
        private readonly IWallRepository _repo;
        private IMapper _mapper;
        //private ILogger _logger;


        public RetainingWallsController(WallContext context, IMapper mapper, IWallRepository repo) {
            _context = context;
            _repo = repo;
            _mapper = mapper;
            //_logger = logger;

        }

        [HttpGet]
        // will return all of the retaining wall db values
        public async Task<IActionResult> GetValues() {
            // get retaining wall values asynchronously as a list
            var values = await _context.RetainingWalls.ToListAsync();
            
            return Ok(values);
        }

        [HttpPost("add")]

        public async Task<IActionResult> AddWall([FromBody]WallForAddDto wallForAddDto)
        {
            try 
            {
                if (wallForAddDto == null) 
                {
                    //_logger.LogError("Invalid wall object sent from client request");
                    return BadRequest("Wall object is null");
                }

                if (!ModelState.IsValid)
                {
                    //_logger.LogError("Invalid retaining wall object sent from client request.");
                    return BadRequest("Invalid retaining wall object.");
                }
                
                // create RetainingWall object by mapping from AutoMapper
                var retainingWall = _mapper.Map<RetainingWall>(wallForAddDto);

                // make repo call to add user
                await _repo.AddWall(retainingWall);

                //var createdWall = _mapper.Map<WallForAddDto>(retainingWall);
                return Ok("Wall created");
            }
            catch (Exception ex)
            {
                //_logger.LogError(ex.Message);
                return StatusCode(500, "Internal server error");
            }
        }
    }
}