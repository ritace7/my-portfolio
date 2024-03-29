import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import CardCarousel from '../components/CardCarousel';

const Projects = () => {
   return (  
        <div className="project-section">
            <div className="certifications">
                <p>Check out my</p>
                <h2>CERTIFICATIONS & SKILLS</h2>
                <div className="social-icons d-flex justify-content-evenly">
                    <a title="Github" href="https://github.com/ritace7" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social-icons-logo"/>
                    </a>
                    <a title="CodePen" href="https://codepen.io/ritace7" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faCodepen} className="social-icons-logo"/>
                    </a>
                    <a title="Free Code Camp" href="https://www.freecodecamp.org/fcc8324296a-444b-4ac9-aa2c-e4c3911221fa" target="_blank" rel="noreferrer">
                         <FontAwesomeIcon icon={faFreeCodeCamp} className="social-icons-logo"/>
                    </a>
                </div>
            </div>
            <hr/>
            <div className="projects">
                    <p>Some of my recent</p>
                    <h2>PROJECTS</h2>
                    <CardCarousel/>                    
            </div>
        </div>
    );
}
 
export default Projects;