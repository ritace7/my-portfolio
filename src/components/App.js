import React from "react";
import Title from "./Title"
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 

export default function App(){
    return(
        <Router>
            <div className="app-container">
               <div className="app-navbar">
                <Title/>
                <Navbar />
               </div>
               <div className="app-main">
                <Routes>
                    <Route exact path="/" element={<HomePage />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
               </div>
            </div>
        </Router>
    )
} 