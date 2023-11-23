import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import "../styles/app.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import NotFound from './NotFound';
import Projects from './Projects';
import Contact from './Contact';
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
              <Route path = "*" element={<NotFound/>} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
