import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

export default function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hamburgerClass, setHamburgerClass] = useState("navbar-btn_burger");
    const [navClass, setNavClass] = useState("nav");
    const [linksClass, setLinksClass] = useState("links");

    const toggleMenu = ()=> {
        setIsMenuOpen(!isMenuOpen);
        if(!isMenuOpen){
            setHamburgerClass("navbar-btn_burger open");
            setNavClass("nav open");
            setLinksClass("links open");
        }else{
            setHamburgerClass("navbar-btn_burger");
            setNavClass("nav");
            setLinksClass("links");
        }
        console.log(hamburgerClass);
        console.log(navClass);
        console.log(linksClass);
    }

    return(
        <div className="navbar">
            <div className="navbar-btn" onClick={toggleMenu}>
                <span className={hamburgerClass}></span>
            </div>

            <nav className={navClass}>    
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

                <section className={linksClass}>
                    <Link className='link-items' to="/my-portfolio" onClick={toggleMenu}>HOME</Link>
                    <Link className='link-items' to="/about" onClick={toggleMenu}>ABOUT</Link>
                    <Link className='link-items' to="/projects" onClick={toggleMenu}>PROJECTS</Link>
                    <Link className='link-items' to="/contact" onClick={toggleMenu}>CONTACT</Link>
                </section>
            </nav>
        </div>
    )    
}