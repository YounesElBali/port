import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function DonateSingle() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('https://localhost:7268/api/Tikkie/GetTikkie');  // Ensure this is a GET request
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
        <div className="donate-container p-5 mb-5 bg-white rounded">
            <div className="donate-text text-center">
                <h2 className="mb-4">Doneer aan de moskee</h2>
                <p>Uw donatie helpt ons om de moskee te onderhouden en onze gemeenschapsdiensten te ondersteunen. Elke bijdrage maakt een verschil!</p>
            </div>
            <br />
            <form className="donate-form" onSubmit={handleSubmit}>
                <div className="text-center">
                    <p>Voor het eenmalig doneren, klik op doneer nu om naar Tikkie te worden gestuurd voor een eenmalige donatie</p>
                    <button type="submit" className="btn btn-primary donate-button mt-4">
                        Doneer nu
                    </button>
                </div>
            </form>
        </div>
    );
}

export default DonateSingle;
