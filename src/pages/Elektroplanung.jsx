import React from 'react';
    import { Link } from 'react-router-dom';

    function Elektroplanung() {
      return (
        <div className="widget">
          <h2>Elektroplanung</h2>
          <p>Umfassende Planung und Konzeptionierung von Elektroanlagen für Wohn-, Gewerbe- und Industriegebäude. Wir erstellen detaillierte Pläne, Schaltpläne und Stücklisten unter Berücksichtigung aller relevanten Normen und Vorschriften.</p>
          <p>Unsere Leistungen im Bereich Elektroplanung umfassen:</p>
          <ul>
            <li>Bedarfsanalyse und Konzepterstellung</li>
            <li>Planung von Starkstromanlagen</li>
            <li>Planung von Schwachstromanlagen</li>
            <li>Beleuchtungsplanung</li>
            <li>Planung von Sicherheitsbeleuchtung</li>
            <li>Planung von Blitzschutzanlagen</li>
          </ul>
          <Link to="/services" className="back-link">Zurück zu Leistungen</Link>
        </div>
      );
    }

    export default Elektroplanung;
