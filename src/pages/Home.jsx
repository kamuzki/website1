import React from 'react';

    function Home() {
      return (
        <div className="home-container">
          <div className="home-widgets-wrapper">
            <div className="widget home-widget">
              <h2>Willkommen bei Ihrem Ingenieurbüro für Elektrotechnik</h2>
              <p className="home-text">
                Wir sind Ihr kompetenter Partner für innovative Lösungen im Bereich Elektrotechnik. Von der detaillierten Planung bis zur professionellen Umsetzung bieten wir umfassende Dienstleistungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.
              </p>
            </div>

            {/* New Widget Section */}
            <div className="widget home-widget">
              <h2>Unsere Kernkompetenzen</h2>
              <p className="home-text">
                Entdecken Sie unsere vielfältigen Leistungen in den Bereichen Elektroplanung, Installationstechnik, Automatisierungstechnik und Energieberatung.
              </p>
            </div>
          </div>
        </div>
      );
    }

    export default Home;
