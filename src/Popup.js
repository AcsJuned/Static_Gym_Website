// src/Popup.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Popup.css'; // Import your custom CSS for the Popup

const Popup = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered className="popup-modal">
            <Modal.Header closeButton className="popup-header">
                <Modal.Title>Contact Form</Modal.Title>
            </Modal.Header>
            <Modal.Body className="popup-body">
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" placeholder="Enter your phone number" />
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your address" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="popup-footer">
                <Button variant="primary">Submit</Button>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Popup;
