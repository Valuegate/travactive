import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Assets
import BannerSideImage from "../../assets/Colosium.png"; 
import BannerBackground from "../../assets/DashboardBanner.png"; 
import OverviewImg from "../../assets/Singerpore.jpg";
import OverviewImg2 from "../../assets/Visa.jpg";
import OverviewImg3 from "../../assets/Medic.jpg";
import Checked from "../../assets/VectorMark.png";

const overviewData = [
  { id: 1, img: OverviewImg, heading: "Conference in Singapore", description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities...", status: "Actively Open" },
  { id: 2, img: OverviewImg2, heading: "Visa Policy Updates", description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities...", status: "Actively Open" },
  { id: 3, img: OverviewImg3, heading: "Health Tourism Update", description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities...", status: "Actively Open" },
];

/* ===================== SUB-COMPONENT: NEWS ITEM ===================== */
const NewsItem = ({ flag, title, source }) => (
  <div className="flex gap-4 pb-4 border-b border-gray-50 last:border-0 group cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-1 rounded-xl transition-all">
    <div className="flex-shrink-0 mt-1">
      {flag}
    </div>
    <div className="flex-1 min-w-0">
      <h5 className="text-sm font-bold leading-snug mb-0.5 truncate group-hover:text-teal-800 transition-colors">{title}</h5>
      <p className="text-[10px] text-gray-400 italic truncate">Source: {source}</p>
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

/* ===================== NEWS COMPONENT ===================== */
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
    <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 h-full">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-base text-gray-800">Alert and News</h4>
        <button className="text-[12px] text-[#004D40] hover:underline font-bold transition-colors duration-200 hover:text-teal-900">
          See All
        </button>
      </div>
      <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
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

/* ===================== MAIN OVERVIEW ===================== */
const Overview = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full min-h-screen bg-[#F8F9FA] py-6 px-4 font-inter">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* BANNER */}
          <div 
            className="relative w-full h-[200px] rounded-[24px] overflow-hidden flex items-center shadow-lg transition-all hover:shadow-xl duration-500 group"
            style={{ 
              backgroundImage: `linear-gradient(90deg, rgba(3,181,170,0.95) 0%, rgba(3,181,170,0.7) 100%), url(${BannerBackground})`,
              backgroundSize: 'cover' 
            }}
          >
            <div className="px-10 z-10">
              <h2 className="text-sm font-medium text-gray-900/80 uppercase tracking-widest">Your next adventure?</h2>
              <p className="text-6xl font-bold text-gray-900 font-outfit mt-1">Rome!</p>
            </div>
            <img src={BannerSideImage} className="absolute right-0 bottom-0 h-[95%] object-contain z-10 group-hover:scale-105 transition-transform duration-700" alt="Colosseum" />
          </div>

          {/* TOP CARDS ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Upcoming Seminars", desc: "Stay ahead of closing dates for scholarships, conferences, and visa applications.", label: "Explore" },
              { title: "Visa Requirements", desc: "Access your saved scholarships, grants, and travel updates anytime in one place.", label: "Check Deadlines" }
            ].map((card, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-[200px] cursor-pointer">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 flex-1 leading-relaxed line-clamp-2">{card.desc}</p>
                <div className="mt-4 pt-4 border-t border-teal-50 flex items-center justify-between group/btn">
                  <span className="font-bold text-sm text-gray-800 group-hover/btn:text-[#004D40] transition-colors">{card.label}</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform text-[#004D40]" />
                </div>
              </div>
            ))}
          </div>

          {/* RECOMMENDED SECTION */}
          <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Recommended Opportunities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {overviewData.map((item) => (
                <div key={item.id} className="group rounded-[20px] border border-gray-50 p-3 hover:border-teal-100 hover:shadow-xl transition-all duration-300 bg-white cursor-pointer">
                  <div className="overflow-hidden rounded-[16px] mb-3">
                    <img src={item.img} alt={item.heading} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-bold text-[13px] text-gray-800 mb-1 truncate group-hover:text-teal-700">{item.heading}</h3>
                  <p className="text-[10px] text-gray-500 line-clamp-2 mb-3 leading-normal">{item.description}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <img src={Checked} alt="status" className="w-3 h-3" />
                    <span className="text-[9px] font-bold text-teal-600 uppercase tracking-tighter">{item.status}</span>
                  </div>
                  <button className="w-full py-2.5 rounded-full border-2 border-[#400097] text-[#400097] font-bold text-xs hover:bg-[#400097] hover:text-white transition-all transform active:scale-95">
                    Explore Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6 flex flex-col">
            <CalendarCard />
            <NewsCard />
        </div>

      </div>
    </div>
  );
};

export default Overview;







// import React, { useState } from "react";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// // Assets - Keep your imports as they were
// import BannerSideImage from "../../assets/Colosium.png"; 
// import BannerBackground from "../../assets/DashboardBanner.png"; 
// import OverviewImg from "../../assets/Singerpore.jpg";
// import OverviewImg2 from "../../assets/Visa.jpg";
// import OverviewImg3 from "../../assets/Medic.jpg";
// import Checked from "../../assets/VectorMark.png";

// const overviewData = [
//   { id: 1, img: OverviewImg, heading: "Conference in Singapore", description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities...", status: "Actively Open" },
//   { id: 2, img: OverviewImg2, heading: "Visa Policy Updates", description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities...", status: "Actively Open" },
//   { id: 3, img: OverviewImg3, heading: "Health Tourism Update", description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities...", status: "Actively Open" },
// ];

// /* ===================== SUB-COMPONENT: NEWS ITEM ===================== */
// // Added this missing component to fix your error
// const NewsItem = ({ flag, title, source }) => (
//   <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 group hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg transition-colors cursor-pointer">
//     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-50">
//       {flag}
//     </div>
//     <div className="flex-1 min-w-0">
//       <h5 className="text-sm font-bold leading-snug mb-1 truncate group-hover:text-teal-700 transition-colors">{title}</h5>
//       <p className="text-[11px] text-gray-500 truncate">Source: <span className="text-blue-600 hover:underline">{source}</span></p>
//     </div>
//   </div>
// );

// /* ===================== CALENDAR COMPONENT ===================== */
// const CalendarCard = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 8));

//   const navigateMonth = (direction) => {
//     const newDate = new Date(currentDate);
//     newDate.setMonth(currentDate.getMonth() + direction);
//     setCurrentDate(newDate);
//   };

//   const formatDate = (date) => date.toLocaleDateString("en-US", { month: "long", year: "numeric" });

//   const getDaysInMonth = (date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const daysInMonth = lastDay.getDate();
//     // Adjusted for Monday start
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
//           className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300
//             ${isSelected ? "bg-[#004D40] text-white shadow-md scale-110" : "hover:bg-teal-50 hover:text-[#004D40] hover:scale-110"}
//             ${isToday && !isSelected ? "border border-teal-200 text-[#004D40] bg-teal-50/30" : "text-gray-700"}
//           `}
//         >
//           {day}
//         </button>
//       );
//     }
//     return days;
//   };

//   return (
//     <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 h-full">
//       <div className="flex justify-between items-center mb-6">
//         <h4 className="font-bold text-gray-800">{formatDate(currentDate)}</h4>
//         <div className="flex gap-1">
//           <button onClick={() => navigateMonth(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors active:scale-90"><ChevronLeft size={18} /></button>
//           <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors active:scale-90"><ChevronRight size={18} /></button>
//         </div>
//       </div>
//       <div className="grid grid-cols-7 gap-1 text-center mb-2">
//         {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(d => (
//           <span key={d} className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{d}</span>
//         ))}
//       </div>
//       <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
//     </div>
//   );
// };

// /* ===================== NEWS COMPONENT ===================== */
// const NewsCard = () => {
//   const newsItems = [
//     { code: "gb", title: "UK expands Business Visa deadline", source: "websites.com" },
//     { code: "us", title: "USA Ease Entry Rule for Health Tourists", source: "The Indian Times" },
//     { code: "ca", title: "Canada Tightens Work Permit Rules", source: "ircc.org" },
//     { code: "au", title: "Australia Ban Multiple Access Route", source: "minsha.gov.au" },
//     { code: "fr", title: "France Introduction E-visa Regime in Africa", source: "france-visas.gouv.fr" },
//   ];

//   return (
//     <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 flex flex-col h-full">
//       <div className="flex justify-between items-center mb-4">
//         <h4 className="font-bold text-gray-800">Alert and News</h4>
//         <button className="text-xs text-[#004D40] font-bold hover:underline transition-all">See All</button>
//       </div>
//       <div className="space-y-3 overflow-y-auto pr-1">
//         {newsItems.map((item, index) => (
//           <NewsItem
//             key={index}
//             flag={<img src={`https://flagcdn.com/${item.code}.svg`} alt="flag" className="w-full h-full object-cover" />}
//             title={item.title}
//             source={item.source}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// /* ===================== MAIN OVERVIEW ===================== */
// const Overview = () => {
//   return (
//     <div className="max-w-[1440px] mx-auto w-full min-h-screen bg-[#F8F9FA] py-6 px-4 font-inter">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
//         {/* LEFT COLUMN */}
//         <div className="lg:col-span-2 space-y-6">
          
//           {/* BANNER */}
//           <div 
//             className="relative w-full h-[200px] rounded-[24px] overflow-hidden flex items-center shadow-lg transition-all hover:shadow-xl duration-500 group"
//             style={{ 
//               backgroundImage: `linear-gradient(90deg, rgba(3,181,170,0.95) 0%, rgba(3,181,170,0.7) 100%), url(${BannerBackground})`,
//               backgroundSize: 'cover' 
//             }}
//           >
//             <div className="px-10 z-10">
//               <h2 className="text-sm font-medium text-gray-900/80 uppercase tracking-widest">Your next adventure?</h2>
//               <p className="text-6xl font-bold text-gray-900 font-outfit mt-1">Rome!</p>
//             </div>
//             <img src={BannerSideImage} className="absolute right-0 bottom-0 h-[95%] object-contain z-10 group-hover:scale-105 transition-transform duration-700" alt="Colosseum" />
//           </div>

//           {/* TOP CARDS ROW */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               { title: "Upcoming Seminars", desc: "Stay ahead of closing dates for scholarships, conferences, and visa applications.", label: "Explore" },
//               { title: "Visa Requirements", desc: "Access your saved scholarships, grants, and travel updates anytime in one place.", label: "Check Deadlines" }
//             ].map((card, idx) => (
//               <div key={idx} className="group bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-[200px] cursor-pointer">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
//                 <p className="text-sm text-gray-500 flex-1 leading-relaxed line-clamp-2">{card.desc}</p>
//                 <div className="mt-4 pt-4 border-t border-teal-50 flex items-center justify-between group/btn">
//                   <span className="font-bold text-sm text-gray-800 group-hover/btn:text-[#004D40] transition-colors">{card.label}</span>
//                   <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform text-[#004D40]" />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RECOMMENDED SECTION */}
//           <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
//             <h2 className="text-xl font-bold text-gray-800 mb-6">Recommended Opportunities</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {overviewData.map((item) => (
//                 <div key={item.id} className="group rounded-[20px] border border-gray-50 p-3 hover:border-teal-100 hover:shadow-xl transition-all duration-300 bg-white cursor-pointer">
//                   <div className="overflow-hidden rounded-[16px] mb-3">
//                     <img src={item.img} alt={item.heading} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
//                   </div>
//                   <h3 className="font-bold text-[13px] text-gray-800 mb-1 truncate group-hover:text-teal-700">{item.heading}</h3>
//                   <p className="text-[10px] text-gray-500 line-clamp-2 mb-3 leading-normal">{item.description}</p>
//                   <div className="flex items-center gap-1 mb-3">
//                     <img src={Checked} alt="status" className="w-3 h-3" />
//                     <span className="text-[9px] font-bold text-teal-600 uppercase tracking-tighter">{item.status}</span>
//                   </div>
//                   <button className="w-full py-2.5 rounded-full border-2 border-[#400097] text-[#400097] font-bold text-xs hover:bg-[#400097] hover:text-white transition-all transform active:scale-95">
//                     Explore Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="space-y-6 flex flex-col">
//             <div className="flex-1">
//                 <CalendarCard />
//             </div>
//             <div className="flex-1">
//                 <NewsCard />
//             </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Overview;







// import React, { useState } from "react";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// // Assets - Keep your imports as they were
// import BannerSideImage from "../../assets/Colosium.png"; 
// import BannerBackground from "../../assets/DashboardBanner.png"; 
// import OverviewImg from "../../assets/Singerpore.jpg";
// import OverviewImg2 from "../../assets/Visa.jpg";
// import OverviewImg3 from "../../assets/Medic.jpg";
// import Checked from "../../assets/VectorMark.png";

// const overviewData = [
//   { id: 1, img: OverviewImg, heading: "Conference in Singapore", description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities...", status: "Actively Open" },
//   { id: 2, img: OverviewImg2, heading: "Visa Policy Updates", description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities...", status: "Actively Open" },
//   { id: 3, img: OverviewImg3, heading: "Health Tourism Update", description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities...", status: "Actively Open" },
// ];

// /* ===================== CALENDAR COMPONENT ===================== */
// const CalendarCard = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 8));

//   const navigateMonth = (direction) => {
//     const newDate = new Date(currentDate);
//     newDate.setMonth(currentDate.getMonth() + direction);
//     setCurrentDate(newDate);
//   };

//   const formatDate = (date) => date.toLocaleDateString("en-US", { month: "long", year: "numeric" });

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
//           className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300
//             ${isSelected ? "bg-[#004D40] text-white shadow-md scale-110" : "hover:bg-teal-50 hover:text-[#004D40]"}
//             ${isToday && !isSelected ? "border border-teal-200 text-[#004D40]" : "text-gray-700"}
//           `}
//         >
//           {day}
//         </button>
//       );
//     }
//     return days;
//   };

//   return (
//     <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 h-full">
//       <div className="flex justify-between items-center mb-6">
//         <h4 className="font-bold text-gray-800">{formatDate(currentDate)}</h4>
//         <div className="flex gap-1">
//           <button onClick={() => navigateMonth(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ChevronLeft size={18} /></button>
//           <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ChevronRight size={18} /></button>
//         </div>
//       </div>
//       <div className="grid grid-cols-7 gap-1 text-center mb-2">
//         {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(d => (
//           <span key={d} className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{d}</span>
//         ))}
//       </div>
//       <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
//     </div>
//   );
// };

// /* ===================== NEWS COMPONENT ===================== */
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

// /* ===================== MAIN OVERVIEW ===================== */
// const Overview = () => {
//   return (
//     <div className="max-w-[1280px] mx-auto w-full min-h-screen bg-[#F8F9FA] p-4 lg:p-8 font-inter">
      
//       {/* MAIN GRID SYSTEM 
//           Left: 2 fractions | Right: 1 fraction 
//       */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         {/* LEFT COLUMN */}
//         <div className="lg:col-span-2 space-y-8">
          
//           {/* BANNER */}
//           <div 
//             className="relative w-full h-[200px] rounded-[24px] overflow-hidden flex items-center shadow-lg transition-transform hover:scale-[1.01] duration-500"
//             style={{ 
//               backgroundImage: `linear-gradient(90deg, rgba(3,181,170,0.9) 0%, rgba(3,181,170,0.7) 100%), url(${BannerBackground})`,
//               backgroundSize: 'cover' 
//             }}
//           >
//             <div className="px-10 z-10">
//               <h2 className="text-sm font-medium text-gray-900/80 uppercase tracking-widest">Your next adventure?</h2>
//               <p className="text-6xl font-bold text-gray-900 font-outfit mt-1">Rome!</p>
//             </div>
//             <img src={BannerSideImage} className="absolute right-0 bottom-0 h-[90%] object-contain z-10" alt="Colosseum" />
//           </div>

//           {/* TOP CARDS ROW */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               { title: "Upcoming Seminars", desc: "Stay ahead of closing dates for scholarships, conferences, and visa applications.", label: "Explore" },
//               { title: "Visa Requirements", desc: "Access your saved scholarships, grants, and travel updates anytime in one place.", label: "Check Deadlines" }
//             ].map((card, idx) => (
//               <div key={idx} className="group bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-[200px]">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
//                 <p className="text-sm text-gray-500 flex-1 leading-relaxed">{card.desc}</p>
//                 <div className="mt-4 pt-4 border-t border-teal-100 flex items-center justify-between cursor-pointer group/btn">
//                   <span className="font-bold text-sm text-gray-800 group-hover/btn:text-[#004D40] transition-colors">{card.label}</span>
//                   <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform text-[#004D40]" />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RECOMMENDED SECTION */}
//           <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
//             <h2 className="text-xl font-bold text-gray-800 mb-6">Recommended Opportunities</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {overviewData.map((item) => (
//                 <div key={item.id} className="group rounded-[20px] border border-gray-50 p-3 hover:border-teal-100 hover:shadow-xl transition-all duration-300 bg-white">
//                   <div className="overflow-hidden rounded-[16px] mb-3">
//                     <img src={item.img} alt={item.heading} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
//                   </div>
//                   <h3 className="font-bold text-[13px] text-gray-800 mb-1 truncate">{item.heading}</h3>
//                   <p className="text-[10px] text-gray-500 line-clamp-2 mb-3">{item.description}</p>
//                   <div className="flex items-center gap-1 mb-3">
//                     <img src={Checked} alt="status" className="w-3 h-3" />
//                     <span className="text-[9px] font-bold text-teal-600 uppercase tracking-tighter">{item.status}</span>
//                   </div>
//                   <button className="w-full py-2.5 rounded-full border-2 border-[#400097] text-[#400097] font-bold text-xs hover:bg-[#400097] hover:text-white transition-all transform active:scale-95">
//                     Explore Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN (Calendar & News) */}
//         <div className="space-y-8 flex flex-col">
//             <div className="flex-1 min-h-[400px]">
//                 <CalendarCard />
//             </div>
//             <div className="flex-1 min-h-[400px]">
//                 <NewsCard />
//             </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Overview;






// import React, { useState } from "react";
// import BannerSideImage from "../../assets/Colosium.png"; 
// import BannerBackground from "../../assets/DashboardBanner.png"; 
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import OverviewImg from "../../assets/Singerpore.jpg";
// import OverviewImg2 from "../../assets/Visa.jpg";
// import OverviewImg3 from "../../assets/Medic.jpg";
// import Checked from "../../assets/VectorMark.png";

// const overviewData = [
//   {
//     id: 1,
//     img: OverviewImg,
//     heading: "Conference in Singapore",
//     description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities...",
//     status: "Actively Open",
//   },
//   {
//     id: 2,
//     img: OverviewImg2,
//     heading: "Visa Policy Updates",
//     description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities...",
//     status: "Actively Open",
//   },
//   {
//     id: 3,
//     img: OverviewImg3,
//     heading: "Health Tourism Update",
//     description: "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities...",
//     status: "Actively Open",
//   },
// ];

// /* ===================== NEW CALENDAR COMPONENT ===================== */
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

// /* ===================== NEW NEWS COMPONENT ===================== */
// const NewsItem = ({ flag, title, source }) => (
//   <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 group hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg transition-colors">
//     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
//       {flag}
//     </div>
//     <div className="flex-1 min-w-0">
//       <h5 className="text-sm font-bold leading-snug mb-1 truncate">{title}</h5>
//       <p className="text-[11px] text-gray-500 truncate">Source: <span className="text-blue-600 hover:underline">{source}</span></p>
//     </div>
//   </div>
// );

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

// /* ===================== MAIN OVERVIEW ===================== */
// const Overview = () => {
//   return (
//     <div className="w-full min-h-screen bg-[#F6F6F6] p-6">
//       <div className="flex gap-6">
//         {/* LEFT SECTION */}
//         <div className="flex-1 flex flex-col gap-6">
          
//           {/* BANNER */}
//           <div className="w-[752px] h-[184px] rounded-[12px] shadow flex overflow-hidden relative"
//             style={{ backgroundImage: `linear-gradient(rgba(3, 181, 170, 0.65), rgba(3, 181, 170, 0.65)), url(${BannerBackground})`, backgroundSize: 'cover' }}>
//             <div className="absolute inset-0 bg-[#03B5AA]/60"></div>
//             <div className="flex-1 z-10 p-6 flex flex-col justify-center ml-8 text-black">
//               <h2 className="text-[14px] font-medium opacity-90">Your next adventure?</h2>
//               <p className="font-['Outfit'] font-semibold text-[64px] leading-[72px] text-[#212322]">Rome!</p>
//             </div>
//             <div className="flex-none w-[276px] h-[180px] z-10">
//               <img src={BannerSideImage} alt="Side" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* CARDS ROW */}
//           <div className="flex gap-[20px]">
//             {/* CARD 1 */}
//             <div className="h-[184px] w-[366px] bg-white rounded-[12px] shadow p-6 flex flex-col">
//               <h3 className="font-outfit font-semibold text-[20px]">Upcoming Seminars</h3>
//               <p className="text-[14px] text-[#2D2D2DD6] mt-2 flex-1">
//                 Stay ahead of closing dates for scholarships, conferences, and visa applications.
//               </p>
//               <div className="flex items-center justify-between border-t border-[#81FD48] pt-3 -mx-6 px-6 cursor-pointer">
//                 <span className="font-semibold text-[14px]">Explore</span>
//                 <ArrowRight size={16} />
//               </div>
//             </div>

//             {/* CARD 2 */}
//             <div className="h-[184px] w-[366px] bg-white rounded-[12px] shadow p-6 flex flex-col">
//               <h3 className="font-outfit font-semibold text-[20px]">Important Visa Requirements</h3>
//               <p className="text-[14px] text-[#2D2D2DD6] mt-2 flex-1">
//                 Access your saved scholarships, grants, and travel updates anytime.
//               </p>
//               <div className="flex items-center justify-between border-t border-[#81FD48] pt-3 -mx-6 px-6 cursor-pointer">
//                 <span className="font-semibold text-[14px]">Check Deadlines</span>
//                 <ArrowRight size={16} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SECTION – NEW CALENDAR */}
//         <div className="w-[360px]">
//           <CalendarCard />
//         </div>
//       </div>

//       {/* LOWER SECTION */}
//       <div className="mt-8 flex gap-6">
//         {/* LEFT — RECOMMENDED CONTAINER */}
//         <div className="w-[762px] bg-white rounded-[12px] border border-gray-100 p-4">
//           <h2 className="text-[20px] font-outfit font-semibold text-[#212322] mb-4">Recommended Opportunities</h2>
//           <div className="flex gap-[20px] flex-wrap">
//             {overviewData.map((item) => (
//               <div key={item.id} className="w-[226px] bg-white rounded-[16px] border border-gray-100 p-[12px] shadow-sm flex flex-col gap-[10px]">
//                 <img src={item.img} alt={item.heading} className="w-full h-[160px] object-cover rounded-[12px]" />
//                 <h3 className="font-medium text-[12px] text-[#2D2D2D]">{item.heading}</h3>
//                 <p className="text-[10px] text-[#2D2D2DD6] line-clamp-3">{item.description}</p>
//                 <div className="flex items-center gap-2 mt-auto">
//                   <img src={Checked} alt="checked" className="w-3 h-3" />
//                   <p className="font-medium text-[8px]">{item.status}</p>
//                 </div>
//                 <button className="w-full py-2 rounded-full border border-[#400097] text-[#212322] font-semibold text-[12px] hover:bg-gray-50 transition-colors">
//                   Explore
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT — NEW NEWS CARD */}
//         <div className="w-[360px]">
//           <NewsCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;




// import React from "react";
// import BannerSideImage from "../../assets/Colosium.png"; // image flex left
// import BannerBackground from "../../assets/DashboardBanner.png"; // background image
// import { ArrowRight } from "lucide-react";
// import MyCalendar from "../../Components/MyCalender";
// import OverviewImg from "../../assets/Singerpore.jpg";
// import OverviewImg2 from "../../assets/Visa.jpg";
// import OverviewImg3 from "../../assets/Medic.jpg";
// import Checked from "../../assets/VectorMark.png";




// const overviewData = [
//   {
//     id: 1,
//     img: OverviewImg,
//     heading: "Conference in Singapore",
//     description:
//       "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities from international organizations, covering tuition, living expenses, travel costs, et.c",
//     status: "Actively Open",
//   },
//   {
//     id: 2,
//     img: OverviewImg2,
//     heading: "Visa Policy Updates",
//     description:
//       "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities from international organizations, covering tuition, living expenses, travel costs, et.c",
//     status: "Actively Open",
//   },
//   {
//     id: 3,
//     img: OverviewImg3,
//     heading: "Health Tourism Update",
//     description:
//       "Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities from international organizations, covering tuition, living expenses, travel costs, et.c",
//     status: "Actively Open",
//   },
// ];


// const News = ({ flag, title, source }) => (
//   <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 group hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg transition-colors">
//     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
//       {flag}
//     </div>
//     <div className="flex-1 min-w-0">
//       <h5 className="text-sm font-bold leading-snug mb-1 truncate">{title}</h5>
//       <p className="text-[11px] text-gray-500">Source: <span className="text-blue-600 hover:underline">{source}</span></p>
//     </div>
//   </div>
// );
// const NewsCard = () => {
//   const newsItems = [
//     { 
//       code: "gb", 
//       title: "UK expands Business Visa deadline", 
//       source: "https://www.websites.com/2019/01/06/USAFaseEnews",
      
//     },
//     { 
//       code: "us", 
//       title: "USA Ease Entry Rule for Health Tourists", 
//       source: "The Indian Times",
      
//     },
//     { 
//       code: "ca", 
//       title: "Canada Tightens Work Permit Rules", 
//       source: "https://ircc.org/"
//     },
//     { 
//       code: "au", 
//       title: "Australia Ban Multiple Access Route", 
//       source: "https://minsha.gov.au"
//     },
//     { 
//       code: "fr", 
//       title: "France Introduction E-visa Regime in Africa", 
//       source: "https://france-visas.gouv.fr/student"
//     },
//     { 
//       code: "de", 
//       title: "Germany Now Requires Compulsory UV", 
//       source: "https://www.daad.de/"
//     },
//     { 
//       code: "ie", 
//       title: "Ireland Ban Visa on Arrival for Africans", 
//       source: "https://www.eban.com/"
//     },
//     { 
//       code: "es", 
//       title: "Spain Launch New Visa Regime for NG", 
//       source: "https://www.sunrise.com/"
//     },
//   ];

//   return (
//     <div 
//   className="
//   bg-white p-6 border-[0.4px] border-gray-100 
//   w-[368px] h-[496px] rounded-xl opacity-100
//   "
//   style={{
//     position: "absolute",
//     top: "550px",
//     left: "1105px",
//   }}
// >

//       <div className="flex justify-between items-center mb-6">
//         <h4 className="font-bold text-lg text-gray-800">Alert and News</h4>
//         <button className="text-xs text-gray-500 hover:underline font-medium">See All</button>
//       </div>
//       <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
//         {newsItems.map((item, index) => (
//           <News 
//             key={index}
//             // Generates a URL for a high-quality SVG flag
//             flag={
//               <img 
//                 src={`https://flagcdn.com/${item.code}.svg`} 
//                 alt={`${item.code} flag`}
//                 className="w-6 h-4 object-cover rounded-sm shadow-sm" 
//               />
//             }
//             title={item.title}
//             source={item.source}
//             sourceLabel={item.sourceLabel}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
// const Overview = () => {
//   return (
//     <div className="w-full min-h-screen bg-[#F6F6F6] p-6">
//       <div className="flex gap-6">
//         {/* LEFT SECTION */}
//         <div className="flex-1 flex flex-col gap-6">
          
//           {/* BANNER */}
//           <div
//   className="
//     w-[752px]
//     h-[184px]
//     rounded-[12px]
//     shadow
//     flex
//     overflow-hidden
//     relative
//     opacity-100
//    box-shadow: 0px 1px 4px 0px #00000005;

//   "
//   style={{
    
//     backgroundImage: `
//       linear-gradient(
//         rgba(3, 181, 170, 0.65),
//         rgba(3, 181, 170, 0.65)
//       ),
//       url(${BannerBackground})
//     `,
//   }}
// >
//   <div className="absolute inset-0 bg-[#03B5AA]/60"></div>

//   {/* TEXT RIGHT */}
//   <div className="flex-1 z-10 p-6 flex flex-col justify-center ml-8 text-black">
//    <h2
//   className="
//     w-[143px]
//     h-[21px]
//     text-[14px]
//     leading-0
//     font-medium
//     font-inter
//     opacity-90
//     align-middle
//     whitespace-nowrap
//     weight-500
//   "
//   style={{ color: "var(--GoInt-Text, #212322)" }}
// >
//   Your next adventure?
// </h2>


//     <p className="w-[184px] h-[72px] 
//                font-['Outfit'] font-semibold 
//                text-[64px] leading-[72px] 
//                align-middle 
//                text-[#212322] opacity-100">
//       Rome!
//     </p>
//   </div>

//   {/* IMAGE LEFT */}
//   <div className="flex-none w-[276px] h-[180px] z-10">
//     <img
//       src={BannerSideImage}
//       alt="Side"
//       className="w-full h-full object-contain"
//     />
//   </div>
// </div>


//           {/* CARDS ROW */}
//           <div className="flex gap-[20px]">
//             {/* CARD 1 */}
//             <div className=" h-[184px] w-[366px] bg-white rounded-[12px] shadow p-6">
//              <h3
//   className="w-[186px] h-[25px] font-outfit font-semibold text-[20px] leading-[20px] tracking-[0px] opacity-100 whitespace-nowrap">
//   Upcoming Seminars
// </h3>

//               <p
//   className="
//     w-[326px]
//     h-[63px]
//     font-inter
//     font-normal
//     text-[14px]
//     leading-[21px]
//     tracking-[0px]
//     opacity-100
//     mt-2
//   "
//   style={{ color: "#2D2D2DD6" }}
// >
//   Stay ahead of closing dates for scholarships, conferences, and visa applications in your saved countries.
// </p>
// <div
//   className="flex items-center gap-2 cursor-pointer"
//   style={{
//     width: "366px",
//     height: "46px",
//     padding: "14px 12px",
//     gap: "10px",
//     borderBottomLeftRadius: "12px",
//     borderBottomRightRadius: "12px",
//     border: "0.4px solid #81FD48",
//     boxShadow: "0px 1px 4px 0px #00000005",
//     opacity: 1,
//     position: "relative",
//     marginTop: "auto",
//     marginLeft: "-24px",
//     marginRight: "-12px",
//     bottom: "-18px",
    
    
    
//   }}
// >
//   <p
//   className="w-[123px] h-[18px] font-[Sora] font-semibold text-[14px] leading-[18px] tracking-[0.8%] opacity-100"
//   style={{ color: "var(--GoInt-Text, #212322)" }}
// >
//   Explore
// </p>

//    <ArrowRight size={16} className="ml-auto" />
// </div>
//  </div>

//             {/* CARD 2 */}
//             <div className=" h-[184px] w-[366px] bg-white rounded-[12px] shadow p-6">
//              <h3
//   className="w-[186px] h-[25px] font-outfit font-semibold text-[20px] leading-[20px] tracking-[0px] opacity-100 whitespace-nowrap">
//   Important Visa Requirements
// </h3>

//               <p
//   className="
//     w-[326px]
//     h-[63px]
//     font-inter
//     font-normal
//     text-[14px]
//     leading-[21px]
//     tracking-[0px]
//     opacity-100
//     mt-2
//   "
//   style={{ color: "#2D2D2DD6" }}
// >
//   Access your saved scholarships, grants, travel updates, and important resources anytime in one convenient place.
// </p>
// <div
//   className="flex items-center gap-2 cursor-pointer"
//   style={{
//     width: "366px",
//     height: "46px",
//     padding: "14px 12px",
//     gap: "10px",
//     borderBottomLeftRadius: "12px",
//     borderBottomRightRadius: "12px",
//     border: "0.4px solid #81FD48",
//     boxShadow: "0px 1px 4px 0px #00000005",
//     opacity: 1,
//     position: "relative",
//     marginTop: "auto",
//     marginLeft: "-24px",
//     marginRight: "-12px",
//     bottom: "-18px",
    
    
    
//   }}
// >
//   <p
//   className="w-[123px] h-[18px] font-[Sora] font-semibold text-[14px] leading-[18px] tracking-[0.8%] opacity-100"
//   style={{ color: "var(--GoInt-Text, #212322)" }}
// >
//   Check Deadlines
// </p>

//    <ArrowRight size={16} className="ml-auto" />
// </div>
//  </div>
//           </div>
//         </div>

//         {/* RIGHT SECTION – CALENDAR */}
//         <div className="w-[360px] bg-white rounded-[12px] shadow p-6 flex flex-col justify-between">
//           {/* Placeholder calendar */}
//           <div className="flex-1 flex items-center justify-center text-gray-400">
//             <MyCalendar />
            
//           </div>
//         </div>
//       </div>
//       {/* CARDS + EXPLORE ROW */}
// <div className="mt-8 flex gap-6">

//   {/* LEFT — CARD CONTAINER */}
// {/* LEFT — CARD CONTAINER */}
// <div
//   className="
//     w-[762px] 
//     h-[480px] 
//     bg-white 
//     rounded-[12px] 
//     border 
//     p-4 
//     flex 
//     flex-col
//     gap-[20px]
//     opacity-100
//   "
//   style={{ borderWidth: "0.4px", borderColor: "#E5E5E5" }}  
// >
//   {/* HEADER */}
//   <h2 className="text-[20px] font-outfit font-semibold text-[#212322]">
//     Recommended Opportunities
//   </h2>

//   {/* CARDS ROW */}
//   <div className="flex gap-[20px] flex-wrap">
//   {overviewData.map((item) => (
//     <div
//       key={item.id}
//       className="
//         w-[226px] 
//         h-[391px] 
//         bg-white 
//         rounded-[16px] 
//         border 
//         p-[12px] 
//         flex 
//         flex-col 
//         gap-[10px] 
//         shadow
//       "
//       style={{ borderWidth: "0.24px", borderColor: "#E5E5E5" }}
//     >
//       {/* IMAGE */}
//       <img
//         src={item.img}
//         alt={item.heading}
//         className="w-[202px] h-[193px] object-cover rounded-[12px]"
//       />

//       {/* DESCRIPTION */}
//       <div className="w-[202px] flex flex-col gap-[6px]">
//         <h3 className="font-inter font-medium text-[12px] leading-none text-[#2D2D2D]">
//           {item.heading}
//         </h3>

//         <p className="font-inter font-normal text-[10px] leading-[14px] text-[#2D2D2DD6]">
//           {item.description}
//         </p>
//       </div>

//       {/* STATUS */}
//       <div className="flex items-center gap-2">
//         <span className="w-[18px] h-[18px] flex items-center justify-center">
//           <img
//             src={Checked}
//             alt="checked"
//             className="w-[9.17px] h-[9.17px] object-contain"
//           />
//         </span>

//         <p className="font-inter font-medium text-[8px]">
//           {item.status}
//         </p>
//       </div>

//       {/* BUTTON */}
//       <button
//         className="
//           w-[202px] 
//           h-[38px] 
//           rounded-[100px] 
//           border 
//           px-[10px] 
//           py-[10px]
//           flex 
//           items-center 
//           justify-center
//         "
//         style={{
//           borderWidth: "1px",
//           borderColor: "#400097",
//           boxShadow: "0px 1px 4px 0px #00000005",
//         }}
//       >
//         <span className="font-sora font-semibold text-[14px] whitespace-nowrap text-[#212322]">
//           Explore
//         </span>
//       </button>
//     </div>
//   ))}
// </div>


// </div>
  


//   {/* RIGHT — EXPLORE CONTAINER */}
//   <div>
    
//    <NewsCard />  
//     </div>
//   </div>

// </div>

    
//   );
// };

// export default Overview;
