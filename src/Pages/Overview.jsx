import React, { useState } from "react";
import {
  LayoutDashboard,
  Compass,
  Bookmark,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

/* ------------ LOCAL ASSETS ------------ */
import heroImg from "../assets/heroImg.png";
import rec1 from "../assets/rec1.jpg";
import rec2 from "../assets/rec2.jpg";
import rec3 from "../assets/rec3.jpg";
import TravactiveLogo from "../assets/TravactiveLogo.png";

const Overview = () => (
  <div className="flex min-h-screen bg-gray-50 text-slate-800 font-sans">
    {/* ===================== SIDEBAR ===================== */}
    <Sidebar />
    
    {/* ===================== MAIN CONTENT ===================== */}
    <main className="flex-1 overflow-y-auto">
      <Header />
      <ContentGrid />
    </main>
  </div>
);

/* ===================== SIDEBAR COMPONENT ===================== */
const Sidebar = () => (
  <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
    <Logo />
    <Navigation />
    <LogoutButton />
  </aside>
);

/* ===================== LOGO COMPONENT ===================== */
const Logo = () => (
  <div className="flex items-center justify-center mb-10">
    <img src={TravactiveLogo} alt="Travactive Logo" className="w-40 h-auto object-contain" />
  </div>
);

/* ===================== NAVIGATION COMPONENT ===================== */
const Navigation = () => (
  <nav className="flex-1 space-y-2">
    <SidebarItem icon={<LayoutDashboard size={20} />} label="Overview" active />
    <SidebarItem icon={<Compass size={20} />} label="Explore" />
    <SidebarItem icon={<Bookmark size={20} />} label="Top Picks" />
    <SidebarItem icon={<MessageSquare size={20} />} label="Ask Travactiv" />
    <SidebarItem icon={<Settings size={20} />} label="Settings" />
  </nav>
);

/* ===================== LOGOUT BUTTON COMPONENT ===================== */
const LogoutButton = () => (
  <button className="flex items-center gap-3 text-red-500 hover:bg-red-50 p-3 rounded-xl transition-colors mt-auto">
    <LogOut size={20} />
    <span className="font-medium">Log out</span>
  </button>
);

/* ===================== HEADER COMPONENT ===================== */
const Header = () => (
  <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
    {/* Search bar on the left */}
    <SearchBar />
    {/* User profile on the right - positioned like in the image */}
    <div className="flex items-center gap-4">
      <UserAvatar />
      <NotificationBell />
    </div>
  </header>
);

/* ===================== SEARCH BAR COMPONENT ===================== */
const SearchBar = () => (
  <div className="relative w-[400px]">
    <input
      type="text"
      placeholder="Search here...."
      className="w-full bg-gray-100 py-2.5 pl-5 pr-12 rounded-full border-none focus:ring-2 focus:ring-teal-500 text-sm italic placeholder-gray-400"
    />
    <button className="absolute right-2 top-1.5 bg-teal-900 p-2 rounded-full text-white hover:bg-teal-800 transition-colors">
      <Search size={16} />
    </button>
  </div>
);

/* ===================== USER AVATAR COMPONENT ===================== */
const UserAvatar = () => (
  <div className="flex items-center gap-3">
    <div className="relative">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        className="w-11 h-11 rounded-full object-cover border-2 border-teal-100"
        alt="User"
      />
      {/* Online status indicator */}
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
    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
      <Bell size={24} className="text-gray-600" />
    </button>
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
      1
    </span>
  </div>
);

/* ===================== CONTENT GRID COMPONENT ===================== */
const ContentGrid = () => (
  <div className="p-8 grid grid-cols-12 gap-6">
    <LeftColumn />
    <RightColumn />
  </div>
);

/* ===================== LEFT COLUMN COMPONENT ===================== */
const LeftColumn = () => (
  <div className="col-span-8 space-y-6">
    <HeroBanner />
    <InfoCards />
    <Recommendations />
  </div>
);

/* ===================== HERO BANNER COMPONENT ===================== */
const HeroBanner = () => (
  <div className="relative w-full h-48 rounded-3xl overflow-hidden flex items-center">
    <img src={heroImg} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
    {/* <div className="relative z-10 pl-10 text-white max-w-lg">
      <p className="text-sm font-medium mb-2">Your next adventure?</p>
      <h2 className="text-4xl font-bold mb-4">Rome!</h2>
      <button className="bg-white text-teal-900 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all hover:scale-[1.02]">
        Explore Destination
      </button>
    </div> */}
  </div>
);

/* ===================== INFO CARDS COMPONENT ===================== */
const InfoCards = () => (
  <div className="grid grid-cols-2 gap-6">
    <InfoCard
      title="Upcoming Seminars"
      desc="Stay ahead of closing dates for scholarships, conferences, and visa applications in your saved countries."
      buttonText="Explore →"
    />
    <InfoCard
      title="Important Visa Requirements"
      desc="Access your saved scholarships, grants, travel updates, and important resources anytime in one convenient place."
      buttonText="See more →"
    />
  </div>
);

/* ===================== RECOMMENDATIONS COMPONENT ===================== */
const Recommendations = () => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold text-lg">Recommendations</h3>
      <button className="text-xs text-gray-500 hover:underline font-medium">See All</button>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <RecommendCard 
        img={rec1} 
        title="Conference in Singapore" 
        desc="Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities from international organizations, covering tuition, living expenses, travel costs, etc."
        status="Actively Open"
      />
      <RecommendCard 
        img={rec2} 
        title="Visa Policy Updates" 
        desc="Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities from international organizations, covering tuition, living expenses, travel costs, etc."
        status="Actively Open"
      />
      <RecommendCard 
        img={rec3} 
        title="Health Tourism Update" 
        desc="Find scholarships currently open across top universities in Europe & the Americas, including fully funded opportunities from international organizations, covering tuition, living expenses, travel costs, etc."
        status="Actively Open"
      />
    </div>
  </div>
);

