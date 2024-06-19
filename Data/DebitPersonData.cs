namespace MoskeeBackend.Data
{
    public class DebitPersonData
    {
        public Guid Id { get; set; }
        public int Amount { get; set; }
        public required string DebtorName { get; set; }
        public required string DebtorIBAN { get; set; }
        public required string BIC { get; set; }
        public required string MandateReference { get; set; }
        public required string DebtorCountry { get; set; }
        public required string DebtorStreet { get; set; }
        public required string DebtorCity { get; set; }

        public bool Agree { get; set; }
        public int Age { get; set; }
        public required string Email { get; set; }  // Add this field
    }
}

