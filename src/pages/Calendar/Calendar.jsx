import React, { useState, useEffect, useContext } from "react";
import { ChevronLeft, ChevronRight, MapPin, Clock, User } from "lucide-react";
import { EventsContext } from "../../context/Events/EventsContext";
import { useAuth } from "../../context/Auth/Auth";
import { useNavigate } from "react-router-dom";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EventCard = ({ event }) => {
  const { getParticipating } = useContext(EventsContext);
  const navigate = useNavigate()
  const { admin, userLoggedIn } = useAuth();
  const [participating, setParticipating] = useState(null);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-[#2f2f27] font-bold text-xl mb-2">{event.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
        <div className="flex items-center text-[#05be9e] mb-2">
          <User size={16} className="mr-2" />
          <span className="text-sm">{event.teacher}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Clock size={16} className="mr-2" />
          <span className="text-sm">
            {event.date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-2" />
          <span className="text-sm">{event.place}</span>
        </div>
        {admin ? (
          <button 
          className="bg-[#F8A12E] text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-colors w-full"
          onClick={() => getParticipating(event.id, setParticipating)}
          >
            Vezi înscrișii
          </button>
        ) : (
          <button className="bg-[#F8A12E] text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-colors w-full"
          onClick={userLoggedIn ? () => {navigate(`/anything-else/${event.id}`)} : () => navigate(`/upcoming-events/${event.id}`)}
          >
            Participă
          </button> 
        )}
        {admin && participating != null && (
          participating.map((person) => (
            <div key={person.id}>{person.name}</div>
          ))
        )} 
      </div>
    </div>
  );
};

export default function Calendar() {
  const { admin } = useAuth();
  const navigate = useNavigate();

  const { events } = useContext(EventsContext);
  console.log(events);
  const newEvents = events.map((event) => ({
    ...event,
    date: event.date.toDate(),
  }));

  console.log(newEvents);

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Set the initial date to the current month and year when the component mounts
    setCurrentDate(new Date());
  }, []);

  const nextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const prevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const filteredEvents = newEvents.filter(
    (event) =>
      event.date.getMonth() === currentDate.getMonth() &&
      event.date.getFullYear() === currentDate.getFullYear()
  );

  console.log(filteredEvents);

  return (
    <div className="bg-[#F0E6DD] min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevMonth}
            className="bg-[#F8A12E] text-white p-3 rounded-full hover:bg-opacity-80 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-[#2f2f27] text-5xl font-bold relative">
            <span className="relative z-10">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <span className="absolute inset-x-0 bottom-2 h-4 bg-[#05be9e] opacity-30 transform -skew-x-12"></span>
          </h2>
          <button
            onClick={nextMonth}
            className="bg-[#F8A12E] text-white p-3 rounded-full hover:bg-opacity-80 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center text-[#2f2f27] text-xl">
            No events scheduled for this month.
          </div>
        )}
        {admin && (
          <button
            className="bg-[#F8A12E] text-white font-bold py-2 px-4 mt-20 rounded-full hover:bg-opacity-80 transition-colors w-full"
            onClick={() => {
              navigate("/add-event");
            }}
          >
            Adaugă un eveniment
          </button>
        )}
      </div>
    </div>
  );
}
