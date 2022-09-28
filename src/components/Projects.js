import React from "react";  
import SocialIcons from "./SocialIcons";
import projectImg from "../images/project-img.jpg"
import musicImg from "../images/projMusic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,faSpotify} from "@fortawesome/free-brands-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";

export default function Projects(){
    return(
        <main>
            <section className="projects">
                <div className="projects-bio-image">
                    <h1 className="text-secondary">My Projects</h1>
                </div>

                <div className="projects-items">
                    <div className="projects-item">
                        <img src={projectImg} alt="My Project"/>
                        <div className="projects-btns">
                            <a className="projects-btn">
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>Preview
                            </a>
                            <a href="https://www.github.com/ritace7" target="_blank" className="projects-btn">
                                 <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>Github
                            </a>
                        </div>
                    </div>

                    <div className="projects-item">
                        <img src={musicImg} alt="Music Project"/>
                        <div className="projects-btns"> 
                            <a className="projects-btn">
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>Preview
                            </a>
                            <a href="https://www.spotify.com" target="_blank" className="projects-btn">
                                 <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>Spotify
                            </a>
                        </div>
                    </div>
                </div>
                
                <SocialIcons />

                <footer>&copy; Copyright 2022</footer>
            </section>
        </main>
    )
}