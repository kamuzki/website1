import React from 'react';
    import { Link } from 'react-router-dom';

    function Team() {
      const widgetHeight = '220px'; // Adjust as needed

      return (
        <>
          <Link to="/team/mitarbeiter1" className="widget-link">
            <div className="widget" style={{ minHeight: widgetHeight }}>
              <h2>Mitarbeiter 1</h2>
              <p>Position</p>
            </div>
          </Link>
          <Link to="/team/mitarbeiter2" className="widget-link">
            <div className="widget" style={{ minHeight: widgetHeight }}>
              <h2>Mitarbeiter 2</h2>
              <p>Position</p>
            </div>
          </Link>
          <Link to="/team/mitarbeiter3" className="widget-link">
            <div className="widget" style={{ minHeight: widgetHeight }}>
              <h2>Mitarbeiter 3</h2>
              <p>Position</p>
            </div>
          </Link>
        </>
      );
    }

    export default Team;
