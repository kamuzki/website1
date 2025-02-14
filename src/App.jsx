import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Logo from `${process.env.PUBLIC_URL}logo.png`;

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src={Logo} alt="Logo" className="logo" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Leistungen</Link></li>
            <li><Link to="/projects">Projekte</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Ingenieurbüro für Elektrotechnik</p>
      </footer>
    </div>
  );
}

export default App;
