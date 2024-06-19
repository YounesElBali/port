import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './PrayerTime.css'; // Import your custom CSS file

function PrayerTime() {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        fetchPrayerTimes();
        const today = new Date();
        const formattedDate = today.toLocaleDateString('nl-NL', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
        setCurrentDate(formattedDate);
    }, []);

    const fetchPrayerTimes = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/PrayerTimes/PrayerTime');
            setPrayerTimes(response.data);
        } catch (error) {
            console.error('Error fetching prayer times:', error);
        }
    };

    return (
        <Container className="mt-5 prayer-times-container">
            <Row>
                <Col>
                    <h1 className="prayer-times-title">Gebedstijden Noordwijk</h1>
                    <h4>{currentDate}</h4>
                    <br/>
                    {prayerTimes ? (
                        <div className="prayer-times-list">
                            {[
                                { name: 'Fajr', arabic: 'الفجر', time: prayerTimes.fajr },
                                { name: 'Dohr', arabic: 'الظهر', time: prayerTimes.dohr },
                                { name: 'Asr', arabic: 'العصر', time: prayerTimes.asr },
                                { name: 'Maghreb', arabic: 'المغرب', time: prayerTimes.maghreb },
                                { name: 'Isha', arabic: 'العشاء', time: prayerTimes.isha },
                            ].map((prayer, index) => (
                                <Row key={index} className="prayer-time-item">
                                    <Col xs={4} className="prayer-name">{prayer.name}</Col>
                                    <Col xs={4} className="prayer-arabic">{prayer.arabic}</Col>
                                    <Col xs={4} className="prayer-time">{prayer.time}</Col>
                                </Row>
                            ))}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default PrayerTime;