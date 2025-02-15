import React from 'react';

    function Contact() {
      const widgetHeight = '150px'; // Adjust as needed

      return (
        <div className="widget" style={{ minHeight: widgetHeight }}>
          <h2>Kontaktieren Sie uns</h2>
          <p>Nehmen Sie Kontakt mit uns auf.</p>
          <p>Adresse: Musteradresse</p>
          <p>Telefon: 0123456789</p>
          <p>Email: info@example.com</p>
        </div>
      );
    }

    export default Contact;
