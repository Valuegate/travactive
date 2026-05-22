import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MobileCarousel = ({ images = [], slides = [] }) => {
  // ✅ Use slides if provided, else fallback to images
  const data =
    slides.length > 0
      ? slides
      : images.map((img) => ({
          image: img,
          title: "",
          text: "",
          button: "",
        }));

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!data.length) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:hidden transition-all duration-1500ms ease-in-out"
        style={{
          backgroundImage: `url(${data[currentImage]?.image})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 lg:hidden"></div>

      {/* ✅ TEXT + BUTTON OVERLAY */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 lg:hidden">

        {/* Title */}
        {/* Title */}
{data[currentImage]?.title && (
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
    
    {/* First part */}
    <span className="text-white">
      {Array.isArray(data[currentImage].title)
        ? data[currentImage].title[0]
        : data[currentImage].title}
    </span>

    {/* Second part */}
    {Array.isArray(data[currentImage].title) && (
      <span className="text-[#4ade80] ml-2">
        {data[currentImage].title[1]}
      </span>
    )}
    
  </h1>
)}



        {/* Description */}
        {data[currentImage]?.text && (
          <p className="text-lg sm:text-base md:text-xl mb-6 max-w-[300px] md:max-w-[600px] text-white/90 drop-shadow-md">



            {data[currentImage].text}
          </p>
        )}

        {/* Button */}
        {data[currentImage]?.button && (
          <Link to="/get-started">
            <button className=" btn-secondary1  px-6 py-2 md:px-10 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:scale-105 transition shadow-md md:shadow-xl">


              {data[currentImage].button}
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default MobileCarousel;
