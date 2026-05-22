import React from "react";
import CTA from "../Components/CTA.jsx";
import Navbar from "../Components/Navbar.jsx";
import BackgroundImage from "../assets/ContactHeroImg1.jpg";
import CardImg from "../assets/ContactCardImg.jpg";
import ContactIcon from "../assets/ContactFrame.png";
import MailIcon from "../assets/MailFrame.png";
import img8 from "../assets/Image.png";


const Contact = () => {
  return (
    <>
      <section className="relative w-full mb-10 flex justify-center px-1">
        <div
          className="relative w-full max-w-[1472px] min-h-[650px] sm:min-h-[750px] lg:min-h-[900px] bg-center bg-cover flex flex-col overflow-hidden rounded-[16px]"
          style={{
            backgroundImage: `linear-gradient(rgba(2, 52, 54, 0.85), rgba(2, 52, 54, 0.85)),url(${BackgroundImage})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-0 rounded-2xl"></div>

          {/* Navbar */}
          <div className="relative z-20 mt-6 sm:mt-8">
            <Navbar />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center w-full text-center text-white px-4 sm:px-6 mt-10 sm:mt-16">

            {/* Headline */}
            <div className="w-full max-w-[862px]">
              <h3 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[56px] leading-tight">
                Every Great Journey Starts with a Conversation
              </h3>
            </div>

            {/* Form + Cards */}
            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 sm:gap-12 justify-center mt-12 sm:mt-16 mb-16 px-1">

              {/* Form */}
              <form className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col gap-6 sm:gap-8 shadow-xl text-gray-800 w-full max-w-[700px]">

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col text-left">
                    <label className="font-medium mb-2">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF4C29]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="flex-1 flex flex-col text-left">
                    <label className="font-medium mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      className="border border-gray-300 rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF4C29]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label className="font-medium mb-2">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    className="border border-gray-300 rounded-lg p-3 h-32 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF4C29]"
                    placeholder="Write your message"
                  ></textarea>
                </div>

                {/* Button */}
                <button className="relative w-full max-w-[488px] h-[52px] mx-auto rounded-[30px] bg-[#023436] text-white font-semibold overflow-hidden group">
                  <span className="flex justify-center items-center w-full h-full transition-colors duration-300 group-hover:bg-[#03504C]">
                    <span className="absolute inset-0 flex justify-center items-center transition-transform duration-300 group-hover:-translate-y-full">
                      Submit
                    </span>
                    <span className="absolute inset-0 flex justify-center items-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                      Send Now
                    </span>
                  </span>
                </button>
              </form>

              
              {/* Contact Cards */}
<div className="flex flex-col md:flex-row lg:flex-col items-stretch gap-6 w-full max-w-[350px] md:max-w-[600px] lg:max-w-[350px]">

  {/* Image Card */}
  <div className="w-full md:w-1/2 lg:w-full h-[180px] sm:h-[228px] rounded-t-[14px] md:rounded-[14px] overflow-hidden shadow-lg">
    <img
      src={CardImg}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* Contact Info Card */}
  <div className="w-full md:w-1/2 lg:w-full min-h-[200px] bg-white shadow-lg p-6 flex flex-col gap-6 text-gray-700 rounded-b-[14px] md:rounded-[14px]">

    <div className="flex items-center gap-3">
      <img
        src={MailIcon}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12"
      />
      <div className="flex flex-col text-left">
        <p className="font-medium text-lg sm:text-xl">Phone Number</p>
        <p className="opacity-80 text-sm sm:text-base">
          +123 456 7890
        </p>
      </div>
    </div>

    <div className="flex items-left gap-3">
      <img
        src={ContactIcon}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12"
      />
      <div className="flex flex-col text-left">
        <p className="font-medium text-lg sm:text-xl">Email Address</p>
        <p className="opacity-80 text-sm sm:text-base">
          Info@travactive.com
        </p>
      </div>
    </div>

  </div>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t-2 border-[#023436] my-12"></div>

      {/* Divider Image */}
      <div className="mt-12 mb-20 object-cover px-1 sm:px-1 md:px-1 lg:px-1">
        <img
          src={img8}
          alt=""
          className="w-full h-[100px] sm:h-[104px]  object-cover"
        />
      </div>

      <CTA />
    </>
  );
};

export default Contact;
