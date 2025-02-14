import React from 'react';
import { Link } from 'react-router-dom';

function Projekt3() {
  return (
    <>
      <h2>Projekt 3: Industrielle Automatisierung</h2>
      <p>In diesem anspruchsvollen Projekt haben wir eine automatisierte Produktionslinie in einer Fertigungsanlage implementiert. Dies führte zu einer Steigerung der Effizienz und einer Reduzierung der Produktionskosten.</p>
      <p>Weitere Details und technische Spezifikationen...</p>
      <Link to="/projects" className="back-link">Zurück zu Projekte</Link>
    </>
  );
}

export default Projekt3;
