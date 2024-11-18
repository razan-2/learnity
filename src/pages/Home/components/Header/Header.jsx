import logo from '../../assets/vite.svg';
import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { Mail, Phone, Facebook, Instagram } from 'lucide-react'

function SpinningTop() {
    const meshRef = useRef()
    useFrame((state, delta) => {
      meshRef.current.rotation.y += delta
    })
  
    return (
      <mesh ref={meshRef}>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color="#F8A12E" />
      </mesh>
    )
  }

function Vector() {
    return (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='relative block h-[100%]'>
                <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill fill-customBlue"></path>
            </svg>
        </div>
    )
}

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

function Title() {
    const learnity = 'Learnity';
    return (
        <div className='flex relative pb-10 text-customBlack font-sans justify-center'>
            {learnity.split('').map((char, index) => {
                if (char === 'a') {
                    return (
                        <img src={logo} key={index} className='animate-spinSlow w-12 md:w-24' />
                    );
                }
                return (
                    <h1
                    className={`text-center text-6xl text-customBlack font-extrabold animate-headerFallBounce md:text-8xl`}
                    key={index}
                    style={{ animationDuration: `${Math.random() * 2 + 1}s` }}
                    >{char}</h1>
                )
            })}
        </div>
    )
}

export const Header = () => {
    const handleScrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
    return (
      <header className="bg-[#F0E6DD] min-h-screen font-arima flex flex-col justify-center items-center p-8 relative overflow-hidden">
        <Vector />
        <BubblesDesign />
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10 max-w-3xl"
        >
          <Title />
          <p className="text-xl text-[#2f2f27] mb-8">
          Learnity: o comunitate democratică de învățare alternativă pentru adolescenți, locul în care aceștia descoperă cine sunt, dezvoltă relații autentice cu ceilalți și învață despre mediul în care trăiesc.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F8A12E] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e0911d] transition-colors mb-8"
            onClick={() => handleScrollToSection('contact')}
          >
            Get started!
          </motion.button>
  
          <div className="mt-8" id='contact'>
            <h2 className="text-2xl font-semibold text-[#2f2f27] mb-4">Contact Us</h2>
            <div className="flex justify-center space-x-6">
              <a href="mailto:contact.learnity@gmail.com" className="text-[#05be9e] hover:text-[#04a589] transition-colors">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
              <a href="tel:0722280009" className="text-[#05be9e] hover:text-[#04a589] transition-colors">
                <Phone size={24} />
                <span className="sr-only">Phone</span>
              </a>
              <a href="https://facebook.com/learnity" target="_blank" rel="noopener noreferrer" className="text-[#05be9e] hover:text-[#04a589] transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com/learnityro" target="_blank" rel="noopener noreferrer" className="text-[#05be9e] hover:text-[#04a589] transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>
  
        
  
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05be9e] to-transparent opacity-20"></div>
      </header>
    )
  }