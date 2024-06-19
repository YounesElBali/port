using MoskeeBackend.Data;
using System.Net;
using System.Net.Mail;

namespace MoskeeBackend.Services
{
    public class EmailSender
    {
        private readonly ApplicationDbContext _context;

        public EmailSender(ApplicationDbContext context)
        {
            _context = context;
        }

        public Task SendEmailAsync(string email, string subject, string message )
        {
            var mail = "younes.elbali@outlook.com";
            var pw = "2pRWD$4*aY6d2#f";

            var client = new SmtpClient("smtp-mail.outlook.com", 587)
            {
                EnableSsl = true,
                Credentials = new NetworkCredential(mail, pw)
            };

            return client.SendMailAsync( new MailMessage(from: mail,to:email,subject,message));
        }
    }
}
