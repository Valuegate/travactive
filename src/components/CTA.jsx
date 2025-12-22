import React from "react";
import CTAImage from"../assets/CTAImage.png";

const CTA = () => {
  return (
    <section
  className="relative text-white  text-center py-12 rounded-2xl shadow-md max-w-6xl mx-auto px-4  sm:mt-16 md:mt-20"
  style={{
    backgroundImage: `linear-gradient(rgba(255, 76, 41, 0.85), rgba(255, 76, 41, 0.85)), url(${CTAImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay", // blends color with image
    backgroundColor: "#FF4C29", // your main CTA color
  }}
>
  <h3 className="font-[Outfit] font-semibold text-2xl sm:text-3xl md:text-[40px] lg:text-[48px] leading-tight md:leading-[54px] lg:leading-[58px] max-w-[792px] mx-auto mb-4">
    Don’t Just Travel — Travel Informed
  </h3>

  <p className="text-sm sm:text-base md:text-[16px] leading-relaxed md:leading-[24px] font-normal max-w-2xl mx-auto mb-6">
    Get AI-powered insights, real-time advisories, and simplified updates
    that help you make smarter choices—whether you’re studying abroad or
    exploring the world.
  </p>

  <button className="bg-[#005A58] text-white text-[15px] sm:text-[16px] font-[Sora] font-semibold w-[180px] sm:w-[200px] md:w-[229px] px-6 py-3 rounded-full transition duration-300 hover:bg-[#007A76] hover:scale-105">
    Get Started Now
  </button>
</section>

  );
};

export default CTA;
