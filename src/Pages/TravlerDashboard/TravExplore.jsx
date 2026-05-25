import React from "react";
import Calender from "../../Components/MyCalender.jsx";
import VisitCan from "../../assets/VisitCan.png";
import VisitPari from "../../assets/venice.jpg";
import VisitGre from "../../assets/Greece.png";
import NewsCard from "../../Components/NewsCard.jsx";
import { MapPin } from "lucide-react";

const overviewData = [
  {
    id: 1,
    img: VisitCan,
    heading: "Visit Santorini, Greece",
    description: "Beautiful island with amazing views and culture.",
  },
  {
    id: 2,
    img: VisitPari,
    heading: "Visit City of Light, Paris",
    description:
      "Paris is famous for the Eiffel Tower, charming cafés, art museums like the Louvre, and romantic streets along the Seine River.",
  },
  {
    id: 3,
    img: VisitGre,
    heading: "Visit Navagio, Greece",
    description: "Beautiful island with amazing views and culture.",
  },
];

export default function TravExplore() {
  return (
    <div className="pt-14 md:pt-0 px-1 md:px-0 pb-4 flex flex-col lg:flex-row gap-6">
      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-6">
        {/* 🔹 TOP CARDS */}
        <div className="grid md:grid-cols-2 gap-4">
          {[1, 2].map((item) => (
            <div key={item} className="flex bg-white rounded-xl shadow">
              <div
                className={`w-14 flex flex-col items-center justify-center rounded-l-xl text-sm font-semibold ${item === 1 ? "bg-yellow-400" : "bg-teal-500 text-white"}`}
              >
                <span>2025</span>
                <span>Aug</span>
                <span>30</span>
              </div>

              <div className="flex-1 p-4">
                <h3 className="text-sm font-semibold text-[#005A58]">
                  {item === 1 ? "Upcoming Seminar" : "Explore Downtown"}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  International Conference on latest advancements.
                </p>

                <div className="flex items-center gap-2 mt-2 text-xs text-[#005A58]">
                  <MapPin size={12} />
                  Toronto, Canada
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 DESTINATIONS */}
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-semibold">Destinations</h3>
            <span className="text-sm text-[#005A58] cursor-pointer">
              See All
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {overviewData.map((item) => (
              <div key={item.id} className="border rounded-xl p-3 shadow-sm">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-40 object-cover rounded-lg"
                  loading="lazy"
                />
                <h4 className="mt-2 text-sm font-semibold">{item.heading}</h4>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 VISA DESTINATIONS */}
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-semibold">Easy Visa Destination</h3>
            <span className="text-sm text-[#005A58] cursor-pointer">
              See All
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["DUBAI", "CHINA", "BRAZIL"].map((place) => (
              <div
                key={place}
                className="relative h-24 rounded-xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <h4 className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                  {place}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 HEALTH TIPS */}
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-semibold">Health Tip Advisory</h3>
            <span className="text-sm text-[#005A58] cursor-pointer">
              See All
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-3 border rounded-lg p-2">
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
                  className="w-24 h-16 object-cover rounded"
                  alt=""
                />
                <div>
                  <h4 className="text-sm font-semibold">
                    Beat Jet Lag Like a Pro
                  </h4>
                  <p className="text-xs text-gray-500">
                    Crossing time zones? Discover proven ways.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-full lg:w-[320px] space-y-6">
        <div className="bg-white rounded-xl p-4 shadow">
          <Calender />
        </div>

        <div>
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
