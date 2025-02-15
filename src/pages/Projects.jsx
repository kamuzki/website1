import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      path: '/projects/projekt1',
      title: 'Smart Home Integration',
      shortDescription: 'Integration einer intelligenten Haussteuerung in ein modernes Wohngebäude...',
      fullDescription: 'Integration einer intelligenten Haussteuerung in ein modernes Wohngebäude. Dies umfasste die Steuerung von Beleuchtung, Heizung, Sicherheitssystemen und Unterhaltungselektronik über eine zentrale Schnittstelle.',
      icon: '🏠', // Unicode character for a home icon
    },
    {
      path: '/projects/projekt2',
      title: 'Energieeffiziente Beleuchtung',
      shortDescription: 'Umrüstung der Beleuchtungsanlage eines Bürokomplexes auf energieeffiziente LED-Technologie...',
      fullDescription: 'Umrüstung der Beleuchtungsanlage eines Bürokomplexes auf energieeffiziente LED-Technologie. Durch den Einsatz energieeffizienter LED-Technologie konnten wir den Energieverbrauch erheblich senken und die Lichtqualität verbessern.',
      icon: '💡', // Unicode character for a light bulb icon
    },
    {
      path: '/projects/projekt3',
      title: 'Industrielle Automatisierung',
      shortDescription: 'Implementierung einer automatisierten Produktionslinie in einer Fertigungsanlage...',
      fullDescription: 'Implementierung einer automatisierten Produktionslinie in einer Fertigungsanlage. Dies führte zu einer Steigerung der Effizienz und einer Reduzierung der Produktionskosten.',
      icon: '⚙️', // Unicode character for a gear icon
    },
  ];

  const widgetHeight = '200px'; // Adjust as needed

  return (
    <>
      {projects.map((project) => (
        <Link to={project.path} className="widget-link" key={project.path}>
          <div className="project-card widget" style={{ minHeight: widgetHeight }}>
            <div className="project-icon-container">
              <span className="project-icon">{project.icon}</span>
            </div>
            <h3>{project.title}</h3>
            <p style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical'
              }}>{project.shortDescription}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Projects;
