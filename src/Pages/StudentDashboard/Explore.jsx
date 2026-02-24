import React, { useState } from "react";
import Calender from "../../Components/MyCalender.jsx";
import Arrow from "../../assets/VectorArrow.png"; // import your logo image
import Circle from "../../assets/CircleLine.png"; // import your logo image
import Oxford from "../../assets/OxfordUniversity.jpg"; // import your logo image
import Oxford2 from "../../assets/CambridgeUniversity.jpg";
import Oxford3 from "../../assets/OxfordUniversity2.jpg";
import Oxford4 from "../../assets/OxfordUniversity3.jpg";
import Oxford5 from "../../assets/OxfordUniversity4.jpg";
import Oxford6 from "../../assets/OxfordUniversity5.jpg";
import Oxford7 from "../../assets/OxfordUniversity6.jpg";
import Oxford8 from "../../assets/OxfordUniversity7.jpg";
import NewsCard from "../../Components/NewsCard.jsx";

const flags = [
  { id: 1, country: "United Kingdom", flag: "https://flagcdn.com/w20/gb.png" },
  { id: 2, country: "Nigeria", flag: "https://flagcdn.com/w20/ng.png" },
  { id: 3, country: "United States", flag: "https://flagcdn.com/w20/us.png" },
  { id: 4, country: "Ukraine", flag: "https://flagcdn.com/w20/ua.png" },
  { id: 5, country: "Canada", flag: "https://flagcdn.com/w20/ca.png" },
];

