import React from 'react';
import { Link } from 'react-router-dom';

const Presentation = () => {
  return (
    <section className="relative mb-20 overflow-hidden py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F0E6DD' }}>
      {/* Wavy background */}
      <div className="absolute inset-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path fill="#05be9e" fillOpacity="0.2" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-[#F8A12E] opacity-50 animate-bounce"></div>
        <div className="absolute top-20 right-20 w-20 h-20 rounded-full border-4 border-[#05be9e] opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-[#2f2f27] opacity-30 animate-spin" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#2f2f27] sm:text-5xl md:text-6xl font-bangers tracking-widest">
          PLAYGROUND
        </h2>
        <p className="mt-20 text-xl text-[#2f2f27] max-w-2xl mx-auto font-arima">
        Playground-ul este partea din Learnity care oferă adolescenților oportunitatea de a-și crea propriile experiențe de învățare, totodată fiind și partea în care se construiește spiritul de comunitate. Scopul nostru este să-i ghidăm într-un proces cât mai autonom prin care să-și descopere abilitățile, interesele, să le încurajăm proactivitatea și să descoperim împreună cum arată învățarea pentru fiecare în parte.
        </p>
        <div className="mt-10">
          <Link
            to="/playground"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#F8A12E] hover:bg-[#05be9e] transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Presentation;