import React, { useState, useEffect } from 'react';

function Contact() {
  const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

  return (
    <div className={`widget ${isMounted ? 'animate-in' : ''}`}>
      <h2>Kontaktieren Sie uns</h2>
      <p>Nehmen Sie Kontakt mit uns auf.</p>
      <p>Adresse: Musteradresse</p>
      <p>Telefon: 0123456789</p>
      <p>Email: info@example.com</p>
    </div>
  );
}

export default Contact;
