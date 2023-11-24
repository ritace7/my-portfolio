import React from 'react';
import ProjectCard from './ProjectCard';
import proj1Img from '../images/proj1.jpg';
import proj2Img from '../images/proj2.jpg';
import proj3Img from '../images/proj4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    return (  
        <div className="project-section">
            <div className="certifications">
                <p>Check out my</p>
                <h2>CERTIFICATIONS & SKILLS</h2>
                <div className="social-icons d-flex justify-content-evenly">
                    <a href="https://github.com/ritace7" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social-icons-logo"/>
                    </a>
                    <a href="https://codepen.io/ritace7" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faCodepen} className="social-icons-logo"/>
                    </a>
                    <a href="https://www.freecodecamp.org/fcc8324296a-444b-4ac9-aa2c-e4c3911221fa" target="_blank" rel="noreferrer">
                         <FontAwesomeIcon icon={faFreeCodeCamp} className="social-icons-logo"/>
                    </a>
                </div>
            </div>
            <hr/>
            <div className="projects">
                    <p>Some of my recent</p>
                    <h2>PROJECTS</h2>
                    <div className="project-cards">
                        <ProjectCard 
                            title="Engineer's Portfolio"
                            cover={proj1Img}
                            description="A website I made for an engineer..."
                            link="https://ritace7.github.io/iammanish.github.io/"
                            />
                        <ProjectCard 
                            title="React Facts Page"
                            cover={proj2Img}
                            description="A react website that toggles between light mode and dark mode..."
                            link="https://ritace7.github.io/react-facts/"
                            />
                        <ProjectCard 
                            title="Contact App"
                            cover={proj3Img}
                            description="A contact list that makes API calls.."
                            link="https://ritace7.github.io/contacts/"
                            />
                    </div>
            </div>
        </div>
    );
}
 
export default Projects;