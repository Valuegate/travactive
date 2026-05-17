import React from "react";
import Logo from "../assets/TravactiveLogo.png";
import RightImage from "../assets/GetStartedImg.jpg";
import { Link } from "react-router-dom";
import UserGradIcon from "../assets/userGraduate.png";
import HealthTravel from "../assets/healthiconsTravel.png";

const GetStarted = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Main Layout Container */}
      <div
        className="
          relative
          w-[1488px] h-[958px]
          top-[12px] left-[12px]
          rounded-[20px]
          opacity-100
          bg-[#F6F6F6]
          overflow-hidden
          flex flex-col lg:flex-row
          items-center
          justify-between
          px-12 lg:px-20
          py-12
          gap-12
        "
      >
        {/* Left side */}
        <div className="flex-1 flex flex-col items-center text-left gap-6">
          <Link to="/" className="absolute top-8 left-36 z-10">
            <img
              src={Logo}
              alt="Travactive Logo"
              className="w-32 h-auto cursor-pointer items-center"
            />
          </Link>

          {/* Heading */}
          <h2
            className="
    w-[478px] h-[36px]
    font-[Outfit]
    font-semibold
    text-[24px]
    leading-[36px]
    tracking-normal
    text-[#212322]
    opacity-100
    mr-[50px]
    mt-[-80px]
  "
          >
            Let’s Personalize Your Travel Experience
          </h2>

          {/* Paragraph */}
          <p className="text-[rgba(51,51,51,0.72)] w-[478px] h-[72px] font-[Inter] mr-[50px] font-medium text-[16px] leading-[24px] tracking-normal">
            Choose the path that fits you—whether you’re a student seeking
            study-abroad insights or a traveler exploring global updates.
          </p>

          {/* Buttons Container */}
          <div
            className="
    flex flex-col
    w-[478px] h-[248px]
    gap-[24px]
    mt-4
    mr-[50px]
  "
          >
            {/* Button 1 */}
            {/* Button 1 */}
<Link
  to="/register"
  className="
    flex flex-col items-start
    flex-1
    px-6 py-4
    bg-[#FFFFFF]
    text-[#212322]
    rounded-[8px]
    font-semibold
    shadow-[0_4px_12px_0_#0000001A]
    hover:bg-[#03B5AA]
    transition
  "
>
  <img
    src={UserGradIcon}
    alt="Graduate Icon"
    className="w-[24px] h-[24px] mb-2"
  />

  <h4 className="w-[446px] font-[Inter] font-semibold text-[14px]">
    As a Student
  </h4>

  <p className="w-[446px] font-[Inter] text-[12px] text-gray-600">
    seeking study-abroad insights.
  </p>
</Link>


           {/* Button 2 */}
<Link
  to="/TravRegister"
  className="
    flex flex-col items-start
    flex-1
    px-6 py-4
    bg-[#FFFFFF]
    text-[#212322]
    rounded-[8px]
    font-semibold
    shadow-[0_4px_12px_0_#0000001A]
    hover:bg-[#FFDE59]
    transition
  "
>
  <img
    src={HealthTravel}
    alt="Health Travel Icon"
    className="w-[24px] h-[24px] mb-2"
  />
  <h4 className="w-[446px] h-[17px] font-[Inter] font-semibold text-[14px] leading-[17px] tracking-normal opacity-100">
    As a Traveler
  </h4>
  <p
    className="
      w-[446px] h-[15px]
      font-[Inter] font-normal text-[12px]
      leading-[15px]
      tracking-normal
      text-gray-600
      opacity-100
    "
  >
    exploring global updates.
  </p>
</Link>

          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 flex justify-center items-center mr-[-46px]">
          <img
            src={RightImage}
            alt="Get Started Illustration"
            className="
      w-[730px] h-[918px]
      rounded-[18px]
      opacity-100
      object-cover
    "
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
