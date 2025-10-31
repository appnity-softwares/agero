import React from 'react';
import logo from '../assets/agerologo.svg'

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-gray-50 font-sans shadow-sm h-20">
      {/* Logo */}
      <div className="">
        <img src={logo} alt="" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li><a href="#works" className="text-gray-600 hover:text-orange-500 text-lg transition-colors duration-300">Works</a></li>
        <li><a href="#services" className="text-gray-600 hover:text-orange-500 text-lg transition-colors duration-300">Services</a></li>
        <li><a href="#about" className="text-gray-600 hover:text-orange-500 text-lg transition-colors duration-300">About</a></li>
        <li><a href="#blog" className="text-gray-600 hover:text-orange-500 text-lg transition-colors duration-300">Blog</a></li>
      </ul>

      {/* Contact Button */}
      <button className="bg-gray-700 text-white px-7 py-3 rounded shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300 text-lg">
        Contact
      </button>
    </nav>
  );
};

export default NavBar;