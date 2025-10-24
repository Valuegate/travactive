import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Only import the icons you need
import "./Navbar.css";
import Logo from "../assets/img/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About Us", "Contact Us"];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      {/* ✅ Logo Section (fixed: only one logo) */}
      <div className="navbar-logo">
        <img src={Logo} alt="Travactiv Logo" className="logo-img" />
        <span className="logo-text">Travactiv</span>
      </div>

      {/* ✅ Desktop Navigation */}
      <div className="navbar-links">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="nav-item"
          >
            {item}
          </a>
        ))}
        <button className="get-started-btn">Get Started Now</button>
      </div>

      {/* ✅ Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <X className="menu-svg" /> : <Menu className="menu-svg" />}
      </div>

      {/* ✅ Mobile Dropdown Menu (only shows when open) */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="mobile-nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="get-started-btn mobile-btn">
            Get Started Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
