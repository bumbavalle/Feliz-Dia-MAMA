import React, { useState, useEffect, useRef } from 'react';

const FloatingEmoji = () => {
  const emojis = ['❤️', '🥰', '😍', '💖', '😘', '💕', '🤗'];
  const [emoji] = useState(emojis[Math.floor(Math.random() * emojis.length)]);
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });
  const [rotation, setRotation] = useState(Math.random() * 360);
  const [scale] = useState(0.8 + Math.random() * 0.4);

  const velocityRef = useRef({
    x: (Math.random() - 0.5) * 1.5, // velocidad inicial más suave
    y: (Math.random() - 0.5) * 1.5
  });

  // Añadir referencia para dirección (solo cambia una vez por rebote)
  const directionRef = useRef({ x: 1, y: 1 });

  useEffect(() => {
    let animationId;

    const moveEmoji = () => {
      setPosition(prev => {
        let newX = prev.x + velocityRef.current.x * directionRef.current.x;
        let newY = prev.y + velocityRef.current.y * directionRef.current.y;

        // Limitar velocidad para evitar aceleración inesperada
        velocityRef.current.x = Math.min(Math.max(velocityRef.current.x, 0.5), 2);
        velocityRef.current.y = Math.min(Math.max(velocityRef.current.y, 0.5), 2);

        // Rebote con control: solo cambia dirección si toca borde
        if (newX <= 0 || newX >= window.innerWidth - 60) {
          directionRef.current.x *= -1;
          newX = Math.max(0, Math.min(newX, window.innerWidth - 60)); // limitar dentro del canvas
        }
        if (newY <= 0 || newY >= window.innerHeight - 60) {
          directionRef.current.y *= -1;
          newY = Math.max(0, Math.min(newY, window.innerHeight - 60));
        }

        return { x: newX, y: newY };
      });

      setRotation(prev => (prev + 0.5) % 360);

      animationId = requestAnimationFrame(moveEmoji);
    };

    animationId = requestAnimationFrame(moveEmoji);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div 
      className="floating-emoji"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        transition: 'transform 0.3s ease',
        zIndex: 1,
        pointerEvents: 'none',
        fontSize: '40px',
        filter: 'drop-shadow(0 0 5px rgba(255,0,0,0.3))'
      }}
    >
      {emoji}
    </div>
  );
};

export default FloatingEmoji;
