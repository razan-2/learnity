import React from 'react';
import { Courses } from './components/Courses';
import Presentation from './components/Presentation';
import { EventsContextProvider } from '../../../../context/Events/EventsContext';

export const Guided = () => {
    return (  
        <div>
            <Presentation />
            <EventsContextProvider>
                <Courses />
            </EventsContextProvider>
        </div>
    );
}