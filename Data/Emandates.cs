namespace MoskeeBackend.Data
{
    public class Emandates
    {
            public ContractSettings Contract { get; set; }
            public MerchantSettings Merchant { get; set; }
            public CertificateSettings AcquirerCertificate { get; set; }
            public CertificateSettings SigningCertificate { get; set; }
            public AcquirerSettings Acquirer { get; set; }
            public ServiceLogsSettings ServiceLogs { get; set; }
            public string ClientSettingsProviderServiceUri { get; set; }
        }

        public class ContractSettings
        {
            public string Id { get; set; }
            public string SubId { get; set; }
        }

        public class MerchantSettings
        {
            public string ReturnUrl { get; set; }
        }

        public class CertificateSettings
        {
            public string Thumbprint { get; set; }
            public string AlternateThumbprint { get; set; }
        }

        public class AcquirerSettings
        {
            public string DirectoryRequestUrl { get; set; }
            public string TransactionRequestUrl { get; set; }
            public string StatusRequestUrl { get; set; }
        }

        public class ServiceLogsSettings
        {
            public bool Enabled { get; set; }
            public string Location { get; set; }
            public string Pattern { get; set; }
        }

    
}
