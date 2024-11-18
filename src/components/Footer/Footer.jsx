import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return ( 
        <footer className='bg-customBlack relative w-full bottom-0 left-0'>
            <div className=' top-0 left-0 w-full'>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-customWhite"></path>
                </svg>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                    <div className='flex flex-col gap-3 items-center pb-[5%]'>
                        <h2 className='text-customOrange text-3xl font-bold font-bangers tracking-widest'>Account</h2>
                        <Link to='/' className='text-customWhite font-semibold font-arima'>Your Account</Link>
                        <Link to='/' className='text-customWhite font-semibold font-arima'>Log in</Link>
                        <Link to='/' className='text-customWhite font-semibold font-arima'>Sign in</Link>
                    </div>
                    <div className='flex flex-col gap-3 items-center pb-[5%]'>
                        <h2 className='text-customOrange text-3xl font-bold font-bangers tracking-widest'>Pages</h2>
                        <Link to='/' className='text-customWhite font-semiboldfont-arima'>Home</Link>
                        <Link to='/' className='text-customWhite font-semibold font-arima'>Despre noi</Link>
                        <Link to='/' className='text-customWhite font-semibold font-arima'>Guided learning</Link>
                        <Link to='/' className='text-customWhite font-semibold font-arima'>Playground</Link>
                    </div>
                    <div className='flex flex-col gap-3 items-center pb-[5%]'>
                        <h2 className='text-customOrange text-3xl font-bold font-bangers tracking-widest'>People</h2>
                        <p className='text-customWhite font-semibold font-arima'>Ana Predescu</p>
                        <p className='text-customWhite font-semibold font-arima'>Ana Stinghe</p>
                        <p className='text-customWhite font-semibold font-arima'>Alexandra Popescu</p>
                        <p className='text-customWhite font-semibold font-arima'>Gaspar Isabela</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center pb-[10%]'>
                        <h2 className='text-customOrange text-3xl font-bold font-bangers tracking-widest'>Contact</h2>
                        <a to='' className='text-customWhite font-semibold font-arima'>Email: contact.learnity@gmail.com</a>
                        <a to='tel:0722280009' className='text-customWhite font-semibold font-arima'>Phone: 0722280009</a>
                        <a href='https://www.instagram.com/learnityro/' className='text-customWhite font-semibold font-arima'>Instagram: @learnityro</a>
                        <a href='https://www.facebook.com/learnity' className='text-customWhite font-semibold font-arima'>Facebook: @learnityro</a>
                    </div>
                </div>
                <div className='flex justify-around md:justify-center'>
                    <a href='tel:0744117331' className='md:mx-[1%]'><i className="fa-solid fa-phone fa-2x text-customWhite"></i></a>
                    <a href='' className='md:mx-[1%]'><i className="fa-solid fa-envelope fa-2x text-customWhite"></i></a>
                    <a href='https://www.instagram.com/learnityro/' className='md:mx-[1%]'><i className="fa-brands fa-instagram fa-2x text-customWhite"></i></a>
                    <a href='https://www.facebook.com/learnity' className='md:mx-[1%]'><i className="fa-brands fa-facebook fa-2x text-customWhite"></i></a>
                </div>
                <div className='flex justify-center py-10'>
                    <SearchBox />
                </div>
                <div className='text-center text-customWhite pb-5'>
                    <p className='font-arima'>Website created & designed by <a>Andronachi Răzvan</a></p>
                    <p className='font-arima'>© Copyright 2024. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}