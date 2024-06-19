using Microsoft.AspNetCore.Mvc;
using MoskeeBackend.Data;

namespace MoskeeBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TikkieController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public TikkieController(ApplicationDbContext context)
        {
            _dbContext = context;
        }

        [HttpGet("GetTikkie")]
        public IActionResult GetTikkie()
        {
            string tikkieUrl = "https://tikkie.me/pay/DeIslamitis/2zsbxGtf6F4Rg4riYXDVzX";
            return Ok(tikkieUrl);
        }
    }
}

