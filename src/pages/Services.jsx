import React from 'react';
    import { Link } from 'react-router-dom';

    function Services() {
      const services = [
        {
          path: '/services/elektroplanung',
          title: 'Elektroplanung',
          shortDescription: 'Umfassende Planung und Konzeptionierung von Elektroanlagen...',
          fullDescription: 'Umfassende Planung und Konzeptionierung von Elektroanlagen für Wohn-, Gewerbe- und Industriegebäude. Wir erstellen detaillierte Pläne, Schaltpläne und Stücklisten unter Berücksichtigung aller relevanten Normen und Vorschriften.',
        },
        {
          path: '/services/installationstechnik',
          title: 'Installationstechnik',
          shortDescription: 'Fachgerechte Installation und Inbetriebnahme...',
          fullDescription: 'Fachgerechte Installation und Inbetriebnahme von elektrischen Anlagen und Systemen nach höchsten Qualitätsstandards. Unsere erfahrenen Elektriker sorgen für eine reibungslose Umsetzung Ihrer Projekte.',
        },
        {
          path: '/services/automatisierungstechnik',
          title: 'Automatisierungstechnik',
          shortDescription: 'Entwicklung und Implementierung maßgeschneiderter Automatisierungslösungen...',
          fullDescription: 'Entwicklung und Implementierung maßgeschneiderter Automatisierungslösungen zur Effizienzsteigerung und Prozessoptimierung. Wir setzen auf modernste Technologien und innovative Konzepte.',
        },
        {
          path: '/services/energieberatung',
          title: 'Energieberatung',
          shortDescription: 'Individuelle Beratung und Konzepte zur nachhaltigen Reduzierung...',
          fullDescription: 'Individuelle Beratung und Konzepte zur nachhaltigen Reduzierung des Energieverbrauchs und zur Steigerung der Energieeffizienz. Wir helfen Ihnen, Ihre Energiekosten zu senken und die Umwelt zu schonen.',
        },
      ];

      // Assuming "Automatisierungstechnik" widget height is 280px (adjust as needed)
      const widgetHeight = '280px';

      return (
        <>
          {services.map((service) => (
            <Link to={service.path} key={service.path} className="widget-link">
              <div className="widget" style={{ minHeight: widgetHeight }}>
                <h2>{service.title}</h2>
                <p>{service.shortDescription}</p>
                <Link to={service.path} className="read-more">Mehr erfahren</Link>
              </div>
            </Link>
          ))}
        </>
      );
    }

    export default Services;
