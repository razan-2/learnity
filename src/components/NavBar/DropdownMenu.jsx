import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth/Auth';

export default function DropdownMenu({ isOpen, setIsOpen }) {
  const { userLoggedIn } = useAuth();
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Playground', path: '/playground' },
    { name: 'Guided Learning', path: '/guided-learning' },
    { name: 'Donate', path: '/doneaza' },
    { name: 'Account', path: userLoggedIn ? '/account' : '/log-in'}
  ];
  const navigate = useNavigate();
  return (
    <AnimatePresence className='shadow-2xl shadow-customBlack-500/50'>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-60 bg-[#2f2f27] rounded-md shadow-lg py-1 z-10"
        >
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              className="block px-4 py-2 text-base text-[#F0E6DD] font-arima hover:bg-[#F8A12E] hover:text-[#2f2f27] transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {setIsOpen(false); navigate(item.path);}}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}