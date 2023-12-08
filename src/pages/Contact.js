import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import sideImage from "../images/contact-img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,  Col,  Container,  Form, Row, Modal } from 'react-bootstrap';

const Contact = () => {
    const form = useRef();
    const [show, setShow] = useState(false);
    const [modalText, setModalText] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            setModalText("Email Sent");
        }, (error) => {
            setModalText("Failed to send");
        });

        handleShow();
    };

    return (
        <div className="contact">
            <div className="contact-socials">
                <div>
                    <h2 className="header">Contact Me</h2>
                    <p>Valar Morghulis! Do you speak High Valyrian? </p>
                    <p>It's OK if you don't. I speak English too.</p>
                    <div className="social-icons contact-social-icons d-flex">
                        <a href="https://www.facebook.com/bassboyrit.ace/" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faFacebook} className="social-icons-logo me-5"/>
                        </a>
                        <a href="https://www.instagram.com/rit.ace_sresta/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="social-icons-logo me-5"/>
                        </a>
                        <a href="https://github.com/ritace7" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faGithub} className="social-icons-logo me-5"/>
                        </a>
                        <a href="https://www.linkedin.com/in/hritesh7" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faLinkedin} className="social-icons-logo me-5"/>
                        </a>
                    </div>
                </div>
                <div>
                    <img src={sideImage} alt="side" className='side-image'/>
                </div>    
            </div> 
            <hr />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Email Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalText}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Container fluid>
                <h2 className="sub-header">Send me an email</h2>
                <Form ref={form} className="mb-2" onSubmit={sendEmail}>
                    <Row>
                        <Col className='col-12 col-md-5 col-lg-6' >
                            <Form.Group className="mb-2" controlId="formSenderName">
                                <Form.Label>Your Name:</Form.Label>
                                <Form.Control required type="text" placeholder="Enter Your Name" name='user_name'/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formSenderEmail">
                                <Form.Label>Your Email:</Form.Label>
                                <Form.Control required  type="email" placeholder="Enter Your Email" name='user_email'/>
                            </Form.Group>
                        </Col>
                        <Col className='col-12 col-md-7 col-lg-6'>
                            <Form.Group className="mb-3" controlId="formSenderText">
                                <Form.Label>Your Message:</Form.Label>
                                <Form.Control as="textarea" style={{height: '130px'}} name='message'/>
                            </Form.Group>
                        </Col>
                        <Button variant="outline-primary" type="submit" id="submitButton" >Send</Button>
                    </Row>          
                </Form>
            </Container>
        </div>
    );
}
 
export default Contact;