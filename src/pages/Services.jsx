import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Services() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <div className={`widget ${isMounted ? 'animate-in' : ''}`}>
                <h2>
                    <Link to="/services/elektroplanung" className="widget-link">Elektroplanung</Link>
                </h2>
                <p>Umfassende Planung und Konzeptionierung von Elektroanlagen für Wohn-, Gewerbe- und Industriegebäude.</p>
            </div>
            <div className={`widget ${isMounted ? 'animate-in' : ''}`}>
                <h2>
                    <Link to="/services/installationstechnik" className="widget-link">Installationstechnik</Link>
                </h2>
                <p>Fachgerechte Installation und Inbetriebnahme von elektrischen Anlagen und Systemen nach höchsten Qualitätsstandards.</p>
            </div>
            <div className={`widget ${isMounted ? 'animate-in' : ''}`}>
                <h2>
                    <Link to="/services/automatisierungstechnik" className="widget-link">Automatisierungstechnik</Link>
                </h2>
                <p>Entwicklung und Implementierung maßgeschneiderter Automatisierungslösungen zur Effizienzsteigerung und Prozessoptimierung.</p>
            </div>
            <div className={`widget ${isMounted ? 'animate-in' : ''}`}>
                <h2>
                    <Link to="/services/energieberatung" className="widget-link">Energieberatung</Link>
                </h2>
                <p>Individuelle Beratung und Konzepte zur nachhaltigen Reduzierung des Energieverbrauchs und zur Steigerung der Energieeffizienz.</p>
            </div>
        </>
    );
}

export default Services;
