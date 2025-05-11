import React from 'react';

const PhotoGallery = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      margin: '40px 0',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{
        width: '300px',
        height: '300px',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease'
      }}>
        <img 
          src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0H0cGquRcSojWGwvDPb4hl1EOXpnTeqzCZR0g" 
          alt="Ada Luz Anaya"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      
      <div style={{
        width: '300px',
        height: '300px',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease'
      }}>
        <img 
          src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc00zTRGRoPyS6Nz5GRraqmfKLZjOQCH78nhAgu" 
          alt="Ada Luz Anaya"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
    </div>
  );
};

export default PhotoGallery;