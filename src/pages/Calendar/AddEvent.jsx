import { useContext, useState } from 'react'
import { Calendar } from 'lucide-react'
import { useAuth } from '../../context/Auth/Auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { EventsContext } from '../../context/Events/EventsContext';

export default function AddEvent() {
  const [date, setDate] = useState('');
  const { admin } = useAuth();
  const { handleNewEvent } = useContext(EventsContext);
  const navigate = useNavigate();

  const [inputName, setInputName] = useState();
  const [inputTeacher, setInputTeacher] = useState();
  const [inputDescription, setInputDescription] = useState();
  const [inputPlace, setInputPlace] = useState();
  const [inputDate, setInputDate] = useState();
  const [inputCost, setInputCost] = useState();

  const handleInput = (event, setter) => {
    setter(event.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleNewEvent(inputName, inputTeacher, inputCost, inputDescription, inputPlace, inputDate);
    navigate('/upcoming-events')
  }

  return (
    <div>
        {/* !admin && (<Navigate to={'/not-found'} replace={true} />) */}
        <div className="min-h-screen bg-[#F0E6DD] flex items-center justify-center p-4">
            <form className="w-full max-w-2xl bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="bg-[#05be9e] p-6 text-white text-center">
                <h2 className="text-3xl font-bold">Create a Fun Event!</h2>
                </div>
                <div className="p-8 space-y-6">
                <div className="space-y-2">
                    <label htmlFor="eventName" className="block text-lg font-medium text-[#2f2f27]">Event Name</label>
                    <input 
                    id="eventName" 
                    className="w-full rounded-full border-2 border-[#F8A12E] focus:border-[#05be9e] focus:ring-[#05be9e]" 
                    placeholder="Super Fun Learning Adventure"
                    onChange={(event) => handleInput(event, setInputName)}
                    />
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="teacherName" className="block text-lg font-medium text-[#2f2f27]">Teacher Name</label>
                    <input
                    id="teacherName" 
                    className="w-full rounded-full border-2 border-[#F8A12E] focus:border-[#05be9e] focus:ring-[#05be9e]" 
                    placeholder="Ms. Awesome"
                    onChange={(event) => handleInput(event, setInputTeacher)}
                    />
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="description" className="block text-lg font-medium text-[#2f2f27]">Description</label>
                    <textarea 
                    id="description" 
                    className="w-full rounded-2xl border-2 border-[#F8A12E] focus:border-[#05be9e] focus:ring-[#05be9e]" 
                    placeholder="Get ready for the most exciting learning experience ever!"
                    rows={4}
                    onChange={(event) => handleInput(event, setInputDescription)}
                    />
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="date" className="block text-lg font-medium text-[#2f2f27]">Date</label>
                    <div className="relative">
                    <input 
                        id="date" 
                        type="date" 
                        value={date}
                        onChange={(event) => {const dateObject = new Date(event.target.value); setInputDate(dateObject)}}
                        className="w-full rounded-full border-2 border-[#F8A12E] focus:border-[#05be9e] focus:ring-[#05be9e] pl-12" 
                    />
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#F8A12E]" />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="cost" className="block text-lg font-medium text-[#2f2f27]">Cost</label>
                    <div className="relative">
                    <input 
                        id="cost" 
                        type="number" 
                        className="w-full rounded-full border-2 border-[#F8A12E] focus:border-[#05be9e] focus:ring-[#05be9e] pl-8" 
                        placeholder="0"
                        onChange={(event) => handleInput(event, setInputCost)}
                    />
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2f2f27]">$</span>
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="place" className="block text-lg font-medium text-[#2f2f27]">Place</label>
                    <input 
                    id="place" 
                    className="w-full rounded-full border-2 border-[#F8A12E] focus:border-[#05be9e] focus:ring-[#05be9e]" 
                    placeholder="Learnity Fun Zone"
                    onChange={(event) => handleInput(event, setInputPlace)}
                    />
                </div>
                
                <button 
                    type="submit" 
                    className="w-full bg-[#F8A12E] hover:bg-[#05be9e] text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300"
                    onClick={onSubmit}
                >
                    Create Event
                </button>
                </div>
            </form>
        </div>
    </div>
  )
}