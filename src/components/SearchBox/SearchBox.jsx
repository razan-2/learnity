import React, { useState } from "react";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative w-[80vw] md:w-[30vw]">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
        className="relative w-full p-5 pt-3 bg-transparent outline-none shadow-none border-none text-gray-900 text-base tracking-wide transition-all duration-500 z-10"
      />
      <span
        className={`absolute left-0 px-2 pt-5 text-customWhite text-base tracking-wide transition-all duration-500 pointer-events-none ${
          inputValue ? "text-customBlue -translate-x-2 -translate-y-8 text-sm" : ""
        }`}
      >
        Search...
      </span>
      <i
        className={`absolute left-0 bottom-0 w-full h-0.5 bg-customBlue rounded transition-all duration-500 pointer-events-none z-9 ${
          inputValue ? "h-11" : ""
        }`}
      ></i>
    </div>
  );
};

export default SearchBox;
