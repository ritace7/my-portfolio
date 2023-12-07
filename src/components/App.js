import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from './NotFound';
import Projects from '../pages/Projects';
import "../styles/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <div className="content">
            <Routes>
              <Route path = "/my-portfolio" element={<Home/>} />
              <Route path = "/about" element={<About />} />
              <Route path = "/projects" element={<Projects />} />
              <Route path = "/contact" element={<Contact />} />
              <Route path = "/*" element={<NotFound/>} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
