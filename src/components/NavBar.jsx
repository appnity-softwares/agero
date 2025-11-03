// Navbar.jsx
import React from "react";
import logo from "../assets/agerologo.svg"

const Navbar = () => {
  return (
    <header className="bg-[#f3f3f3] relative  pt-8">
      {/* Top Badge */}
      <div className="absolute left-1/2 -top-1 transform -translate-x-1/2 bg-[#333] text-white px-6 py-2 rounded-b-2xl flex items-center gap-2 shadow-md">
        <span className="h-2.5 w-2.5 bg-green-500 rounded-full"></span>
        <span className="text-sm font-medium">Available for New Projects</span>
      </div>

      {/* Navbar Main */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-10 py-8 gap-10">
        {/* Logo Image */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Agero Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium text-xs tracking-wide">
          <li className="hover:text-black cursor-pointer transition-colors duration-200">Works</li>
          <li className="hover:text-black cursor-pointer transition-colors duration-200">Services</li>
          <li className="hover:text-black cursor-pointer transition-colors duration-200">About</li>
          <li className="hover:text-black cursor-pointer transition-colors duration-200">Blog</li>
        </ul>

        {/* Contact Button */}
        <button className="bg-[#555] text-white px-6 py-2.5 h-10 w-25 rounded-full shadow-md hover:bg-black transition-transform transform hover:scale-105 duration-200">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
