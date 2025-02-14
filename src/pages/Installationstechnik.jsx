import React from 'react';
import { Link } from 'react-router-dom';

function Installationstechnik() {
  return (
    <div className="widget">
      <h2>Installationstechnik</h2>
      <p>Professionelle Installation und Inbetriebnahme von Elektrotechnik.</p>
      <p>Weitere Informationen zur Installationstechnik...</p>
        <Link to="/services" className="back-link">Zurück zu Leistungen</Link>
    </div>
  );
}

export default Installationstechnik;
