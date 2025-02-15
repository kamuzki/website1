import React from 'react';
    import { Link } from 'react-router-dom';

    function Mitarbeiter1() {
      return (
        <div className="widget">
          <h2>Mitarbeiter 1</h2>
          <p>Position</p>
          <p>Details about Mitarbeiter 1...</p>
          <Link to="/team" className="back-link">Zurück zum Team</Link>
        </div>
      );
    }

    export default Mitarbeiter1;
