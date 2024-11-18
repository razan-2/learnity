import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sanzi from './sanzi.jpeg'

const testimonials = [
  {
    id: 1,
    name: 'Răzvan Andronachi',
    role: 'Learnitaș',
    content: 'Adipiscing litora fringilla curabitur litora; accumsan natoque ridiculus. Nibh litora sit, rutrum cursus nec condimentum. Nulla porttitor etiam himenaeos consequat aliquet montes aliquet primis sapien.',
    avatar: '/placeholder.svg?height=80&width=80',
    color: 'bg-pink-100',
  },
  {
    id: 2,
    name: 'Sânziana Tudose',
    role: 'Learnity Alumni',
    content: 'Learnity mi-a oferit o noua perspectiva legata de ce e o comunitate si ce e invatarea. Pentru mine, a fost un prim pas spre a deveni o persoana care are initiativa si care iubeste colaborarea cu ceilalti.',
    avatar: sanzi,
    color: 'bg-blue-100',
  },
  {
    id: 3,
    name: 'Albert Dussenne',
    role: 'Learnity Alumni',
    content: 'Habitant ac proin tempor curae ultricies tempor. Odio augue tempus fringilla lectus augue tortor. Montes class class, tortor dictum iaculis nam. ',
    avatar: '/placeholder.svg?height=80&width=80',
    color: 'bg-green-100',
  },
];

const NextArrow = ({ onClick }) => (
  <button
    className="absolute -right-8 top-1/2 -translate-y-1/2 bg-orange-400 rounded-full p-4 shadow-lg z-10 hover:bg-orange-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
    onClick={onClick}
    aria-label="Next testimonial"
  >
    <ChevronRight className="w-8 h-8 text-customWhite" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute -left-8 top-1/2 -translate-y-1/2 bg-orange-400 rounded-full p-4 shadow-lg z-10 hover:bg-orange-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
    onClick={onClick}
    aria-label="Previous testimonial"
  >
    <ChevronLeft className="w-8 h-8 text-customWhite" />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-customWhite py-16 relative overflow-hidden font-arima">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-customBlue">Ce spun Learnitașii?</h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-200 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-green-200 rounded-full translate-x-1/2 translate-y-1/2 z-0 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-200 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 animate-spin-slow"></div>
          
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4 py-8">
                <div className={`${testimonial.color} rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 relative z-10`}>
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                      />
                      <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="font-bold text-xl text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg italic leading-relaxed">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;