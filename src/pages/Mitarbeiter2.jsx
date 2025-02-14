import React from 'react';
    import { Link } from 'react-router-dom';

    function Mitarbeiter2() {
        return (
            <>
                <h2>Mitarbeiter 2</h2>
                <p>Position</p>
                <p>Details about Mitarbeiter 2...</p>
                <Link to="/team" className="back-link">Zurück zum Team</Link>
            </>
        );
    }

    export default Mitarbeiter2;
