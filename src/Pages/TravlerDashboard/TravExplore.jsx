import React, { useState } from "react";
import VisitCan from "../../assets/VisitCan.png";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

/* ===================== SUB-COMPONENTS ===================== */

const NewsItem = ({ flag, title, source }) => (
  <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-xl transition-all cursor-pointer group">
    <div className="mt-1 flex-shrink-0">{flag}</div>
    <div className="flex flex-col gap-1">
      <h5 className="text-[13px] font-semibold text-gray-800 leading-tight group-hover:text-[#004D40]">
        {title}
      </h5>
      <span className="text-[11px] text-gray-400 font-medium">{source}</span>
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

/* ===================== MAIN COMPONENT ===================== */

export default function TravExplore() {
  const overviewData = [
    { id: 1, img: VisitCan, heading: "Visit Santorini, Greece", description: "Surrounded by turquoise water, the Island is cluttered with multi-colored cliffs..." },
    { id: 2, img: VisitCan, heading: "Visit Santorini, Greece", description: "Surrounded by turquoise water, the Island is cluttered with multi-colored cliffs..." },
    { id: 3, img: VisitCan, heading: "Visit Santorini, Greece", description: "Surrounded by turquoise water, the Island is cluttered with multi-colored cliffs..." },
  ];

  return (
    <div className="bg-[#FBFBFB] min-h-screen p-6 lg:p-10">
      <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Left Content Area */}
        <div className="w-full md:w-[752px] flex flex-col gap-8">
          
          {/* Top Seminar Row */}
          <div className="flex flex-col sm:flex-row gap-5">
            <SeminarCard color="#FFDE59" title="Upcoming Seminar" darkText />
            <SeminarCard color="#03B5AA" title="Explore Downtown" />
          </div>

          {/* Destinations Section */}
          <section className="bg-white rounded-[16px] border border-gray-100 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-[18px] text-[#212322]">Destinations</h3>
              <span className="text-[13px] text-[#005A58] font-semibold cursor-pointer hover:underline">See All</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {overviewData.map((item) => (
                <DestinationCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* Easy Visa Section */}
          <section className="bg-white rounded-[16px] border border-gray-100 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-[18px] text-[#212322]">Easy Visa Destination</h3>
              <span className="text-[13px] text-[#005A58] font-semibold cursor-pointer hover:underline">See All</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <VisaCard city="DUBAI" img="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad" />
              <VisaCard city="CHINA" img="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" />
              <VisaCard city="BRAZIL" img="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9" />
            </div>
          </section>

          {/* Health Advisory Section */}
          <section className="bg-white rounded-[16px] border border-gray-100 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-[18px] text-[#212322]">Health Tip Advisory</h3>
              <span className="text-[13px] text-[#005A58] font-semibold cursor-pointer hover:underline">See All</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
               <HealthCard title="Beat Jet Lag Like a Pro" img="https://images.unsplash.com/photo-1498837167922-ddd27525d352" />
               <HealthCard title="Stay Hydrated While Traveling" img="https://images.unsplash.com/photo-1506126613408-eca07ce68773" />
            </div>
          </section>
        </div>

        {/* Right Sidebar Area */}
        <div className="w-full md:w-[360px] flex flex-col gap-6">
          <CalendarCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

/* ===================== HELPER COMPONENTS ===================== */

const SeminarCard = ({ color, title, darkText = false }) => (
  <div className="flex flex-1 h-[120px] rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white">
    <div style={{ backgroundColor: color }} className="w-[50px] flex flex-col items-center justify-center p-1">
      <span className={`text-[13px] font-bold ${darkText ? 'text-black' : 'text-white'}`}>2025</span>
      <div className={`w-3/4 border-t my-1.5 ${darkText ? 'border-black/20' : 'border-white/20'}`} />
      <span className={`text-[11px] font-medium uppercase ${darkText ? 'text-black' : 'text-white'}`}>Aug</span>
      <span className={`text-[12px] font-bold ${darkText ? 'text-black' : 'text-white'}`}>30</span>
    </div>
    <div className="flex-1 p-4 flex flex-col justify-center">
      <h3 className="text-[#005A58] text-[9px] font-black uppercase tracking-widest mb-1">{title}</h3>
      <p className="text-[13px] text-gray-700 font-medium line-clamp-2 leading-snug">International Conference on Latest Advancements in Science</p>
      <div className="flex items-center gap-1.5 mt-2 text-[#005A58]/80">
        <MapPin size={10} />
        <span className="text-[10px] font-semibold">Toronto, Canada</span>
      </div>
    </div>
  </div>
);

const DestinationCard = ({ item }) => (
  <div className="group cursor-pointer">
    <div className="overflow-hidden rounded-[12px] mb-3">
        <img src={item.img} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" alt={item.heading} />
    </div>
    <h3 className="font-bold text-[13px] text-gray-800 mb-1">{item.heading}</h3>
    <p className="text-[11px] text-gray-500 leading-relaxed">
      {item.description} <span className="text-red-500 font-medium italic">read more</span>
    </p>
  </div>
);

const VisaCard = ({ city, img }) => (
  <div className="relative h-[110px] rounded-xl overflow-hidden group cursor-pointer">
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10" />
    <img src={img} className="w-full h-full object-cover" alt={city} />
    <h4 className="absolute inset-0 flex items-center justify-center font-bold text-[20px] text-white z-20 tracking-widest group-hover:scale-110 transition-transform">{city}</h4>
  </div>
);

const HealthCard = ({ title, img }) => (
  <div className="flex-1 flex gap-4 p-3 rounded-xl border border-gray-50 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer bg-white">
    <img src={img} className="w-[80px] h-[60px] rounded-lg object-cover" alt={title} />
    <div className="flex flex-col justify-center">
      <h4 className="font-bold text-[13px] text-gray-800 mb-0.5">{title}</h4>
      <p className="text-[11px] text-gray-400 line-clamp-1">Pro tips for a healthier journey...</p>
    </div>
  </div>
);








// import React, { useState } from "react";
// import Calender from "../../Components/MyCalender.jsx";
// import VisitCan from "../../assets/VisitCan.png";
// import NewsCard from "../../Components/NewsCard.jsx";
// import Checked from "../../assets/VectorMark.png";
// import { Search, Bell, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

// const overviewData = [
//   {
//     id: 1,
//     img: VisitCan,
//     heading: "Visit Santorini, Greece",
//     description: (
//       <>
//         Surrounded by turquoise water, the Island is cluttered with
//         multi-colored cliffs, hot-headed volcanoes, and acres of sun-toasted
//         sand. Adding to the marvels of nature are the ancient relics, delectable
//         cuisine and{" "}
//         <span className="text-red-500 italic cursor-pointer">read more</span>
//       </>
//     ),
//     status: "Actively Open",
//   },
//   {
//     id: 2,
//     img: VisitCan,
//     heading: "Visit Santorini, Greece",
//     description: (
//       <>
//         Surrounded by turquoise water, the Island is cluttered with
//         multi-colored cliffs, hot-headed volcanoes, and acres of sun-toasted
//         sand. Adding to the marvels of nature are the ancient relics, delectable
//         cuisine and{" "}
//         <span className="text-red-500 italic cursor-pointer">read more</span>
//       </>
//     ),
//     status: "Actively Open",
//   },
//   {
//     id: 3,
//     img: VisitCan,
//     heading: "Visit Santorini, Greece",
//     description: (
//       <>
//         Surrounded by turquoise water, the Island is cluttered with
//         multi-colored cliffs, hot-headed volcanoes, and acres of sun-toasted
//         sand. Adding to the marvels of nature are the ancient relics, delectable
//         cuisine and{" "}
//         <span className="text-red-500 italic cursor-pointer">read more</span>
//       </>
//     ),
//     status: "Actively Open",
//   },
// ];

// export default function TravExplore() {
//   const buttonStyle = `
//     w-[236px]
//     h-[44px]
//     opacity-100
//     flex
//     items-center
//     justify-between
//     rounded-[12px]
//     px-[20px]
//     py-[13.5px]
//     border border-gray-200
//     bg-white
//     text-[12px]
//   `;

//   return (
//     <>
//       <div>
//         <div className="w-[752px] h-[132px] flex gap-[22px]">
//           {/* ===== FIRST CONTAINER ===== */}
//           <div className="flex flex-1 h-full">
//             {/* Left Small Div (Yellow) */}
//             <div
//               className="
//       w-[52px]
//       h-full
//       pt-[20px] pr-[4px] pb-[20px] pl-[4px]
//       rounded-tl-[12px] rounded-bl-[12px]
//       bg-[#FFDE59]
//       flex flex-col items-center justify-center
//       text-[12px] font-semibold
//     "
//             >
//               <span
//                 className="
//     w-[43px]
//     h-[19px]
//     font-semibold
//     text-[16px]
//     leading-[100%]
//     tracking-[0px]
//     text-center
//     flex items-center justify-center
//   "
//               >
//                 2025
//               </span>
//               <hr className="w-full border-black my-1" />
//               <span
//                 className="
//     w-[43px]
//     h-[17px]
//     font-semibold
//     text-[14px]
//     leading-[100%]
//     tracking-[0px]
//     text-center
//     flex items-center justify-center
//   "
//               >
//                 Aug
//               </span>
//               <span>30</span>
//             </div>

//             {/* Right Content Div */}
//             <div
//               className="
//       flex-1
//       h-full
//       bg-white
//       rounded-tr-[12px] rounded-br-[12px]
//       flex flex-col justify-center
//       px-6
//       shadow
//     "
//             >
//               <h3
//                 className="w-[92px] h-[12px] 
//   font-inter font-semibold text-[10px] leading-[100%] tracking-[0px] 
//   text-[#005A58] opacity-100"
//               >
//                 Upcoming Seminar
//               </h3>

//               <p
//                 className="w-[281px] h-[63px]
//   font-inter font-normal text-[14px] leading-[21px] tracking-[0px]
//   align-middle
//   text-[#333333B8] opacity-100"
//               >
//                 International Conference on Latest Advancements in Science,
//                 Management, Commerce & Educational Research
//               </p>

//               <div className="flex items-center gap-2 mt-3 text-sm text-[#005A58]">
//                 <MapPin size={12} />
//                 <span
//                   className="w-[79px] h-[12px]
//   font-inter font-normal text-[10px] leading-[100%] tracking-[0px]
//   align-middle
//   text-[#005A58] opacity-100"
//                 >
//                   Toronto, Canada
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* ===== SECOND CONTAINER ===== */}
//           <div className="flex flex-1 h-full">
//             {/* Left Small Div (Green) */}
//             <div
//               className="
//       w-[52px]
//       h-full
//       pt-[20px] pr-[4px] pb-[20px] pl-[4px]
//       rounded-tl-[12px] rounded-bl-[12px]
//       bg-[#03B5AA]
//       flex flex-col items-center justify-center
//       text-[12px] font-semibold
//       text-white
//     "
//             >
//               <span
//                 className="
//     w-[43px]
//     h-[19px]
//     font-semibold
//     text-[16px]
//     leading-[100%]
//     tracking-[0px]
//     text-center
//     flex items-center justify-center
//   "
//               >
//                 2025
//               </span>
//               <hr className="w-full border-white my-1" />
//               <span
//                 className="
//     w-[43px]
//     h-[17px]
//     font-semibold
//     text-[14px]
//     leading-[100%]
//     tracking-[0px]
//     text-center
//     flex items-center justify-center
//   "
//               >
//                 Aug
//               </span>
//               <span>30</span>
//             </div>

//             {/* Right Content Div */}
//             <div
//               className="
//       flex-1
//       h-full
//       bg-white
//       rounded-tr-[12px] rounded-br-[12px]
//       flex flex-col justify-center
//       px-6
//       shadow
//     "
//             >
//               <h3
//                 className="w-[92px] h-[12px] 
//   font-inter font-semibold text-[10px] leading-[100%] tracking-[0px] 
//   text-[#005A58] opacity-100"
//               >
//                 Explore Downtown
//               </h3>

//               <p
//                 className="w-[281px] h-[63px]
//   font-inter font-normal text-[14px] leading-[21px] tracking-[0px]
//   align-middle
//   text-[#333333B8] opacity-100"
//               >
//                 International Conference on Latest Advancements in Science,
//                 Management, Commerce & Educational Research
//               </p>

//               <div className="flex items-center gap-2 mt-3 text-sm text-[#005A58]">
//                 <MapPin size={12} />
//                 <span
//                   className="w-[79px] h-[12px]
//   font-inter font-normal text-[10px] leading-[100%] tracking-[0px]
//   align-middle
//   text-[#005A58] opacity-100"
//                 >
//                   Toronto, Canada
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="
//             w-[752px] 
//             h-[352px] 
//             bg-white 
//             rounded-[12px] 
//             border
//             mt-[40px]
//             p-4 
//             flex 
//             flex-col
//             gap-[20px]
//             opacity-100
//           "
//           style={{ borderWidth: "0.4px", borderColor: "#E5E5E5", top: "256px" }}
//         >
//           {/* HEADER */}
//           <div className="flex justify-between items-center">
//             <h3
//               style={{
//                 fontFamily: "Outfit",
//                 fontWeight: 600,
//                 fontSize: "20px",
//                 lineHeight: "25px",
//                 color: "#212322",
//               }}
//             >
//               Destinations
//             </h3>

//             <p
//               style={{
//                 fontFamily: "Inter",
//                 fontWeight: 500,
//                 fontSize: "14px",
//                 lineHeight: "19px",
//                 color: "#005A58",
//                 cursor: "pointer",
//               }}
//             >
//               See All
//             </p>
//           </div>

//           {/* CARDS ROW */}
//           <div className="flex gap-[20px] flex-wrap">
//             {overviewData.map((item) => (
//               <div
//                 key={item.id}
//                 className="
//                 w-[226px] 
//                 h-[267px] 
//                 bg-white 
//                 rounded-[16px] 
//                 border 
//                 p-[12px] 
//                 flex 
//                 flex-col 
//                 gap-[10px] 
//                 shadow
//               "
//                 style={{ borderWidth: "0.24px", borderColor: "#E5E5E5" }}
//               >
//                 {/* IMAGE */}
//                 <img
//                   src={item.img}
//                   alt={item.heading}
//                   className="w-[202px] h-[193px] object-cover rounded-[12px]"
//                 />

//                 {/* DESCRIPTION */}
//                 <div className="w-[202px] flex flex-col gap-[6px]">
//                   <h3 className="font-inter font-medium text-[12px] leading-none text-[#2D2D2D]">
//                     {item.heading}
//                   </h3>

//                   <p className="font-inter font-normal text-[10px] leading-[14px] text-[#2D2D2DD6]">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div
//           className="flex flex-col gap-[16px]"
//           style={{
//             width: "752px",
//             height: "185px",
//             position: "absolute",
//             top: "670px",
//             left: "274px",
//             background: "#FFFFFF",
//             boxShadow: "0px 5px 12px 0px #1212120A",
//             borderRadius: "12px",
//             padding: "20px",
//           }}
//         >
//           {/* Heading Row */}
//           <div className="flex justify-between items-center">
//             <h3
//               style={{
//                 fontFamily: "Outfit",
//                 fontWeight: 600,
//                 fontSize: "20px",
//                 lineHeight: "25px",
//                 color: "#212322",
//               }}
//             >
//               Easy Visa Destination
//             </h3>

//             <p
//               style={{
//                 fontFamily: "Inter",
//                 fontWeight: 500,
//                 fontSize: "14px",
//                 lineHeight: "19px",
//                 color: "#005A58",
//                 cursor: "pointer",
//               }}
//             >
//               See All
//             </p>
//           </div>

//           {/* Sub Cards */}
//           <div className="grid grid-cols-3 gap-4">
//             {/* Card 1 */}
//             <div className="relative w-[224px] h-[100px] rounded-xl overflow-hidden shadow-md">
//               <img
//                 src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
//                 alt="London"
//                 className="w-full h-full object-cover"
//               />

//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-black/70"></div>

//               {/* Text */}
//               <h4
//                 className="absolute top-[30px] left-[24px] w-[108px] h-[40px] 
//                font-['Outfit'] font-semibold text-[32px] 
//                leading-[100%] tracking-[0px] text-white"
//               >
//                 DUBAI
//               </h4>
//             </div>

//             {/* Card 2 */}
//             <div className="relative w-[224px] h-[100px] rounded-xl overflow-hidden shadow-md">
//               <img
//                 src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
//                 alt="Canada"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/70"></div>
//               <h4
//                 className="absolute top-[30px] left-[24px] w-[108px] h-[40px] 
//                font-['Outfit'] font-semibold text-[32px] 
//                leading-[100%] tracking-[0px] text-white"
//               >
//                 CHINA
//               </h4>
//             </div>

//             {/* Card 3 */}
//             <div className="relative w-[224px] h-[100px] rounded-xl overflow-hidden shadow-md">
//               <img
//                 src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9"
//                 alt="Australia"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/70"></div>
//               <h4
//                 className="absolute top-[30px] left-[24px] w-[108px] h-[40px] 
//                font-['Outfit'] font-semibold text-[32px] 
//                leading-[100%] tracking-[0px] text-white"
//               >
//                 BRAZIL
//               </h4>
//             </div>
//           </div>
//         </div>
//       </div>
            
//             <div className="absolute 
//                 top-[900px] left-[273px] 
//                 w-[752px] h-[155px] 
//                 rounded-[12px] 
//                 bg-white shadow-md p-6">

//   {/* Header */}
//   <div className="flex justify-between items-center mb-6">
//     <h2 className="font-['Outfit'] font-semibold text-[20px] text-[#212322]">
//       Health Tip Advisory
//     </h2>

//     <span className="text-sm text-[#005A58] font-medium cursor-pointer hover:underline">
//       See All
//     </span>
//   </div>

//   {/* Cards Container */}
//   <div className="flex gap-4">

//     {/* Card 1 */}
//     <div className="absolute 
//                 top-[65px] left-[20px] 
//                 w-[346px] h-[78px] 
//                 rounded-[8px] 
//                 flex gap-[10px] 
//                 pt-[7px] pr-[8px] pb-[7px] pl-[8px]
//                 border border-[#E3E3E3] border-[0.4px]">
//       <img
//         src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
//         alt="Health Tip"
//         className="w-[98px] h-[64px] rounded-lg object-cover"
//       />

//       <div>
//         <h4 className="font-semibold text-[14px] text-[#212322]">
//           Beat Jet Lag Like a Pro
//         </h4>
//         <p className="text-[12px] text-gray-500">
//           Crossing time zones? Discover proven way read more
//         </p>
//       </div>
//     </div>

//     {/* Card 2 */}
//     <div className="absolute 
//                 top-[65px] right-[20px] 
//                 w-[346px] h-[78px] 
//                 rounded-[8px] 
//                 flex gap-[10px] 
//                 pt-[7px] pr-[8px] pb-[7px] pl-[8px]
//                  border-[#E3E3E3] border-[0.4px]">
//       <img
//         src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
//         alt="Health Tip"
//         className="w-[98px] h-[64px] rounded-lg object-cover"
//       />

//       <div>
//         <h4 className="font-semibold text-[14px] text-[#212322]">
//           Beat Jet Lag Like a Pro
//         </h4>
//         <p className="text-[12px] text-gray-500">
//            Crossing time zones? Discover proven way read more
//         </p>
//       </div>
//     </div>

//   </div>

// </div>

//       <div
//         className="w-[360px] bg-white rounded-[12px] shadow p-6 flex flex-col justify-between"
//         style={{ position: "absolute", top: "130px", left: "1090px" }}
//       >
//         <div className="flex-1 flex items-center justify-center text-gray-400">
//           <Calender />
//         </div>
//       </div>
//       <div style={{ position: "absolute", top: "-9px", left: "-10px" }}>
//         <NewsCard />
//       </div>
//     </>
//   );
// }
