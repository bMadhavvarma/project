import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ data = {}, changeUser }) => {
  const { firstName = 'User' } = data;

  const logout = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  };

  return (
    <div className='flex justify-between p-8'>
      <h1 className='text-white text-2xl' style={{ fontFamily: "roboto" }}>
        Hello,<br />
        <span className='text-3xl'>{firstName}👋</span>
      </h1>
      <motion.button
        whileTap={{ scale: 0.6, duration: 0.01 }}
        className="text-white font-semibold bg-red-700 rounded-lg px-5 text-xl"
        onClick={logout}
      >
        Logout
      </motion.button>
    </div>
  );
};

export default Header;
