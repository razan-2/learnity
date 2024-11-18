import React from 'react'
import { ArrowRight } from 'lucide-react'
import {useNavigate} from 'react-router-dom'

export const About = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4 bg-[#05be9e] font-arima relative overflow-hidden" id='about'>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bangers tracking-widest font-bold text-[#F0E6DD] mb-6">
              Ce este Learnity?
            </h2>
            <p className="text-lg text-white mb-8">
            Mollis blandit magnis interdum eget volutpat curae nulla. Urna non aptent eget himenaeos natoque placerat hac a. Purus placerat quis consequat dignissim litora, ornare curabitur. Mi amet leo habitant ac eros mi non primis arcu. Morbi auctor sem vivamus quam tellus sit quis. Lobortis venenatis nulla ipsum ad feugiat imperdiet. Vitae lacinia sagittis a risus lectus.
            </p>
            <button className="group bg-[#F8A12E] hover:bg-customBlue text-[#2f2f27] font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:-rotate-3 shadow-lg flex items-center space-x-2" onClick={() => navigate('/about-us')}>
              <span>Start Your Adventure</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-72 h-72 bg-[#F8A12E] rounded-full absolute -top-10 -left-10 z-0 animate-pulse opacity-20"></div>
            <div className="w-56 h-56 bg-[#F0E6DD] rounded-full absolute -bottom-8 -right-8 z-0 animate-bounce opacity-20"></div>
            <div className="relative z-10 bg-white p-6 rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition duration-300">
              <img 
                src="/placeholder.svg?height=300&width=400" 
                alt="Underwater learning adventure" 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#F0E6DD" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className="absolute top-10 right-10 w-20 h-20 bg-[#F8A12E] rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#F0E6DD] rounded-full opacity-10 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-[#2f2f27] rounded-full opacity-5 animate-float animation-delay-2000"></div>
      </div>
    </section>
  )
}