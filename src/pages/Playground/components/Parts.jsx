import React from "react";
import { motion } from "framer-motion";
import RedirectButton2 from "../../../components/RedirectButton2/RedirectButton2";

const Parts = ({ text, vector, name, direction }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { rotate: -10, scale: 0.8, opacity: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { delay: 0.4, duration: 0.5 },
    },
  };

  const bubbleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { delay: 0.6, duration: 0.3 } },
  };

  return (
    <motion.div
      className={`w-full overflow-hidden py-12 px-8 min-h-[50vh] relative ${
        direction ? "bg-[#F8A12E]" : "bg-customWhite"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="parts"
    >
      {/* Decorative shapes */}
      <motion.div
        className={`absolute top-4 left-4 w-16 h-16 rounded-full ${
          direction ? "bg-customWhite" : "bg-customOrange"
        } opacity-20`}
        variants={bubbleVariants}
      />
      <motion.div
        className={`absolute bottom-4 right-4 w-24 h-24 rounded-full ${
          direction ? "bg-customWhite" : "bg-customOrange"
        } opacity-20`}
        variants={bubbleVariants}
      />
      <motion.div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rotate-45 ${
          direction ? "bg-white" : "bg-customOrange"
        } opacity-10`}
        variants={bubbleVariants}
      />

      <div
        className={`flex flex-col md:flex-row w-full ${
          direction ? "md:flex-row-reverse" : ""
        } items-center relative z-10`}
      >
        <motion.div className="w-full md:w-1/2 p-6" variants={textVariants}>
          <h2
            className={`text-4xl font-bold mb-4 font-bangers tracking-widest ${
              direction ? "text-customWhite" : "text-customOrange"
            }`}
          >
            {name}
          </h2>
          <p
            className={`text-xl font-arima ${
              direction ? "text-customWhite" : "text-gray-700"
            }`}
          >
            {text}
          </p>
          <RedirectButton2 text="See more" to="/education-unplugged" />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 p-6 flex justify-center"
          variants={imageVariants}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={vector}
            alt={`Illustration for ${name}`}
            className="max-w-full h-auto rounded-lg shadow-lg"
            width={300}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Parts;
