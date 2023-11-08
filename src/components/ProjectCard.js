import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProjectCard.css';

const ProjectCard = ({title, description, cover,link}) => {
    return (                    
                <div className="project-card">
                    <img src={cover} alt="cover" className="card-img"/>
                    <div className="card-pullup">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-description">{description}</p>
                        <a href={link} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
            </div>
    );
}
 
export default ProjectCard;