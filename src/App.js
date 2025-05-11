import React from 'react';
import FloatingEmoji from './components/FloatingEmoji';
import MessageCard from './components/MessageCard';
import PhotoGallery from './components/PhotoGallery';

const App = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <h1 style={{
        color: '#D81B60',
        fontSize: '3rem',
        margin: '30px 0',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zIndex: 2
      }}>Para la Mejor Mamá del Mundo</h1>
      
      {Array.from({ length: 20 }).map((_, index) => (
        <FloatingEmoji key={index} />
      ))}
      
      <MessageCard />
      <PhotoGallery />
      
      <div style={{ 
        margin: '40px 0', 
        color: '#777',
        position: 'relative',
        zIndex: 2
      }}>
        <p>Hoy celebramos tu amor, tu paciencia y tu bondad. ¡Te mereces todo lo mejor!</p>
      </div>
    </div>
  );
};

export default App;

// DONE