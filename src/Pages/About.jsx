import React from "react";
import Navbar from "../Components/Navbar";
import AboutHero from "../assets/AboutHero.jpg";
import Globe from "../assets/FrameGlobe.png";
import Globe2 from "../assets/FrameGlobe2.png";
import img8 from "../assets/Image.png";
import CTA from "../Components/CTA.jsx";
import HeroImage from "../assets/CTAImage.png";
import Simplified from "../assets/Simplified.jpg";
import Bag from "../assets/Bag.jpg";
import ClearInsight from "../assets/ClearInsight.jpg";

const About = () => {
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section className="relative w-full h-auto mb-1 flex justify-center px-2">
        <div
          className="relative w-full max-w-[1472px] min-h-[600px] sm:min-h-[700px] lg:min-h-[900px] bg-center bg-cover flex flex-col overflow-hidden rounded-[16px]"
          style={{
            backgroundImage: `linear-gradient(#0234368F, #0234368F), url(${AboutHero})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-0 rounded-2xl"></div>

          {/* Navbar */}
          <div className="relative z-20 mt-6 sm:mt-8">
            <Navbar />
          </div>

          {/* Hero Text */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 grow">
            <div className="max-w-4xl mt-10 sm:mt-16 lg:mt-0 mb-10 sm:mb-20 lg:mb-40">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                We Don’t Just Share Travel Info; We Simplify It for You
              </h3>
            </div>

            {/* Cards */}
            <div
              className="w-full mt-5 mb-5 sm:mt-16 md:max-w-[1344px] flex flex-col md:flex-row gap-4 p-3 mx-auto rounded-[14px] shadow-lg"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 76, 41, 0.1), rgba(255, 76, 41, 0.1)), url(${HeroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "lighten",
                backgroundColor: "rgba(255,255,255,0.75)",
              }}
            >
              {[ 
                {
                  img: Simplified,
                  title: "Fact-Checked Travel, Simplified",
                  text: "Practical, up-to-date guides written by experienced travellers and local insiders.",
                },
                {
                  img: Bag,
                  title: "Built for Every Kind of Traveler",
                  text: "Whether you’re a student or global explorer, we’ve built tools tailored for your journey.",
                },
                {
                  img: ClearInsight,
                  title: "Clear Insights. Smarter Decisions",
                  text: "We simplify visas, travel rules, and updates so you can make confident decisions.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                 className="flex flex-row md:flex-col lg:flex-row items-cente md:items-start lg:items-center gap-4 w-full md:w-1/3 p-2 border-b md:border-b-0 md:border-r last:border-none border-[#023436]"

                >
                  <div className="flex flex-col items-center w-full md:items-center">

                    <div className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-lg">
                      <img src={card.img} alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col gap-1 mt-2 items-center">
                      <div className="w-[84px] h-[6px] bg-[#03B5AA] rounded"></div>
                      <div className="w-[56px] h-[6px] bg-[#03B5AA] rounded"></div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[18px] sm:text-[22px] font-medium text-[#023436]">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-[13px] sm:text-[14px] text-[#333333D6]">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t-2 border-[#023436] my-12"></div>

      {/* ======= About Section ======= */}
      <section className="max-w-[1345px] mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div className="w-full max-w-[660px]">
            <h2 className="text-[#023436] text-3xl sm:text-4xl font-semibold">
              Behind Travactiv
            </h2>

            <p className="text-gray-600 mt-4">
              At Travactiv, we believe travel decisions should be guided by clarity, not confusion. Built with the modern traveler in mind, our platform blends trusted global sources with AI-powered insights.
            </p>

            <p className="text-gray-600 mt-4">
              We’re your partner in navigating visas, rules, advisories, and opportunities—helping you travel smarter and more confidently.
            </p>
          </div>

          <div className="w-full h-[300px] sm:h-[500px] lg:h-[724px] overflow-hidden rounded-[16px] shadow-lg" style={{  opacity: 1, borderTopLeftRadius: "16px", borderTopRightRadius: "80px", borderBottomRightRadius: "16px", borderBottomLeftRadius: "16px",}}>
            <img src={Globe} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">
          <div className="w-full h-[300px] sm:h-[500px] lg:h-[724px] overflow-hidden rounded-[16px] shadow-lg " style={{  opacity: 1, borderTopLeftRadius: "16px", borderTopRightRadius: "16px", borderBottomRightRadius: "16px", borderBottomLeftRadius: "80px", }}>
            <img src={Globe2} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="w-full max-w-[660px] lg:ml-auto text-left lg:text-right">
            <h2 className="text-[#023436] text-3xl sm:text-4xl font-semibold">
              Why Choose Travactiv
            </h2>

            <p className="text-gray-600 mt-4">
              At Travactiv, we go beyond ordinary travel updates. Every piece of information you see is AI-verified, sourced from credible global channels, and tailored to your journey. No noise, no guesswork—just the clarity you need to make informed decisions. Whether you’re navigating visa requirements, checking safety advisories, or planning your next adventure, Travactiv ensures you stay one step ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Divider Image */}
      <div>
        <img
          src={img8}
          alt="divider"
          className="hidden lg:block mt-16 w-full h-[120px] xl:h-[180px] object-cover rounded"
        />
      </div>

      {/* CTA */}
      <CTA />
    </>
  );
};

export default About;
