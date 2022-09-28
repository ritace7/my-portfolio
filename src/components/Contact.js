import React from "react";  
import SocialIcons from "./SocialIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt, faMarker } from "@fortawesome/free-solid-svg-icons";

export default function Contact(){
    return(
        <main>
            <section className="contact">
                <h2>Contact Me..</h2>

                <div className="contact-list">
                    <div className="contact-email">
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Email
                        <div className="text-secondary">hriteshmanshrestha@gmail.com</div>
                    </div>
                    <div className="contact-phone">
                        <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon> Phone
                        <div className="text-secondary">+614 52 572 910</div>
                    </div>
                    <div className="contact-email">
                        <FontAwesomeIcon icon={faMarker}></FontAwesomeIcon> Address
                        <div className="text-secondary">Bankstown, Sydney</div>
                    </div>
                </div>
                <SocialIcons />

                <footer>&copy; Copyright 2022</footer>
            </section>
        </main>
    )
}