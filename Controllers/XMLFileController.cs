using Microsoft.AspNetCore.Mvc;
using MoskeeBackend.Data;
using MoskeeBackend.Services;

namespace MoskeeBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class XMLFileController : ControllerBase
    {
        private readonly XMLFile _xmlFile;
        private readonly string pagesDirectory = Path.Combine(Directory.GetCurrentDirectory(), "Batches");

        public XMLFileController(ApplicationDbContext context, XMLFile xmlFile)
        {
            _xmlFile = xmlFile;
        }

            [HttpGet("GetXMLFile")]
            public async Task<IActionResult> GetFile()
            {
            DateTime today = DateTime.Today;
            string name = today.ToString("yyyy-MM-dd");
            if (string.IsNullOrWhiteSpace(name))
                {
                    return BadRequest("File name must be provided.");
                }

                string filePath = Path.Combine(pagesDirectory, $"{name}.xml");

                if (string.IsNullOrWhiteSpace(name))
                {
                    return BadRequest("File name must be provided.");
                }

            _xmlFile.GenerateSepaXml(filePath);

                var memory = new MemoryStream();
                using (var stream = new FileStream(filePath, FileMode.Open))
                {
                    await stream.CopyToAsync(memory);
                }
                memory.Position = 0;

                return Ok();
            }
        }

    }

