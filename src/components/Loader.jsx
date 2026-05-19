import React from "react";
import Logo from "../assets/CardAI.png";

const Loader = ({ text = "Travactive" }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      
      <div className="bg-white px-5 py-5 rounded-2xl shadow-xl flex flex-col items-center gap-3 w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px]">
        
        {/* Logo */}
        <div className="flex justify-center items-center my-2">
          <img
            src={Logo}
            alt="logo"
            className="w-20 h-20 animate-pulse"
          />
        </div>

        {/* Brand Name */}
        <h2 className="text-base font-semibold text-[#023436] tracking-wide text-center">
          {text}
        </h2>

        {/* Loading Dots */}
        <div className="flex gap-2 mt-1">
          <div className="w-2 h-2 bg-[#023436] rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-[#023436] rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-[#023436] rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>

      </div>
    </div>
  );
};

export default Loader;
