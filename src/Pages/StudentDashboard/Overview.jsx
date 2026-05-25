import React from "react";
import BannerSideImage from "../../assets/amico.png";
import BannerBackground from "../../assets/DashboardBanner.png";
import { ArrowRight } from "lucide-react";
import MyCalendar from "../../Components/MyCalender";
import OverviewImg from "../../assets/cardImg.png";
import OverviewImg2 from "../../assets/CardImg1.png";
import OverviewImg3 from "../../assets/CardImg2.png";
import Checked from "../../assets/VectorMark.png";
import NewsCard from "../../Components/NewsCard.jsx";

/* ================= OPPORTUNITIES ================= */
const opportunities = [
  {
    image: OverviewImg,
    title: "Scholarship Opportunities",
    description: "Find scholarships across top universities worldwide.",
    link: "http://scholarshipair.com/",
  },
  {
    image: OverviewImg2,
    title: "Visa Sponsorship Jobs",
    description: "Explore jobs with sponsorship opportunities abroad.",
    link: "http://wemakescholars.com/",
  },
  {
    image: OverviewImg3,
    title: "Travel Grants",
    description: "Discover travel grants and international programs.",
    link: "https://www.gooverseas.com",
  },
];

/* ================= MAIN ================= */
const Overview = () => {
  return (
    <div className="w-full min-h-screen bg-[#F6F6F6] px-1  md:pt-1 pb-5 mt-[50px] md:mt-0 overflow-x-hidden">
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-6">
          {/* BANNER */}
          <div
            className="w-full min-h-[160px] md:h-[184px] rounded-[12px] flex overflow-hidden relative"
            style={{
              backgroundImage: `
                linear-gradient(rgba(3,181,170,0.65), rgba(3,181,170,0.65)),
                url(${BannerBackground})
              `,
            }}
          >
            <div className="absolute inset-0 bg-[#03B5AA]/60"></div>

            <div className="flex-1 z-10 p-4 md:p-6 flex flex-col justify-center text-black">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold">
                Hey Samuel, ready to explore?
              </h2>

              <p className="mt-2 text-xs sm:text-sm md:text-[14px] leading-[20px]">
                Dive into fresh travel insights, trending opportunities, visa
                updates, and country-specific guides.
              </p>
            </div>

            <div className="flex-none w-[80px] sm:w-[100px] md:w-[120px] z-10">
              <img
                src={BannerSideImage}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* CARDS */}
          <div className="flex flex-col sm:flex-row gap-4">
            {["Upcoming Deadlines", "Your Saved Opportunities"].map(
              (title, i) => (
                <div
                  key={i}
                  className="w-full sm:w-1/2 bg-white rounded-[12px] shadow p-4 md:p-6 flex flex-col"
                >
                  <h3 className="text-lg md:text-xl font-semibold">{title}</h3>

                  <p className="text-sm text-gray-600 mt-3">
                    Stay ahead of deadlines and manage your opportunities
                    easily.
                  </p>

                  <div className="flex items-center mt-4 border border-green-300 rounded-lg px-3 py-2 cursor-pointer">
                    <p className="text-sm font-semibold">Check Deadlines</p>
                    <ArrowRight size={16} className="ml-auto" />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* RIGHT - CALENDAR */}
        <div className="hidden lg:flex w-[360px] bg-white rounded-[12px] shadow p-6">
          <MyCalendar />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-8 flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* LEFT */}
        <div className="w-full bg-white rounded-[12px] border p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Recommended Opportunities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {opportunities.map((item, i) => (
              <div
                key={i}
                className="w-full bg-white rounded-[16px] border p-3 shadow flex flex-col"
              >
                <img
                  src={item.image}
                  className="w-full h-[180px] object-cover rounded-[12px]"
                />

                <h3 className="text-sm mt-2 font-medium">{item.title}</h3>

                <p className="text-xs text-gray-600 mt-1">{item.description}</p>

                <div className="flex items-center gap-2 mt-2">
                  <img src={Checked} className="w-4 h-4" />
                  <span className="text-xs">Actively Open</span>
                </div>

                <button
                  onClick={() => window.open(item.link, "_blank")}
                  className="mt-auto border border-purple-700 rounded-full py-2 text-sm font-semibold hover:bg-purple-700 hover:text-white transition"
                >
                  Browse Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[560px]">
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default Overview;
