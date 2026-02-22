import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ===================== SUB-COMPONENTS ===================== */

const NewsItem = ({ flag, title, source }) => (
  <div className="flex gap-4 group cursor-pointer p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200">
    <div className="shrink-0 mt-1">{flag}</div>
    <div className="space-y-1">
      <h4 className="text-[13px] font-bold leading-tight text-gray-800 group-hover:text-teal-900 transition-colors duration-200">
        {title}
      </h4>
      <p className="text-[10px] text-gray-400 truncate max-w-[220px] italic">
        Source: {source}
      </p>
    </div>
  </div>
);

/* ===================== CALENDAR COMPONENT ===================== */
const CalendarCard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 8));

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    const adjustedStartingDay = startingDay === 0 ? 6 : startingDay - 1;
    return { daysInMonth, adjustedStartingDay };
  };

  const renderCalendar = () => {
    const { daysInMonth, adjustedStartingDay } = getDaysInMonth(currentDate);
    const today = new Date();
    const days = [];

    for (let i = 0; i < adjustedStartingDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = today.getDate() === day && today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();
      const isSelected = selectedDate.getDate() === day && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
          className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-200
            ${isSelected ? "bg-[#004D40] text-white shadow-lg scale-110" : ""}
            ${isToday && !isSelected ? "bg-teal-50 text-[#004D40] border border-teal-200" : ""}
            ${!isSelected && !isToday ? "hover:bg-gray-100 text-gray-700 hover:scale-110" : ""}
          `}
        >
          {day}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h4 className="font-bold text-base text-gray-800">{formatDate(currentDate)}</h4>
        <div className="flex gap-2">
          <button onClick={() => navigateMonth(-1)} className="p-2 hover:bg-gray-50 rounded-full border border-gray-100 transition-colors duration-200">
            <ChevronLeft size={18} className="text-gray-600" />
          </button>
          <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-gray-50 rounded-full border border-gray-100 transition-colors duration-200">
            <ChevronRight size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-4">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
          <div key={day} className="text-center text-gray-400 text-[11px] font-bold uppercase tracking-wider">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">{renderCalendar()}</div>
    </div>
  );
};

const NewsCard = () => {
  const newsItems = [
    { code: "gb", title: "UK expands Business Visa deadline", source: "websites.com/USAFaseEnews" },
    { code: "us", title: "USA Ease Entry Rule for Health Tourists", source: "The Indian Times" },
    { code: "ca", title: "Canada Tightens Work Permit Rules", source: "ircc.org" },
    { code: "au", title: "Australia Ban Multiple Access Route", source: "minsha.gov.au" },
    { code: "fr", title: "France Introduction E-visa Regime in Africa", source: "france-visas.gouv.fr" },
    { code: "de", title: "Germany Now Requires Compulsory UV", source: "daad.de" },
    { code: "ie", title: "Ireland Ban Visa on Arrival for Africans", source: "eban.com" },
    { code: "es", title: "Spain Launch New Visa Regime for NG", source: "sunrise.com" },
  ];

  return (
    <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-base text-gray-800">Alert and News</h4>
        <button className="text-[12px] text-[#004D40] hover:underline font-bold transition-colors duration-200 hover:text-teal-900">
          See All
        </button>
      </div>
      <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
        {newsItems.map((item, index) => (
          <NewsItem
            key={index}
            flag={<img src={`https://flagcdn.com/${item.code}.svg`} alt="flag" className="w-6 h-4 object-cover rounded-sm shadow-sm" />}
            title={item.title}
            source={item.source}
          />
        ))}
      </div>
    </div>
  );
};

/* ===================== USER AVATAR COMPONENT ===================== */
const UserAvatar = () => (
  <div className="flex items-center gap-3">
    <div className="relative">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        className="w-11 h-11 rounded-full object-cover border-2 border-teal-100 hover:scale-105 transition-transform duration-200"
        alt="User"
      />
      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
    </div>
    <div className="text-right">
      <p className="text-sm font-bold leading-none text-gray-800">Samuel F.</p>
      <p className="text-xs text-gray-500">Traveler</p>
    </div>
  </div>
);

/* ===================== NOTIFICATION BELL COMPONENT ===================== */
const NotificationBell = () => (
  <div className="relative">
    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
      <Bell size={24} className="text-gray-600" />
    </button>
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
      1
    </span>
  </div>
);

/* ===================== MAIN COMPONENT ===================== */

