import React from "react";
import ImgHeader from "../../assets/RoomAskTrav.png";
import ImgChat from "../../assets/RoomTrav2.png";

import { Search, Send, ChevronDown } from "lucide-react";

const AskTravactiv = () => {
  const chatHistory = [
    {
      id: 1,
      title:
        "United Kingdom Available Scholarship For International Students in 2025",
      subtitle: "Royal Society Wolfson Visiting Fellowship 2025",
      desc: "This is a prestigious and fully funded opportunity for established international researchers...",
      img: ImgChat,
      date: "27/07/2027",
      status: "Just now",
      active: true,
    },
    {
      id: 2,
      title:
        "Post-Study Residency and Migration Paths for International Students",
      desc: "Explore countries that offer graduate visas, work permits, or permanent residency options after your studies.",
      date: "26/07/2027",
      status: "Yesterday",
      active: false,
    },
    {
      id: 3,
      title:
        "Post-Study Residency and Migration Paths for International Students",
      desc: "Explore countries that offer graduate visas, work permits, or permanent residency options after your studies.",
      date: "26/07/2027",
      status: "Yesterday",
      active: false,
    },
  ];

  return (
    <div className="flex h-screen w-full bg-[#F4F7F9] text-[#1A3B34] font-sans">
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Content Body */}
        <main className="flex-1 flex p-6 gap-6 overflow-hidden">
          {/* Chat List Column */}
          <div className="bg-white rounded-xl border border-gray-50 flex flex-col" style={{ position: "absolute", width: "333px", height: "890px", top: "100px", left: "272px", borderRadius: "12px", transform: "rotate(0deg)", opacity: 1, boxShadow: "0px 1px 4px 0px #00000005" }}>

            <div className="p-4 space-y-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search Chat..."
                  className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#005F59] transition-all duration-200"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">
                  Chat List{" "}
                  <span className="bg-[#5C3EA2] text-white text-[10px] px-1.5 py-0.5 rounded-full ml-1">
                    3
                  </span>
                </span>
                <ChevronDown
                  size={16}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4">
              {chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                    chat.active
                      ? "border-purple-200 bg-purple-50/30 hover:bg-purple-50/50"
                      : "border-gray-100 hover:bg-gray-50"
                  }`}
                >
                  <h4 className="text-sm font-bold text-[#5C3EA2] leading-tight mb-1 hover:text-purple-700 transition-colors duration-200">
                    {chat.title}
                  </h4>
                  {chat.subtitle && (
                    <p className="text-[11px] font-bold text-gray-700 mb-1">
                      {chat.subtitle}
                    </p>
                  )}
                  <p className="text-[10px] text-gray-500 line-clamp-2 mb-2">
                    {chat.desc}
                  </p>
                  {chat.img && (
                    <img
                      src={chat.img}
                      alt="Post"
                      className="w-[293px] h-[214px] object-cover rounded-lg mb-2 hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="flex justify-between items-center text-[10px] text-gray-400">
                    <span>{chat.date}</span>
                    <span>{chat.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-50">
             <button className="text-white font-bold text-sm hover:bg-teal-800 hover:shadow-md transition-all duration-200" style={{ position: "absolute", width: "293px", height: "44px", top: "815px", left: "20px", borderRadius: "100px", transform: "rotate(0deg)", opacity: 1, gap: "10px", padding: "13px 12px", background: "var(--Trava-ACC4, #005A58)" }}>
  New Chat
</button>

            </div>
          </div>

          {/* Actual Conversation Area */}
          <div
            className="flex-1 flex flex-col bg-white rounded-xl border border-gray-50 overflow-hidden"
            style={{
              position: "absolute",
              width: "791px",
              height: "890px",
              top: "100px",
              left: "627px",
              borderRadius: "12px",
              transform: "rotate(0deg)",
              opacity: 1,
              boxShadow: "0px 1px 4px 0px #00000005",
            }}
          >
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div
                className="relative rounded-2xl overflow-hidden mb-8 h-48 flex items-end group hover:shadow-lg transition-all duration-300"
                style={{
                  position: "absolute",
                  width: "751px",
                  height: "228px",
                  top: "20px",
                  left: "20px",
                  borderRadius: "6px",
                  transform: "rotate(0deg)",
                  opacity: 1,
                }}
              >
                <img
                  src={ImgHeader}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Background"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"
                  style={{
                    position: "absolute",
                    width: "951px",
                    height: "123px",
                    top: "125px",
                    transform: "rotate(0deg)",
                    opacity: 0.85,
                    background:
                      "linear-gradient(178.45deg, rgba(0, 0, 0, 0) -98.02%, rgba(0, 0, 0, 0.9) 106.45%)",
                    backdropFilter: "blur(32px)",
                  }}
                ></div>

                <h2
                  className="relative text-white max-w-md text-nowrap"
                  style={{
                    position: "absolute",
                    width: "535px",
                    height: "76px",
                    top: "134px",
                    left: "38px",
                    transform: "rotate(0deg)",
                    opacity: 1,
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "32px",
                    lineHeight: "38px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Royal Society Wolfson Visiting <br /> Fellowship 2025
                </h2>
              </div>

              <div className="flex justify-start mt-70">
                <div className="bg-[#F4F7F9] p-4 rounded-2xl rounded-tl-none max-w-lg text-sm leading-relaxed text-gray-700 hover:shadow-sm transition-all duration-200">
                  Lorem ipsum dolor sit amet consectetur. Rutrum orci ipsum
                  ultrices est a. Sed mauris egestas purus nec felis. Nunc at
                  vitae ut nunc mauris. Est ullamcorper felis sagittis id. Lorem
                  ipsum dolor sit amet consectetur. Rutrum orci ipsum ultrices
                  est a. Sed mauris egestas purus nec felis. Nunc at vitae ut
                  nunc mauris. Est ullamcorper felis sagittis id.Lorem ipsum
                  dolor sit amet consectetur. Rutrum orci ipsum ultrices est a.
                  Sed
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-[#E0F7F6] p-4 rounded-2xl rounded-tr-none max-w-lg text-sm leading-relaxed text-gray-700 hover:shadow-sm transition-all duration-200">
                  Lorem ipsum dolor sit amet consectetur. Rutrum orci ipsum
                  ultrices est a. Sed mauris egestas purus nec felis. Nunc at
                  vitae ut nunc mauris. Est ullamcorper felis sagittis id. Lorem
                  ipsum dolor sit amet consectetur. Rutrum orci ipsum ultrices
                  est a. Sed mauris egestas purus nec felis. Nunc at vitae ut
                  nunc mauris. Est ullamcorper felis
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-[#F4F7F9] p-4 rounded-2xl rounded-tl-none max-w-lg text-sm leading-relaxed text-gray-700 hover:shadow-sm transition-all duration-200">
                  Lorem ipsum dolor sit amet consectetur. Rutrum orci ipsum
                  ultrices est a. Sed mauris egestas purus nec felis.
                </div>
              </div>
            </div>

            {/* Input Field */}
            <div className="p-6">
              <div className="relative flex items-center bg-[#F4F7F9] rounded-xl px-4 py-2 border border-transparent focus-within:border-[#005F59] focus-within:shadow-sm transition-all duration-200">
                <input
                  type="text"
                  placeholder="Type here...."
                  className="flex-1 bg-transparent border-none py-3 focus:ring-0 text-sm text-gray-700 focus:outline-none"
                />
                <button className="text-[#005F59] p-2 hover:bg-white hover:text-teal-800 hover:shadow-sm rounded-lg transition-all duration-200">
                  <Send size={20} className="rotate-45" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AskTravactiv;

