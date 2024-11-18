import React, { useContext } from 'react'
import { EventsContext } from '../../../context/Events/EventsContext';
import Course from './Course';

const CoursesNow = () => {
  const { presentCourses } = useContext(EventsContext);
  return (
    <div>
      {presentCourses.map((course, index) => (
        <Course name={course.course} teacher={course.name} shortDescription={course.subject} fullDescription={course.longDescription} date={course.years} key={index} />
      ))}
    </div>
  )
}

export default CoursesNow;