import React, { useState, useContext } from "react";
import Calender from "../../Components/MyCalender.jsx";

import Oxford from "../../assets/OxfordUniversity.jpg";
import TheUniversisty_of_british_columbia from '../../assets/TheUniversisty_of_british_columbia.jpg';
import FlashImg from "../../assets/TravactiveImg.jpeg";
import GriffithUniversity from '../../assets/GriffithUniversity.webp'
import University_of_Alberta_Canada from '../../assets/University_of_Alberta_Canada.webp'
import University_of_Bonn_Germany from '../../assets/University_of_Bonn_Germany.webp'
import University_of_Hamburg_Germany from '../../assets/University_of_Hamburg_Germany.webp'
import University_of_Kent_UK from '../../assets/University_of_Kent_UK.webp'
import University_of_Melbourne_Australia from '../../assets/University_of_Melbourne_Australia.webp'

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

const Schools = [
  { img: Oxford, link: ' https://www.ox.ac.uk/', name: 'Oxford University', id: 1},
  { img: GriffithUniversity, link: ' https://www.griffith.edu.au/', name: 'Griffith University', id: 2},
  { img: TheUniversisty_of_british_columbia, link: ' https://www.ubc.ca/', name: 'The University of British Columbia', id: 3},
  { img: University_of_Alberta_Canada, link: 'https://www.ualberta.ca/en/index.html', name: 'University of Alberta', id: 4},
  { img: University_of_Bonn_Germany, link: 'https://www.uni-bonn.de/', name: 'University of Bonn', id: 5},
  { img: University_of_Hamburg_Germany, link: 'https://www.uni-hamburg.de/', name: 'University of Hamburg', id: 6},
  { img: University_of_Kent_UK, link: ' https://www.kent.ac.uk/', name: 'University of Kent', id: 7},
  { img: University_of_Melbourne_Australia, link: ' https://www.unimelb.edu.au/', name: 'University of Melbourne', id: 8}
]

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
    <div className="w-full px-1 sm:px-0 pt-12 sm:pt-0 pb-6 max-w-[1400px] mx-auto space-y-10">
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
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Top Universities</h3>
              <p className="md:text-sm hover:underline hover:cursor-pointer text-xs text-red-600 font-bold" onClick={()=>window.open('https://goingto.university/',' _blank')}> See All</p>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Discover highly ranked universities across key study destinations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
              {Schools.map((school) => (
                <div
                  key={school.id}
                  onClick={() => window.open(school.link, "_blank")}
                  className="relative h-[100px] cursor-pointer group rounded-[12px] overflow-hidden"
                >
                  <img
                    src={school.img}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <p className="hidden group-hover:block absolute bottom-0 left-0 right-0 duration-300 transition ease-in-out bg-black/70 text-xs text-white text-center py-1">
                    {school.name}
                  </p>
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
          <div className="relative h-full min-h-[420px] flex items-stretch justify-center bg-[#F6F6F6] rounded-[12px] overflow-hidden group cursor-pointer p-0">

            <img
              src={FlashImg}
              alt="Promo"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition"></div>
        </div>
      </div>
      </div>
    </div>
  );
}
