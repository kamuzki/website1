import React from 'react';
import { Link } from 'react-router-dom';

function Energieberatung() {
  return (
    <div className="widget">
      <h2>Energieberatung</h2>
      <p>Umfassende Beratung zur Optimierung des Energieverbrauchs.</p>
      <p>Weitere Informationen zur Energieberatung...</p>
      <Link to="/services" className="back-link">Zurück zu Leistungen</Link>
    </div>
  );
}

export default Energieberatung;
