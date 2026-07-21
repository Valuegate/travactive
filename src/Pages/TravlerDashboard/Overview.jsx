import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// 1. ASSET IMPORTS
// Landmark Images (Ensure these match your actual filenames in assets)
import RomeImg from "../../assets/Colosium.png";
import NYCImg from "../../assets/StatueOfLiberty.png";
import ParisImg from "../../assets/EiffelTower.png";
import EgyptImg from "../../assets/Pyramids.png";
import DubaiImg from "../../assets/BurjKhalifa.png";
import BrazilImg from "../../assets/ChristRedeemer.png";
import BeijingImg from "../../assets/GreatWall.png";
import SydneyImg from "../../assets/OperaHouse.png";
import AthensImg from "../../assets/Athens.png";
import LagosImg from "../../assets/Lagos.png";
import MoscowImg from "../../assets/Moscow.png";
import JburgImg from "../../assets/Jburg.png";
import SaudiImg from "../../assets/Saudi.png";
import LondonImg from "../../assets/London.png";
import MauritiusImg from "../../assets/Mauritius.png";
import DublinImg from "../../assets/Dublin.png";
import MaldivesImg from "../../assets/Maldives.png";
import SantoriniImg from "../../assets/Santorini.png";
import TorontoImg from "../../assets/Toronto.png";
import MunichImg from "../../assets/Munich.png";
import TokyoImg from "../../assets/Tokyo.png";
import MadridImg from "../../assets/Madrid.png";
import BarcelonaImg from "../../assets/Barcelona.png";
import IstanbulImg from "../../assets/Istanbul.png";
import WarsawImg from "../../assets/Warsaw.png";
import JerusalemImg from "../../assets/Jerusalem.png";
import MumbaiImg from "../../assets/Mumbai.png";
import QatarImg from "../../assets/Qatar.png";
import CasablancaImg from "../../assets/Casablanca.png";
import MaltaImg from "../../assets/Malta.png";

// Other Section Components & Images
import MyCalendar from "../../Components/MyCalender";
import NewsCard from "../../Components/NewsCard";
import OverviewImg from "../../assets/Singerpore.jpg";
import OverviewImg2 from "../../assets/Visa.jpg";
import OverviewImg3 from "../../assets/Medic.jpg";
import Checked from "../../assets/VectorMark.png";

