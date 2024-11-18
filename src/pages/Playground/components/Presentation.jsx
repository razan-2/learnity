import React from 'react';
import { motion } from 'framer-motion'

const Presentation = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="relative h-[90dvh] overflow-hidden py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F0E6DD' }}>
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
          Playground
        </h2>
        <p className="mt-20 text-xl text-[#2f2f27] max-w-2xl mx-auto font-arima">
        Euismod ligula quam in eget mattis conubia viverra. Eu elementum non; nibh egestas massa dapibus nam libero curae. Sit semper non vestibulum nunc; eleifend quisque per. Facilisi laoreet risus facilisi ut eros massa ullamcorper nisl. Facilisi faucibus et nascetur hac malesuada vivamus sollicitudin eleifend nisl. Lacinia ad commodo consectetur at euismod feugiat. Gravida senectus conubia convallis himenaeos pretium odio magnis luctus ad. Fringilla proin dui odio volutpat convallis.
        </p>
        <div className="mt-10">
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F8A12E] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e0911d] transition-colors mb-8"
            onClick={() => handleScrollToSection('parts')}
          >
            Get started!
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Presentation;