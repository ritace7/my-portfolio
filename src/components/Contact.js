import React from 'react';
import sideImage from "../images/home-img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div>
                <h2 className="header">Contact Me</h2>
                <p>Valar Morghulis! Do you speak High Valyrian? </p>
                <p>It's OK if you don't. I speak English too.</p>
                <div className="social-icons d-flex justify-content-evenly">
                    <a href="https://www.facebook.com/bassboyrit.ace/" target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon icon={faFacebook} className="social-icons-logo"/>
                    </a>
                    <a href="https://www.instagram.com/rit.ace_sresta/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="social-icons-logo"/>
                    </a>
                    <a href="https://github.com/ritace7" target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon icon={faGithub} className="social-icons-logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/hritesh7" target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon icon={faLinkedin} className="social-icons-logo"/>
                    </a>
                </div>
            </div>
            <div>
                <img src={sideImage} alt="side" className='side-image'/>
            </div>
           {/* 
            <hr />
           <div className="contact-form">
                <h2>Send me an email</h2>
                <form>
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email"/>
                    <label for="message">Your Message:</label>
                    <textarea id="message" name="message" rows="4" cols="30"/>
                    <button>Send</button>
                </form>
    </div> */}
        </div>
    );
}
 
export default Contact;