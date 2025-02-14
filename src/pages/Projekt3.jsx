import React from 'react';
import { Link } from 'react-router-dom';

function Projekt3() {
  return (
    <div className="widget">
      <h2>Projekt 3</h2>
      <p>Beschreibung des Projekts 3.</p>
      <p>Weitere Informationen zu Projekt 3...</p>
      <Link to="/projects" className="back-link">Zurück zu Projekte</Link>
    </div>
  );
}

export default Projekt3;
