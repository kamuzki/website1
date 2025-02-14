import React from 'react';
    import { Link } from 'react-router-dom';

    function Mitarbeiter3({handleClose}) {
        return (
            <>
                <h2>Mitarbeiter 3</h2>
                <p>Position</p>
                <p>Details about Mitarbeiter 3...</p>
                <a href="#" onClick={(e) => { e.preventDefault(); handleClose(); }} className="back-link">Zurück zum Team</a>
            </>
        );
    }

    export default Mitarbeiter3;