/* ===================== RIGHT COLUMN COMPONENT ===================== */
const RightColumn = () => (
  <div className="col-span-4 space-y-6">
    <CalendarCard />
    <NewsCard />
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
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Adjust to start week on Monday (0 = Monday)
    const adjustedStartingDay = startingDay === 0 ? 6 : startingDay - 1;
    
    return { daysInMonth, adjustedStartingDay, year, month };
  };
  
  const handleDateClick = (day) => {
    const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newSelectedDate);
  };
  
  const isToday = (day) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  };
  
  const isSelectedDate = (day) => {
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear()
    );
  };
  
  const renderCalendar = () => {
    const { daysInMonth, adjustedStartingDay } = getDaysInMonth(currentDate);
    const today = new Date();
    
    const days = [];
    
    // Add empty cells for starting days
    for (let i = 0; i < adjustedStartingDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }
    
    // Add day cells
    for (let day = 1; day <= daysInMonth; day++) {
      const dateToday = isToday(day);
      const dateSelected = isSelectedDate(day);
      
      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={`h-8 w-8 flex items-center justify-center rounded-full text-sm font-medium transition-all
            ${dateSelected ? 'bg-teal-900 text-white shadow-md' : ''}
            ${dateToday && !dateSelected ? 'bg-teal-100 text-teal-900 border border-teal-300' : ''}
            ${!dateSelected && !dateToday ? 'hover:bg-gray-100 hover:scale-110' : ''}
          `}
        >
          {day}
        </button>
      );
    }
    
    return days;
  };
  
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-lg">{formatDate(currentDate)}</h4>
        <div className="flex gap-2">
          <button 
            onClick={() => navigateMonth(-1)}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="text-gray-600" size={20} />
          </button>
          <button 
            onClick={() => navigateMonth(1)}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="text-gray-600" size={20} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
          <div key={day} className="text-center text-gray-500 text-xs font-medium py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {renderCalendar()}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500 mb-2">Selected Date:</div>
        <div className="text-sm font-medium bg-teal-50 text-teal-900 px-3 py-2 rounded-lg inline-block">
          {selectedDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </div>
      </div>
    </div>
  );
};

