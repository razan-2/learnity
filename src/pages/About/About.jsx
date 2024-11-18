import React from 'react';
import RulesAndPrinciples from './components/Rules/Rules';
import AboutUs from './components/AboutUs/AboutUs';

export const About = () => {
    return ( 
        <main className='bg-customWhite'>
            <AboutUs />
            <RulesAndPrinciples />
        </main>
    );
}