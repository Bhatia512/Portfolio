import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="fixed z-50 border-b-2 border-b-cyan-300 w-full backdrop-blur-sm">
      <div className="flex justify-between items-center p-4 text-xl">
        <div className="text-2xl font-Ubuntu font-medium text-white">
          <h1>Naman Bhatia</h1>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-Ubuntu font-bold text-white">
          <a href="#home" className="relative group hover:text-red-500">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a href="#about" className="relative group hover:text-red-500">
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a href="#skills" className="relative group hover:text-red-500">
            Skills
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a href="#contact" className="relative group hover:text-red-500">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <div className="cursor-pointer text-white" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-3 p-4 bg-gray-800 text-white font-Ubuntu font-medium absolute w-full left-0 top-16 z-40">
          <a href="#home" className="hover:bg-gray-700 py-2 px-4 rounded">Home</a>
          <a href="#about" className="hover:bg-gray-700 py-2 px-4 rounded">About</a>
          <a href="#skills" className="hover:bg-gray-700 py-2 px-4 rounded">Skills</a>
          <a href="#contact" className="hover:bg-gray-700 py-2 px-4 rounded">Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
