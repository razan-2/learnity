import React, { useState } from 'react';
import { useContext } from 'react';
import { EventsContext, EventsContextProvider } from '../../context/Events/EventsContext';
import Parts from './components/Parts';
import Presentation from './components/Presentation';
import Events from './components/Events';

import fireplace from './assets/fireplace.svg';
import arena from './assets/arena.svg';
import tower from './assets/tower.svg';
import roots from './assets/roots.svg';
import ArtOfLearning from './components/ArtOfLearning';

const Playground = () => {
    const [parts, setParts] = useState([
        {
            name: 'The Arena',
            text: 'The Arena este scena principală a învățării. Este arena procesului tău de învățare: locul în care faci ceva nou sau provocator. Deși învățarea se întâmplă constant și în cele mai obișnuite momente, nu la asta ne referim prin Arenă. În Arenă învățarea se întâmplă pentru că faci ceva dificil și provocator! Este vorba de partea concreta de acțiune din procesul tău de învățare.',
            vector: arena,
        },
        {
            name: 'The Fireplace',
            text: 'The Fireplace este punctul din procesul de învățare în care reflectezi, cercetezi sau te odihnești, astfel încât să te poți întoarce la The Arena (practică) cu idei noi despre cum să-ți îmbunătățești și să-ți reîmprospătezi energia.',
            vector: fireplace
        },
        {
            name: 'The Tower',
            text: 'The Tower este spațiul în care îți stabilești intențiile, obiectivele de învățare și unde te întorci atunci când trebuie să obții claritate și o privire de ansamblu asupra procesului de învățare.',
            vector: tower,
        },
        {
            name: 'The Roots',
            text: 'The Roots este locul în care îți dai seama cum să-ți alimentezi cu energie procesul de învățare atunci când simți că nu ai energie, încredere sau curaj pentru următorul pas.',
            vector: roots,
        }
    ])

    return (  
        <div className=''>
            <Presentation />
            <ArtOfLearning />
            {parts.map((part, index) => {
                return (
                    <Parts text={part.text} name={part.name} vector={part.vector} key={index} direction={index%2==0 ? true : false} />
                )
            })}
            <EventsContextProvider>
                <Events />
            </EventsContextProvider>
        </div>
    );
}
 
export default Playground;