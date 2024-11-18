import React, { createContext, useState } from 'react';

const TestimonialsContext = createContext();

export const TestimonialsContextProvider = (props) => {
    const [testimonials, setTestimonials] = useState([
        {
            name: 'Karla Ezaru',
            testimonial: 'Foarte tare la Learnity, nu mai vin promit.',
            date: ''
        }
    ]);

    return ( 
        <TestimonialsContext.Provider value={{testimonials}}>
            {props.children}
        </TestimonialsContext.Provider>
     );
}