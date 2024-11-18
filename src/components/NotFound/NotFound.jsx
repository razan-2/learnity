import React, { useState, useEffect } from 'react';
import RedirectButton from '../RedirectButton/RedirectButton';
import logo from '/vite.svg';

const Bubble = ({ color, size, position }) => (
    <div 
      className="absolute rounded-full opacity-20 transition-all duration-[3000ms] ease-in-out"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        left: position.x,
        top: position.y,
      }}
    />
  );
  
  const BubblesDesign = () => {
    const [bubbles, setBubbles] = useState([]);
  
    useEffect(() => {
      const colors = ['#F8A12E', '#05be9e', '#2f2f27'];
      const createBubble = () => ({
        id: Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
        size: `${Math.random() * 100 + 50}px`,
        position: {
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
        },
      });
  
      // Initialize bubbles
      setBubbles(Array(15).fill().map(createBubble));
  
      const interval = setInterval(() => {
        setBubbles(prevBubbles => 
          prevBubbles.map(bubble => ({
            ...bubble,
            position: {
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            },
          }))
        );
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
    return (
        <div>
            {bubbles.map((bubble) => (
            <Bubble 
              key={bubble.id} 
              color={bubble.color} 
              size={bubble.size} 
              position={bubble.position || { x: '0%', y: '0%' }} 
            />
            ))}
        </div>
    )
  }

const NotFound = () => {
    return (
      <div className="min-h-screen flex items-center justify-center overflow-hidden bg-[#F0E6DD]">
        <BubblesDesign />
        <div className="text-center">
          <h1 className="text-[300px] font-bold text-[#05be9e] mb-4 flex flex-col md:flex-row justify-center items-center">4<img src={logo} alt='logo' className='animate-spinSlow w-12 md:w-64' />4</h1>
          <p className="text-2xl text-[#2f2f27] mb-8 font-arima">Nu am putut găsi această pagină!</p>
          <RedirectButton text='Back Home' />
          <div className="mt-12 relative">
          </div>
        </div>
      </div>
    )
  }

export default NotFound;