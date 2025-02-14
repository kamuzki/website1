import React from 'react';

function Datenschutz({ handleClose }) {
  return (
    <>
      <h2>Datenschutz</h2>
      <p>Informationen zum Datenschutz gemäß DSGVO:</p>
      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
        Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
      </p>
      <p>Verantwortlicher: Max Mustermann, Musterstraße 123, 12345 Musterstadt</p>
      <a href="#" onClick={(e) => { e.preventDefault(); handleClose(); }} className="back-link">Zurück</a>
    </>
  );
}

export default Datenschutz;
