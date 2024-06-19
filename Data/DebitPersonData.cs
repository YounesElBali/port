namespace MoskeeBackend.Data
{
    public class DebitPersonData
    {
        public Guid Id { get; set; }
        public int Amount { get; set; }
        public string DebtorName { get; set; }
        public string DebtorIBAN { get; set; }
        public string BIC { get; set; }
        public string MandateReference { get; set; }
        public string DebtorCountry { get; set; }
        public string DebtorStreet { get; set; }
        public string DebtorCity { get; set; }

        public bool Agree { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }  // Add this field
    }
}

