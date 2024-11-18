import React from 'react';
import {FrequentQuestionsContextProvider} from '../../context/FrequentQuestions/FrequentQuestionsContext.jsx';
import { Header } from './components/Header/Header';
import { About } from './components/About/About.jsx';
import { Guided } from './components/Guided/Guided.jsx';
import { Playground } from './components/Playground/Playground.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import FrequentQuestions from './components/FrequentQuestions/FrequentQuestions';
import Donate from './components/Donate/Donate';
import { EventsContextProvider } from '../../context/Events/EventsContext.jsx';
import { TestimonialsContextProvider } from '../../context/Testimonials/TestimonialsContext.jsx'

export const Home = () => {
    return ( 
        <main className='bg-customWhite min-h-screen flex flex-col'>
            <Header />
            <About />
            <EventsContextProvider>
                <Guided />
                <Playground />
            </EventsContextProvider>
            <TestimonialsContextProvider>
                <Testimonials />
            </TestimonialsContextProvider>
            <FrequentQuestionsContextProvider>
                <FrequentQuestions />
            </FrequentQuestionsContextProvider>
            <Donate />
        </main>
    );
}