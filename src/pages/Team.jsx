import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Team() {
  const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

  return (
    <>
      <Link to="/team/mitarbeiter1" className="widget-link">
        <div className={`widget ${isMounted ? 'animate-in' : ''}`}>
          <h2>Mitarbeiter 1</h2>
          <p>Position</p>
        </div>
      </Link>
      <Link to="/team/mitarbeiter2" className="widget-link">
        <div className={`widget ${isMounted ? 'animate-in' : ''}`}>
          <h2>Mitarbeiter 2</h2>
          <p>Position</p>
        </div>
      </Link>
      <Link to="/team/mitarbeiter3" className="widget-link">
        <div className={`widget ${isMounted ? 'animate-in' : ''}`}>
          <h2>Mitarbeiter 3</h2>
          <p>Position</p>
        </div>
      </Link>
    </>
  );
}

export default Team;
