import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({title, description, cover, link, code}) => {
    return (                    
                <div className="project-card">
                    <img src={cover} alt="cover" className="card-img"/>
                    <div className="card-pullup" title='card-pullup'>
                        <h3 className="card-title">{title}</h3>
                        <p className="card-description">{description}</p>
                        <div className="card-links">
                            <a href={link} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faEye} />
                            </a>
                            <a href={code} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faCode} />
                            </a>
                        </div>
                    </div>
            </div>
    );
}
 
export default ProjectCard;