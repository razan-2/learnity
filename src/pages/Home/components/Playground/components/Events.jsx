import React, { useContext } from 'react';
import Card from '../../../../../components/Card/Card';
import { EventsContext } from '../../../../../context/Events/EventsContext';

const Events = () => {
    const { playgroundEvents } = useContext(EventsContext);
    return (  
        <div className='flex flex-col items-center justify-around md:flex-row '>
            {playgroundEvents.sort(function(){ return 0.5 - Math.random() }).slice(0, 3).map((event, index) => {
                return (
                    <Card name={event.name} date={event.date} description={event.description} key={index} />
                )
            })}
        </div>
    );
}
 
export default Events;