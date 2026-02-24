import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/Img1.png";
import img2 from "../assets/Img2.png";
import img3 from "../assets/Img3.png";
import img4 from "../assets/Img4.png";
import img5 from "../assets/Img5.png";
import img6 from "../assets/Img6.png";
import img7 from "../assets/Img7.png";
import Dot from "../assets/HeroDot.png";
import MobileCarousel from "./MobileCarousel";
import HeroImage from "../assets/HeroImage.png";
import "../index.css";

const HeroSection = () => {
  const lines = ["Smarter Travel", "Decisions, Powered by", " AI"];
  const [displayedLines, setDisplayedLines] = useState(["", "", ""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            newLines[lineIndex] += lines[lineIndex].charAt(charIndex);
            return newLines;
          });
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Move to next line
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <section
      className="relative min-h-screen  w-[1472px] -mb-1 -mt-28 text-white px-8 sm:px-6 md:px-10 lg:px-16 pt-[2px] pb-12 flex flex-col lg:flex-row items-center justify-between overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 52, 54, 0.85), rgba(2, 52, 54, 0.85)), url(${HeroImage})`,
        backgroundSize: "contain",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        width: "1472px",
        height: "942px",
      }}
    >
      {/* Background Carousel for mobile & tablet only */}
      <MobileCarousel images={[img1, img2, img3, img4, img5, img6, img7]} />

      {/* Left side — Text content */}
      <div className="relative ml-12 -mt-12  w-full lg:w-1/2 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start z-10">
        {/* H1 with highlight shadow */}
        <div className="relative inline-block w-full">
          <img src={Dot} alt="" className=" mb-3 " />
          <h1
            className="font-outfit font-bold text-[56px] leading-[70px] tracking-[8px]
 "
          >
            {displayedLines.map((line, i) => (
              <span
                key={i}
                className={`
        block 
        ${
          i === 1
            ? "font-outfit font-medium text-[56px] leading-[70px] tracking-[0] "
            : ""
        } 
        ${
          i === 2
            ? "font-outfit font-bold text-[56px] leading-[70px] tracking-[2px] "
            : ""
        }
      `}
              >
                {line}

                {i === displayedLines.length - 1 && (
                  <span className="ml-1 text-[#FF4C29] animate-blink font-outfit">
                    |
                  </span>
                )}
              </span>
            ))}
          </h1>

          <span className="highlight-shadow"></span>
        </div>

        <p className="hero-desc text-center lg:text-left">
          An AI-powered hub for real-time travel updates, visa rules,
          <br />
          study-abroad insights, and global advisories designed to
          <br /> guide both students and travelers toward smarter journeys.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
          <button className="btn-primary">
            <span className="text-switch">
              <span className="w-183">Unlock Travel Insight</span>
              <span>Join As Traveler</span>
            </span>
          </button>
          <Link to="/get-started">
          <button className="btn-secondary">Get Started</button>
          </Link>
        </div>
      </div>

      {/* Right side — Image grid (visible only on large screens) */}
      <div className="hidden lg:grid lg:w-1/2 grid-cols-2 gap-7.5 py-24 mt-14 mr-[-28px]">
        {/* Group 1 */}
        <div className="relative ml-22 mt-1 w-[240px]  h-[280px] rounded-[32px] shadow-lg animate-float transform transition-transform duration-300 ">
          <img
            src={img1}
            alt="Travel 1"
            className="w-[240px] xl:w-[256px] h-[280px] xl:h-[300px] object-cover rounded-[32px]"
          />
          <img
            src={img2}
            alt="Travel 2"
            className="absolute top-20 -left-26 w-[180px] xl:w-[214px] h-[120px] xl:h-[140px] object-cover rounded-[16px] "
          />
        </div>

        {/* Group 2 */}
        <div className="relative w-[300px] rounded-[32px] mt-12 transform transition-transform duration-300  shadow-sm  animate-float  ">
          <img
            src={img4}
            alt="Travel 4"
            className="w-[300px] xl:w-[320px] h-[270px] xl:h-[306px] object-cover rounded-[32px]"
          />
          <img
            src={img3}
            alt="Travel 3"
            className="absolute -top-10 left-6 w-[80px] xl:w-[90px] h-[120px] xl:h-[142px] object-cover rounded-[16px] shadow-md "
          />
        </div>

        {/* Group 3 */}
        <div className="relative -mt-16 -ml-6 w-[354px] h-[260px] transform rounded-[32px] shadow-lg transition-transform duration-300  animate-float">
          <img
            src={img5}
            alt="Travel 5"
            className="w-[300px] xl:w-[354px] h-[260px] xl:h-[288px] object-cover rounded-[32px]"
          />
        </div>

        {/* Group 4 */}
        <div className="relative -mt-4 w-[254px] rounded-[32px] shadow-sm transform transition-transform duration-300  animate-float">
          <img
            src={img6}
            alt="Travel 6"
            className="w-[240px] xl:w-[254px] h-[240px] xl:h-[262px]  object-cover rounded-[32px]"
          />
          <img
            src={img7}
            alt="Travel 7"
            className="absolute top-12 left-28 w-[180px] xl:w-[214px] h-[120px] xl:h-[140px] object-cover rounded-[16px] border-2 border-yellow-100"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
