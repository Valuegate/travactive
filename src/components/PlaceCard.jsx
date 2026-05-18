import React from "react";

const PlaceCard = ({ title,label ,img1, icon, description }) => {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-xl p-4">
      <p>{label}</p>
      
     <img
  src={img1}
  alt={title}
  className="w-[713px] h-[328px] object-cover rounded-lg"
/>


      {/* TITLE + ICON */}
      <div className="flex items-center gap-2">
        <img src={icon} alt="icon" className="w-5 h-5" />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {/* DESCRIPTION */}
      <p className="font-[Inter] font-normal text-[16px] leading-[24px] tracking-[0.16%] text-[#333333B8]">
  {description}
</p>


      {/* BUTTON */}
     <button className="w-full max-w-[713px] h-[46px] rounded-full px-3 flex items-center justify-center gap-[10px] bg-[#005A58] text-white hover:opacity-90 transition">
  Read More
</button>


    </div>
  );
};

export default PlaceCard;
