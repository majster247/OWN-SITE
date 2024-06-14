// src/components/MainApp.tsx
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Cert from './components/certificates/certificates';
import Portfolio from './components/Portfolio/portfolio';
import './App.css';


const MainApp: React.FC = () => {
  return (
      <div>
        <header className='header'>
          <h1>Hubert "majster247" Topolski</h1>
        </header>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/cert">Certificates</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/cert" element={<Cert />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

      <footer>
        <p>&copy; Hubert "majster247" Topolski 2017-2024</p>
      </footer>
      </div>
  );
};

export default MainApp;
