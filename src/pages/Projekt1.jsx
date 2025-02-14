import React from 'react';
import { Link } from 'react-router-dom';

function Projekt1() {
  return (
    <div className="widget">
      <h2>Projekt 1</h2>
      <p>Beschreibung des Projekts 1.</p>
      <p>Weitere Informationen zu Projekt 1...</p>
      <Link to="/projects" className="back-link">Zurück zu Projekte</Link>
    </div>
  );
}

export default Projekt1;
