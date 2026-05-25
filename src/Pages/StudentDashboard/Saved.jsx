import React, { useContext } from "react";
import { SavedContext } from "../../Components/SavedContext.jsx";
import Calender from "../../Components/MyCalender.jsx";
import NewsCard from "../../Components/NewsCard.jsx";

import Img1 from "../../assets/TopCountriesImg.jpg";
import Img2 from "../../assets/ScholarshipImg.jpg";
import Img3 from "../../assets/EasyVisa.jpg";
import Img4 from "../../assets/workStudy.jpg";
import Img5 from "../../assets/studentLifestyle.jpg";
import Img6 from "../../assets/postStudy.jpg";

import ConImg from "../../assets/RoomTrav2.png";
import Circle from "../../assets/Vector6.svg";
import Arrow from "../../assets/Vector7.svg";

import { scholarships } from "../../assets/scholarshipData.js";

const researchLinks = [
  {
    id: 1,
    title: "Top Countries for Affordable Education",
    desc: "Explore budget-friendly study destinations with quality universities.",
    img: Img1,
    link: "https://www.topuniversities.com/student-info/student-finance/how-much-does-it-cost-study-abroad",
  },
  {
    id: 2,
    title: "Scholarships & Financial Aid",
    desc: "Find available scholarships and how to apply for them.",
    img: Img2,
    link: "https://www.scholarships.com/",
  },
  {
    id: 3,
    title: "Easy Visa Countries for Students",
    desc: "Discover nations with smoother visa application processes.",
    img: Img3,
    link: "https://www.globalcitizensolutions.com/easiest-countries-to-get-student-visa/",
  },
  {
    id: 4,
    title: "Work & Study Opportunities",
    desc: "Learn where you can work while studying abroad.",
    img: Img4,
    link: "https://www.studyinternational.com/news/work-and-study-abroad/",
  },
  {
    id: 5,
    title: "Student Lifestyle & Living Costs",
    desc: "Get insights into daily expenses and accommodation.",
    img: Img5,
    link: "https://www.numbeo.com/cost-of-living/",
  },
  {
    id: 6,
    title: "Post-Study Residency Options",
    desc: "See which countries offer post-study work permits.",
    img: Img6,
    link: "https://www.educanada.ca/study-plan-etudes/work-travail/after-graduation-apres-diplome.aspx",
  },
];

const Saved = () => {
  const { savedItems, removeSavedItem } = useContext(SavedContext);

  return (
    <div className="pt-12 sm:pt-0 p-1 sm:p-2 ">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* ================= LEFT SIDE ================= */}
        <div className="flex-1">
          {/* SAVED OR FALLBACK */}
          {savedItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {savedItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full h-[300px] p-3 bg-white shadow rounded-lg flex flex-col gap-2 relative transition hover:shadow-lg"
                >
                  <button
                    onClick={() => removeSavedItem(item.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded"
                  >
                    Remove
                  </button>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[140px] object-cover rounded-lg"
                  />

                  <h4 className="text-[14px] font-medium">{item.title}</h4>
                  <p className="text-[10px] text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {scholarships.slice(0, 3).map((scholarship) => (
                <div
                  key={scholarship.id}
                  className="w-full h-[300px] rounded-lg overflow-hidden flex items-end"
                  style={{
                    backgroundImage: `url(${ConImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="p-4 w-full h-[150px] bg-black/40 backdrop-blur-sm text-white">
                    <h4 className="text-[14px] font-semibold text-left">
                      {scholarship.title}
                    </h4>

                    <p className="text-[10px] opacity-90 text-left">
                      {scholarship.description}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <img
                          src={scholarship.flag}
                          alt=""
                          className="w-[14px] h-[14px] rounded-full"
                        />
                        <span className="text-[10px]">
                          {scholarship.funding}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <img src={Arrow} className="w-[10px] cursor-pointer" />
                        <img src={Circle} className="w-[20px] cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================= RESEARCH LINKS ================= */}
          <div className="w-full bg-white rounded-xl p-5 shadow mt-6 flex flex-col gap-4">
            <h3 className="text-[20px] font-semibold">
              Carefully Researched Links For You
            </h3>

            <p className="text-[14px] text-gray-600">
              Explore countries with low tuition, scholarships, and easy visa
              access.
            </p>

            {researchLinks.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[50px] h-[50px] rounded-md object-cover"
                  />

                  <div>
                    <h5 className="text-[15px] font-medium">{item.title}</h5>
                    <p className="text-[12px] text-gray-500">{item.desc}</p>
                  </div>
                </div>

                <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative overflow-hidden w-[111px] h-[30px] rounded-full border border-[#023436] text-[10px] font-semibold text-[#023436] group">
              
              {/* Hover Background */}
              <span className="absolute inset-0 bg-[#023436] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>

              {/* Button Text */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Browse Now
              </span>
            </button>
          </a>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-full lg:w-[320px] flex flex-col gap-6">
          <div className="hidden lg:block bg-white rounded-xl shadow p-4">
            <Calender />
          </div>

          <div className=" rounded-xl  ">
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
