import { useEffect, useState } from "react";
import img1 from "../assets/TopPickImg.jpg";
import img2 from "../assets/TopPickImg1.jpg";
import img3 from "../assets/TopPickImg2.jpg";
const images = [
  img1,
  img2,
  img3  
];

const TopPickCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[753px] h-[232px] overflow-hidden rounded-xl">
      
      {/* IMAGES */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="carousel"
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* OPTIONAL DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TopPickCarousel;
