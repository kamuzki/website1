import React from 'react';
import HomeImage from `${process.env.PUBLIC_URL}home-image.jpg`;

function Home() {
  return (
    <div className="home-container">
      <h1>Willkommen bei Ihrem Ingenieurbüro für Elektrotechnik</h1>
      <img src={HomeImage} alt="Elektrotechnik" className="home-image" />
      <p>Wir bieten innovative Lösungen im Bereich Elektrotechnik. Von der Planung bis zur Umsetzung – wir sind Ihr kompetenter Partner.</p>
    </div>
  );
}

export default Home;
