import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faLanguage, faFutbol } from '@fortawesome/free-solid-svg-icons';
import SkillRatings from './SkillRatings';

export default function About(){
    return(
        <div className="about-section">

            <h2>About Me</h2>

            <div className="about-details">

                <div className="description">
                    <p>
                        Hello, I’m Hritesh. A Sydney-based web developer and part-time music producer. I am an ambitious individual with strong organizational and multitasking skills looking to leverage my passion for coding and problem-solving skills to develop innovative software solutions that enhance user experiences and drive business growth. I aspire to continuously expand my knowledge in cutting-edge technologies and contribute to projects that make a meaningful impact on the world of software development.  
                    </p>
                    <div className="hobbies">
                        <h3 className="sub-header">
                            <FontAwesomeIcon icon={faFutbol} className='about-icons'/> 
                            Hobbies
                        </h3>
                        <ul>
                            <li>Music</li>
                            <li>Soccer</li>
                            <li>Movies</li>
                        </ul>
                    </div>
                </div>

                <div className="skills">
                    <h3 className="sub-header">
                        <FontAwesomeIcon icon={faKeyboard} className='about-icons'/> 
                        Programming Skills
                    </h3>
                    <ul>
                        <li>
                            JavaScript
                            <SkillRatings rating={8}/>
                        </li>
                        <li>
                            C++
                            <SkillRatings rating={6}/>    
                        </li>
                        <li>
                            Python
                            <SkillRatings rating={3}/>
                        </li>
                    </ul>
                    <h3 className="sub-header">
                    <FontAwesomeIcon icon={faLanguage} className='about-icons'/> 
                        Language Skills
                    </h3>
                    <ul>
                        <li>
                            English
                            <SkillRatings rating={9}/>    
                        </li>
                        <li>
                            Nepali
                            <SkillRatings rating={9}/>
                        </li>
                        <li>
                            Spanish
                            <SkillRatings rating={2}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}