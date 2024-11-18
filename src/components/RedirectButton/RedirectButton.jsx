import React from "react";
import { useNavigate } from 'react-router-dom'
const RedirectButton = ({text, to}) => {
  const navigate = useNavigate();
  return (
    <button className="relative z-0 inline-block px-6 py-3 text-lg font-bold text-customOrange uppercase tracking-wider border-4 border-customOrange hover:text-white transition-all duration-700 ease-linear overflow-hidden group" onClick={() => navigate(to)}>
      {text}
      <div className="absolute inset-0 -bottom-[3px] -right-[1px] z-[-1] h-full filter-[url(#goo)] overflow-hidden">
        <div className="absolute w-[34%] h-full bg-customOrange rounded-full translate-y-[125%] scale-[1.4] transition-all duration-700 ease-linear left-[-5%] group-hover:translate-y-0"></div>
        <div className="absolute w-[34%] h-full bg-customOrange rounded-full translate-y-[125%] scale-[1.4] transition-all duration-700 ease-linear delay-60 left-[30%] group-hover:translate-y-0"></div>
        <div className="absolute w-[34%] h-full bg-customOrange rounded-full translate-y-[125%] scale-[1.4] transition-all duration-700 ease-linear delay-25 left-[66%] group-hover:translate-y-0"></div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>
    </button>
  );
};

export default RedirectButton;
