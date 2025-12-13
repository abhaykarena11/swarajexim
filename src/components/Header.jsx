import React, { useState, useEffect } from "react";
import { navLinks } from "../data/mockData";

const Header = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white shadow-md"
          : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1
            className={`text-2xl font-bold transition-colors ${
              isScrolled || isMenuOpen ? "text-green-700" : "text-green-700"
            }`}
          >
            SWARAJ EXIM
          </h1>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavClick(item.target)}
                className={`font-medium relative group transition-colors ${
                  isScrolled || isMenuOpen
                    ? "text-gray-700 hover:text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full`}
                ></span>
              </button>
            ))}
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                onNavClick(item.target);
                setIsMenuOpen(false);
              }}
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header; 