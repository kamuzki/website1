import React from 'react';
import { Link } from 'react-router-dom';

function Projekt2({handleClose}) {
  return (
    <>
      <h2>Projekt 2: Energieeffiziente Beleuchtung</h2>
      <p>Bei diesem Projekt lag der Fokus auf der Umrüstung der Beleuchtungsanlage eines Bürokomplexes. Durch den Einsatz energieeffizienter LED-Technologie konnten wir den Energieverbrauch erheblich senken und die Lichtqualität verbessern.</p>
      <p>Weitere Details und technische Spezifikationen...</p>
      <a href="#" onClick={(e) => { e.preventDefault(); handleClose(); }} className="back-link">Zurück zu Projekte</a>
    </>
  );
}

export default Projekt2;
