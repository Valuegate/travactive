import React from "react";
import Logo from "../assets/TravactiveLogo.png";
import RightImage from "../assets/GetStartedImg.jpg";
import { Link } from "react-router-dom";
import UserGradIcon from "../assets/userGraduate.png";
import HealthTravel from "../assets/healthiconsTravel.png";

const GetStarted = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      {/* Main Layout Container */}
      <div
        className="
          relative
          w-full max-w-[1488px]
          min-h-[600px] lg:min-h-[900px]
          rounded-[20px]
          bg-[#F6F6F6]
          overflow-hidden
          flex flex-col lg:flex-row
          items-center
          justify-between
          px-6 sm:px-10 lg:px-20
          py-10 sm:py-12
          gap-10 lg:gap-12
        "
      >
        
        {/* Logo */}
        <Link
          to="/"
          className="
            absolute 
            top-4 sm:top-6 md:top-2 lg:top-8
            left-4 sm:left-8 md:left-10 lg:left-6
            z-10
          "
        >
          <img
            src={Logo}
            alt="Travactive Logo"
            className="w-24 sm:w-28 md:w-32 h-auto cursor-pointer"
          />
        </Link>

        {/* Left side */}
        <div className="flex-1 flex flex-col justify-center lg:justify-start text-center lg:text-left gap-4 lg:pr-0 lg:mt-[-400px] px-6">

          
          {/* Heading */}
          <h2
            className="
              max-w-[478px]
              font-[Outfit] font-semibold
              text-xl sm:text-2xl
              leading-[30px] sm:leading-[36px]
              text-[#212322]
            "
          >
            Let’s Personalize Your Travel Experience
          </h2>

          {/* Paragraph */}
          <p className="text-[rgba(51,51,51,0.72)] max-w-[478px] font-[Inter] font-medium text-sm sm:text-base leading-[22px] sm:leading-[24px]">
            Choose the path that fits you—whether you’re a student seeking
            study-abroad insights or a traveler exploring global updates.
          </p>

          {/* Buttons */}
          <div className="flex flex-col w-full max-w-[478px] gap-4 sm:gap-6 mt-4">
            {/* Button 1 */}
            <Link
              to="/register"
              className="
                flex flex-row lg:flex-row items-center lg:items-center gap-3
                w-full px-5 py-4
                bg-white text-[#212322] rounded-[8px]
                font-semibold shadow-[0_4px_12px_0_#0000001A]
                hover:bg-[#03B5AA] transition
              "
            >
              <img src={UserGradIcon} alt="" className="w-6 h-6" />
              <div className="flex flex-col text-left">
                <h4 className="font-[Inter] font-semibold text-[14px]">As a Student</h4>
                <p className="font-[Inter] text-[12px] text-gray-600">seeking study-abroad insights.</p>
              </div>
            </Link>

            {/* Button 2 */}
            <Link
              to="/TravRegister"
              className="
                flex flex-row lg:flex-row items-center lg:items-center gap-3
                w-full px-5 py-4
                bg-white text-[#212322] rounded-[8px]
                font-semibold shadow-[0_4px_12px_0_#0000001A]
                hover:bg-[#FFDE59] transition
              "
            >
              <img src={HealthTravel} alt="" className="w-6 h-6" />
              <div className="flex flex-col text-left">
                <h4 className="w-full font-[Inter] font-semibold text-[14px]">As a Traveler</h4>
                <p className="w-full font-[Inter] text-[12px] text-gray-600">exploring global updates.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Right side (hidden for small & tablet screens) */}
        <div className="hidden lg:flex flex-1 justify-center items-center w-full">
          <img
            src={RightImage}
            alt="Get Started Illustration"
            className="
              w-full max-w-[730px]
              h-[918px]
              rounded-[18px]
              object-cover
            "
          />
        </div>

      </div>
    </div>
  );
};

export default GetStarted;
