import React from 'react';
    import { Link } from 'react-router-dom';

    function Impressum() {
      return (
        <div className="widget">
          <h2>Impressum</h2>
          <p>Angaben gemäß § 5 TMG:</p>
          <p>Musterfirma GmbH</p>
          <p>Musterstraße 123</p>
          <p>12345 Musterstadt</p>
          <p>Vertreten durch: Max Mustermann</p>
          <p>Kontakt: Telefon: 01234-56789, E-Mail: info@musterfirma.de</p>
          <Link to="/" className="back-link">Zurück</Link>
        </div>
      );
    }

    export default Impressum;
