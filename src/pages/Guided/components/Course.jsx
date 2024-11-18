import { useState } from 'react'
import { ChevronDown, ChevronUp, User, Calendar } from 'lucide-react'

const Course = ({ name, teacher, shortDescription, fullDescription, date }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-[#F0E6DD] rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl w-full">
      <div className="p-6 sm:p-8 relative">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#F8A12E] rounded-bl-full" />
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2f2f27] mb-2 font-bangers tracking-widest">{name}</h2>
        <div className="flex items-center text-[#05be9e] mb-2">
          <User className="w-4 h-4 mr-2" />
          <span className='font-arima'>{teacher}</span>
        </div>
        <p className="text-[#2f2f27] mb-4 font-arima">{shortDescription}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-[#05be9e] text-white px-6 py-2 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#04a589] focus:outline-none focus:ring-2 focus:ring-[#05be9e] focus:ring-opacity-50"
        >
          {isExpanded ? (
            <>
              <span className="mr-2 font-arima">Less info</span>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <span className="mr-2 font-arima">More info</span>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 sm:p-8 bg-white border-t-4 border-[#F8A12E] animate-slideDown">
          <p className="text-[#2f2f27] mb-4 font-arima">{fullDescription}</p>
          <div className="flex items-center text-[#05be9e]">
            <Calendar className="w-4 h-4 mr-2" />
            <span className='font-arima'>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course;