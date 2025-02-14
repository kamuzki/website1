import React from 'react';

function UeberUns({ handleClose }) {
  return (
    <>
      <h2>Über Uns</h2>
      <p>
        Wir sind ein erfahrenes Ingenieurbüro für Elektrotechnik und bieten
        umfassende Dienstleistungen in den Bereichen Planung, Installation,
        Automatisierung und Energieberatung.
      </p>
      <p>Unser Team besteht aus qualifizierten Experten, die stets auf dem neuesten Stand der Technik sind.</p>
      <a href="#" onClick={(e) => { e.preventDefault(); handleClose(); }} className="back-link">Zurück</a>
    </>
  );
}

export default UeberUns;
