import React, { useContext } from 'react';
import {EventsContext} from '../../../context/Events/EventsContext';

const Events = ({ from }) => {
    const { playgroundEvents } = useContext(EventsContext);
    const categories = [
        {events: playgroundEvents.filter((event) => event.from == 'Evenimente'), title: 'Evenimente'},
        {events: playgroundEvents.filter((event) => event.from == 'Workshop-uri'), title: 'Workshop-uri'},
        {events: playgroundEvents.filter((event) => event.from == 'Grupuri Autonome'), title: 'Grupuri Autonome'},
        {events: playgroundEvents.filter((event) => event.from == 'Cursuri'), title: 'Cursuri'}
    ]
    return (  
        <section className="py-12 px-4 bg-[#F0E6DD]">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#2f2f27] font-bangers tracking-widest">Câteva dintre evenimentele noastre: </h2>
            <div className="space-y-16">
                {categories.map((category) => (
                <div key={category.title} className="space-y-6">
                    <h3 
                    className="text-3xl font-semibold text-center font-bangers tracking-widest text-customBlack"
                    >
                    {category.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-8">
                    {category.events.map((event) => (
                        <div 
                        key={event.name} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
                        <img
                            src={event.photos}
                            alt={event.name}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h4 className="text-xl font-semibold mb-2 font-arima">
                            {event.name}
                            </h4>
                            <p className="text-[#2f2f27]">{event.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}
 
export default Events;

