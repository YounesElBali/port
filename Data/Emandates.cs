namespace MoskeeBackend.Data
{
    public class Emandates
    {
            public required ContractSettings Contract { get; set; }
            public required MerchantSettings Merchant { get; set; }
            public required CertificateSettings AcquirerCertificate { get; set; }
            public required CertificateSettings SigningCertificate { get; set; }
            public required AcquirerSettings Acquirer { get; set; }
            public required ServiceLogsSettings ServiceLogs { get; set; }
            public required string ClientSettingsProviderServiceUri { get; set; }
        }

        public class ContractSettings
        {
            public required string Id { get; set; }
            public required string SubId { get; set; }
        }

        public class MerchantSettings
        {
            public required string ReturnUrl { get; set; }
        }

        public class CertificateSettings
        {
            public required string Thumbprint { get; set; }
            public required string AlternateThumbprint { get; set; }
        }

        public class AcquirerSettings
        {
            public required string DirectoryRequestUrl { get; set; }
            public required string TransactionRequestUrl { get; set; }
            public required string StatusRequestUrl { get; set; }
        }

        public class ServiceLogsSettings
        {
            public bool Enabled { get; set; }
            public required string Location { get; set; }
            public required string Pattern { get; set; }
        }

    
}
