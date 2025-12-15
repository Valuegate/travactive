import React from "react";
import CTA from "../Components/CTA.jsx";
import Navbar from "../Components/Navbar.jsx";
import BackgroundImage from "../assets/ContactHeroImg1.jpg";
import CardImage1 from "../assets/Frame1.png";
import PhoneIcon from "../assets/CardBag.png";
import EmailIcon from "../assets/CardBag.png";
import CardImg from "../assets/ContactCardImg.jpg";
import ContactIcon from "../assets/ContactFrame.png";
import MailIcon from "../assets/MailFrame.png";
import img8 from "../assets/Image.png";

const Contact = () => {
  return (
    <>
      <section className="relative w-full -mt-3 mb-10 flex justify-center ">
        <div
          className="relative bg-center bg-cover flex flex-col justify-start overflow-hidden rounded-[16px]"
          style={{
            backgroundImage: `linear-gradient(rgba(2, 52, 54, 0.85), rgba(2, 52, 54, 0.85)),url(${BackgroundImage})`,
            width: "1472px",
            height: "982px",
            //backgroundColor: '#023436D1',
            opacity: "1",
            top: "1px",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-0 rounded-2xl"></div>

          {/* Navbar */}
          <div className=" z-20 mt-8 ">
            <Navbar />
          </div>

          <div
            className="relative z-10 mt-8 flex flex-col items-center w-full text-center text-white px-4 sm:px-6 md:px-8"
            style={{ top: "80px" }}
          >
            {/* Headline */}
            <div className="w-[862px] h-[148px] rotate-0 opacity-100 absolute">
              <h3 className="font-outfit font-semibold text-[56px] leading-[74px] tracking-[0%] text-center">
                Every Great Journey Starts with a Conversation
              </h3>
            </div>

            {/* Form + Cards Container */}
            <div className="w-[] max-w-6xl flex flex-col lg:flex-row items-center gap-12 justify-center mt-59 ">
              {/* Form */}
              <form className="bg-white rounded-2xl p-8 flex flex-col gap-8 shadow-lg text-gray-800 w-[1980px] h-[460px]">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col">
                    <label className="font-medium mb-2 flex start">
                      Full Name <span className="text-red-600"> *</span>
                    </label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF4C29] bg-gray-100"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="font-medium mb-2 flex start">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF4C29] bg-gray-100"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-medium mb-2 flex start">
                    Messages <span className="text-red-600">*</span>{" "}
                  </label>
                  <textarea
                    className="border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-[#FF4C29] bg-gray-100"
                    placeholder="Write your message"
                  ></textarea>
                </div>

                <button className="relative w-[488px] h-[52px] mx-auto rounded-[30px] bg-[#023436] text-white font-semibold overflow-hidden group">
  {/* Text wrapper */}
  <span className="flex justify-center items-center w-full h-full transition-colors duration-300 group-hover:bg-[#03504C]">
    <span className="absolute inset-0 flex justify-center items-center transition-transform duration-300 transform group-hover:-translate-y-full">
      Submit
    </span>
    <span className="absolute inset-0 flex justify-center items-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
      Send Now
    </span>
  </span>
</button>

              </form>

              {/* Cards */}
              <div className="flex flex-col gap-6">
                <div className="w-[350px] h-[228px] rounded-tl-[14px] rounded-tr-[14px] bg-white shadow-lg overflow-hidden">
                  <img
                    src={CardImg}
                    alt="card1"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-[350px] h-[210px] bg-white shadow-lg p-6 flex flex-col gap-[30px] text-gray-700 rounded-br-[14px] rounded-bl-[14px]">
                  <div className="flex items-center gap-3">
                    <img
                      src={ContactIcon}
                      alt="phone"
                      className="w-[50px] h-[50px]"
                    />
                    <span className="flex flex-col items-start">
                      <p className="font-inter font-medium text-[20px] leading-[100%] tracking-[0px]">
                        Phone Number
                      </p>
                      <p className="w-[208px] h-[19px] rotate-0 opacity-80 flex start-0">
                        +123 456 7890
                      </p>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={MailIcon}
                      alt="email"
                      className="w-[50px] h-[50px]"
                    />
                    <span className="flex flex-col items-start">
                      <p className=" font-inter font-medium text-[20px] leading-[100%] tracking-[0px]">
                        Email Address
                      </p>
                      <p className="items-start w-[208px] h-[19px] rotate-0 opacity-80 flex start-0">
                        Dadben08@gmail.com
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="w-[1512px] h-0 border-t-2 border-[#023436] opacity-100 absolute top-[1042px] mb "></div>

      {/* Divider Image */}
      <div className="mt-12 mb-100 px-8 sm:px-6 md:px-10 lg:px-16">
        <img
          src={img8}
          alt="img8"
          className="w-[1468px] h-[124px] rotate-0 opacity-100 absolute top-[1108px] left-[20px] bg-gray-300"
        />
      </div>
      <CTA />
    </>
  );
};

export default Contact;
