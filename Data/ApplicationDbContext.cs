using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace MoskeeBackend.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }

        public DbSet<DebitPersonData> BankPersonDatas { get; set; }
        public DbSet<PersonalMosqueData> PersonalDatas { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
            // Seed data
            builder.Entity<PersonalMosqueData>().HasData(
                new PersonalMosqueData
                {
                    Id = Guid.NewGuid(),
                    SenderName = "De Islamitische Vereniging in Noordwijk",
                    CreditorIban = "NL51ABNA0448196387",
                    CreditorCountry = "Nederland",
                    CreditorStreet = "Bronckhorststraat 61",
                    CreditorCity = "Noordwijk",
                    CreditorBIC = "ABNANL2A"
                }
            );
        }
    }
}

