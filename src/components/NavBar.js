import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import '../styles/NavBar.css';
import { Nav, Navbar } from 'react-bootstrap';

export default function NavBar(){
    return(
        <Navbar className="navbar">
            <Navbar.Brand href="#home" className='text-primary'>
                <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Link className='link-items' to="/my-portfolio">HOME</Link>
                <Link className='link-items' to="/about">ABOUT</Link>
                <Link className='link-items' to="/projects">PROJECTS</Link>
                <Link className='link-items' to="/contact">CONTACT</Link>
            </Nav>
        </Navbar>
    )    
}