/* ===================== NEWS COMPONENT ===================== */
const NewsCard = () => {
  const newsItems = [
    { 
      code: "gb", 
      title: "UK expands Business Visa deadline", 
      source: "https://www.websites.com/2019/01/06/USAFaseEnews",
      sourceLabel: "Source: The Indian Association"
    },
    { 
      code: "ca", 
      title: "Canada Tightens Work Permit Rules", 
      source: "https://ircc.org/"
    },
    { 
      code: "au", 
      title: "Australia Ban Multiple Access Route", 
      source: "https://minsha.gov.au"
    },
    { 
      code: "fr", 
      title: "France Intro New Visa Policy", 
      source: "https://francisco.com/"
    },
    { 
      code: "de", 
      title: "Germany New Visa Updates", 
      source: "https://www.nov.no/"
    },
    { 
      code: "ie", 
      title: "Ireland Ban New Entry Rule", 
      source: "https://www.eban.com/"
    },
    { 
      code: "es", 
      title: "Spain Launch Visa Program", 
      source: "https://www.sunrise.com/"
    },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-lg text-gray-800">Alert and News</h4>
        <button className="text-xs text-gray-500 hover:underline font-medium">See All</button>
      </div>
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {newsItems.map((item, index) => (
          <News 
            key={index}
            // Generates a URL for a high-quality SVG flag
            flag={
              <img 
                src={`https://flagcdn.com/${item.code}.svg`} 
                alt={`${item.code} flag`}
                className="w-6 h-4 object-cover rounded-sm shadow-sm" 
              />
            }
            title={item.title}
            source={item.source}
            sourceLabel={item.sourceLabel}
          />
        ))}
      </div>
    </div>
  );
};

/* ===================== SUB-COMPONENTS ===================== */

const SidebarItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all
    ${active ? "bg-teal-900 text-white shadow-md" : "text-gray-600 hover:bg-gray-100 hover:pl-5"}`}>
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </div>
);

const InfoCard = ({ title, desc, buttonText }) => (
  <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
    <button className="w-full flex items-center justify-between pt-3 border-t border-gray-200 text-sm font-bold text-teal-900 hover:text-teal-700 group">
      {buttonText}
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

const RecommendCard = ({ img, title, desc, status }) => (
  <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="h-32 w-full rounded-xl mb-3 overflow-hidden">
      <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt={title} />
    </div>
    <h5 className="font-bold text-sm mb-2">{title}</h5>
    <p className="text-xs text-gray-500 leading-snug mb-3 line-clamp-3">{desc}</p>
    <div className="flex items-center gap-1.5 text-green-600 text-[11px] font-semibold mb-4">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> 
      {status}
    </div>
    <button className="w-full py-2.5 border border-teal-900 text-xs font-bold rounded-xl hover:bg-teal-900 hover:text-white transition-colors">
      Explore
    </button>
  </div>
);

const News = ({ flag, title, source, sourceLabel }) => (
  <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0 group hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg transition-colors">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
      {flag}
    </div>
    <div className="flex-1 min-w-0">
      <h5 className="text-sm font-bold leading-snug mb-1 group-hover:text-teal-700 transition-colors line-clamp-2">
        {title}
      </h5>
      <p className="text-[11px] text-gray-500">
        Source: <span className="text-blue-600 hover:underline cursor-pointer">{source}</span>
        {sourceLabel && (
          <span className="block text-[10px] text-gray-400 italic">{sourceLabel}</span>
        )}
      </p>
    </div>
  </div>
);

export default Overview;




// import React from "react";
// import {
//   LayoutDashboard,
//   Compass,
//   Bookmark,
//   MessageSquare,
//   Settings,
//   LogOut,
//   Search,
//   Bell,
//   ChevronLeft,
//   ChevronRight,
//   ArrowRight,
// } from "lucide-react";

// /* ------------ LOCAL ASSETS ------------ */
// import heroImg from "../assets/heroImg.png";
// import rec1 from "../assets/rec1.jpg";
// import rec2 from "../assets/rec2.jpg";
// import rec3 from "../assets/rec3.jpg";
// import TravactiveLogo from "../assets/TravactiveLogo.png";

// const Overview = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-50 text-slate-800 font-sans">

//       {/* ===================== SIDEBAR ===================== */}
//       <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">

//   {/* Logo */}
//   <div className="flex items-center justify-center mb-10">
//     <img
//       src={TravactiveLogo}
//       alt="Travactive Logo"
//       className="w-40 h-auto object-contain"
//     />
//   </div>

//   <nav className="flex-1 space-y-1">
//     <SidebarItem icon={<LayoutDashboard size={20} />} label="Overview" active />
//     <SidebarItem icon={<Compass size={20} />} label="Explore" />
//     <SidebarItem icon={<Bookmark size={20} />} label="Top Picks" />
//     <SidebarItem icon={<MessageSquare size={20} />} label="Ask Travactiv" />
//     <SidebarItem icon={<Settings size={20} />} label="Settings" />
//   </nav>

//   <button className="flex items-center gap-3 text-red-500 hover:bg-red-50 p-3 rounded-xl transition-colors mt-auto">
//     <LogOut size={20} />
//     <span className="font-medium">Log out</span>
//   </button>
// </aside>


//       {/* ===================== MAIN CONTENT ===================== */}
//       <main className="flex-1 overflow-y-auto">

//         {/* ===================== NAVBAR ===================== */}
//         <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
//          <div className="relative w-[420px] ml-auto">
//   <input
//     type="text"
//     placeholder="Search here...."
//     className="w-full bg-gray-100 py-2.5 pl-5 pr-12 rounded-full border-none focus:ring-2 focus:ring-teal-500 text-sm italic"
//   />
//   <button className="absolute right-2 top-1.5 bg-teal-900 p-2 rounded-full text-white">
//     <Search size={16} />
//   </button>
// </div>


//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-3">
//               <img
//                 src="https://randomuser.me/api/portraits/men/32.jpg"
//                 className="w-10 h-10 rounded-full border border-gray-300"
//                 alt="User"
//               />
//               <div>
//                 <p className="text-sm font-bold leading-none">Samuel F.</p>
//                 <p className="text-xs text-gray-500">Traveler</p>
//               </div>
//             </div>

//             <div className="relative">
//               <Bell size={24} className="text-gray-400" />
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
//                 1
//               </span>
//             </div>
//           </div>
//         </header>

//         {/* ===================== CONTENT GRID ===================== */}
//         <div className="p-8 grid grid-cols-12 gap-6">

//           {/* ===================== LEFT COLUMN ===================== */}
//           <div className="col-span-8 space-y-6">

//             {/* ===== HERO BANNER ===== */}
//         <div className="relative w-full h-48 rounded-3xl overflow-hidden flex items-center px-10">
//             {/* Background Image */}
//         <img
//         src={heroImg}
//         alt="Hero"
//         className="absolute inset-0 w-full h-full object-cover"
//       />
// </div>


//             {/* ===== INFO CARDS ===== */}
//             <div className="grid grid-cols-2 gap-6">
//               <InfoCard
//                 title="Upcoming Seminars"
//                 desc="Stay ahead of closing dates for scholarships, conferences, and visa applications in your saved countries."
//                 button="Explore"
//               />
//               <InfoCard
//                 title="Important Visa Requirements"
//                 desc="Access your saved scholarships, grants, travel updates, and important resources anytime in one convenient place."
//                 button="See more"
//               />
//             </div>

//             {/* ===== RECOMMENDATIONS ===== */}
//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="font-bold text-lg">Recommendations</h3>
//                 <button className="text-xs text-gray-500 hover:underline">See All</button>
//               </div>

//               <div className="grid grid-cols-3 gap-4">
//                 <RecommendCard
//                   img={rec1}
//                   title="Conference in Singapore"
//                   desc="Find scholarships currently open across top universities in Europe & the Americas, fully funded options..."
//                 />
//                 <RecommendCard
//                   img={rec2}
//                   title="Visa Policy Updates"
//                   desc="Find scholarships currently open across top universities in Europe & the Americas, including tuition and cost..."
//                 />
//                 <RecommendCard
//                   img={rec3}
//                   title="Health Tourism Update"
//                   desc="Find scholarships currently open across top universities in Europe & the Americas, covering living expenses..."
//                 />
//               </div>
//             </div>
//           </div>

//           {/* ===================== RIGHT COLUMN ===================== */}
//           <div className="col-span-4 space-y-6">
//             {/* ===== CALENDAR ===== */}
//             <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
//               <div className="flex justify-between items-center mb-6">
//                 <h4 className="font-bold">July 2025</h4>
//                 <div className="flex gap-4">
//                   <ChevronLeft className="text-gray-400 cursor-pointer" size={18} />
//                   <ChevronRight className="text-gray-400 cursor-pointer" size={18} />
//                 </div>
//               </div>
//               <Calendar />
//             </div>

//             {/* ===== NEWS ===== */}
//             <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
//               <h4 className="font-bold mb-6">Alert and News</h4>
//               <div className="space-y-5">
//                 <News flag="🇬🇧" title="UK expands Business Visa deadline" source="www.gov.uk" />
//                 <News flag="🇺🇸" title="USA Ease Entry Rule for Health Tourists" source="The Indian Times" />
//                 <News flag="🇨🇦" title="Canada Tightens Work Permit Rules" source="ircc.canada.ca" />
//                 <News flag="🇦🇺" title="Australia Ban Multiple Access Route" source="immi.homeaffairs.gov.au" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// /* ===================== SUB-COMPONENTS ===================== */

// const SidebarItem = ({ icon, label, active }) => (
//   <div
//     className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer 
//       ${active ? "bg-teal-900 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}
//   >
//     {icon}
//     <span className="font-medium text-sm">{label}</span>
//   </div>
// );

// const InfoCard = ({ title, desc, button }) => (
//   <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
//     <h4 className="font-bold text-lg mb-2">{title}</h4>
//     <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
//     <div className="flex items-center justify-between pt-3 border-t border-gray-200">
//       <span className="text-sm font-bold text-teal-900">{button}</span>
//       <ArrowRight size={16} />
//     </div>
//   </div>
// );

// const RecommendCard = ({ img, title, desc }) => (
//   <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 hover:shadow-md transition">
//     <img src={img} className="h-32 w-full object-cover rounded-xl mb-3" alt={title} />
//     <h5 className="font-bold text-sm mb-1">{title}</h5>
//     <p className="text-xs text-gray-500 leading-snug mb-3">{desc}</p>
//     <div className="flex items-center gap-1 text-green-600 text-[10px] font-semibold mb-4">
//       <div className="w-3 h-3 bg-green-500 rounded-full"></div> Actively Open
//     </div>
//     <button className="w-full py-2 border border-teal-900 text-xs font-bold rounded-xl hover:bg-teal-900 hover:text-white transition">
//       Explore
//     </button>
//   </div>
// );

// const Calendar = () => {
//   const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
//   return (
//     <div className="grid grid-cols-7 gap-y-4 text-center text-sm">
//       {days.map((d) => (
//         <span key={d} className="text-gray-400 font-medium">{d}</span>
//       ))}
//       {Array.from({ length: 31 }, (_, i) => (
//         <span
//           key={i}
//           className={`py-1 ${
//             i + 1 === 8 ? "bg-teal-900 text-white rounded-full w-8 h-8 mx-auto flex items-center justify-center" : ""
//           }`}
//         >
//           {i + 1}
//         </span>
//       ))}
//     </div>
//   );
// };

// const News = ({ flag, title, source }) => (
//   <div className="flex gap-4">
//     <span className="text-2xl mt-1">{flag}</span>
//     <div>
//       <h5 className="text-xs font-bold leading-snug">{title}</h5>
//       <p className="text-[10px] text-gray-500 italic">Source: {source}</p>
//     </div>
//   </div>
// );

// export default Overview;