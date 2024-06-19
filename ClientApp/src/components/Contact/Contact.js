import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Logo from '../../assets/logo Moskee Arrahman.jpeg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/email/Contactform`, formData);
      alert('Email is succesvol verstuur!');
    } catch (error) {
      console.error('Er is een fout onstaan bij het versturen van de email! Probeer het later opnieuw.', error);
      alert('Er is een fout onstaan bij het versturen van de email! Probeer het later opnieuw.');
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="text-center">
          <img src={Logo} alt="Logo" className="mb-4" style={{ maxWidth: '100%', height: '600px' }} />
          <p>Vul het formulier in en wij nemen spoedig contact met je op.</p>
          <div className="mb-3">
            <a href="mailto:info@arrahmannoordwijk.nl" className="d-block mb-2 text-dark"><i className="fas fa-envelope"></i> info@arrahmannoordwijk.nl</a>
            <p className="d-block mb-2 text-dark"><i className="fas fa-map-marker-alt"></i> Bronckhorststraat 61 2201 KV, Noordwijk</p>
          </div>
        </Col>
        <Col md={6}>
          <h1 className="mb-4">Contact opnemen</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Naam *</Form.Label>
              <Form.Control type="text" placeholder="Naam" value={formData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>E-mailadres *</Form.Label>
              <Form.Control type="email" placeholder="E-mailadres" value={formData.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="message" className="mt-3">
              <Form.Label>Bericht *</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Bericht" value={formData.message} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 rounded-pill mb-2">Versturen</Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.4792809674474!2d4.430410215798112!3d52.237989679764265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5d7bcfd97db17%3A0x837f255c0937b97d!2sBronckhorststraat%2061%2C%202201%20KV%20Noordwijk%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1622621330649!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
