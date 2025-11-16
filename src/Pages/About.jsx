import React from "react";
import Navbar from "../Components/Navbar";
import AboutHero from "../assets/AboutHero.jpg"; // Ensure this image exists in /src/assets
import Globe from "../assets/FrameGlobe.png"; // Ensure this image exists in /src/assets
import Globe2 from "../assets/FrameGlobe2.png"; // Ensure this image exists in /src/assets
import img8 from "../assets/Image.png"; // Ensure this image exists in /src/assets
import CTA from "../Components/CTA.jsx"
const About = () => {
  return (
    <>  
    <section className="relative w-full -mt-12 mb-10  bg-slate-50 flex justify-center">
      {/* Hero Section */}
      <div
        className="relative bg-center bg-cover flex flex-col justify-start overflow-hidden"
        style={{
          backgroundImage: `url(${AboutHero})`,
          width: "100%",
          height: "982px",
          opacity: "revert"
          
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45 z-0 rounded-2xl"></div>

        {/* Navbar */}
        <div className="relative z-20 mt-8 sticky">
          <Navbar />
        </div>

        {/* Text + Card Container */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center text-white px-6 md:px-8">
          <div className="max-w-4xl">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              We Don’t Just Share Travel Info; We Simplify It for You
            </h3>

            <p className="mt-4 text-sm md:text-base opacity-90">
              Actionable tips, clear guides, and friendly tools everything you
              need to plan better trips with less stress. We turn complexity
              into clarity so you can travel more and worry less.
            </p>

            {/* Card Section right after the paragraph */}
            <div className="mt-46 bg-white text-left text-slate-900 rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Column 1 */}
                <div className="p-6 md:p-8 flex-1">
                  <h4 className="text-lg font-medium">Expert Guides</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Practical, up-to-date guides written by experienced
                    travellers and local insiders.
                  </p>
                  <hr className="mt-6 md:hidden border-t border-green-500" />
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px bg-gray-200" />

                {/* Column 2 */}
                <div className="p-6 md:p-8 flex-1">
                  <h4 className="text-lg font-medium">Simple Tools</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    From packing checklists to budget planners, our tools remove
                    the guesswork.
                  </p>
                  <hr className="mt-6 md:hidden border-t border-gray-500" />
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px bg-gray-200" />

                {/* Column 3 */}
                <div className="p-6 md:p-8 flex-1">
                  <h4 className="text-lg font-medium">Trusted Tips</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Real recommendations you can rely on — vetted, current, and
                    easy to follow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="max-w-7xl mx-auto px-8 space-y-16">
  {/* ======= First Div ======= */}
  <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
    {/* Text Section */}
    <div className="flex-1 max-w-xl lg:pr-6 flex flex-col justify-center">
      <h3 className="font-[Outfit] text-left font-semibold text-[40px] lg:text-[48px] leading-[52px] text-[#023436] mb-4">
        Behind Travactiv
      </h3>
      <p className="font-[Inter] font-normal text-[16px] leading-[24px] tracking-[0px] text-left text-slate-600">
  We make travel decisions easier by combining verified information with
  AI-powered insights. Plan confidently with real-time updates and
  data-driven travel tools built for today’s explorer. <br /> <br />
  We’re not just another travel platform; we’re your partner in navigating
  visas, rules, advisories, and opportunities. Whether you’re a student
  chasing dreams abroad or a traveler seeking safe, confident journeys,
  Travactiv was designed to put trustworthy information at your fingertips.
</p>

    </div>

    {/* Image Section */}
    <div className="flex-1 max-w-[560px] h-[500px] rounded-2xl overflow-hidden shadow-lg flex justify-center items-center">
      <img
        src={Globe2}
        alt="Travel Info"
        className="w-full h-full object-cover rounded-2xl transform transition duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* ======= Second Div ======= */}
  <div className="flex flex-col lg:flex-row-reverse items-center justify-center text-center lg:text-left">
    {/* Text Section */}
   <div className="flex-1 max-w-xl lg:pl-6 flex flex-col justify-center">
  <h3 className="font-[Outfit] text-center lg:text-right font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] leading-[38px] sm:leading-[42px] md:leading-[48px] lg:leading-[52px] text-[#023436] mb-4">
    Why Choose Travactiv
  </h3>
  <p className="font-[Inter] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] tracking-[0px] text-center lg:text-right text-slate-600">
    At Travactiv, we believe travel decisions should be guided by clarity,
    not confusion. Built with the modern traveler in mind, our platform
    blends trusted global sources with AI-powered insights — so you get
    accurate, timely, and practical information without the noise.
  </p>
</div>


    {/* Image Section */}
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

 {/* CTA Card */}
    <CTA />
    </>
  );
};

export default About;
