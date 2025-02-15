import React from 'react';
    import { Link } from 'react-router-dom';

    function Projects() {
      return (
        <>
          <Link to="/projects/projekt1" className="widget-link">
            <div className="project-card widget">
              <h2>Projekt 1: Smart Home Integration</h2>
              <p>Integration einer intelligenten Haussteuerung in ein modernes Wohngebäude.</p>
            </div>
          </Link>
          <Link to="/projects/projekt2" className="widget-link">
            <div className="project-card widget">
              <h2>Projekt 2: Energieeffiziente Beleuchtung</h2>
              <p>Umrüstung der Beleuchtungsanlage eines Bürokomplexes auf energieeffiziente LED-Technologie.</p>
            </div>
          </Link>
          <Link to="/projects/projekt3" className="widget-link">
            <div className="project-card widget">
              <h2>Projekt 3: Industrielle Automatisierung</h2>
              <p>Implementierung einer automatisierten Produktionslinie in einer Fertigungsanlage.</p>
            </div>
          </Link>
        </>
      );
    }

    export default Projects;
