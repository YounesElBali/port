import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import favicon from '../../assets/faviconV2.png';
import Moskee from '../../assets/Moskee Noordwij.jpeg';
import Logo from '../../assets/logo Moskee Arrahman.jpeg';
import './HomeText.css';

function HomeText() {
    return (
        <>
        <div className="container mt-5">
            <header className="text-center mb-4">
                <h1 className="display-4">Welkom bij de website van moskee arrahman</h1>
                <p className="lead">Making the world a better place, one step at a time.</p>
            </header>
            <section className="row text-center">
                <div className="col-md-4">
                    <div className="card shadow-sm uniform-card">
                        <img src={Logo} className="card-img-top" alt="Mission" />
                        <div className="card-body">
                            <h5 className="card-title">Vrijdagpreken</h5>
                            <p className="card-text">Lees hier de nederlandse vertaling van de vrijdagpreek van de moskee</p>
                            <a href="/vrijdagpreken" className="btn btn-primary rounded-pill mb-2">Bekijk vrijdagpreek</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm uniform-card">
                        <img src={Moskee} className="card-img-top" alt="Programs" />
                        <div className="card-body">
                            <h5 className="card-title">Doneren aan de moskee</h5>
                            <p className="card-text">Maandelijkse en eenmalige donaties zijn mogelijk</p>
                            <a href="/donatie" className="btn btn-primary rounded-pill mb-2">Klik hier om te doneren</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm uniform-card">
                        <img src={favicon} className="card-img-top" alt="Get Involved" />
                        <div className="card-body">
                            <h5 className="card-title">Gebedstijden</h5>
                            <p className="card-text">Locatie noordwijk</p>
                            <a href="/gebedstijden" className="btn btn-primary rounded-pill mb-2">Bekijk gebedstijden</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        <div className="middle-image " >
            <a href="/student" className="btn btn-primary rounded-pill mb-2">Student pagina</a>
        </div> 

        <footer className="text-center mt-4">
            <p>&copy; 2024 Moskee Arrahman. Alle rechten voorbehouden.</p>
        </footer>
        </>
    );
}

export default HomeText;
