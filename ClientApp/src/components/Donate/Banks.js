import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Abn from '../../assets/abn amro.png';
import ing from '../../assets/ing.png';
import revolut from '../../assets/revolut.png';
import asn from '../../assets/asn bank.png';
import rabobank from '../../assets/rabobank.png';
import sns from '../../assets/sns bank.jpg';



const logos = [
    { src: Abn, href: "https://www.abnamro.nl/nl/prive/betalen/geld-overmaken/periodieke-overboekingen.html", alt: 'Abn amro' },
    { src: ing, href: "https://www.ing.nl/particulier/betalen/geld-overmaken/periodieke-overschrijving", alt: 'ING' },
    { src: revolut, href: "https://help.revolut.com/nl-NL/help/receiving-payments/sending-money-to-an-external-bank-account/how-to-schedule-recurring-payments/business/", alt: 'Revolut Zakelijk' },
    { src: rabobank, href: "https://www.rabobank.nl/particulieren/service/betalen-en-opnemen/overboeking-incasso-instellen", alt: 'Rabobank' },
    { src: asn, href: "https://www.asnbank.nl/online-en-mobiel-bankieren/overboeken.html", alt: 'ASN bank' },
    { src: sns, href: "https://www.snsbank.nl/particulier/service/periodieke-overboeking-2.html", alt: 'SNS bank' }
];

const Bank = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {logos.map((logo, index) => (
                    <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
                        <a href={logo.href} target="_blank" rel="noopener noreferrer" className="card h-100 d-flex align-items-center justify-content-center p-3">
                            <img src={logo.src} alt={logo.alt} className="img-fluid" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bank;
