import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Projects({ handleClose }) {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    handleClose();
    navigate(path);
  };

  return (
    <>
      <a href="/projects/projekt1" className="widget-link" onClick={(e) => handleClick(e, "/projects/projekt1")}>
        <div className={`project-card widget ${isMounted ? 'animate-in' : ''}`}>
          <h2>Projekt 1: Smart Home Integration</h2>
          <p>Integration einer intelligenten Haussteuerung in ein modernes Wohngebäude.</p>
        </div>
      </a>
      <a href="/projects/projekt2" className="widget-link" onClick={(e) => handleClick(e, "/projects/projekt2")}>
        <div className={`project-card widget ${isMounted ? 'animate-in' : ''}`}>
          <h2>Projekt 2: Energieeffiziente Beleuchtung</h2>
          <p>Umrüstung der Beleuchtungsanlage eines Bürokomplexes auf energieeffiziente LED-Technologie.</p>
        </div>
      </a>
      <a href="/projects/projekt3" className="widget-link" onClick={(e) => handleClick(e, "/projects/projekt3")}>
        <div className={`project-card widget ${isMounted ? 'animate-in' : ''}`}>
          <h2>Projekt 3: Industrielle Automatisierung</h2>
          <p>Implementierung einer automatisierten Produktionslinie in einer Fertigungsanlage.</p>
        </div>
      </a>
    </>
  );
}

export default Projects;
