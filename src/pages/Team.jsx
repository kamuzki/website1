import React from 'react';
    import { Link } from 'react-router-dom';

    function Team() {
      const teamMembers = [
        { path: '/team/mitarbeiter1', name: 'Mitarbeiter 1', position: 'Position', icon: '🧑‍💼' },
        { path: '/team/mitarbeiter2', name: 'Mitarbeiter 2', position: 'Position', icon: '👩‍💼' },
        { path: '/team/mitarbeiter3', name: 'Mitarbeiter 3', position: 'Position', icon: '👨‍💼' },
      ];

      return (
        <>
          {teamMembers.map((member) => (
            <Link to={member.path} className="widget-link" key={member.path}>
              <div className="widget">
                <div className="project-icon-container">
                  <span className="project-icon">{member.icon}</span>
                </div>
                <h2>{member.name}</h2>
                <p>{member.position}</p>
              </div>
            </Link>
          ))}
        </>
      );
    }

    export default Team;
