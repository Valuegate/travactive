import React from "react";
import logo from "../assets/TravactiveLogo2.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/twitter.png";
import LinkedIn from "../assets/Linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-[#023436] text-white py-12 mt-20">
      <div className="max-w-[1344px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Section - Logo, Description, Socials */}
        <div>
          <img src={logo} alt="Travactive Logo" className="w-40 mb-4" />
          <p className="text-[14px] leading-[22px] text-gray-300 mb-6 max-w-[400px]">
            An AI-powered hub for real-time travel updates, visa rules, study-abroad insights, and global advisories — designed to guide both students and travelers toward smarter journeys.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full  hover:bg-[#ff684d] transition">
              <img src={Facebook} alt="" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full  hover:bg-[#ff684d] transition">
             <img src={Instagram} alt="" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#ff684d] transition">
             <img src={Twitter} alt="" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full  hover:bg-[#ff684d] transition">
              <img src={LinkedIn} alt="" />
            </a>
          </div>
        </div>

        {/* Right Section - Sitemap & Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          
          {/* Sitemap */}
          <div>
            <h5 className="text-[18px] font-semibold mb-4 text-[#FFFFFF]">
              Sitemap
            </h5>
            <ul className="space-y-2 text-[14px] text-gray-300">
              <li><a href="/" className="hover:text-[#FF4C29] transition">Home</a></li>
              <li><a href="about" className="hover:text-[#FF4C29] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#FF4C29] transition">Services</a></li>
              <li><a href="#" className="hover:text-[#FF4C29] transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-[#FF4C29] transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-[18px] leading-[27px]  font-semibold mb-4 text-[#FFFFFF]">
              Our Newsletter
            </h5>
            <p className="text-[14px] text-gray-300 mb-4">
              Subscribe to get travel tips, updates, and insights directly to your inbox.
            </p>
            <form className="flex items-center bg-white rounded-full overflow-hidden sm: w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
              />
              <button
                type="submit"
                className="bg-[#FF4C29] -ml-6 text-white  px-1 py-2 text-sm font-semibold hover:bg-[#ff684d] transition "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-[13px] text-gray-400">
        © {new Date().getFullYear()} Travactive — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
