import React from 'react';
    import { Link } from 'react-router-dom';

    function Projekt2() {
      return (
        <div className="widget">
          <h2>Projekt 2: Energieeffiziente Beleuchtung</h2>
          <p>Bei diesem Projekt lag der Fokus auf der Umrüstung der Beleuchtungsanlage eines Bürokomplexes. Durch den Einsatz energieeffizienter LED-Technologie konnten wir den Energieverbrauch erheblich senken und die Lichtqualität verbessern.</p>
          <p>Weitere Details und technische Spezifikationen...</p>
          <Link to="/projects" className="back-link">Zurück zu Projekte</Link>
        </div>
      );
    }

    export default Projekt2;
