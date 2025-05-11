import React from 'react';

const MessageCard = () => {
  return (
    <div className="message-card" style={{
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '20px',
      padding: '30px',
      maxWidth: '600px',
      margin: '40px auto',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      position: 'relative',
      zIndex: 2
    }}>
      <h1 style={{
        color: '#D81B60',
        fontSize: '2.5rem',
        marginBottom: '20px',
        fontFamily: 'cursive'
      }}>¡  Feliz Día de la Madre, Ada Luz Anaya!</h1>
      
      <p style={{
        color: '#555',
        fontSize: '1.2rem',
        lineHeight: '1.6',
        marginBottom: '20px'
      }}>
        Mamá, hoy y siempre quiero recordarte lo especial que eres para mí. 
        Eres mi guía, mi apoyo y mi mayor inspiración. 
        Gracias por tu amor incondicional, por tus consejos y por estar siempre ahí.
      </p>
      
      <p style={{
        color: '#555',
        fontSize: '1.2rem',
        fontStyle: 'italic',
        marginTop: '20px'
      }}>
       Con todo mi amor,
Tu hijo, Jonathan Valle Anaya 💖
      </p>
    </div>
  );
};

export default MessageCard;