import { useState } from 'react'
import RedirectButton from '../../../../components/RedirectButton/RedirectButton';

const Donate = () => {
  return (
    <section className="relative overflow-hidden py-16 px-4 bg-[#F0E6DD]">
      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 className="text-4xl font-bold text-center text-[#2f2f27] mb-6 font-bangers tracking-widest">Donează</h2>
        <p className="text-lg text-center text-[#2f2f27] mb-8 font-arima">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex justify-center">
          <RedirectButton text='Get started' to='/doneaza' />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#F8A12E] rounded-full opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#05be9e] rounded-full opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#2f2f27] rounded-full opacity-10 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  )
}

export default Donate;