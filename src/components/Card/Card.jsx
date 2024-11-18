import React from 'react'
import { BookOpen, Lightbulb } from 'lucide-react'

const Card = ({ date, name, description, photo}) => {
  return (
    <div className="group h-96 w-72 [perspective:1000px] my-10 md:my-0">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front side */}
          <div className="absolute inset-0">
            <div className="flex flex-col h-full bg-customBlack rounded-xl overflow-hidden">
              <img 
                src={photo} 
                alt="Course Image" 
                className="w-full h-52 object-cover"
                height={200}
                width={288}
              />
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-bold text-customWhite">{ name }</h2>
                <div className="flex items-center text-customWhite">
                  <span>{ date }</span>
                </div>
              </div>
            </div>
          </div>
          {/* Back side */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-customBlue px-8 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold mb-4">{ name }</h2>
              <p className="text-center mb-4">{ description }</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card;