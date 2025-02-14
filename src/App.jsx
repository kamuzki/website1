import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Elektroplanung from './pages/Elektroplanung';
import Installationstechnik from './pages/Installationstechnik';
import Automatisierungstechnik from './pages/Automatisierungstechnik';
import Energieberatung from './pages/Energieberatung';
import Projekt1 from './pages/Projekt1';
import Projekt2 from './pages/Projekt2';
import Projekt3 from './pages/Projekt3';
import Mitarbeiter1 from './pages/Mitarbeiter1';
import Mitarbeiter2 from './pages/Mitarbeiter2';
import Mitarbeiter3 from './pages/Mitarbeiter3';

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
                    <Route path="/services/elektroplanung" element={<PopupWrapper><Elektroplanung /></PopupWrapper>} />
                    <Route path="/services/installationstechnik" element={<PopupWrapper><Installationstechnik /></PopupWrapper>} />
                    <Route path="/services/automatisierungstechnik" element={<PopupWrapper><Automatisierungstechnik /></PopupWrapper>} />
                    <Route path="/services/energieberatung" element={<PopupWrapper><Energieberatung /></PopupWrapper>} />
                    <Route path="/projects/projekt1" element={<PopupWrapper><Projekt1 /></PopupWrapper>} />
                    <Route path="/projects/projekt2" element={<PopupWrapper><Projekt2 /></PopupWrapper>} />
                    <Route path="/projects/projekt3" element={<PopupWrapper><Projekt3 /></PopupWrapper>} />
                    <Route path="/team/mitarbeiter1" element={<PopupWrapper><Mitarbeiter1 /></PopupWrapper>} />
                    <Route path="/team/mitarbeiter2" element={<PopupWrapper><Mitarbeiter2 /></PopupWrapper>} />
                    <Route path="/team/mitarbeiter3" element={<PopupWrapper><Mitarbeiter3 /></PopupWrapper>} />

                </Routes>
            </main>

            <footer className="app-footer">
                <p>&copy; 2024 Ingenieurbüro für Elektrotechnik</p>
            </footer>
        </div>
    );
}

function PopupWrapper({ children }) {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const timeoutRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        // Use requestAnimationFrame to ensure the browser has rendered the initial state
        requestAnimationFrame(() => {
            setIsActive(true);
        });
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleClose = () => {
        setIsActive(false);
        timeoutRef.current = setTimeout(() => {
            navigate(-1); // Go back to the previous page
        }, 700);
    };

    return (
        <div
            className={`popup-container ${isActive ? 'active' : ''}`}
            onClick={handleClose}
            ref={containerRef}
        >
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default App;
