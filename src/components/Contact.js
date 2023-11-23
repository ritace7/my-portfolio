import React from 'react';
import sideImage from "../images/contact-img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/contact.css';
import { Button,  Col,  Container,  Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-socials">
                <div>
                    <h2 className="header">Contact Me</h2>
                    <p>Valar Morghulis! Do you speak High Valyrian? </p>
                    <p>It's OK if you don't. I speak English too.</p>
                    <div className="social-icons d-flex">
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
            <Container fluid>
                <h2 className="sub-header">Send me an email</h2>
                <Form className="mb-2">
                    <Row>
                        <Col className='col-5 col-lg-6'>
                            <Form.Group className="mb-2" controlId="formSenderName">
                                <Form.Label>Your Name:</Form.Label>
                                <Form.Control required type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formSenderEmail">
                                <Form.Label>Your Email:</Form.Label>
                                <Form.Control required  type="email" placeholder="Enter Your Email" />
                            </Form.Group>
                        </Col>
                        <Col className='col-7 col-lg-6'>
                            <Form.Group className="mb-3" controlId="formSenderText">
                                <Form.Label>Your Message:</Form.Label>
                                <Form.Control as="textarea" style={{height: '145px'}}/>
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