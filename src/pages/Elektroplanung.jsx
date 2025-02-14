import React from 'react';
import { Link } from 'react-router-dom';

function Elektroplanung() {
  return (
    <div className="widget">
      <h2>Elektroplanung</h2>
      <p>Detaillierte Planung und Konzeptionierung elektrischer Anlagen.</p>
      <p>Weitere Informationen zur Elektroplanung...</p>
        <Link to="/services" className="back-link">Zurück zu Leistungen</Link>
    </div>
  );
}

export default Elektroplanung;
