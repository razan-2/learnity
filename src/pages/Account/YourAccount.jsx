import React, { useEffect, useState } from 'react'
import { CalendarIcon, KeyIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/Auth';
import { doSignOut } from '../../firebase/auth';
import { Check, X } from 'lucide-react'

const YourAccount = () => {
    const { userLoggedIn, admin, AdminDisable, finalUser, getUsers, acceptUser } = useAuth();
    const [users, setUsers] = useState();

    useEffect(() => {
        getUsers(setUsers);
    })

    return (
        <div className="min-h-screen bg-[#F0E6DD] p-8">
            {!userLoggedIn && (<Navigate to={'/log-in'} replace={true} />)}
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="md:flex">
                <div className="md:flex-shrink-0 bg-[#05be9e] p-8 text-white flex flex-col items-center justify-center">
                    <img
                    className="h-32 w-32 rounded-full border-4 border-white shadow-lg"
                    src={finalUser?.profilePicture}
                    alt={finalUser?.name}
                    />
                    <h2 className="mt-4 text-2xl font-bold">{finalUser?.name}</h2>
                    <h1 className="mt-4 text-2xl font-bold">{admin ? 'Admin' : ''}</h1>
                    <p className="mt-2">{finalUser?.email}</p>
                </div>
                <div className="p-8 flex-grow">
                    <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#2f2f27] mb-2">About Me</h3>
                    <p className="text-gray-600">{finalUser?.bio}</p>
                    </div>
                    <div className="flex space-x-4 mb-8">
                    <button className="flex items-center px-4 py-2 bg-[#F8A12E] text-white rounded-full hover:bg-opacity-90 transition duration-300">
                        <KeyIcon className="h-5 w-5 mr-2" />
                        Change Password
                    </button>
                    <button className="flex items-center px-4 py-2 bg-[#2f2f27] text-white rounded-full hover:bg-opacity-90 transition duration-300" onClick={() => {doSignOut(); AdminDisable();}}>
                        <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                        Log Out
                    </button>
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold text-[#2f2f27] mb-4">Upcoming Events</h3>
                    <div className="space-y-4">
                        {finalUser.events?.map((event) => (
                        <div key={event.id} className="flex items-center bg-[#F0E6DD] p-4 rounded-lg">
                            <CalendarIcon className="h-8 w-8 text-[#05be9e] mr-4" />
                            <div>
                            <h4 className="font-semibold text-[#2f2f27]">{event.name}</h4>
                            <p className="text-gray-600">{event.date.toDate().toLocaleString()}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    {admin && (
                        <div className="space-y-4">
                            <div>
                                <h1>New users</h1>
                                {users?.filter((user) => user.accepted == false).map((user) => (
                                    <div key={user.id} className="flex items-center bg-[#F0E6DD] p-4 rounded-lg">
                                        <div className='flex justify-between'>
                                            <div className='flex flex-col'>
                                                <h4 className="font-semibold text-[#2f2f27]">{user.name}</h4>
                                                <p className="text-gray-600">{user.email}</p>
                                            </div>
                                            <div>
                                                <button className='' onClick={() => acceptUser(user.id)}>
                                                    <Check />
                                                </button>
                                                <button className=''>
                                                    <X />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h1>Users</h1>
                                {users?.filter((user) => user.accepted == true).map((user) => (
                                    <div key={user.id} className='flex items-center bg-customWhite p-4 rounded-lg'>
                                        <div>
                                            <h4 className="font-semibold text-[#2f2f27]">{user.name}</h4>
                                            <p className="text-gray-600">{user.email}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default YourAccount;