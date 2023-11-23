import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import '../styles/NavBar.css';

export default function NavBar(){
    return(
        <nav>
            <section className="nav-logo">
               <Link to="my-portfolio">

                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        />      
                
                    </Link>
            </section>
            <section className="links">
                <Link className='link-items' to="/my-portfolio">HOME</Link>
                <Link className='link-items' to="/about">ABOUT</Link>
                <Link className='link-items' to="/projects">PROJECTS</Link>
                <Link className='link-items' to="/contact">CONTACT</Link>
            </section>
        </nav>
    )    
}