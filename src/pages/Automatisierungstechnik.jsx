import React from 'react';
import { Link } from 'react-router-dom';

function Automatisierungstechnik() {
  return (
    <div className="widget">
      <h2>Automatisierungstechnik</h2>
      <p>Entwicklung und Implementierung von Automatisierungslösungen.</p>
      <p>Weitere Informationen zur Automatisierungstechnik...</p>
        <Link to="/services" className="back-link">Zurück zu Leistungen</Link>
    </div>
  );
}

export default Automatisierungstechnik;
