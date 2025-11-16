import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/TravactiveLogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md rounded-full mx-auto mt-6 max-w-[1344px] px-6 py-3 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Travactive Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Navigation Links (Desktop) */}
      <ul className="hidden md:flex space-x-8">
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Contact Us", path: "/contact" },
        ].map((item) => (
          <li key={item.name} className="relative group">
            <Link
              to={item.path}
              className="text-[#212322] font-roboto font-semibold text-[18px] leading-[27px] transition-colors duration-300 group-hover:text-[#023436]"
            >
              {item.name}
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#023436] transition-all duration-300 group-hover:left-1/4 group-hover:w-1/2"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button (Desktop) */}
      <div className="hidden md:block">
        <Link to="/contact">
          <button className="bg-white border border-[#023436] text-[#023436] px-5 py-2 rounded-full font-sora font-semibold text-[16px] transition duration-300 hover:bg-[#023436] hover:text-white">
            Get Started Now
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#023436] focus:outline-none"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-2xl md:hidden mt-2">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-[#212322] font-roboto font-semibold text-[18px] hover:text-[#023436]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact">
                <button className="bg-[#023436] text-white px-6 py-2 rounded-full font-sora font-semibold text-[16px] hover:bg-[#035b5f]">
                  Get Started
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
