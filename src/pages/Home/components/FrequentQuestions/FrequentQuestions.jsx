import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FrequentQuestionsContext } from '../../../../context/FrequentQuestions/FrequentQuestionsContext'
import RedirectButton2 from '../../../../components/RedirectButton2/RedirectButton2';
import image from './images/image.jpg'

const FrequentQuestions = () => {
  const { questions } = useContext(FrequentQuestionsContext);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 p-4 mb-[5%] font-arima">
      {questions.sort(function(){ return 0.5 - Math.random() }).slice(0, 5).map((ask, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="bg-customOrange text-customWhite p-6 md:w-2/3">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-3xl font-bold">{index + 1}</span>
              <h3 className="text-xl font-semibold">{ask.question}</h3>
            </div>
            <p className="mb-4">{ask.answer}</p>
            <RedirectButton2 text={ask.about} to={ask.path} />
          </div>
          <div className="bg-white p-6 md:w-1/3 flex items-center justify-center">
            <img
              src={image}
              alt="Question illustration"
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default FrequentQuestions;