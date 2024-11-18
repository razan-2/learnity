import React from 'react';
import { Courses } from '../Home/components/Guided/components/Courses';
import CoursesNow from './components/CoursesNow';
import Details from './components/Details';
import { EventsContextProvider } from '../../context/Events/EventsContext';

const Guided = () => {
    return (  
        <div>
            <Details />
            <EventsContextProvider>
                <CoursesNow />
                <Courses />
            </EventsContextProvider>
        </div>
    );
}
 
export default Guided;