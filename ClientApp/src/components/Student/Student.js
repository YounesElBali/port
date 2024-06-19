import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Student() {


    return (
        <>
        <div className="container mt-5 ">
            <h1>Lessen in de moskee</h1>
            <br/>
            <p>
                Op wekelijkse basis worden er in de moskee lessen voor kinderen, jongeren, vrouwen en mannen georganiseerd. Onderstaand in het kort een overzicht van alle lessen die door de moskee worden georganiseerd:
            </p>
            <h5> 1) kinderen:</h5>
            <h5> Nourania</h5>
            <p>
                De Nourania lessen in onze moskee zijn bedoeld voor kinderen vanaf 5 jaar oud en volgt de Al Qaida An-Noorania methode. De methode biedt een gestructureerde benadering van het Arabisch leren lezen, waardoor het kind snel vooruitgang kan boeken en vertrouwen kan opbouwen in zijn of haar leesvaardigheden.
            </p>
            <p>
                Onze intensieve lessen vindt wekelijks op zondag plaats. Het hoofddoel van Nourania is om kinderen op een boeiende en effectieve manier vertrouwd te maken met het Arabisch lezen. Stap voor stap worden ze begeleid in het leren van Arabische letters, klanken en leesregels.
            </p>
            <p>
                Daarnaast speelt ouderbetrokkenheid ook een grote rol in het succes van deze methode. Daarom moedigen we ouders/verzorgers aan om actief betrokken te zijn bij de huiswerkopdrachten van hun kinderen. Door samen met uw kind te oefenen en hen te ondersteunen, kunt u het leerproces versterken en de vooruitgang van uw kind stimuleren.
            </p>
            <br/>
            <h5>
                2)	Mannen (10+)
            </h5>
            <h5>
                Memorisatie
            </h5>
            <p>
                De memorisatielessen van onze moskee zijn gericht op het memoriseren van de Quran volgens de authentieke Marokkaanse methode, die allesomvattend is. Het programma biedt een verdieping van lees- en schrijfvaardigheden, evenals training in dictee. Dit alles wordt aangevuld met het leren van de regels van Tajweed, het Quranschrift en de basiswetenschappen. De moskee beschikt over verschillende docenten die het mogelijk maken de Quran in zowel Warsh als Hafs te memoriseren.
            </p>
            <p>
                Voordat u zich aanmeldt voor de lessen, voor uzelf of voor uw kind, is het belangrijk om de onderstaande voorwaarden te bekijken en na te gaan of hieraan wordt voldaan:
            </p>
            <p>
                •	Arabisch kunnen lezen, schrijven en kunnen uitvoeren van een dictee;<br/>
                •	Gemotiveerd zijn om voldoende inspanning te verrichten om vorderingen te maken;<br/>
                •	Het vermogen hebben om wekelijks op de zondag de les te volgen in de moskee;<br/>
                •	Minimaal 1/8 van een Hizb (hoofdstuk) per week uit het hoofd kunnen leren en dit foutloos kunnen memoriseren;<br/>
                •	Minimaal 10 jaar oud zijn bij aanvang van de koranlessen;<br/>
                •	Bij voorkeur al minimaal twee Hizb (hoofdstukken) gememoriseerd hebben<br/>
            </p>
            <br/>
            <h5>
                3)	Vrouwen (10+)
            </h5>
            <p>
                In onze moskee bieden wij Arabisch-, Koran- en Godsdienstonderwijs voor vrouwen vanaf 10 jaar. Dit wordt wekelijks gedurende twee uur aangeboden op verschillende dagen en tijden. Aan de hand van het niveau van de deelneemster wordt de deelneemster ingedeeld in een bepaalde groep. De lessen worden verzorgd door gemotiveerde, bekwame docentes. 
                Aanmelden kan middels het onderstaande formulier:
            </p>
            <br/>
            <Link to="/contact">
                <button className="btn btn-primary">Neem Contact Op </button>
            </Link>
        </div>
    </>
);
}

export default Student;