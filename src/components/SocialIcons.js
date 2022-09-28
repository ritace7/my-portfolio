import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"

export default function SocialIcons(){
    return(
        <div className="social-icons">
            <a href="https://www.youtube.com/channel/UCQ7bp8J7g9_z6sOzzy9cWqw" target="_blank">
                <FontAwesomeIcon icon={faYoutube} className="fab fa-youtube fa-2x"></FontAwesomeIcon>
            </a>
            <a href="https://www.instagram.com/rit.ace_sresta/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram fa-2x"></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/hritesh7" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin fa-2x"></FontAwesomeIcon>
            </a>
            <a href="https://www.github.com/ritace7" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="fab fa-github fa-2x"></FontAwesomeIcon>
            </a>
        </div>
    )
}