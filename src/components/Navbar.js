import React from "react";
import {Link } from "react-router-dom";

export default function Navbar(){
    const [isMenuVisible, setIsMenuVisible] = React.useState(false);

    function toggleMenu(){  
            setIsMenuVisible(prevIsMenuVisible => !prevIsMenuVisible);  
    }

    return(
        <header>
            <div className="menu-btn" onClick={toggleMenu}>
                <span className={`menu-btn-burger${isMenuVisible?" open":""}`}></span>
            </div>
            <nav className={`nav${isMenuVisible?" open":""}`}>
                <ul className={`menu-nav${isMenuVisible?" open":""}`}>
                    <li className={`menu-nav-item active${isMenuVisible?" open":""}`}>
                        <Link 
                            to="/" 
                            className="menu-nav-link" 
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={`menu-nav-item${isMenuVisible?" open":""}`}>
                        <Link 
                            to="/about" 
                            className="menu-nav-link" 
                            onClick={toggleMenu}
                        >
                            About Me
                        </Link> 
                    </li>
                    <li className={`menu-nav-item${isMenuVisible?" open":""}`}>
                        <Link 
                            to="/projects" 
                            className="menu-nav-link"
                            onClick={toggleMenu}    
                        >
                            My Projects
                        </Link>
                    </li>
                    <li className={`menu-nav-item${isMenuVisible?" open":""}`}>
                        <Link 
                            to="/contact" 
                            className="menu-nav-link"
                            onClick={toggleMenu}
                        >
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

