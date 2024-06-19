import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DonateFoto from '../../assets/donate.jpg';
import sadaqah from '../../assets/sadaqah-jariyah.jpg';
import axios from 'axios'; // Ensure axios is imported

function Donate() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('/api/Tikkie/GetTikkie'); // Ensure this is a GET request
            if (response.status === 200) {
                const data = response.data;
                window.location.href = data;
            } else {
                console.error('Failed to fetch Tikkie URL');
            }
        } catch (error) {
            console.error('There was an error redirecting to Tikkie!', error);
        }
    };

    return (
        <div className="container mt-5">
            <header className="text-center mb-4">
            <br/>
            <br/>
            <br/>
                <h1 className="display-4">Welkom bij de website van moskee arrahman</h1>
                <p className="lead">Making the world a better place, one step at a time.</p>
            </header>
            <section className="row text-center">
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <img src={sadaqah} className="card-img-top" alt="Programs" />
                        <div className="card-body">
                            <h5 className="card-title">Sadaqah</h5>
                            <p className="card-text">Wil je een eenmalige sadaqah (donatie) doen, van een bedrag naar keuze?</p>
                            <button onClick={handleSubmit} className="btn btn-primary rounded-pill mb-2">Doneer</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <img src={DonateFoto} className="card-img-top" alt="Mission" />
                        <div className="card-body">
                            <h5 className="card-title">Wordt een pilaar voor de moskee</h5>
                            <p className="card-text">Steun ons maandelijks met een bedrag naar keuze?</p>
                            <a href="/maandelijksedonatie" className="btn btn-primary rounded-pill mb-2">Klik hier om een pilaar te worden</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center mt-5">
                <p><em>Allah zegt:</em></p>
                <p dir="rtl" lang="ar" style={{ fontSize: '2em' }}>
                    ﴿لَن تَنَالُوا۟ ٱلْبِرَّ حَتَّىٰ تُنفِقُوا۟ مِمَّا تُحِبُّونَۚ وَمَا تُنفِقُوا۟ مِن شَىْءٍ فَإِنَّ ٱللَّهَ بِهِۦ عَلِيمٌۭ﴾
                </p>
                <p style={{ fontSize: '1.5em' }}>
                    "Jullie zullen het goede (d.w.z. het Paradijs) niet bereiken, totdat jullie uitgeven van datgene wat jullie liefhebben. En wat jullie ook van iets uitgeven, waarlijk, Allah is hiervan op de hoogte".
                </p>
                <p style={{ fontSize: '1.5em' }}><em>(Quraan 3:92)</em></p>
            </section>
            <footer className="text-center mt-4">
                <p>&copy; 2024 Moskee Arrahman. Alle rechten voorbehouden.</p>
            </footer>
        </div>
    );
}

export default Donate;
