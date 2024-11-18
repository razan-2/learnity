import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { EventsContext } from '../../context/Events/EventsContext'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/Auth/Auth'

export default function AnythingElse() {
  const [text, setText] = useState('')
  const { handleLoggedInParticipate } = useContext(EventsContext)
  const { finalUser } = useAuth();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoggedInParticipate(finalUser, id, text)
  }

  return (
    <div className="min-h-screen bg-[#F0E6DD] flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <motion.div
          className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-[#F8A12E] rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-[-30px] right-[-30px] w-24 h-24 bg-[#05be9e] rounded-full"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="bg-white rounded-lg shadow-lg p-8 relative z-10">
          <h1 className="text-3xl font-bold text-[#2f2f27] mb-6 text-center">
            Vrei să ne mai spui ceva?
          </h1>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-32 p-4 border-2 border-[#05be9e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F8A12E] resize-none"
            placeholder="Scrie aici..."
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-full bg-[#05be9e] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#04a78c] transition-colors duration-200"
            type='submit'
            onClick={(e) => handleSubmit(e)}
          >
            Trimite
          </motion.button>
        </div>
      </div>
    </div>
  )
}