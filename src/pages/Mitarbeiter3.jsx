import React from 'react';
    import { Link } from 'react-router-dom';

    function Mitarbeiter3() {
        return (
            <>
                <h2>Mitarbeiter 3</h2>
                <p>Position</p>
                <p>Details about Mitarbeiter 3...</p>
                <Link to="/team" className="back-link">Zurück zum Team</Link>
            </>
        );
    }

    export default Mitarbeiter3;
