import React from 'react';
    import { Link } from 'react-router-dom';

    function Datenschutz() {
      return (
        <div className="widget">
          <h2>Datenschutz</h2>
          <p>Informationen zum Datenschutz gemäß DSGVO:</p>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
            Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </p>
          <p>Verantwortlicher: Max Mustermann, Musterstraße 123, 12345 Musterstadt</p>
          <Link to="/" className="back-link">Zurück</Link>
        </div>
      );
    }

    export default Datenschutz;
