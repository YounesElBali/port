using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MoskeeBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MarkdownController : ControllerBase
    {
        private readonly string pagesDirectory;

        public MarkdownController(IConfiguration configuration)
        {
            pagesDirectory = Path.Combine(Directory.GetCurrentDirectory(), configuration["PagesDirectory"]);
        }
        [HttpGet("pages")]
        public IActionResult GetMarkdownPages()
        {
            if (!Directory.Exists(pagesDirectory))
            {
                return NotFound("Pages directory not found");
            }

            var files = Directory.GetFiles(pagesDirectory, "*.md").Select(Path.GetFileName).ToList();
            return Ok(files);
        }

        [HttpGet("pages/{fileName}")]
        public IActionResult GetMarkdownPage(string fileName)
        {
            var filePath = Path.Combine(pagesDirectory, fileName);
            if (!System.IO.File.Exists(filePath))
            {
                return NotFound("File not found");
            }

            var content = System.IO.File.ReadAllText(filePath);
            return Ok(content);
        }

        [HttpPost("pages")]
        [Authorize]
        public async Task<IActionResult> CreateMarkdownPage([FromBody] MarkdownPageModel model)
        {
            if (model == null || string.IsNullOrWhiteSpace(model.FileName) || string.IsNullOrWhiteSpace(model.Content))
            {
                return BadRequest("Invalid page data");
            }

            var filePath = Path.Combine(pagesDirectory, model.FileName);
            await System.IO.File.WriteAllTextAsync(filePath, model.Content);
            return Ok();
        }
    }

    public class MarkdownPageModel
    {
        public required string FileName { get; set; }
        public required string Content { get; set; }
    }
}