using MoskeeBackend.Data;
using System.Xml.Linq;

namespace MoskeeBackend.Services
{
    public class XMLFile
    {
        private readonly ApplicationDbContext _context;

        public XMLFile(ApplicationDbContext context)
        {
            _context = context;
        }

        public void GenerateSepaXml(string filePath)
        {
            // Retrieve data from the database
            var bankPersonData = _context.BankPersonDatas.ToList();
            var personalData = _context.PersonalDatas.FirstOrDefault(); // Assuming one sender

            if (bankPersonData == null || personalData == null)
            {
                throw new Exception("No data available.");
            }

            // Create the XML structure
            var doc = new XDocument(
                new XElement("Document",
                    new XAttribute(XNamespace.Xmlns + "xsi", "http://www.w3.org/2001/XMLSchema-instance"),
                    // new XAttribute(XNamespace.Xmlns, "urn:iso:std:iso:20022:tech:xsd:pain.008.001.02"), // Added namespace
                    new XElement("CstmrDrctDbtInitn",
                        new XElement("GrpHdr",
                            new XElement("MsgId", Guid.NewGuid().ToString()),
                            new XElement("CreDtTm", DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss")),
                            new XElement("NbOfTxs", bankPersonData.Count),
                            new XElement("CtrlSum", bankPersonData.Sum(x => x.Amount)),
                            new XElement("InitgPty",
                                new XElement("Nm", personalData.SenderName)
                            )
                        ),
                        new XElement("PmtInf",
                            new XElement("PmtInfId", Guid.NewGuid().ToString()),
                            new XElement("PmtMtd", "DD"),
                            new XElement("NbOfTxs", bankPersonData.Count),
                            new XElement("CtrlSum", bankPersonData.Sum(x => x.Amount)),
                            new XElement("PmtTpInf",
                                new XElement("SvcLvl",
                                    new XElement("Cd", "SEPA")
                                ),
                                new XElement("LclInstrm",
                                    new XElement("Cd", "CORE")
                                ),
                                new XElement("SeqTp", "RCUR")
                            ),
                            new XElement("ReqdColltnDt", DateTime.UtcNow.ToString("yyyy-MM-dd")),
                            new XElement("Cdtr",
                                new XElement("Nm", personalData.SenderName),
                                new XElement("PstlAdr",
                                    new XElement("Ctry", personalData.CreditorCountry),
                                    new XElement("AdrLine", personalData.CreditorStreet),
                                    new XElement("AdrLine", personalData.CreditorCity)
                                )
                            ),
                            new XElement("CdtrAcct",
                                new XElement("Id",
                                    new XElement("IBAN", personalData.CreditorIban)
                                ),
                                new XElement("Ccy", "EUR")
                            ),
                            new XElement("CdtrAgt",
                                new XElement("FinInstnId",
                                    new XElement("BIC", personalData.CreditorBIC)
                                )
                            ),
                            new XElement("ChrgBr", "SLEV"),
                            bankPersonData.Select(data =>
                                new XElement("DrctDbtTxInf",
                                    new XElement("PmtId",
                                        new XElement("InstrId", Guid.NewGuid().ToString()),
                                        new XElement("EndToEndId", Guid.NewGuid().ToString())
                                    ),
                                    new XElement("InstdAmt", new XAttribute("Ccy", "EUR"), data.Amount),
                                    new XElement("DrctDbtTx",
                                        new XElement("MndtRltdInf",
                                            new XElement("MndtId", data.MandateReference),
                                            new XElement("DtOfSgntr", DateTime.UtcNow.AddYears(-2).ToString("yyyy-MM-dd")), // Example date
                                            new XElement("AmdmntInd", "false")
                                        ),
                                        new XElement("CdtrSchmeId",
                                            new XElement("Id",
                                                new XElement("PrvtId",
                                                    new XElement("Othr",
                                                        new XElement("Id", "NL89ZZZ011234567890"),
                                                        new XElement("SchmeNm",
                                                            new XElement("Prtry", "SEPA")
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    new XElement("DbtrAgt",
                                        new XElement("FinInstnId",
                                            new XElement("BIC", data.BIC)
                                        )
                                    ),
                                    new XElement("Dbtr",
                                        new XElement("Nm", data.DebtorName),
                                        new XElement("PstlAdr",
                                            new XElement("Ctry", data.DebtorCountry), // Assuming DebtorCountry is a property
                                            new XElement("AdrLine", data.DebtorStreet), // Assuming DebtorStreet is a property
                                            new XElement("AdrLine", data.DebtorCity) // Assuming DebtorCity is a property
                                        )
                                    ),
                                    new XElement("DbtrAcct",
                                        new XElement("Id",
                                            new XElement("IBAN", data.DebtorIBAN)
                                        )
                                    ),
                                    new XElement("Purp",
                                        new XElement("Cd", "OTHR")
                                    ),
                                    new XElement("RmtInf",
                                        new XElement("Ustrd", "/INV/ 8/29/2011")
                                    )
                                )
                            )
                        )
                    )
                )
            );

            // Save the XML to a file
            doc.Save(filePath);
        }
    }
}
