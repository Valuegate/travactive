import React from "react";
import logo from "../assets/TravactiveLogo2.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/twitter.png";
import LinkedIn from "../assets/Linkedin.png";
import MailIcon from "../assets/Light-surface-container.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#023436] text-white py-12 mt-20">
      <div className="max-w-[1344px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Logo, Description, Socials */}
        <div>
          <img src={logo} alt="Travactive Logo" className="w-40 mb-4" />
          <p className="text-[14px] leading-[22px] text-gray-300 mb-6 max-w-[400px]">
            An AI-powered hub for real-time travel updates, visa rules,
            study-abroad insights, and global advisories — designed to guide
            both students and travelers toward smarter journeys.
          </p>
          
          <div className="flex items-center gap-3 mb-2">
  <span className="flex items-center gap-[6px]">
    <img
      src={MailIcon}
      alt="Email icon"
      className="w-[32px] h-[32px] p-[2.8px] rounded-[4.8px]"
    />
    <p
      className="
        w-[112px] h-[15px]
        font-[Inter]
        text-[12px]
        font-normal
        leading-none
        text-white
      "
    >
      help@travactiv.com
    </p>
  </span>

  <span className="flex items-center gap-[6px]">
    <img
      src={MailIcon}
      alt="Email icon"
      className="w-[32px] h-[32px] p-[2.8px] rounded-[4.8px]"
    />
    <p
      className="
        w-[112px] h-[15px]
        font-[Inter]
        text-[12px]
        font-normal
        leading-none
        text-white
      "
    >
      info@travactiv.com
    </p>
  </span>
</div>


          {/* Social Icons */}
           <div className="flex gap-[7.27px]">
  {[Facebook, LinkedIn ,Instagram, Twitter].map((icon, i) => (
    <a
      key={i}
      href="#"
      aria-label="social link"
      className="
        w-[24px] h-[24px]
        flex items-center justify-center
        rounded-[8.73px]
        opacity-100
        hover:bg-[#ff684d]
        transition
      "
    >
      {/* Keep icon slightly smaller than container */}
      <img src={icon} alt="" className="w-[16px] h-[16px]" />
    </a>
  ))}
</div>
  </div> {/* ✅ LEFT SECTION CLOSED */}

        {/* Right Section - Sitemap & Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Sitemap */}
          <div>
            <h5 className="text-[18px] font-semibold mb-4 text-[#FFFFFF]">
              Sitemap
            </h5>
            <ul className="space-y-2 text-[14px] text-gray-300">
              <li>
  <Link to="/" className="hover:text-[#FF4C29] transition">
    Home
  </Link>
</li>

<li>
  <Link to="/about" className="hover:text-[#FF4C29] transition">
    About Us
  </Link>
</li>

<li>
  <Link to="/contact" className="hover:text-[#FF4C29] transition">
    Contact Us
  </Link>
</li>

<li>
  <Link to="/get-started" className="hover:text-[#FF4C29] transition">
    Get Started
  </Link>
</li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-[18px] leading-[27px]  font-semibold mb-4 text-[#FFFFFF]">
              Our Newsletter
            </h5>
            <p className="text-[14px] text-gray-300 mb-4">
              Subscribe to get travel tips, updates, and insights directly to
              your inbox.
            </p>
            <form className="relative w-full max-w-[312px] md:max-w-[280px] lg:max-w-[312px] h-[41px]">
  <input
    type="email"
    placeholder="Your email"
    className="
      w-full h-full
      bg-transparent
      border border-white/50
      rounded-[8px]
      px-[11px] py-[6px]
      pr-[120px] sm:pr-[135px]
      text-sm text-white
      outline-none
      focus:border-white
    "
  />

  <button
    type="submit"
    className="
      absolute right-[6px] top-1/2 -translate-y-1/2
      h-[29px]
      px-[12px] sm:px-[20px]
      text-xs sm:text-sm
      bg-[#FF4C29]
      text-white
      font-semibold
      rounded-[12px]
      hover:bg-[#ff684d]
      transition
    "
  >
    Subscribe
  </button>
</form>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t  border-white mt-10 pt-6 text-center text-[13px] text-gray-400">
        © Copyright {new Date().getFullYear()}  All rights reserved by Travactiv. A Product by ValueGate Consulting.
      </div>
    </footer>
  );
};

export default Footer;
