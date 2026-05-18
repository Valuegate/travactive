import React, { useState, useContext } from "react";
import Calender from "../../Components/MyCalender.jsx";

import Oxford from "../../assets/OxfordUniversity.jpg";
import Oxford2 from "../../assets/CambridgeUniversity.jpg";
import Oxford3 from "../../assets/OxfordUniversity2.jpg";
import Oxford4 from "../../assets/OxfordUniversity3.jpg";
import Oxford5 from "../../assets/OxfordUniversity4.jpg";
import Oxford6 from "../../assets/OxfordUniversity5.jpg";
import Oxford7 from "../../assets/OxfordUniversity6.jpg";
import Oxford8 from "../../assets/OxfordUniversity7.jpg";
import FlashImg from "../../assets/diagram1.svg";

import NewsCard from "../../Components/NewsCard.jsx";
import { scholarships } from "../../assets/scholarshipData";
import { SavedContext } from "../../Components/SavedContext.jsx";

const flags = [
  { id: 1, country: "United Kingdom", flag: "https://flagcdn.com/w20/gb.png" },
  { id: 2, country: "Nigeria", flag: "https://flagcdn.com/w20/ng.png" },
  { id: 3, country: "United States", flag: "https://flagcdn.com/w20/us.png" },
  { id: 4, country: "Ukraine", flag: "https://flagcdn.com/w20/ua.png" },
  { id: 5, country: "Canada", flag: "https://flagcdn.com/w20/ca.png" },
];

export default function Explore() {
  const [selectedCountry, setSelectedCountry] = useState(flags[0]);
  const [showAll, setShowAll] = useState(false);
  const { savedItems, addSavedItem, removeSavedItem } =
    useContext(SavedContext);

  const buttonStyle = `
    w-full sm:w-[200px] md:w-[220px] lg:w-[236px]
    h-[44px]
    flex items-center justify-between
    rounded-[12px]
    px-[16px]
    border border-gray-200
    bg-white text-[12px]
  `;

  return (
    <div className="w-full px-4 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-6 pb-6 max-w-[1400px] mx-auto space-y-10">
      {/* ===== TOP SECTION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* FILTERS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className={buttonStyle}>
              <span className="font-medium">{selectedCountry.country}</span>
              <img src={selectedCountry.flag} className="w-[20px] h-[14px]" />
            </button>

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

            <button className="w-full sm:w-[200px] md:w-[220px] lg:w-[236px] h-[44px] bg-[#005A58] text-white rounded-[100px]">
              Apply
            </button>
          </div>

          {/* SCHOLARSHIPS */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Scholarships
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {(showAll ? scholarships : scholarships.slice(0, 3)).map(
                (item) => {
                  const isSaved = savedItems.find((i) => i.id === item.id);

                  return (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-[12px] shadow-sm hover:shadow-md transition flex flex-col gap-3"
                    >
                      <div className="flex justify-between">
                        <h4 className="text-[13px] font-medium">
                          {item.title}
                        </h4>

                        <button
                          onClick={() =>
                            isSaved
                              ? removeSavedItem(item.id)
                              : addSavedItem(item)
                          }
                          className="text-xs text-[#400097]"
                        >
                          {isSaved ? "Saved" : "Save"}
                        </button>
                      </div>

                      <p className="text-[11px] text-gray-600 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-1 text-[10px]">
                        <img
                          src={item.flag}
                          className="w-[14px] h-[14px] rounded-full"
                        />
                        <span className="text-green-600">{item.funding}</span>
                      </div>
                    </div>
                  );
                },
              )}
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[#400097] text-sm"
              >
                {showAll ? "Show Less" : "View All"}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT - CALENDAR (VISIBLE EVERYWHERE) */}
        <div className="w-full">
          <div className="bg-white rounded-[12px] shadow p-4 lg:sticky lg:top-6">
            <Calender />
          </div>
        </div>
      </div>

      {/* ===== UNIVERSITIES + NEWS + FLASH ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">
          {/* UNIVERSITIES */}
          <div className="bg-white p-4 sm:p-5 rounded-[12px] shadow">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Top Universities
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Discover highly ranked universities across key study destinations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
              {[
                Oxford,
                Oxford2,
                Oxford3,
                Oxford4,
                Oxford5,
                Oxford6,
                Oxford7,
                Oxford8,
              ].map((img, index) => (
                <div
                  key={index}
                  className="relative h-[100px] rounded-[12px] overflow-hidden"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* NEWS */}
          <div className="bg-white rounded-[12px] shadow">
            <NewsCard />
          </div>
        </div>

        {/* RIGHT - FLASH (DESKTOP ONLY) */}
        <div className="hidden lg:block w-full h-full">
          <div className="relative h-full flex items-center justify-center bg-[#F6F6F6] rounded-[12px] overflow-hidden group cursor-pointer p-2">
            <img
              src={FlashImg}
              alt="Promo"
              className="max-w-[100%] max-h-[140%] object-contain transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
