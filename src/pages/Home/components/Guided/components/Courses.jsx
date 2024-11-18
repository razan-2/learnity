import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { EventsContext } from '../../../../../context/Events/EventsContext'

const CourseCard = ({ name, subject, course, years, photo }) => (
  <motion.div
    className="bg-[#F0E6DD] p-6 rounded-lg shadow-lg relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-[#F8A12E] rounded-full -mr-12 -mt-12" />
    <div className="mb-4 relative">
      <img 
        src={photo} 
        alt={name} 
        className="w-32 h-32 rounded-full mx-auto border-4 border-[#F8A12E] object-cover"
      />
    </div>
    <h3 className="text-[#2f2f27] text-xl font-bold mb-2 text-center">{course}</h3>
    <p className="text-[#2f2f27] mb-1 text-center">{name}</p>
    <p className="text-[#2f2f27] text-sm mb-2 text-center italic">"{subject}"</p>
    <p className="text-[#2f2f27] text-sm text-center">{years}</p>
    <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#F8A12E] rounded-full -ml-8 -mb-8 opacity-50" />
  </motion.div>
)

export const Courses = () => {
  const { exampleCourses } = useContext(EventsContext);
  return (
    <section className="bg-customWhite relative py-16 px-4">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#F8A12E] rounded-full opacity-20 animate-blob"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#05be9e] rounded-full opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#2f2f27] rounded-full opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      <div className="w-full">
        <motion.h2 
          className="text-customBlack text-4xl font-bangers tracking-widest font-bold text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Câteva dintre cursurile noastre:
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {exampleCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}