export default function Explore() {
  const [selectedCountry, setSelectedCountry] = useState(flags[0]);

  const buttonStyle = `
    w-[236px]
    h-[44px]
    opacity-100
    flex
    items-center
    justify-between
    rounded-[12px]
    px-[20px]
    py-[13.5px]
    border border-gray-200
    bg-white
    text-[12px]
  `;

  return (
    <>
      <div>
        <div
          className="
      w-[752px]
      h-[44px]
      opacity-100
      flex
      items-center
      gap-[22px]
    "
          style={{
            position: "absolute",
            top: "128px",
            left: "274px",
          }}
        >
          {/* FIRST BUTTON: Country + Flag */}
          <button className={buttonStyle}>
            <span className="font-medium text-[#212322]">
              {selectedCountry.country}
            </span>

            <img
              src={selectedCountry.flag}
              alt={selectedCountry.country}
              className="w-[20px] h-[14px] object-cover"
            />
          </button>

          {/* SECOND BUTTON */}
          <select
            className={`${buttonStyle} outline-none`}
            value={selectedCountry.id}
            onChange={(e) =>
              setSelectedCountry(
                flags.find((f) => f.id === parseInt(e.target.value)),
              )
            }
          >
            {flags.map((item) => (
              <option key={item.id} value={item.id}>
                {item.country}
              </option>
            ))}
          </select>

          {/* THIRD BUTTON */}
          <button
            className={`
        w-[236px]
        h-[44px]
        opacity-100
        flex
        items-center
        justify-center
        gap-[10px]
        rounded-[100px]
        px-[12px]
        py-[13px]
        bg-[#005A58]
        text-white
        font-semibold
        border-none
      `}
          >
            Apply
          </button>
        </div>

        {/* ===== NEW CONTAINER AFTER BUTTONS ===== */}
        <div className="mt-[100px] ">
          <h3
            className="
    w-[752px]
    h-[25px]
    opacity-100
    font-[Outfit]
    font-semibold
    text-[20px]
    tracking-[0px]
    text-[#212322]
  "
            style={{ lineHeight: "100%" }}
          >
            Scholarships
          </h3>

          <div
            className="
    w-[752px]
    h-[200px]
    opacity-100
    flex
    gap-[22px]
  "
          >
            {/* CARD 1 */}
            <div
              className="
      w-[236px]
      h-[200px]
      opacity-100
      flex
      flex-col
      gap-[10px]
      rounded-[12px]
      p-[20px]
      bg-white
      shadow
    "
            >
              <div className="flex items-center justify-between">
                <h4
                  style={{
                    width: "196px",
                    height: "38px",
                    opacity: 1,
                    transform: "rotate(0deg)",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontStyle: "Medium",
                    fontSize: "14px",
                    lineHeight: "19px",
                    letterSpacing: "0px",
                  }}
                >
                  Royal Society Wolfson Visiting Fellowship 2025
                </h4>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--Goint-newpp, #400097)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  back
                  strokeLinejoin="round"
                  className="cursor-pointer"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <p
                style={{
                  width: "196px",
                  height: "80px",
                  opacity: 0.78,
                  transform: "rotate(0deg)",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontStyle: "Regular",
                  fontSize: "10px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "#333333",
                }}
              >
                This is a prestigious and fully funded opportunity for
                established international researchers to spend up to 12 months
                conducting collaborative research at a leading Uk university or
                research instit.... 
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <img
                    src={"https://flagcdn.com/w20/gb.png"}
                    alt="UK"
                    className="w-[14px] h-[14px] rounded-full object-cover"
                  />
                  <span
                    style={{
                      width: "65px",
                      height: "12px",
                      opacity: 1,
                      transform: "rotate(0deg)",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontStyle: "Regular",
                      fontSize: "10px",
                      lineHeight: "12px",
                      letterSpacing: "0px",
                      color: "#008000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "2px",
                    }}
                  >
                    Fully Funded
                  </span>
                </div>
                <div className="flex items-center gap-[40px]">
                  <img
                    src={Arrow}
                    alt="UK"
                    className="w-[9.75px] top-[4.18px]  h-[5.63px] object-cover"
                  />
                  <div className="w-[20px] h-[20px] rounded-full ">
                    <img src={Circle} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
      w-[236px]
      h-[200px]
      opacity-100
      flex
      flex-col
      gap-[10px]
      rounded-[12px]
      p-[20px]
      bg-white
      shadow
    "
            >
              <div className="flex items-center justify-between">
                <h4
                  style={{
                    width: "196px",
                    height: "38px",
                    opacity: 1,
                    transform: "rotate(0deg)",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontStyle: "Medium",
                    fontSize: "14px",
                    lineHeight: "19px",
                    letterSpacing: "0px",
                  }}
                >
                  Royal Society Wolfson Visiting Fellowship 2025
                </h4>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#212322"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="cursor-pointer"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <p
                style={{
                  width: "196px",
                  height: "80px",
                  opacity: 0.78,
                  transform: "rotate(0deg)",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontStyle: "Regular",
                  fontSize: "10px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "#333333",
                }}
              >
                This is a prestigious and fully funded opportunity for
                established international researchers to spend up to 12 months
                conducting collaborative research at a leading Uk university or
                research instit.... 
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <img
                    src={"https://flagcdn.com/w20/gb.png"}
                    alt="UK"
                    className="w-[14px] h-[14px] rounded-full object-cover"
                  />
                  <span
                    style={{
                      width: "65px",
                      height: "12px",
                      opacity: 1,
                      transform: "rotate(0deg)",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontStyle: "Regular",
                      fontSize: "10px",
                      lineHeight: "12px",
                      letterSpacing: "0px",
                      color: "#008000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "2px",
                    }}
                  >
                    $20,000
                  </span>
                </div>
                <div className="flex items-center gap-[40px]">
                  <img
                    src={Arrow}
                    alt="UK"
                    className="w-[9.75px] top-[4.18px]  h-[5.63px] object-cover"
                  />
                  <div className="w-[20px] h-[20px] rounded-full ">
                    <img src={Circle} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="
      w-[236px]
      h-[200px]
      opacity-100
      flex
      flex-col
      gap-[10px]
      rounded-[12px]
      p-[20px]
      bg-white
      shadow
    "
            >
              <div className="flex items-center justify-between">
                <h4
                  style={{
                    width: "196px",
                    height: "38px",
                    opacity: 1,
                    transform: "rotate(0deg)",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontStyle: "Medium",
                    fontSize: "14px",
                    lineHeight: "19px",
                    letterSpacing: "0px",
                  }}
                >
                  Royal Society Wolfson Visiting Fellowship 2025
                </h4>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#212322"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="cursor-pointer"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <p
                style={{
                  width: "196px",
                  height: "80px",
                  opacity: 0.78,
                  transform: "rotate(0deg)",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontStyle: "Regular",
                  fontSize: "10px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "#333333",
                }}
              >
                This is a prestigious and fully funded opportunity for
                established international researchers to spend up to 12 months
                conducting collaborative research at a leading Uk university or
                research instit.... 
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <img
                    src={"https://flagcdn.com/w20/gb.png"}
                    alt="UK"
                    className="w-[14px] h-[14px] rounded-full object-cover"
                  />
                  <span
                    style={{
                      width: "65px",
                      height: "12px",
                      opacity: 1,
                      transform: "rotate(0deg)",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontStyle: "Regular",
                      fontSize: "10px",
                      lineHeight: "12px",
                      letterSpacing: "0px",
                      color: "#008000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "2px",
                    }}
                  >
                    $10,000
                  </span>
                </div>
                <div className="flex items-center gap-[40px]">
                  <img
                    src={Arrow}
                    alt="UK"
                    className="w-[9.75px] top-[4.18px]  h-[5.63px] object-cover"
                  />
                  <div className="w-[20px] h-[20px] rounded-full ">
                    <img src={Circle} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col w-[752px] gap-[16px]"
          style={{
            width: "752px",
            height: "362px",
            opacity: 1,
            transform: "rotate(0deg)",
            position: "absolute",
            top: "455px",
            left: "274px",
            bottom: "auto",
            background: "#FFFFFF",
            boxShadow: "0px 5px 12px 0px #1212120A",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h3
            style={{
              width: "752px",
              height: "25px",
              opacity: 1,
              transform: "rotate(0deg)",
              fontFamily: "Outfit",
              fontWeight: 600,
              fontStyle: "SemiBold",
              fontSize: "20px",
              lineHeight: "25px",
              letterSpacing: "0px",
              color: "#212322",
            }}
          >
            Top Universities
          </h3>
          <p
            style={{
              width: "752px",
              height: "40px",
              opacity: 0.8,
              transform: "rotate(0deg)",
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "Regular",
              fontSize: "14px",
              lineHeight: "19px",
              letterSpacing: "0px",
              color: "#333333",
            }}
          >
            Discover highly ranked universities across key study destinations.
          </p>
          <div className="grid grid-cols-4 gap-[10px]">
            {/* CARD 1 */}
            <div
              className="relative  flex flex-col w-[166px] h-[120px] rounded-[12px] overflow-hidden shadow "
              style={{ background: "#21232299" }}
            >
              <img
                src={Oxford}
                alt="Scholarship 1"
                className="w-full h-[180px] object-cover rounded-[12px] opacity-50"
              />

              <p
                className="absolute bottom-[22px] left-[8px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "#ffffff",
                  textWrap: "nowrap",
                  padding: "4px 6px",
                  borderRadius: "4px",
                }}
              >
                Oxford University
              </p>
              <p
                className="absolute bottom-[14px] left-[13px]"
                style={{
                  width: "101px",
                  height: "10px",

                  textWrap: "nowrap",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "8px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                }}
              >
                Dominus illuminatio
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="relative  flex flex-col gap-[6px] w-[166px] h-[120px] bg-white rounded-[12px] shadow "
              style={{ background: "#21232299" }}
            >
              <img
                src={Oxford2}
                alt="Scholarship 2"
                className="w-full h-[120px] object-cover rounded-[8px] opacity-50"
              />
             <p
                className="absolute bottom-[22px] left-[8px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "#ffffff",
                  textWrap: "nowrap",
                  padding: "4px 6px",
                  borderRadius: "4px",
                }}
              >
               Cambridge University
              </p>
              <p
                className="absolute bottom-[14px] left-[13px]"
                style={{
                  width: "101px",
                  height: "10px",

                  textWrap: "nowrap",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "8px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                }}
              >
                Dominus illuminatio
              </p>
            </div>
            {/* CARD 3 */}
            <div
              className="relative   flex flex-col gap-[6px] w-[166px] h-[120px] bg-white rounded-[12px] shadow "
              style={{ background: "#21232299" }}
            >
              <img
                src={Oxford3}
                alt="Scholarship 3"
                className="w-full h-[120px] object-cover rounded-[8px] opacity-50"
              />
              <p
                className="absolute bottom-[22px] left-[8px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "#ffffff",
                  textWrap: "nowrap",
                  padding: "4px 6px",
                  borderRadius: "4px",
                }}
              >
                Oxford University
              </p>
              <p
                className="absolute bottom-[14px] left-[13px]"
                style={{
                  width: "101px",
                  height: "10px",

                  textWrap: "nowrap",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "8px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                }}
              >
                Dominus illuminatio
              </p>
            </div>
            {/* CARD 4 */}
            <div
              className="relative  flex flex-col gap-[6px] w-[166px] h-[120px] bg-white rounded-[12px] shadow "
              style={{ background: "#21232299" }}
            >
              <img
                src={Oxford4}
                alt="Scholarship 4"
                className="w-full h-[120px] object-cover rounded-[8px] opacity-50"
              />
              <p
                className="absolute bottom-[22px] left-[8px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "#ffffff",
                  textWrap: "nowrap",
                  padding: "4px 6px",
                  borderRadius: "4px",
                }}
              >
                Oxford University
              </p>
              <p
                className="absolute bottom-[14px] left-[13px]"
                style={{
                  width: "101px",
                  height: "10px",

                  textWrap: "nowrap",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "8px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                }}
              >
                Dominus illuminatio
              </p>
            </div>
            {/* CARD 5 */}
            <div
              className="relative  flex flex-col gap-[6px] w-[166px] h-[120px] bg-white rounded-[12px] shadow "
              style={{ background: "#21232299" }}
            >
              <img
                src={Oxford5}
                alt="Scholarship 1"
                className="w-full h-[120px] object-cover rounded-[8px] opacity-50"
              />
              <p
                className="absolute bottom-[22px] left-[8px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "#ffffff",
                  textWrap: "nowrap",
                  padding: "4px 6px",
                  borderRadius: "4px",
                }}
              >
                Oxford University
              </p>
              <p
                className="absolute bottom-[14px] left-[13px]"
                style={{
                  width: "101px",
                  height: "10px",

                  textWrap: "nowrap",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "8px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                }}
              >
                Dominus illuminatio
              </p>
            </div>
            {/* CARD 6 */}
            <div
              className="relative  flex flex-col gap-[6px] w-[166px] h-[120px] bg-white rounded-[12px] shadow "
              style={{ background: "#21232299" }}
            >
              <img
                src={Oxford6}
                alt="Scholarship 2"
                className="w-full h-[120px] object-cover rounded-[8px] opacity-50"
              />
              <p
                className="absolute bottom-[22px] left-[8px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "#ffffff",
                  textWrap: "nowrap",
                  padding: "4px 6px",
                  borderRadius: "4px",
                }}
              >
                Oxford University
              </p>
              <p
                className="absolute bottom-[14px] left-[13px]"
                style={{
                  width: "101px",
                  height: "10px",

                  textWrap: "nowrap",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "8px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                }}
              >
                Dominus illuminatio
              </p>
            </div>
            {/* CARD 7 */}
            <div
              className="relative  flex flex-col gap-[6px] w-[166px] h-[120px] bg-white rounded-[12px] shadow "
              style={{ background: "#21232299" }}
            >
              <img
                src={Oxford7}
                alt="Scholarship 3"
                className="w-full h-[120px] object-cover rounded-[8px] opacity-50"
              />
             <p
                className="absolute bottom-[22px] left-[8px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "#ffffff",
                  textWrap: "nowrap",
                  padding: "4px 6px",
                  borderRadius: "4px",
                }}
              >
                Oxford University
              </p>
              <p
                className="absolute bottom-[14px] left-[13px]"
                style={{
                  width: "101px",
                  height: "10px",

                  textWrap: "nowrap",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "8px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                }}
              >
                Dominus illuminatio
              </p>
            </div>
            {/* CARD 8 */}
            <div
              className="relative  flex flex-col gap-[6px] w-[166px] h-[120px] bg-white rounded-[12px] shadow "
              style={{ background: "#21232299" }}
            >
              <img
                src={Oxford8}
                alt="Scholarship 4"
                className="w-full h-[120px] object-cover rounded-[8px] opacity-50"
              />
            <p
                className="absolute bottom-[22px] left-[8px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "#ffffff",
                  textWrap: "nowrap",
                  padding: "4px 6px",
                  borderRadius: "4px",
                }}
              >
                Oxford University
              </p>
              <p
                className="absolute bottom-[14px] left-[13px]"
                style={{
                  width: "101px",
                  height: "10px",

                  textWrap: "nowrap",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "8px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                }}
              >
                Dominus illuminatio
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-[360px] bg-white rounded-[12px] shadow p-6 flex flex-col justify-between"
        style={{ position: "absolute", top: "130px", left: "1090px" }}
      >
        <div className="flex-1 flex items-center justify-center text-gray-400">
          <Calender />

        </div>
      </div>
      <div   style={{ position: "absolute", top: "-9px", left: "-10px" }}>
          <NewsCard/>
        </div>
    </>
  );
}
