import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <>
      <Link to="/projects/projekt1" className="widget-link">
        <div className="project-card widget">
          <h2>Projekt 1</h2>
          <p>Beschreibung des Projekts 1.</p>
        </div>
      </Link>
      <Link to="/projects/projekt2" className="widget-link">
        <div className="project-card widget">
          <h2>Projekt 2</h2>
          <p>Beschreibung des Projekts 2.</p>
        </div>
      </Link>
      <Link to="/projects/projekt3" className="widget-link">
        <div className="project-card widget">
          <h2>Projekt 3</h2>
          <p>Beschreibung des Projekts 3.</p>
        </div>
      </Link>
    </>
  );
}

export default Projects;
