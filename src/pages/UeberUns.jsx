import React from 'react';
    import { Link } from 'react-router-dom';

    function UeberUns() {
      return (
        <div className="widget">
          <h2>Über Uns</h2>
          <p>
            Wir sind ein erfahrenes Ingenieurbüro für Elektrotechnik und bieten
            umfassende Dienstleistungen in den Bereichen Planung, Installation,
            Automatisierung und Energieberatung.
          </p>
          <p>Unser Team besteht aus qualifizierten Experten, die stets auf dem neuesten Stand der Technik sind.</p>
          <Link to="/" className="back-link">Zurück</Link>
        </div>
      );
    }

    export default UeberUns;
