import React, { useContext, useState, useEffect } from "react";
import { Calendar, MapPin, CreditCard, Clock } from "lucide-react";
import { useParams } from "react-router-dom";
import { EventsContext } from "../../context/Events/EventsContext";

export default function Participate() {
  let { id } = useParams();
  const { getEvent, handleLoggedOutParticipate } = useContext(EventsContext);
  const [name, setName] = useState();
  const [selectedClass, setSelectedClass] = useState("9");
  const [school, setSchool] = useState();
  const [phone, setPhone] = useState();
  const [findOut, setFindOut] = useState();
  const [anyElse, setAnyElse] = useState();

  const [event, setEvent] = useState();

  useEffect(() => {
    async function fetchEvent() {
      if (id) {
        const eventData = await getEvent(id);
        setEvent(eventData);
      }
    }

    fetchEvent();
  }, [id]);

  return (
    <div className="min-h-screen bg-[#F0E6DD] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-[#05be9e] p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{event?.name}</h1>
          <p className="mb-4">{event?.description}</p>
          <div className="space-y-2">
            <p className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              <span>
                <strong>Data:</strong> {event?.date.toDate().toLocaleString()}
              </span>
            </p>
            <p className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <span>
                <strong>Locație:</strong> {event?.place}
              </span>
            </p>
            <p className="flex items-center">
              <CreditCard className="mr-2 h-5 w-5" />
              <span>
                <strong>Intrare: </strong>{" "}
                {event?.cost > 0 ? event?.cost : "Graduit"}
              </span>
            </p>
          </div>
        </div>
        <form className="p-6 space-y-6" onSubmit={(e) => {
            e.preventDefault(); // Prevents page reload
            handleLoggedOutParticipate({
                name: name,
                school: school,
                grade: selectedClass,
                phone: phone,
                anyElse: anyElse,
                findOut: findOut
                }, id);
            }} >
          <div className="space-y-2">
            <label
              htmlFor="nume"
              className="text-[#2f2f27] font-semibold block"
            >
              Nume Complet:
            </label>
            <input
              id="nume"
              className="w-full p-2 border-2 border-[#F8A12E] rounded focus:outline-none focus:ring-2 focus:ring-[#05be9e]"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <p className="text-[#2f2f27] font-semibold">Sunt în clasa:</p>
            <div className="flex space-x-4">
              {["9", "10", "11", "12"].map((cls) => (
                <label
                  key={cls}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="class"
                    value={cls}
                    checked={selectedClass === cls}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="text-[#05be9e] focus:ring-[#05be9e]"
                  />
                  <span>{cls}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="liceu"
              className="text-[#2f2f27] font-semibold block"
            >
              Liceul la care înveți:
            </label>
            <input
              id="liceu"
              className="w-full p-2 border-2 border-[#F8A12E] rounded focus:outline-none focus:ring-2 focus:ring-[#05be9e]"
              required
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="telefon"
              className="text-[#2f2f27] font-semibold block"
            >
              Număr de telefon:
            </label>
            <input
              id="telefon"
              type="tel"
              className="w-full p-2 border-2 border-[#F8A12E] rounded focus:outline-none focus:ring-2 focus:ring-[#05be9e]"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="sursa"
              className="text-[#2f2f27] font-semibold block"
            >
              Cum ai aflat de noi:
            </label>
            <input
              id="sursa"
              className="w-full p-2 border-2 border-[#F8A12E] rounded focus:outline-none focus:ring-2 focus:ring-[#05be9e]"
              required
              onChange={(e) => setFindOut(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="altceva"
              className="text-[#2f2f27] font-semibold block"
            >
              Mai vrei să ne spui ceva:
            </label>
            <textarea
              id="altceva"
              className="w-full p-2 border-2 border-[#F8A12E] rounded focus:outline-none focus:ring-2 focus:ring-[#05be9e] h-24"
              onChange={(e) => setAnyElse(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F8A12E] text-white py-2 px-4 rounded hover:bg-[#05be9e] transition-colors duration-300"
            >
            Înscrie-te la Workshop
          </button>
        </form>
      </div>
    </div>
  );
}
