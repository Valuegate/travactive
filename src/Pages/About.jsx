import React from "react";
import Navbar from "../Components/Navbar";
import AboutHero from "../assets/AboutHero.jpg"; // Ensure this image exists in /src/assets
import Globe from "../assets/FrameGlobe.png"; // Ensure this image exists in /src/assets
import Globe2 from "../assets/FrameGlobe2.png"; // Ensure this image exists in /src/assets
import img8 from "../assets/Image.png"; // Ensure this image exists in /src/assets
import CTA from "../Components/CTA.jsx";
import HeroImage from "../assets/AboutHeroImage.png";
import Simplified from "../assets/Simplified.jpg";
import Bag from "../assets/Bag.jpg";
import ClearInsight from "../assets/ClearInsight.jpg";

const About = () => {
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section className="relative w-full -mt-12 mb-10 flex justify-center">
        <div
          className="relative bg-center bg-cover flex flex-col justify-start overflow-hidden rounded-[16px]"
          style={{
            backgroundImage: `url(${AboutHero})`,
            width: "1500px",
            height: "982px",
            backgroundColor: "#0234368F",
            opacity: "1",
            top: "20px",
            // left: "20px",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-0 rounded-2xl"></div>

          {/* Navbar */}
          <div className="relative z-20 mt-8 sticky">
            <Navbar />
          </div>

          {/* Text + Card Container */}
          <div className="relative z-10 -mt-8 sm:mt-3.5 flex-grow flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
  <div className="max-w-4xl mb-64 space-y-12 sm:mb-12 ">
    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
      We Don’t Just Share Travel Info; We Simplify It for You
    </h3>
  </div>

  {/* Card Section */}
  <div
    className="w-full max-w-full md:max-w-[1344px] flex flex-col md:flex-row justify-center gap-4 p-2 mx-auto rounded-[14px] shadow-lg overflow-hidden"
    style={{
      backgroundImage: `linear-gradient(rgba(255, 76, 41, 0.1), rgba(255, 76, 41, 0.1)), url(${HeroImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
      backgroundColor: "rgba(255, 255, 255, 0.88)",
    }}
  >
    <div className="flex flex-col md:flex-row justify-between gap-4 w-full">

      {/* Card 1 */}
      <div className="flex flex-row items-center gap-4 w-full md:w-[394px] p-2 border-b md:border-b-0 md:border-r border-[#023436]">
        <div className="w-24 h-24 overflow-hidden rounded-lg flex-shrink-0">
          <img
            src={Simplified}
            alt="Expert Guides"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col text-start">
          <h4 className="text-[20px] sm:text-[24px] leading-[24px] font-medium text-[#023436] font-[Outfit]">
            Fact-Checked Travel, Simplified
          </h4>
          <p className="mt-2 text-[12px] sm:text-[14px] leading-[18px] text-[#333333D6] font-[Inter]">
            Practical, up-to-date guides written by experienced travellers and local insiders.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-row items-center gap-4 w-full md:w-[394px] p-2 border-b md:border-b-0 md:border-r border-[#023436]">
        <div className="w-24 h-24 overflow-hidden rounded-lg flex-shrink-0">
          <img
            src={Bag}
            alt="Simple Tools"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col text-start">
          <h4 className="text-[20px] sm:text-[24px] leading-[24px] font-medium text-[#023436] font-[Outfit]">
            Built for Every Kind of Traveler
          </h4>
          <p className="mt-2 text-[12px] sm:text-[14px] leading-[18px] text-[#333333D6] font-[Inter]">
            Whether you’re a student exploring study opportunities, a global explorer seeking advisories, we’ve built tools just for you.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-row items-center gap-4 w-full md:w-[394px] p-2">
        <div className="w-24 h-24 overflow-hidden rounded-lg flex-shrink-0">
          <img
            src={ClearInsight}
            alt="Trusted Tips"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col text-start">
          <h4 className="text-[20px] sm:text-[24px] leading-[24px] font-medium text-[#023436] font-[Outfit]">
            Clear Insights. Smarter Decisions
          </h4>
          <p className="mt-2 text-[12px] sm:text-[14px] leading-[18px] text-[#333333D6] font-[Inter]">
            We cut through the complexity of visas, travel rules & global updates, giving you clear insights for decision-making.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

        </div>
      </section>

      {/* ======= About Section ======= */}
      <section className="max-w-7xl mx-auto px-8 space-y-16">
        {/* First Div */}
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
          {/* Text */}
          <div className="flex-1 max-w-xl lg:pr-6 flex flex-col justify-center">
            <h3 className="font-[Outfit] text-left font-semibold text-[40px] lg:text-[48px] leading-[52px] text-[#023436] mb-4">
              Behind Travactiv
            </h3>
            <p className="font-[Inter] font-normal text-[16px] leading-[24px] text-left text-slate-600">
              We make travel decisions easier by combining verified information
              with AI-powered insights. Plan confidently with real-time updates
              and data-driven travel tools built for today’s explorer. <br />
              <br />
              We’re not just another travel platform; we’re your partner in
              navigating visas, rules, advisories, and opportunities. Whether
              you’re a student chasing dreams abroad or a traveler seeking safe,
              confident journeys, Travactiv was designed to put trustworthy
              information at your fingertips.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 max-w-[560px] h-[500px] rounded-2xl overflow-hidden shadow-lg flex justify-center items-center">
            <img
              src={Globe2}
              alt="Travel Info"
              className="w-full h-full object-cover rounded-2xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Second Div */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center text-center lg:text-left">
          {/* Text */}
          <div className="flex-1 max-w-xl lg:pl-6 flex flex-col justify-center">
            <h3 className="font-[Outfit] text-center lg:text-right font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] leading-[38px] sm:leading-[42px] md:leading-[48px] lg:leading-[52px] text-[#023436] mb-4">
              Why Choose Travactiv
            </h3>
            <p className="font-[Inter] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-center lg:text-right text-slate-600">
              At Travactiv, we believe travel decisions should be guided by
              clarity, not confusion. Built with the modern traveler in mind,
              our platform blends trusted global sources with AI-powered
              insights — so you get accurate, timely, and practical information
              without the noise.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 max-w-[560px] h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg flex justify-center items-center mx-auto">
            <img
              src={Globe}
              alt="Visa Info"
              className="w-full h-full object-cover rounded-2xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Divider Image */}
      <div>
        <img
          src={img8}
          alt="img8"
          className="hidden mt-16 lg:block w-full h-[180px] xl:h-[100px] object-cover opacity-70 rounded-[5px]"
        />
      </div>

      {/* CTA */}
      <CTA />
    </>
  );
};

export default About;
