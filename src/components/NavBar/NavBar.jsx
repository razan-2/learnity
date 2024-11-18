import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Calendar, User, BookOpen, Menu } from 'lucide-react';
import DropdownMenu from './DropdownMenu';
import logo from '../../assets/logo/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/Auth';

const iconVariants = {
  active: { scale: 2.1, color: '#F8A12E' },
  inactive: { scale: 2, color: '#F0E6DD' },
};

export const NavBar = ({ currentPage = '/' }) => {
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const icons = [
        { name: "/", Icon: Home },
        { name: "/upcoming-events", Icon: Calendar },
        { name: userLoggedIn ? '/account' : '/log-in', Icon: User },
        { name: "/blog", Icon: BookOpen },
    ];

    return (
        <nav className="bg-[#2f2f27] w-full p-4 flex items-center justify-between md:sticky fixed md:top-0 bottom-0 left-0 z-20 shadow-2xl shadow-customBlack-500/20 md:rounded-none rounded-t-3xl">
            <div className="hidden md:flex items-center">
                <Link to='/'><img src={logo} alt="Learnity Logo" className="h-20 w-auto" /></Link>
            </div>
            
            <div className="flex w-full md:w-min justify-around space-x-6">
                {icons.map(({ name, Icon }) => (
                <motion.div
                    key={name}
                    variants={iconVariants}
                    initial="inactive"
                    animate={currentPage.location == name ? 'active' : 'inactive'}
                    whileHover={{ scale: 2.1 }}
                    whileTap={{ scale: 1.9 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Icon 
                    className="md:w-6 w-8 md:h-6 h-8 cursor-pointer md:mx-5 my-3" 
                    onClick={() => navigate(name)}
                    />
                </motion.div>
                ))}
            </div>
            
            <div className="hidden md:flex relative">
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#F0E6DD] focus:outline-none"
                >
                <Menu className="w-6 h-6" />
                </motion.button>
                
                <DropdownMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            </div>
        </nav>
    );
}

// logo - h-16, src
// icon size
// links