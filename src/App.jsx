import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Elektroplanung from './pages/Elektroplanung';
import Installationstechnik from './pages/Installationstechnik';
import Automatisierungstechnik from './pages/Automatisierungstechnik';
import Energieberatung from './pages/Energieberatung';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">Ingenieurbüro</div>
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
          <Route path="/services/elektroplanung" element={<Elektroplanung />} />
          <Route path="/services/installationstechnik" element={<Installationstechnik />} />
          <Route path="/services/automatisierungstechnik" element={<Automatisierungstechnik />} />
          <Route path="/services/energieberatung" element={<Energieberatung />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Ingenieurbüro für Elektrotechnik</p>
      </footer>
    </div>
  );
}

export default App;