// 2. KEYFRAME STYLES — injected once, no Tailwind plugin needed
const heroAnimationStyles = `
  @keyframes zoomFadeIn {
    from {
      opacity: 0;
      transform: scale(0.93);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

// 3. DYNAMIC BANNER DATA ARRAY
const banners = [
  { city: "Rome",         landmark: RomeImg },
  { city: "New York",     landmark: NYCImg },
  { city: "Paris",        landmark: ParisImg },
  { city: "Egypt",        landmark: EgyptImg },
  { city: "Dubai",        landmark: DubaiImg },
  { city: "Brazil",       landmark: BrazilImg },
  { city: "Beijing",      landmark: BeijingImg },
  { city: "Sydney",       landmark: SydneyImg },
  { city: "Athens",       landmark: AthensImg },
  { city: "Lagos",        landmark: LagosImg },
  { city: "Moscow",       landmark: MoscowImg },
  { city: "Johannesburg", landmark: JburgImg },
  { city: "Saudi Arabia", landmark: SaudiImg },
  { city: "London",       landmark: LondonImg },
  { city: "Mauritius",    landmark: MauritiusImg },
  { city: "Dublin",       landmark: DublinImg },
  { city: "Maldives",     landmark: MaldivesImg },
  { city: "Santorini",    landmark: SantoriniImg },
  { city: "Toronto",      landmark: TorontoImg },
  { city: "Munich",       landmark: MunichImg },
  { city: "Tokyo",        landmark: TokyoImg },
  { city: "Madrid",       landmark: MadridImg },
  { city: "Barcelona",    landmark: BarcelonaImg },
  { city: "Istanbul",     landmark: IstanbulImg },
  { city: "Warsaw",       landmark: WarsawImg },
  { city: "Jerusalem",    landmark: JerusalemImg },
  { city: "Mumbai",       landmark: MumbaiImg },
  { city: "Qatar",        landmark: QatarImg },
  { city: "Casablanca",   landmark: CasablancaImg },
  { city: "Malta",        landmark: MaltaImg },
];

// 4. OPPORTUNITIES DATA ARRAY
const overviewData = [
  {
    id: 1,
    img: OverviewImg,
    heading: "Conference in Singapore",
    description:
      "Find scholarships currently open across top universities in Europe & the Americas...",
    status: "Actively Open",
    link: "http://conferencealerts.co.in/",
  },
  {
    id: 2,
    img: OverviewImg2,
    heading: "Visa Policy Updates",
    description:
      "Stay updated with the latest student visa and immigration policy changes worldwide.",
    status: "Actively Open",
    link: "https://travel.state.gov/content/travel/en/us-visas.html",
  },
  {
    id: 3,
    img: OverviewImg3,
    heading: "Health Tourism Update",
    description:
      "Explore countries offering advanced healthcare and medical tourism opportunities.",
    status: "Actively Open",
    link: "https://www.medicaltourism.com/",
  },
];

const Overview = () => {
  // State to track the index of the current active city banner
  const [currentBanner, setCurrentBanner] = useState(0);

  // Interval hook to loop through banners every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prevIndex) => (prevIndex + 1) % banners.length);
    }, 15000);

    // Cleanup interval on component unmount to prevent memory leaks
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F6F6F6] p-4 md:p-6">
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-6">
          {/* BANNER */}
          <div
            className="w-full min-h-[160px] mt-6 sm:mt-8 md:mt-0 rounded-xl flex flex-col md:flex-row overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(3,181,170,0.65), rgba(3,181,170,0.65)), url(${BannerBackground})`,
            }}
          >
            <div className="flex-1 p-6 flex flex-col justify-center">
              <h2 className="text-sm">Your next adventure?</h2>
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold">
                Rome!
              </p>
            </div>

            <div className="w-full md:w-[200px] lg:w-[250px] xl:w-[300px]">
              <img
                src={BannerSideImage}
                className="w-full h-full object-contain"
              />
            </div>
            {/* ── END HERO BANNER ── */}

            {/* QUICK LINKS / INFO CARDS */}
            <div className="flex flex-col sm:flex-row gap-4">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="w-full sm:w-1/2 lg:flex-1 bg-white rounded-xl shadow p-4 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-lg">
                      {i === 0 ? "Upcoming Seminars" : "Important Visa Requirements"}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Stay ahead of deadlines and updates.
                    </p>
                  </div>

                  <div className="flex items-center mt-4 border border-[#81FD48] rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-50 transition">
                    <span className="text-sm font-semibold">
                      {i === 0 ? "Explore" : "Check Deadlines"}
                    </span>
                    <ArrowRight size={16} className="ml-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN (Calendar Widget) */}
          <div className="w-full lg:w-[320px] xl:w-[360px] 2xl:w-[400px] flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-4">
              <MyCalendar />
            </div>
          </div>
        </div>

        {/* SECOND SECTION (Opportunities Feed & News Side Panel) */}
        <div className="mt-8 flex flex-col lg:flex-row gap-6">

          {/* OPPORTUNITIES GRID */}
          <div className="flex-1 bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-4">
              Recommended Opportunities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {overviewData.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl p-3 flex flex-col shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full h-[180px] object-cover rounded-lg"
                  />

                  <h3 className="text-sm font-medium mt-2">{item.heading}</h3>

                  <p className="text-xs text-gray-600 mt-1 mb-2">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <img src={Checked} className="w-4 h-4" alt="checked icon" />
                    <span className="text-xs font-medium text-gray-700">
                      {item.status}
                    </span>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full"
                  >
                    <button className="relative overflow-hidden w-full border border-[#400097] rounded-full py-2 text-sm text-[#400097] font-medium group">
                      {/* Hover Animated Slide Effect */}
                      <span className="absolute inset-0 bg-[#400097] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        Explore
                      </span>
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* NEWS FEED SIDEBAR */}
          <div className="w-full bg-white rounded-xl shadow lg:w-[320px] xl:w-[360px] 2xl:w-[400px]">
            <NewsCard />
          </div>

        </div>
      </div>
    </>
  );
};

export default Overview;