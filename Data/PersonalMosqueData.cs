namespace MoskeeBackend.Data
{
    public class PersonalMosqueData
    {
        public Guid Id { get; set; }
        public required string SenderName { get; set; }
        public required string CreditorIban { get; set; }
        public required string CreditorCity { get; set; }
        public required string CreditorBIC { get; set; }
        public required string CreditorStreet { get; set; }
        public required string CreditorCountry { get; set; }

    }
}

