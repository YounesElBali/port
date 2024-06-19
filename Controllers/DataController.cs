using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MoskeeBackend.Data;
using MoskeeBackend.Services;
using System;

namespace MoskeeBackend.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly EmailSender _emailSenderService;
        private readonly EmailTemplate _emailTemplateService;
        private readonly ApplicationDbContext _dbContext;

        public DataController(EmailSender emailSenderService, EmailTemplate emailTemplateService, ApplicationDbContext dbContext)
        {
            _emailSenderService = emailSenderService;
            _emailTemplateService = emailTemplateService;
            _dbContext = dbContext;
        }


        [HttpPost("SendData")]
        public async Task<IActionResult> PostDataToBase([FromBody] DebitPersonData bankPersonData)
        {
            if (bankPersonData == null || string.IsNullOrWhiteSpace(bankPersonData.Email))
            {
                return BadRequest("Incomplete data or missing email.");
            }

            var email = "";
            var subject = "Bevestiging van uw aankoop";

            try
            {
                var template = await _emailTemplateService.GetEmailTemplateAsync("PurchaseConfirmationEmail.html");
                var populatedTemplate = _emailTemplateService.PopulateTemplate(template, new
                {
                    Name = bankPersonData.DebtorName,
                    TransactionId = bankPersonData.Id, // Ensure you have this data
                    Amount = bankPersonData.Amount, // Ensure you have this data
                    Date = DateTime.Now // Ensure you have this data
                });

                await _emailSenderService.SendEmailAsync(email, subject, populatedTemplate);
                _dbContext.BankPersonDatas.Add(bankPersonData);
                await _dbContext.SaveChangesAsync();
                return Ok(bankPersonData);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
