using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoskeeBackend.Data;
using MoskeeBackend.Services;

namespace MoskeeBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        public readonly EmailSender _emailSender;

        public EmailController(EmailSender emailSender)
        {
            _emailSender = emailSender;
        }

        [HttpPost("Contactform")]
        public async Task<IActionResult> PostContactForm([FromBody] ContactForm contactForm)
        {
            if (contactForm == null || string.IsNullOrWhiteSpace(contactForm.Email) || string.IsNullOrWhiteSpace(contactForm.Message))
            {
                return BadRequest("Invalide vorm data.");
            }

            var email = contactForm.Email;
            var subject = $"Contactformulier bericht van {contactForm.Name}";
            var message = contactForm.Message;

            try
            {
                await _emailSender.SendEmailAsync(email, subject, message);
                return Ok("Email verstuurd succesvol.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Interne server fout: {ex.Message}");
            }
        }


    }
}
