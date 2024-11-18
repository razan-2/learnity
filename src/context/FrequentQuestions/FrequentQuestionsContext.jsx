import React, { createContext, useState } from 'react';

export const FrequentQuestionsContext = createContext();

export const FrequentQuestionsContextProvider = (props) => {
    const [questions, setQuestions] = useState([
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            about: 'Playground',
            path: '/playground',
            id: 1
        },
        {
            question: 'Lorem ipsum odor amet, consectetuer adipiscing elit?',
            answer: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Himenaeos sagittis neque eros primis vivamus cubilia lacus commodo. Lobortis aenean interdum torquent sapien urna quisque! ',
            about: 'Guided',
            path: '/guided-learning',
            id: 2
        },
        {
            question: 'Lorem ipsum odor amet, consectetuer adipiscing elit?',
            answer: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum lectus id dis maecenas id finibus lorem. Ut fringilla turpis lacus suspendisse placerat habitasse. ',
            about: 'Donation',
            path: '/doneaza',
            id: 3
        },
        {
            question: 'Lorem ipsum odor amet, consectetuer adipiscing elit?',
            answer: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum lectus id dis maecenas id finibus lorem. Ut fringilla turpis lacus suspendisse placerat habitasse. ',
            about: 'Donation',
            path: '/doneaza',
            id: 4
        },
        {
            question: 'Lorem ipsum odor amet, consectetuer adipiscing elit?',
            answer: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum lectus id dis maecenas id finibus lorem. Ut fringilla turpis lacus suspendisse placerat habitasse. ',
            about: 'Donation',
            path: '/doneaza',
            id: 5
        },
        {
            question: 'Lorem ipsum odor amet, consectetuer adipiscing elit?',
            answer: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum lectus id dis maecenas id finibus lorem. Ut fringilla turpis lacus suspendisse placerat habitasse. ',
            about: 'Donation',
            path: '/doneaza',
            id: 6
        }
    ]);

    return ( 
        <FrequentQuestionsContext.Provider value={{questions}}>
            {props.children}
        </FrequentQuestionsContext.Provider>
     );
}
