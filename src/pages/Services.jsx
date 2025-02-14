import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <>
      <Link to="/services/elektroplanung" className="widget-link">
        <div className="widget">
          <h2>Elektroplanung</h2>
          <p>Detaillierte Planung und Konzeptionierung elektrischer Anlagen.</p>
        </div>
      </Link>
      <Link to="/services/installationstechnik" className="widget-link">
        <div className="widget">
          <h2>Installationstechnik</h2>
          <p>Professionelle Installation und Inbetriebnahme von Elektrotechnik.</p>
        </div>
      </Link>
      <Link to="/services/automatisierungstechnik" className="widget-link">
        <div className="widget">
          <h2>Automatisierungstechnik</h2>
          <p>Entwicklung und Implementierung von Automatisierungslösungen.</p>
        </div>
      </Link>
      <Link to="/services/energieberatung" className="widget-link">
        <div className="widget">
          <h2>Energieberatung</h2>
          <p>Umfassende Beratung zur Optimierung des Energieverbrauchs.</p>
        </div>
      </Link>
    </>
  );
}

export default Services;
