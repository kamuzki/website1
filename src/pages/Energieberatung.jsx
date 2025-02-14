import React from 'react';
import { Link } from 'react-router-dom';

function Energieberatung() {
    return (
        <>
            <h2>Energieberatung</h2>
            <p>Individuelle Beratung und Konzepte zur nachhaltigen Reduzierung des Energieverbrauchs und zur Steigerung der Energieeffizienz. Wir helfen Ihnen, Ihre Energiekosten zu senken und die Umwelt zu schonen.</p>
            <p>Unsere Leistungen im Bereich Energieberatung umfassen:</p>
            <ul>
                <li>Analyse des Energieverbrauchs</li>
                <li>Identifizierung von Einsparpotenzialen</li>
                <li>Entwicklung von Maßnahmen zur Energieeffizienzsteigerung</li>
                <li>Beratung zu Fördermöglichkeiten</li>
                <li>Erstellung von Energieausweisen</li>
            </ul>
            <Link to="/services" className="back-link">Zurück zu Leistungen</Link>
        </>
    );
}

export default Energieberatung;
