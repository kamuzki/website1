import React, { useState, useEffect } from 'react';

function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`home-container widget ${isMounted ? 'animate-in' : ''}`}>
      <h2>Willkommen bei Ihrem Ingenieurbüro für Elektrotechnik</h2>
      <p className="home-text">
        Wir sind Ihr kompetenter Partner für innovative Lösungen im Bereich Elektrotechnik. Von der detaillierten Planung bis zur professionellen Umsetzung bieten wir umfassende Dienstleistungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.
      </p>
    </div>
  );
}

export default Home;
