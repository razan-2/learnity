import React from 'react';
import RedirectButton from '../../../components/RedirectButton/RedirectButton';

const Details = () => {
  return (
    <section className="relative py-44 px-4 overflow-hidden h-[90dvh]" style={{ backgroundColor: '#F0E6DD' }}>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center font-bangers tracking-widest" style={{ color: '#2f2f27' }}>
          Guided Learning
        </h2>
        <div className="space-y-6 mb-20 text-lg text-center" style={{ color: '#2f2f27' }}>
          <p className='font-arima'>
          Nulla lorem in sagittis integer nec vel. Augue commodo tortor scelerisque magnis aliquet nulla euismod lobortis. Justo fusce maximus sed per enim varius inceptos feugiat. Netus arcu fermentum consectetur nunc; class hac dui nam. Litora lobortis ridiculus libero proin a pretium. Class augue ornare molestie pulvinar diam quam viverra. Velit proin in neque litora ac fusce facilisi tincidunt augue.
          </p>
        </div>
        <div className="text-center">
          <RedirectButton text='See more' />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg 
          viewBox="0 0 500 150" 
          preserveAspectRatio="none" 
          className="h-full w-full"
        >
          <path 
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
            style={{ stroke: 'none', fill: '#F8A12E' }}
          ></path>
        </svg>
      </div>
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden transform rotate-180">
        <svg 
          viewBox="0 0 500 150" 
          preserveAspectRatio="none" 
          className="h-full w-full"
        >
          <path 
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
            style={{ stroke: 'none', fill: '#05be9e' }}
          ></path>
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 left-10 w-20 h-20 bg-customLightOrange rounded-full opacity-40 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-customBlue rounded-full opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#2f2f27] rounded-full opacity-10 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}

export default Details;