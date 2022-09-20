import React from "react";

export default function Header(){
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
                        <a href="#" className="menu-nav-link">Home</a>
                    </li>
                    <li className={`menu-nav-item${isMenuVisible?" open":""}`}>
                        <a href="#" className="menu-nav-link">About Me</a> 
                    </li>
                    <li className={`menu-nav-item${isMenuVisible?" open":""}`}>
                        <a href="#" className="menu-nav-link">My Projects</a>
                    </li>
                    <li className={`menu-nav-item${isMenuVisible?" open":""}`}>
                        <a href="#" className="menu-nav-link">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

