import React from 'react';
            import { Link } from 'react-router-dom';

            function Automatisierungstechnik() {
                return (
                    <div className="widget">
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
                        <Link to="/services" className="back-link">Zurück zu Leistungen</Link>
                    </div>
                );
            }

            export default Automatisierungstechnik;
