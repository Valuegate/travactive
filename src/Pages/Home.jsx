import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

import Navbar from "../Components/Navbar";
import img1 from "../assets/Img1.png";
import img2 from "../assets/Img2.png";
import img3 from "../assets/Img3.png";
import img4 from "../assets/Img4.png";
import img5 from "../assets/Img5.png";
import img6 from "../assets/Img6.png";
import img7 from "../assets/Img7.png";
import img8 from "../assets/Image.png";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import HeroSection from "../Components/Herosection.jsx";
import {
  travelCards,
  IconCard,
  testimonialData,
} from "../assets/travelCards.js";
import CTA from "../Components/CTA.jsx";

const Home = () => {
  const text = " Smarter Travel Decisions, Powered by AI";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="min-h-screen -mt-6 bg-[#023436] text-white relative overflow-hidden">
      {/* Navbar */}
      <div className="sticky top-0 left-0 w-full z-50 bg-[#023436] px-4 sm:px-6 md:px-10 lg:px-16 py-4 sm:py-6">
        <Navbar />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Divider Image */}
      <div className="relative">
        <img
          src={img8}
          alt="img8"
          className="hidden mb-4 lg:block w-full h-[100px] xl:h-[55px] object-cover opacity-40 rounded-[12px] mask-fade-all"
        />
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-slate-50 px-4 sm:px-8 md:px-10 lg:px-20 py-10 text-slate-900">
        <hr className="w-full mb-8" />

        {/* Intro Text */}
        <section className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 mb-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug md:w-1/2">
            From Students to Explorers <br className="hidden md:block" /> We’ve
            Got You Covered
          </h3>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed md:w-1/2">
            Whether you’re a student navigating study-abroad rules or a traveler
            seeking real-time updates, our AI-powered hub delivers the insights
            you need — anytime, anywhere.
          </p>
        </section>

        {/* Card Grid */}
        <section className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelCards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white shadow-sm rounded-[24px] overflow-hidden 
                 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:brightness-110"
              style={{ width: "318px" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.border = `1px solid ${card.borderColor}`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.border = "3px solid transparent")
              }
            >
              {/* Card Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[480px] object-fit transition-transform duration-500"
              />

              {/* Overlay with Text & Icon */}
              <div className="absolute inset-0 bg-white bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                {/* Icon at top */}
                <img
                  className="w-[124px] h-[124px] pb-3"
                  src={card.icon}
                  alt="Card icons"
                />

                {/* Card Text */}

                <p
                  style={{
                    width: "270px",
                    height: "216px",
                    transform: "rotate(0deg)",
                    opacity: 1,
                    fontFamily: "'Inter', sans-serif", // updated font
                    fontWeight: 400, // Regular
                    fontStyle: "normal", // Regular style
                    fontSize: "18px", // updated size
                    lineHeight: "27px", // updated line-height
                    letterSpacing: "0%", // updated letter-spacing
                    textAlign: "center", // center text
                    color: "black",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Icon Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-30 ">
          {IconCard.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center p-6"
            >
              {card.icon && <div className="text-4xl mb-3">{card.icon}</div>}
              {card.img && (
                <img
                  src={card.img}
                  alt={card.title || "Card image"}
                  className="w-14 h-14 sm:w-16 sm:h-16 sm:l-24 object-contain mb-4"
                />
              )}
              {card.desc ? (
                <div
                  className="text-slate-600 text-sm sm:text-base grow"
                  dangerouslySetInnerHTML={{ __html: card.desc }}
                />
              ) : (
                <>
                  <h4 className="text-lg font-semibold mb-2 mt-2">
                    {card.title}
                  </h4>
                  <p className="text-slate-600 text-sm grow">
                    {card.text}
                  </p>
                </>
              )}
            </div>
          ))}
        </section>

        {/* Testimonials */}
        
<section className="bg-gray-50 py-16 mt-26">
  <div className="max-w-6xl mx-auto text-center px-4">

    <h2 className="font-inter font-medium text-[14px] text-[#023436]">
      Testimonials
    </h2>

    <div className="mt-2 mb-12">
      <div className="flex justify-center">
        <h3 className="font-outfit font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-[#212322] max-w-[791px]">
          A New Platform, A Growing Community
        </h3>
      </div>

      <p className="font-inter text-[16px] leading-[24px] text-gray-600 max-w-3xl mx-auto">
        We’re just getting started, but the excitement is real. Read what early
        users are saying as we reshape how travelers and students access the
        information they need.
      </p>
    </div>

    {/* Swiper */}
    <Swiper
      slidesPerView={1}
      spaceBetween={200}
       loop={true}   //
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      autoplay={{ delay: 2500 }}
      navigation={{
        nextEl: ".swiper-next-btn",
        prevEl: ".swiper-prev-btn",
      }}
      modules={[Navigation, Autoplay]}
      className="pb-10"
    >
      {testimonialData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white w-70 shadow-sm rounded-2xl p-8 text-left hover:shadow-lg transition-all duration-300 relative">
            <h5 className="text-[#03B5AA] font-semibold text-sm mb-3 absolute top-4 left-6">
              {item.title}
            </h5>

            <p className="text-gray-700 font-inter w-[210px] h-[200px] mt-10 text-sm sm:text-base">
              {item.text}
            </p>

            <div className="flex items-center gap-3 mt-1">
              <img
                src={item.img}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-[#023436]">
                  {item.name}
                </h4>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* 🔥 Navigation Buttons (MUST be outside the Swiper!) */}
    <div className="flex justify-center gap-4 mt-6">
      <button className="swiper-prev-btn w-auto bg-[#ffffff] text-[#464a4a] px-6 py-3 shadow-sm shadow-gray-250 rounded-full font-semibold hover:bg-[#E6F7F6] transition">
        &lt;
      </button>

      <button className="swiper-next-btn w-auto bg-[#ffffff]  text-[#464a4a] shadow-sm shadow-gray-250 px-6 py-3 rounded-full font-semibold hover:bg-[#E6F7F6] transition">
        &gt;
      </button>
    </div>

  </div>
</section>


        <CTA />
      </div>
    </div>
  );
};

export default Home;
