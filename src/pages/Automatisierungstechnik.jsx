import React from 'react';
import { Link } from 'react-router-dom';

function Automatisierungstechnik({ handleClose }) { // Receive handleClose
    return (
        <>
            <h2>Automatisierungstechnik</h2>
            <p>Entwicklung und Implementierung maßgeschneiderter Automatisierungslösungen zur Effizienzsteigerung und Prozessoptimierung. Wir setzen auf modernste Technologien und innovative Konzepte.</p>
            <p>Unsere Leistungen im Bereich Automatisierungstechnik umfassen:</p>
            <ul>
                <li>Analyse und Optimierung bestehender Prozesse</li>
                <li>Entwicklung von Automatisierungskonzepten</li>
                <li>Programmierung von SPS-Steuerungen</li>
                <li>Visualisierung von Prozessen</li>
                <li>Inbetriebnahme und Schulung</li>
            </ul>
            {/* Use onClick to call handleClose */}
            <a href="#" onClick={(e) => { e.preventDefault(); handleClose(); }} className="back-link">Zurück zu Leistungen</a>
        </>
    );
}

export default Automatisierungstechnik;
