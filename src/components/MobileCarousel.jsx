import React, { useState, useEffect } from "react";

const MobileCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center lg:hidden transition-all duration-[1500ms] ease-in-out"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
      <div className="absolute inset-0 bg-black/50 lg:hidden"></div>
    </>
  );
};

export default MobileCarousel;
