import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './HeroSection.css';
// import contactlogo from "../../Assets/contact.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container maintext">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero-text mt-6">
              <span>FITNESS ELEMENTS</span>
              <h1>BMI CALCULATOR</h1>
              <p>
                Gutim comes packed with the user-friendly BMI Calculator
                <br /> shortcode which lets
              </p>
              <a href="#" className="primary-btn">Read More</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-container">
            {/* <img className='form-img' src={contactlogo} alt="Contatct png" /> */}
              <h3 className='text-white'>Let's Train!</h3>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label className="form-label">Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label className="form-label">Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label className="form-label">Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Your message" />
                </Form.Group>
                <Button variant="primary formbtn" type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
