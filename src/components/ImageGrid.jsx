import React from "react";

// ✅ Import images from src/assets/img
import mapPin from "../assets/mapPin.jpeg";
import beach from "../assets/beach.jpeg";
import city from "../assets/city.jpg";
import roadmap from "../assets/roadmap.jpeg";
import manwalking from "../assets/manwalking.jpeg";
import graduates from "../assets/graduates.jpg";
import studentpic from "../assets/studentpic.jpg"
import girlonboat from "../assets/girlonboat.jpg"


const ImageGrid = () => {
  const images = [
    {
      src: mapPin,
      alt: "Traveler looking at a map with pins",
      className: "image-large" // Custom class for this image
    },
    {
      src: beach,
      alt: "Relaxing at the beach",
      className: "image-small"
    },
    {
      src: city,
      alt: "Exploring a city",
      className: "image-medium"
    },
    {
      src: studentpic,
      alt: "Students photo",
      className: "image-small"
    },
    {
      src: roadmap,
      alt: "road map image",
      className: "image-large"
    },
    {
      src: graduates,
      alt: "Students graduation",
      className: "image-medium"
    },
    {
      src: manwalking,
      alt: "man walking by the railway",
      className: "image-small"
    },
    {
      src: girlonboat,
      alt: "girl sitting on the boat",
      className: "image-large"
    }
  ];

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className={`grid-item ${image.className || ''}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;