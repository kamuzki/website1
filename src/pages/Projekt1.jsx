import React from 'react';
import { Link } from 'react-router-dom';

function Projekt1() {
  return (
    <>
      <h2>Projekt 1: Smart Home Integration</h2>
      <p>In diesem Projekt haben wir eine umfassende Smart Home-Lösung in ein modernes Wohngebäude integriert. Dies umfasste die Steuerung von Beleuchtung, Heizung, Sicherheitssystemen und Unterhaltungselektronik über eine zentrale Schnittstelle.</p>
      <p>Weitere Details und technische Spezifikationen...</p>
      <Link to="/projects" className="back-link">Zurück zu Projekte</Link>
    </>
  );
}

export default Projekt1;
