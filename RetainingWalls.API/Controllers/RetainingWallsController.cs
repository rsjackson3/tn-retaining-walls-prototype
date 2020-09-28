using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using RetainingWalls.API.Data;

namespace RetainingWalls.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RetainingWallsController : ControllerBase
    {
        private readonly WallContext context;

        public RetainingWallsController(WallContext context) {
            this.context = context;
        }

        [HttpGet]
        // will return all of the retaining wall db values
        public async Task<IActionResult> GetValues() {
            // get retaining wall values asynchronously as a list
            var values = await this.context.RetainingWalls.ToListAsync();
            
            return Ok(values);
        }
    }
}