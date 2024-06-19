import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Revert() {


    return (
        <>
            <div className="container mt-5">
                <section className="row text-center">
                    <h1>Meer leren over islam? </h1>
                </section>
                <br/>
                <h5>Als je overweegt om moslim te worden, dan kun je het beste starten met jezelf te richten op de fundamenten van de islam en hier kennis van opdoen. De belangrijkste fundamenten van de islam bestaan uit:</h5>
                <br/>
                <h5>De (5) vijf zuilen van islam (handelingen)</h5>
                <h5>(Arabisch: أركان الإسلام arkān-al-Islām) worden gevormd door vijf meest fundamentele handelingen die elke moslim onderhoudt.</h5>
                <br/>
                <p> 
                   <h6>1. De geloofsbelijdenis (sjahada)</h6>
                    Om tot de islam toe te treden, dien je de shahada (geloofsgetuigenis) uit te spreken. Met het uitspreken van de shahada getuig je dat er geen god is die aanbeden mag worden, behalve Allah en je getuigt dat Mohammed (vrede zij met hem) Zijn Boodschapper is. De shahada wordt als volgt uitgesproken:
                    أَشْـهَدُ أَنْ لا إِلـهَ إِلاّ الله ، وَأَشْـهَدُ أَنَّ مُحَمّـداً رَسـولُ الله
                    asjhadoe an lā ilāha illā-llāh, wa asjhadoe anna moeḥammadan rasōēloe-llāh 
                </p>
                <p>
                    <h6>2. De dagelijkse rituele gebeden (salat)</h6>
                    Moslims worden geacht minimaal vijfmaal per dag de rituele gebeden (Salah) uit te voeren:<br/>
                    Fajr gebed: sOchtends vroeg aan het begin van de ochtendschemering, ruim voor de zonsopgang<br/>
                    Dohr gebed: sMiddags net na de hoogste stand van de zon<br/>
                    Asr gebed: sMIddags midden tussen Dohr en zonsondergang, wat neerkomt op ongeveer driekwart van de dag<br/>
                    Maghreb gebed: net na zonsondergang<br/>
                    Isha gebed: na de avondschemering, circa anderhalf uur tot 2 uur na Maghrib <br/>
                </p>
                <p>
                    <h6>3. Het geven van aalmoezen (zakat of zakah)</h6>
                    Binnen de islam is het geloof dat alle rijkdom door Allah aan de mens in bruikleen gegeven wordt. Het woord zakat betekent zowel zuivering als groei. In de praktijk betekent dit een jaarlijkse donatie van twee en een half procent van het privékapitaal aan armen en aan liefdadigheidsdoeleinden.
                </p>
                <p>
                    <h6>4. Het verplichte jaarlijkse vasten (siyam)</h6>
                    houdt in dat men tijdens de hele maand ramadan overdags niet eet,
                    niet drinkt en zich onthoudt van seksuele gemeenschap. Dit vasten is voorgeschreven in de Koran en geldt vanaf al fajr (dageraad) tot al maghreb (zonsondergang). 
                    Tijdens de nacht zijn deze beperkingen opgeheven. In de praktijk wordt de avondmaaltijd na zonsondergang genuttigd en wordt vroeg opgestaan op voor een vroeg ontbijt en voor het verrichten van het fajr gebedt.
                    Wanneer vasten te bezwaarlijk zou zijn, bijvoorbeeld voor zwangere en ongestelde vrouwen, zieken, jonge kinderen , mag het worden overgeslagen. Wel wordt later inhalen van het vasten aangemoedigd.
                </p>
                <p>
                    <h6>5. De pelgrimstocht naar Mekka indien daartoe in staat (hadj)</h6>
                    De pelgrimstocht naar de voor moslims heilige stad Mekka in Saoedi-Arabië wordt uitgevoerd tijdens de maand Dhul Hijja (de hajj-maand, de twaalfde maand van de islamitische kalender). Iedere moslim is verplicht, mits hij of zij het zich financieel en qua gezondheid kan permitteren, om de hadj ten minste eenmaal in het leven te ondernemen
                </p>
                <br/>
                <h5>De (6) zes zuilen van imaan (geloof)</h5>
                <h6>De fundamenten van de islam en de bijbehorende zuilen zijn hieronder kort samengevat.</h6>
                <br/>
                <p>De pilaren van het geloof ‘imaan’ is gebouwd op zes zuilen. Het geloven in:</p>
                <p> Allah als enige god <br/> Zijn Engelen <br/> alle Zijn Boeken (waarvan de Koran het laatste boek is)
                <br/> alle Zijn Profeten (waarvan profeet Mohamed vzmh de laatste profeet is)
                <br/> Dag des Oordeels Al-Qadr (de voorbeschikking), zowel het goede als het kwade ervan</p>
                <br/>
                <p> Heb je vragen en wil je meer weten? Neem contact met ons.</p>
                <Link to="/contact">
                <button className="btn btn-primary">Neem Contact Op </button>
                </Link>
                <br/>
            </div>
  

        </>
    );
}

export default Revert;