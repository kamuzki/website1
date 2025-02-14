import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <>
      <div className="widget">
        <h2>
          <Link to="/services/elektroplanung" className="service-link">Elektroplanung</Link>
        </h2>
        <p>Detaillierte Planung und Konzeptionierung elektrischer Anlagen.</p>
      </div>
      <div className="widget">
        <h2>
          <Link to="/services/installationstechnik" className="service-link">Installationstechnik</Link>
        </h2>
        <p>Professionelle Installation und Inbetriebnahme von Elektrotechnik.</p>
      </div>
      <div className="widget">
        <h2>
          <Link to="/services/automatisierungstechnik" className="service-link">Automatisierungstechnik</Link>
        </h2>
        <p>Entwicklung und Implementierung von Automatisierungslösungen.</p>
      </div>
      <div className="widget">
        <h2>
          <Link to="/services/energieberatung" className="service-link">Energieberatung</Link>
        </h2>
        <p>Umfassende Beratung zur Optimierung des Energieverbrauchs.</p>
      </div>
    </>
  );
}

export default Services;