const TopPicks = () => {
  const links = [
    { title: "Visa-Free Countries for Nigerians", desc: "Discover-Hassel-Free travel spots where you can pack your bags and go, no paperwork required." },
    { title: "Cheapest fligh deals right now", desc: "Stay informed on the latest flight path and deals that help you travel smarter while spending less." },
    { title: "Top 5 Budget-Friendly Destination for 2026", desc: "Destinations that offer great experiences without breaking the bank, so you get more value for every trip." },
    { title: "Real-Time Currency Exchange Rates", desc: "Get up-to-date currency exchange rates and tips to make every penny count while traveling abroad." },
    { title: "Best Travel Insurance Options", desc: "Budget-friendly travel insurance options that keeps you covered and confident throughout your journey." },
    { title: "Weather & Season Guide By Country", desc: "Learn the perfect time of the year to travel, enjoy peak attractions, and avoid crowd for a memorable trip." },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-sans text-[#333333]">
      {/* Sidebar - Using the imported Sidebar component */}
      <Sidebar />

      {/* Main Body */}
      <div className="flex-1 flex flex-col">
        <header className="h-20 bg-white border-b border-gray-100 px-10 flex items-center justify-between sticky top-0 z-20">
          <div className="relative w-[500px]">
            <input 
              type="text" 
              placeholder="Search here...." 
              className="w-full bg-[#F1F3F4] border-none rounded-full py-3 px-6 text-sm focus:ring-2 focus:ring-teal-600 outline-none transition-all duration-200"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#004D40] p-2 rounded-full text-white cursor-pointer hover:bg-teal-800 transition-colors duration-200">
              <Search size={14} />
            </button>
          </div>

          <div className="flex items-center gap-8">
            <UserAvatar />
            <NotificationBell />
          </div>
        </header>

        <div className="p-10 flex gap-8">
          {/* Main Feed Content */}
          <div className="flex-1 space-y-8">
            {[1, 2].map((card) => (
              <div key={card} className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 flex gap-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-[360px] shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800" 
                    className="w-full h-52 object-cover rounded-2xl mb-4 hover:scale-105 transition-transform duration-500" 
                    alt="Santorini Main" 
                  />
                  <div className="grid grid-cols-4 gap-3">
                    <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=150" className="h-16 w-full object-cover rounded-xl hover:scale-110 transition-transform duration-300" alt="Thumb" />
                    <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=150" className="h-16 w-full object-cover rounded-xl hover:scale-110 transition-transform duration-300" alt="Thumb" />
                    <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=150" className="h-16 w-full object-cover rounded-xl hover:scale-110 transition-transform duration-300" alt="Thumb" />
                    {/* <img src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?w=150" className="h-16 w-full object-cover rounded-xl hover:scale-110 transition-transform duration-300" alt="Thumb" /> */}
                    <div className="relative h-16 w-full rounded-xl overflow-hidden cursor-pointer group">
                      <img 
                        src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=150" 
                        className="w-full h-full object-cover brightness-50 group-hover:brightness-40 transition-all duration-300" 
                        alt="More" 
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        +4
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between py-2">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Visit Santorini, Greece</h2>
                    <p className="text-gray-500 text-[14px] leading-relaxed">
                      Surrounded by turquoise water, the Island is cluttered with multi-colored cliffs, hot-headed volcanoes, and acres of sun-toasted sand. Adding to the marvels of nature are the ancient relics and delectable cuisine.
                    </p>
                  </div>
                  <button className="bg-[#004D40] text-white w-full py-4 rounded-full text-sm font-bold mt-6 hover:bg-teal-900 hover:shadow-lg transition-all duration-200 shadow-md active:scale-[0.98]">
                    Read More
                  </button>
                </div>
              </div>
            ))}

            {/* Carefully Researched Links */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-1">Carefully Researched Links For You</h3>
              <p className="text-gray-400 text-[12px] mb-8">Explore countries with low tuition, scholarships, and easy visa access perfect for your study journey.</p>
              <div className="space-y-4">
                {links.map((link, idx) => (
                  <div key={idx} className="flex items-center justify-between group p-3 hover:bg-gray-50 rounded-2xl transition-all duration-200 border border-transparent hover:border-gray-100 hover:shadow-sm">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-gray-100 overflow-hidden shrink-0 shadow-sm">
                        <img 
                          src={`https://picsum.photos/seed/link${idx}/100`} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                          alt="icon" 
                        />
                      </div>
                      <div className="max-w-lg">
                        <h4 className="text-[14px] font-bold text-gray-800 group-hover:text-teal-900 transition-colors duration-200">{link.title}</h4>
                        <p className="text-[11px] text-gray-400 leading-snug">{link.desc}</p>
                      </div>
                    </div>
                    <button className="px-6 py-2 border-2 border-[#004D40] text-[#004D40] text-[12px] font-bold rounded-full hover:bg-[#004D40] hover:text-white transition-all duration-200 hover:scale-105">
                      Browse Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* RESTORED BOTTOM HERO / FOOTER */}
            <div className="relative h-32 rounded-[32px] overflow-hidden bg-[#1A1A1A] flex items-center justify-center p-8 group hover:shadow-lg transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                alt="Background" 
              />
              <div className="relative z-10 text-center max-w-2xl">
                <h3 className="text-white font-bold text-xl mb-1">Start Your Journey with the Right Opportunity</h3>
                <p className="text-gray-300 text-[12px] leading-relaxed">Discover scholarships, visa-friendly countries, and top universities with fewer requirements. Find your best-fit option and apply with confidence.</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Increased Width to 380px */}
          <div className="w-[380px] space-y-8 shrink-0">
            <CalendarCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;



// Calendar Components

// const CalendarCard = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 8));

//   const navigateMonth = (direction) => {
//     const newDate = new Date(currentDate);
//     newDate.setMonth(currentDate.getMonth() + direction);
//     setCurrentDate(newDate);
//   };

//   const formatDate = (date) => {
//     return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
//   };

//   const getDaysInMonth = (date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const daysInMonth = lastDay.getDate();
//     const startingDay = firstDay.getDay();
//     const adjustedStartingDay = startingDay === 0 ? 6 : startingDay - 1;
//     return { daysInMonth, adjustedStartingDay };
//   };

//   const renderCalendar = () => {
//     const { daysInMonth, adjustedStartingDay } = getDaysInMonth(currentDate);
//     const today = new Date();
//     const days = [];

//     for (let i = 0; i < adjustedStartingDay; i++) {
//       days.push(<div key={`empty-${i}`} className="h-10"></div>);
//     }

//     for (let day = 1; day <= daysInMonth; day++) {
//       const isToday = today.getDate() === day && today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();
//       const isSelected = selectedDate.getDate() === day && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();

//       days.push(
//         <button
//           key={day}
//           onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
//           className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-200
//             ${isSelected ? "bg-[#004D40] text-white shadow-lg scale-110" : ""}
//             ${isToday && !isSelected ? "bg-teal-50 text-[#004D40] border border-teal-200" : ""}
//             ${!isSelected && !isToday ? "hover:bg-gray-100 text-gray-700 hover:scale-110" : ""}
//           `}
//         >
//           {day}
//         </button>
//       );
//     }
//     return days;
//   };

//   return (
//     <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
//       <div className="flex justify-between items-center mb-8">
//         <h4 className="font-bold text-base text-gray-800">{formatDate(currentDate)}</h4>
//         <div className="flex gap-2">
//           <button onClick={() => navigateMonth(-1)} className="p-2 hover:bg-gray-50 rounded-full border border-gray-100 transition-colors duration-200">
//             <ChevronLeft size={18} className="text-gray-600" />
//           </button>
//           <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-gray-50 rounded-full border border-gray-100 transition-colors duration-200">
//             <ChevronRight size={18} className="text-gray-600" />
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-7 gap-2 mb-4">
//         {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
//           <div key={day} className="text-center text-gray-400 text-[11px] font-bold uppercase tracking-wider">
//             {day}
//           </div>
//         ))}
//       </div>
//       <div className="grid grid-cols-7 gap-2">{renderCalendar()}</div>
//     </div>
//   );
// };

// const NewsCard = () => {
//   const newsItems = [
//     { code: "gb", title: "UK expands Business Visa deadline", source: "websites.com/USAFaseEnews" },
//     { code: "us", title: "USA Ease Entry Rule for Health Tourists", source: "The Indian Times" },
//     { code: "ca", title: "Canada Tightens Work Permit Rules", source: "ircc.org" },
//     { code: "au", title: "Australia Ban Multiple Access Route", source: "minsha.gov.au" },
//     { code: "fr", title: "France Introduction E-visa Regime in Africa", source: "france-visas.gouv.fr" },
//     { code: "de", title: "Germany Now Requires Compulsory UV", source: "daad.de" },
//     { code: "ie", title: "Ireland Ban Visa on Arrival for Africans", source: "eban.com" },
//     { code: "es", title: "Spain Launch New Visa Regime for NG", source: "sunrise.com" },
//   ];

//   return (
//     <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <h4 className="font-bold text-base text-gray-800">Alert and News</h4>
//         <button className="text-[12px] text-[#004D40] hover:underline font-bold transition-colors duration-200 hover:text-teal-900">
//           See All
//         </button>
//       </div>
//       <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
//         {newsItems.map((item, index) => (
//           <NewsItem
//             key={index}
//             flag={<img src={`https://flagcdn.com/${item.code}.svg`} alt="flag" className="w-6 h-4 object-cover rounded-sm shadow-sm" />}
//             title={item.title}
//             source={item.source}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };



// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import {
//   LayoutDashboard,
//   Compass,
//   Star,
//   MessageSquare,
//   Settings,
//   LogOut,
//   Search,
//   Bell,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// /* ===================== SUB-COMPONENTS ===================== */

// const NewsItem = ({ flag, title, source }) => (
//   <div className="flex gap-4 group cursor-pointer p-2 rounded-xl hover:bg-gray-50 transition-colors">
//     <div className="shrink-0 mt-1">{flag}</div>
//     <div className="space-y-1">
//       <h4 className="text-[13px] font-bold leading-tight text-gray-800 group-hover:text-teal-900 transition-colors">
//         {title}
//       </h4>
//       <p className="text-[10px] text-gray-400 truncate max-w-[220px] italic">
//         Source: {source}
//       </p>
//     </div>
//   </div>
// );

// const CalendarCard = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 8));

//   const navigateMonth = (direction) => {
//     const newDate = new Date(currentDate);
//     newDate.setMonth(currentDate.getMonth() + direction);
//     setCurrentDate(newDate);
//   };

//   const formatDate = (date) => {
//     return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
//   };

//   const getDaysInMonth = (date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const daysInMonth = lastDay.getDate();
//     const startingDay = firstDay.getDay();
//     const adjustedStartingDay = startingDay === 0 ? 6 : startingDay - 1;
//     return { daysInMonth, adjustedStartingDay };
//   };

//   const renderCalendar = () => {
//     const { daysInMonth, adjustedStartingDay } = getDaysInMonth(currentDate);
//     const today = new Date();
//     const days = [];

//     for (let i = 0; i < adjustedStartingDay; i++) {
//       days.push(<div key={`empty-${i}`} className="h-10"></div>);
//     }

//     for (let day = 1; day <= daysInMonth; day++) {
//       const isToday = today.getDate() === day && today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();
//       const isSelected = selectedDate.getDate() === day && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear();

//       days.push(
//         <button
//           key={day}
//           onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
//           className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all
//             ${isSelected ? "bg-[#004D40] text-white shadow-lg scale-110" : ""}
//             ${isToday && !isSelected ? "bg-teal-50 text-[#004D40] border border-teal-200" : ""}
//             ${!isSelected && !isToday ? "hover:bg-gray-100 text-gray-700" : ""}
//           `}
//         >
//           {day}
//         </button>
//       );
//     }
//     return days;
//   };

//   return (
//     <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
//       <div className="flex justify-between items-center mb-8">
//         <h4 className="font-bold text-base text-gray-800">{formatDate(currentDate)}</h4>
//         <div className="flex gap-2">
//           <button onClick={() => navigateMonth(-1)} className="p-2 hover:bg-gray-50 rounded-full border border-gray-100">
//             <ChevronLeft size={18} className="text-gray-600" />
//           </button>
//           <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-gray-50 rounded-full border border-gray-100">
//             <ChevronRight size={18} className="text-gray-600" />
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-7 gap-2 mb-4">
//         {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
//           <div key={day} className="text-center text-gray-400 text-[11px] font-bold uppercase tracking-wider">
//             {day}
//           </div>
//         ))}
//       </div>
//       <div className="grid grid-cols-7 gap-2">{renderCalendar()}</div>
//     </div>
//   );
// };

// const NewsCard = () => {
//   const newsItems = [
//     { code: "gb", title: "UK expands Business Visa deadline", source: "websites.com/USAFaseEnews" },
//     { code: "us", title: "USA Ease Entry Rule for Health Tourists", source: "The Indian Times" },
//     { code: "ca", title: "Canada Tightens Work Permit Rules", source: "ircc.org" },
//     { code: "au", title: "Australia Ban Multiple Access Route", source: "minsha.gov.au" },
//     { code: "fr", title: "France Introduction E-visa Regime in Africa", source: "france-visas.gouv.fr" },
//     { code: "de", title: "Germany Now Requires Compulsory UV", source: "daad.de" },
//     { code: "ie", title: "Ireland Ban Visa on Arrival for Africans", source: "eban.com" },
//     { code: "es", title: "Spain Launch New Visa Regime for NG", source: "sunrise.com" },
//   ];

//   return (
//     <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <h4 className="font-bold text-base text-gray-800">Alert and News</h4>
//         <button className="text-[12px] text-[#004D40] hover:underline font-bold">See All</button>
//       </div>
//       <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
//         {newsItems.map((item, index) => (
//           <NewsItem
//             key={index}
//             flag={<img src={`https://flagcdn.com/${item.code}.svg`} alt="flag" className="w-6 h-4 object-cover rounded-sm shadow-sm" />}
//             title={item.title}
//             source={item.source}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// /* ===================== MAIN COMPONENT ===================== */

// const TopPicks = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname.startsWith(path);

//   const sidebarItems = [
//     { icon: <LayoutDashboard size={20} />, label: "Overview", path: "/dashboard/overview" },
//     { icon: <Compass size={20} />, label: "Explore", path: "/explore" },
//     { icon: <Star size={20} />, label: "Top Picks", path: "/top-picks" },
//     { icon: <MessageSquare size={20} />, label: "Ask Travactiv", path: "/ask" },
//     { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
//   ];

//   const links = [
//     { title: "Visa-Free Countries for Nigerians", desc: "Discover-Hassel-Free travel spots where you can pack your bags and go, no paperwork required." },
//     { title: "Cheapest fligh deals right now", desc: "Stay informed on the latest flight path and deals that help you travel smarter while spending less." },
//     { title: "Top 5 Budget-Friendly Destination for 2026", desc: "Destinations that offer great experiences without breaking the bank, so you get more value for every trip." },
//     { title: "Real-Time Currency Exchange Rates", desc: "Get up-to-date currency exchange rates and tips to make every penny count while traveling abroad." },
//     { title: "Best Travel Insurance Options", desc: "Budget-friendly travel insurance options that keeps you covered and confident throughout your journey." },
//     { title: "Weather & Season Guide By Country", desc: "Learn the perfect time of the year to travel, enjoy peak attractions, and avoid crowd for a memorable trip." },
//   ];

//   return (
//     <div className="flex min-h-screen bg-[#F8F9FA] font-sans text-[#333333]">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between py-8 px-4 sticky top-0 h-screen">
//         <div>
//           <div className="flex items-center gap-2 px-4 mb-12">
//             <div className="w-8 h-8 bg-[#004D40] rounded-full flex items-center justify-center">
//               <div className="w-3 h-3 border-2 border-white rotate-45"></div>
//             </div>
//             <span className="text-xl font-bold text-[#004D40] tracking-tight">Travactiv</span>
//           </div>

//           <nav className="space-y-1">
//             {sidebarItems.map((item) => (
//               <Link
//                 key={item.label}
//                 to={item.path}
//                 className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
//                   isActive(item.path) ? "bg-[#004D40] text-white shadow-lg" : "text-gray-500 hover:bg-gray-50"
//                 }`}
//               >
//                 {item.icon}
//                 <span className="text-sm font-medium">{item.label}</span>
//               </Link>
//             ))}
//           </nav>
//         </div>

//         <button className="flex items-center gap-3 px-4 py-3 text-[#D32F2F] font-medium hover:bg-red-50 rounded-xl transition-colors">
//           <LogOut size={20} className="rotate-180" />
//           <span className="text-sm">Log out</span>
//         </button>
//       </aside>

//       {/* Main Body */}
//       <div className="flex-1 flex flex-col">
//         <header className="h-20 bg-white border-b border-gray-100 px-10 flex items-center justify-between sticky top-0 z-20">
//           <div className="relative w-[500px]">
//             <input 
//               type="text" 
//               placeholder="Search here...." 
//               className="w-full bg-[#F1F3F4] border-none rounded-full py-3 px-6 text-sm focus:ring-1 focus:ring-teal-600 outline-none"
//             />
//             <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#004D40] p-2 rounded-full text-white cursor-pointer">
//               <Search size={14} />
//             </div>
//           </div>

//           <div className="flex items-center gap-8">
//             <div className="flex items-center gap-3">
//               <img src="https://i.pravatar.cc/150?u=samuel" alt="Profile" className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-50" />
//               <div className="leading-tight">
//                 <p className="text-sm font-bold">Samuel S.</p>
//                 <p className="text-[11px] text-gray-400">Student</p>
//               </div>
//             </div>
//             <div className="relative cursor-pointer hover:bg-gray-50 p-2 rounded-full transition-colors">
//               <Bell size={22} className="text-gray-400" />
//               <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></div>
//             </div>
//           </div>
//         </header>

//         <div className="p-10 flex gap-8">
//           {/* Main Feed Content */}
//           <div className="flex-1 space-y-8">
//             {[1, 2].map((card) => (
//               <div key={card} className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 flex gap-8 hover:shadow-md transition-all duration-300">
//                 <div className="w-[360px] shrink-0">
//                   <img src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800" 
//                        className="w-full h-52 object-cover rounded-2xl mb-4" alt="Santorini Main" />
//                   <div className="grid grid-cols-4 gap-3">
//                     <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=150" className="h-16 w-full object-cover rounded-xl" alt="Thumb" />
//                     <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=150" className="h-16 w-full object-cover rounded-xl" alt="Thumb" />
//                     <img src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?w=150" className="h-16 w-full object-cover rounded-xl" alt="Thumb" />
//                     <div className="relative h-16 w-full rounded-xl overflow-hidden cursor-pointer group">
//                       <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=150" className="w-full h-full object-cover brightness-50 group-hover:brightness-40 transition-all" alt="More" />
//                       <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">+4</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col justify-between py-2">
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Visit Santorini, Greece</h2>
//                     <p className="text-gray-500 text-[14px] leading-relaxed">
//                       Surrounded by turquoise water, the Island is cluttered with multi-colored cliffs, hot-headed volcanoes, and acres of sun-toasted sand. Adding to the marvels of nature are the ancient relics and delectable cuisine.
//                     </p>
//                   </div>
//                   <button className="bg-[#004D40] text-white w-full py-4 rounded-full text-sm font-bold mt-6 hover:bg-[#003d33] transition-all shadow-md active:scale-[0.98]">
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {/* Carefully Researched Links */}
//             <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
//               <h3 className="text-xl font-bold mb-1">Carefully Researched Links For You</h3>
//               <p className="text-gray-400 text-[12px] mb-8">Explore countries with low tuition, scholarships, and easy visa access perfect for your study journey.</p>
//               <div className="space-y-4">
//                 {links.map((link, idx) => (
//                   <div key={idx} className="flex items-center justify-between group p-3 hover:bg-gray-50 rounded-2xl transition-all border border-transparent hover:border-gray-100">
//                     <div className="flex items-center gap-5">
//                       <div className="w-14 h-14 rounded-xl bg-gray-100 overflow-hidden shrink-0 shadow-sm">
//                         <img src={`https://picsum.photos/seed/link${idx}/100`} className="w-full h-full object-cover" alt="icon" />
//                       </div>
//                       <div className="max-w-lg">
//                         <h4 className="text-[14px] font-bold text-gray-800">{link.title}</h4>
//                         <p className="text-[11px] text-gray-400 leading-snug">{link.desc}</p>
//                       </div>
//                     </div>
//                     <button className="px-6 py-2 border-2 border-[#004D40] text-[#004D40] text-[12px] font-bold rounded-full hover:bg-[#004D40] hover:text-white transition-all">
//                       Browse Now
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* RESTORED BOTTOM HERO / FOOTER */}
//             <div className="relative h-32 rounded-[32px] overflow-hidden bg-[#1A1A1A] flex items-center justify-center p-8 group">
//               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200" 
//                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Background" />
//               <div className="relative z-10 text-center max-w-2xl">
//                 <h3 className="text-white font-bold text-xl mb-1">Start Your Journey with the Right Opportunity</h3>
//                 <p className="text-gray-300 text-[12px] leading-relaxed">Discover scholarships, visa-friendly countries, and top universities with fewer requirements. Find your best-fit option and apply with confidence.</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar - Increased Width to 380px */}
//           <div className="w-[380px] space-y-8 shrink-0">
//             <CalendarCard />
//             <NewsCard />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopPicks;



