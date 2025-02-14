import React from 'react';
import { Link } from 'react-router-dom';

function Projekt2() {
  return (
    <div className="widget">
      <h2>Projekt 2</h2>
      <p>Beschreibung des Projekts 2.</p>
      <p>Weitere Informationen zu Projekt 2...</p>
      <Link to="/projects" className="back-link">Zurück zu Projekte</Link>
    </div>
  );
}

export default Projekt2;
