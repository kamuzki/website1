import React from 'react';
            import { Link } from 'react-router-dom';

            function Installationstechnik() {
                return (
                    <div className="widget">
                        <h2>Installationstechnik</h2>
                        <p>Fachgerechte Installation und Inbetriebnahme von elektrischen Anlagen und Systemen nach höchsten Qualitätsstandards. Unsere erfahrenen Elektriker sorgen für eine reibungslose Umsetzung Ihrer Projekte.</p>
                        <p>Unsere Leistungen im Bereich Installationstechnik umfassen:</p>
                        <ul>
                            <li>Installation von Starkstromanlagen</li>
                            <li>Installation von Schwachstromanlagen</li>
                            <li>Installation von Beleuchtungsanlagen</li>
                            <li>Installation von Sicherheitsbeleuchtung</li>
                            <li>Installation von Blitzschutzanlagen</li>
                            <li>Inbetriebnahme und Prüfung</li>
                        </ul>
                        <Link to="/services" className="back-link">Zurück zu Leistungen</Link>
                    </div>
                );
            }

            export default Installationstechnik;
