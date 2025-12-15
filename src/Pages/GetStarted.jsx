import React from "react";
import Logo from "../assets/TravactiveLogo.png"; // Replace with your logo
import RightImage from "../assets/GetStartedImg.jpg"; // Replace with your image
import { FaArrowRight, FaUser } from "react-icons/fa"; // Example icons

const GetStarted = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50 px-6 lg:px-16 py-12 gap-12">
      
      {/* Left side */}
      <div className="flex-1 flex flex-col items-start text-left gap-6">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-32 h-auto" />

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold font-outfit leading-tight">
          Welcome to Your Journey
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 text-lg max-w-md">
          Start your adventure with us! Access personalized tools, insights, and resources to make your travel smarter and easier.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* Button 1 */}
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-[#023436] text-white rounded-xl font-semibold hover:bg-[#03504C] transition"
          >
            <FaUser />
            Join as Traveler
          </a>

          {/* Button 2 */}
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-[#FF4C29] text-white rounded-xl font-semibold hover:bg-[#FF6A45] transition"
          >
            <FaArrowRight />
            Learn More
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={RightImage}
          alt="Get Started Illustration"
          className="w-full max-w-lg rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default GetStarted;
