import React from 'react';
    import { Link } from 'react-router-dom';

    function Services() {
      return (
        <>
          <Link to="/services/elektroplanung" className="widget-link">
            <div className="widget">
              <h2>Elektroplanung</h2>
              <p>Umfassende Planung und Konzeptionierung von Elektroanlagen für Wohn-, Gewerbe- und Industriegebäude.</p>
            </div>
          </Link>
          <Link to="/services/installationstechnik" className="widget-link">
            <div className="widget">
              <h2>Installationstechnik</h2>
              <p>Fachgerechte Installation und Inbetriebnahme von elektrischen Anlagen und Systemen nach höchsten Qualitätsstandards.</p>
            </div>
          </Link>
          <Link to="/services/automatisierungstechnik" className="widget-link">
            <div className="widget">
              <h2>Automatisierungstechnik</h2>
              <p>Entwicklung und Implementierung maßgeschneiderter Automatisierungslösungen zur Effizienzsteigerung und Prozessoptimierung.</p>
            </div>
          </Link>
          <Link to="/services/energieberatung" className="widget-link">
            <div className="widget">
              <h2>Energieberatung</h2>
              <p>Individuelle Beratung und Konzepte zur nachhaltigen Reduzierung des Energieverbrauchs und zur Steigerung der Energieeffizienz.</p>
            </div>
          </Link>
        </>
      );
    }

    export default Services;
