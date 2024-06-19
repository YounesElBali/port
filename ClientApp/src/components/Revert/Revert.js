import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPray, faMosque, faHandHoldingUsd, faUtensils, faKaaba, faBook, faBalanceScale, faClock } from '@fortawesome/free-solid-svg-icons';
import './Revert.css';

function Revert() {
    const [selectedPillar, setSelectedPillar] = useState(null);
    const [selectedImaan, setSelectedImaan] = useState(null);

    const pillarText = {
        shahada: (
            <p>
                <h6>1. De geloofsbelijdenis (sjahada)</h6>
                Om tot de islam toe te treden, dien je de shahada (geloofsgetuigenis) uit te spreken. Met het uitspreken van de shahada getuig je dat er geen god is die aanbeden mag worden, behalve Allah en je getuigt dat Mohammed (vrede zij met hem) Zijn Boodschapper is. De shahada wordt als volgt uitgesproken:
                أَشْـهَدُ أَنْ لا إِلـهَ إِلاّ الله ، وَأَشْـهَدُ أَنَّ مُحَمّـداً رَسـولُ الله
                asjhadoe an lā ilāha illā-llāh, wa asjhadoe anna moeḥammadan rasōēloe-llāh 
            </p>
        ),
        salat: (
            <p>
                <h6>2. De dagelijkse rituele gebeden (salat)</h6>
                Moslims worden geacht minimaal vijfmaal per dag de rituele gebeden (Salah) uit te voeren:<br/>
                Fajr gebed: sOchtends vroeg aan het begin van de ochtendschemering, ruim voor de zonsopgang<br/>
                Dohr gebed: sMiddags net na de hoogste stand van de zon<br/>
                Asr gebed: sMIddags midden tussen Dohr en zonsondergang, wat neerkomt op ongeveer driekwart van de dag<br/>
                Maghreb gebed: net na zonsondergang<br/>
                Isha gebed: na de avondschemering, circa anderhalf uur tot 2 uur na Maghrib <br/>
            </p>
        ),
        zakat: (
            <p>
                <h6>3. Het geven van aalmoezen (zakat of zakah)</h6>
                Binnen de islam is het geloof dat alle rijkdom door Allah aan de mens in bruikleen gegeven wordt. Het woord zakat betekent zowel zuivering als groei. In de praktijk betekent dit een jaarlijkse donatie van twee en een half procent van het privékapitaal aan armen en aan liefdadigheidsdoeleinden.
            </p>
        ),
        sawm: (
            <p>
                <h6>4. Het verplichte jaarlijkse vasten (siyam)</h6>
                houdt in dat men tijdens de hele maand ramadan overdags niet eet,
                niet drinkt en zich onthoudt van seksuele gemeenschap. Dit vasten is voorgeschreven in de Koran en geldt vanaf al fajr (dageraad) tot al maghreb (zonsondergang). 
                Tijdens de nacht zijn deze beperkingen opgeheven. In de praktijk wordt de avondmaaltijd na zonsondergang genuttigd en wordt vroeg opgestaan op voor een vroeg ontbijt en voor het verrichten van het fajr gebedt.
                Wanneer vasten te bezwaarlijk zou zijn, bijvoorbeeld voor zwangere en ongestelde vrouwen, zieken, jonge kinderen , mag het worden overgeslagen. Wel wordt later inhalen van het vasten aangemoedigd.
            </p>
        ),
        hajj: (
            <p>
                <h6>5. De pelgrimstocht naar Mekka indien daartoe in staat (hadj)</h6>
                De pelgrimstocht naar de voor moslims heilige stad Mekka in Saoedi-Arabië wordt uitgevoerd tijdens de maand Dhul Hijja (de hajj-maand, de twaalfde maand van de islamitische kalender). Iedere moslim is verplicht, mits hij of zij het zich financieel en qua gezondheid kan permitteren, om de hadj ten minste eenmaal in het leven te ondernemen
            </p>
        ),
    };

    const imaanText = {
        allah: (
            <p>
                <h6>Allah als enige god</h6>
                Het geloof in Allah, de Enige God, als de enige ware godheid die het waard is om aanbeden te worden.
            </p>
        ),
        angels: (
            <p>
                <h6>Zijn Engelen</h6>
                Het geloof in het bestaan van engelen, die door Allah zijn geschapen om Zijn bevelen uit te voeren.
            </p>
        ),
        books: (
            <p>
                <h6>Alle Zijn Boeken</h6>
                Het geloof in alle geopenbaarde boeken van Allah, waarvan de Koran het laatste en finale boek is.
            </p>
        ),
        prophets: (
            <p>
                <h6>Alle Zijn Profeten</h6>
                Het geloof in alle profeten die door Allah zijn gezonden, waarvan profeet Mohammed (vrede zij met hem) de laatste is.
            </p>
        ),
        judgment: (
            <p>
                <h6>Dag des Oordeels</h6>
                Het geloof in de Dag des Oordeels, wanneer alle mensen verantwoording zullen afleggen voor hun daden.
            </p>
        ),
        predestination: (
            <p>
                <h6>Al-Qadr (de voorbeschikking)</h6>
                Het geloof in het goddelijke voorbeschikking, zowel het goede als het kwade ervan, zoals Allah heeft bepaald.
            </p>
        ),
    };

    return (
        <>
            <div className="container mt-5 text-center">
                <h2 className="mb-4">Islamitische zuilen</h2>
                <h1>De 5 zuilen van de islam</h1>
                <section className="row mt-5">
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="pillar-card" onClick={() => setSelectedPillar('shahada')}>
                            <FontAwesomeIcon icon={faPray} size="3x" className="icon" />
                            <h5>Shahada</h5>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="pillar-card" onClick={() => setSelectedPillar('salat')}>
                            <FontAwesomeIcon icon={faMosque} size="3x" className="icon" />
                            <h5>Salat</h5>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="pillar-card" onClick={() => setSelectedPillar('zakat')}>
                            <FontAwesomeIcon icon={faHandHoldingUsd} size="3x" className="icon" />
                            <h5>Zakat</h5>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="pillar-card" onClick={() => setSelectedPillar('sawm')}>
                            <FontAwesomeIcon icon={faUtensils} size="3x" className="icon" />
                            <h5>Sawm</h5>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="pillar-card" onClick={() => setSelectedPillar('hajj')}>
                            <FontAwesomeIcon icon={faKaaba} size="3x" className="icon" />
                            <h5>Hajj</h5>
                        </div>
                    </div>
                </section>
                <div className="container mt-5 text-center">
                    {selectedPillar && pillarText[selectedPillar]}
                </div>
                <br />
                <h5>De (6) zes zuilen van imaan (geloof)</h5>
                <h6>De fundamenten van de islam en de bijbehorende zuilen zijn hieronder kort samengevat.</h6>
                <section className="row mt-5">
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="pillar-card" onClick={() => setSelectedImaan('allah')}>
                            <FontAwesomeIcon icon={faBook} size="3x" className="icon" />
                            <h5>Allah</h5>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="pillar-card" onClick={() => setSelectedImaan('angels')}>
                            <FontAwesomeIcon icon={faBook} size="3x" className="icon" />
                            <h5>Engelen</h5>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="pillar-card" onClick={() => setSelectedImaan('books')}>
                            <FontAwesomeIcon icon={faBook} size="3x" className="icon" />
                            <h5>Boeken</h5>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="pillar-card" onClick={() => setSelectedImaan('prophets')}>
                            <FontAwesomeIcon icon={faPray} size="3x" className="icon" />
                            <h5>Profeten</h5>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="pillar-card" onClick={() => setSelectedImaan('judgment')}>
                            <FontAwesomeIcon icon={faBalanceScale} size="3x" className="icon" />
                            <h5>Dag des Oordeels</h5>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="pillar-card" onClick={() => setSelectedImaan('predestination')}>
                            <FontAwesomeIcon icon={faClock} size="3x" className="icon" />
                            <h5>Al-Qadr</h5>
                        </div>
                    </div>
                </section>
                <div className="mt-5">
                    {selectedImaan && imaanText[selectedImaan]}
                </div>
                <br />
                <h5>Als je overweegt om moslim te worden, dan kun je het beste starten met jezelf te richten op de fundamenten van de islam en hier kennis van opdoen.</h5>
                <h5> Heb je vragen en wil je meer weten? Neem contact met ons.</h5>
                <Link to="/contact">
                    <button className="btn btn-primary">Neem Contact Op </button>
                </Link>
                <br />
            </div>
        </>
    );
}

export default Revert;
