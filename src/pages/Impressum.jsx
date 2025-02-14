import React from 'react';

function Impressum({ handleClose }) {
  return (
    <>
      <h2>Impressum</h2>
      <p>Angaben gemäß § 5 TMG:</p>
      <p>Musterfirma GmbH</p>
      <p>Musterstraße 123</p>
      <p>12345 Musterstadt</p>
      <p>Vertreten durch: Max Mustermann</p>
      <p>Kontakt: Telefon: 01234-56789, E-Mail: info@musterfirma.de</p>
      <a href="#" onClick={(e) => { e.preventDefault(); handleClose(); }} className="back-link">Zurück</a>
    </>
  );
}

export default Impressum;
