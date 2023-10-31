import React from 'react';
import '../styles/ProjectCard.css'

const ProjectCard = ({title, description, cover,link}) => {
    return (
        <div className="project-card">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={cover} alt="cover" className="card-cover"/>
            </a>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    );
}
 
export default ProjectCard;