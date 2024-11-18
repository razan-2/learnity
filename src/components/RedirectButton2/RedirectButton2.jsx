import React from "react";
import "./RedirectButton2.css"; // Add custom CSS for the animation
import {useNavigate} from 'react-router-dom'

const RedirectButton2 = ({ text, to }) => {
  const navigate = useNavigate();
  return (
    <button className="relative inline-block w-32 h-10 leading-10 m-5 cursor-pointer overflow-hidden border-2 text-customWhite transition-colors duration-500 rounded-md font-medium text-lg z-0" onClick={() => navigate(to)}>
      { text }
      <span className="absolute top-full left-full w-52 h-52 bg-customBlue rounded-full transition-all duration-700 z-[-1]"></span>
    </button>
  );
};

export default RedirectButton2;
