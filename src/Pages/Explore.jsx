import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import airplaneImg from '../assets/airplane.png';
import jetImg from '../assets/jet.png';
import Sidebar from './Sidebar';
import TravactiveLogo from '../assets/TravactiveLogo.png'; 
import { 
  Search, Bell, MapPin, ChevronLeft, ChevronRight 
} from 'lucide-react';

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
    const startingDay = firstDay.getDay();
    
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
    
    const days = [];
    
    for (let i = 0; i < adjustedStartingDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dateToday = isToday(day);
      const dateSelected = isSelectedDate(day);
      
      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={`h-8 w-8 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200
            ${dateSelected ? 'bg-teal-900 text-white shadow-md scale-110' : ''}
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
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Previous month"
          >
            <ChevronLeft className="text-gray-600" size={20} />
          </button>
          <button 
            onClick={() => navigateMonth(1)}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors duration-200"
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
    </div>
  );
};

/* ===================== NEWS COMPONENT ===================== */
const NewsCard = () => {
  const newsItems = [
    { code: "gb", title: "UK expands Business Visa deadline", source: "https://www.websites.com/2019/01/06/USAFaseEnews" },
    { code: "us", title: "USA Ease Entry Rule for Health Tourists", source: "The Indian Times" },
    { code: "ca", title: "Canada Tightens Work Permit Rules", source: "https://ircc.org/" },
    { code: "au", title: "Australia Ban Multiple Access Route", source: "https://minsha.gov.au" },
    { code: "fr", title: "France Introduction E-visa Regime in Africa", source: "https://france-visas.gouv.fr/student" },
    { code: "de", title: "Germany Now Requires Compulsory UV", source: "https://www.daad.de/" },
    { code: "ie", title: "Ireland Ban Visa on Arrival for Africans", source: "https://www.eban.com/" },
    { code: "es", title: "Spain Launch New Visa Regime for NG", source: "https://www.sunrise.com/" },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-lg text-gray-800">Alert and News</h4>
        <button className="text-xs text-gray-500 hover:underline font-medium hover:text-teal-900 transition-colors duration-200">See All</button>
      </div>
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {newsItems.map((item, index) => (
          <News 
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

/* ===================== EXPLORE MAIN ===================== */
const Explore = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-sans text-slate-800">
      {/* SIDEBAR - Using the imported Sidebar component */}
      <Sidebar />
      
      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-20 bg-white px-10 flex items-center justify-between sticky top-0 z-10 border-b border-gray-200">
          <div className="relative w-full max-w-sm">
            <input 
              type="text" 
              placeholder="Search here...." 
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200" 
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <button className="absolute right-2 top-1.5 bg-[#0F3D3E] p-1.5 rounded-full text-white hover:bg-teal-800 transition-colors duration-200">
              <Search size={14} />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <UserAvatar />
            <NotificationBell />
          </div>
        </header>

        <div className="p-10 grid grid-cols-12 gap-8">
          <div className="col-span-8 space-y-10">
            <div className="flex gap-6">
              <SeminarCard color="bg-[#FFF4D1]" accent="bg-[#FFCC33]" />
              <SeminarCard color="bg-[#E6F4F1]" accent="bg-[#2DB9B0]" />
            </div>

            <section>
              <SectionHeader title="Destination" />
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50 p-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400" 
                      className="h-32 w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500" 
                      alt="Santorini" 
                    />
                    <div className="p-3">
                      <h4 className="font-bold text-[13px] mb-1">Visit Santorini, Greece</h4>
                      <p className="text-[10px] text-gray-400 leading-relaxed line-clamp-3">
                        Surrounded by turquoise water... <span className="text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200">read more</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionHeader title="Easy Visa Destination" />
              <div className="grid grid-cols-3 gap-4">
                <VisaCard city="DUBAI" img="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400" />
                <VisaCard city="CHINA" img="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?w=400" />
                <VisaCard city="BRAZIL" img="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400" />
              </div>
            </section>

            <section>
              <SectionHeader title="Health Tips Advisory" />
              <div className="grid grid-cols-2 gap-6">
                <HealthTipCard img={airplaneImg} />
                <HealthTipCard img={jetImg} />
              </div>
            </section>
          </div>

          <div className="col-span-4 space-y-8">
            <CalendarCard />
            <NewsCard />
          </div>
        </div>
      </main>
    </div>
  );
};

/* --- SHARED SUB-COMPONENTS --- */
const SectionHeader = ({ title }) => (
  <div className="flex justify-between items-center mb-5">
    <h3 className="text-xl font-extrabold text-[#1A1A1A]">{title}</h3>
    <button className="text-[11px] text-gray-400 font-bold hover:text-teal-900 transition-colors duration-200">
      See All
    </button>
  </div>
);

const SeminarCard = ({ color, accent }) => (
  <div className={`flex-1 ${color} rounded-3xl flex overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300`}>
    <div className={`${accent} w-20 flex flex-col items-center justify-center text-[#0F3D3E] py-4 hover:brightness-110 transition-all duration-200`}>
      <span className="text-xs font-bold">2025</span>
      <span className="text-lg font-black uppercase">Aug</span>
      <span className="text-2xl font-black">30</span>
    </div>
    <div className="p-5 flex-1">
      <p className="text-[10px] font-bold text-teal-700 mb-1 uppercase tracking-tight">Upcoming Seminar</p>
      <h4 className="text-[13px] font-extrabold leading-tight text-gray-800">Conference on Latest Advancements...</h4>
      <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold mt-2">
        <MapPin size={10} className="text-teal-600" /> Toronto, Canada
      </div>
    </div>
  </div>
);

const VisaCard = ({ city, img }) => (
  <div className="relative h-28 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300">
    <img 
      src={img} 
      className="w-full h-full object-cover brightness-[0.6] group-hover:scale-110 transition-transform duration-700" 
      alt={city} 
    />
    <span className="absolute inset-0 flex items-center justify-center text-white font-black tracking-[4px] text-2xl group-hover:scale-105 transition-transform duration-300">
      {city}
    </span>
  </div>
);

const HealthTipCard = ({ img }) => (
  <div className="bg-white border border-gray-100 rounded-3xl p-4 flex gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
    <img 
      src={img} 
      className="w-24 h-16 rounded-2xl object-cover hover:scale-105 transition-transform duration-300" 
      alt="Health tip" 
    />
    <div>
      <h4 className="text-[13px] font-extrabold text-gray-800">Beat Jet Lag Like a Pro</h4>
      <p className="text-[11px] text-gray-400 mt-1">
        Crossing time zones? <span className="text-red-500 font-bold hover:text-red-600 transition-colors duration-200">read more</span>
      </p>
    </div>
  </div>
);

const News = ({ flag, title, source }) => (
  <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 group hover:bg-gray-50 px-2 py-1 rounded-lg transition-all duration-200 cursor-pointer">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-teal-50 transition-colors duration-200">
      {flag}
    </div>
    <div className="flex-1 min-w-0">
      <h5 className="text-sm font-bold leading-snug mb-1 truncate group-hover:text-teal-900 transition-colors duration-200">
        {title}
      </h5>
      <p className="text-[11px] text-gray-500 truncate">
        Source: <span className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
          {source}
        </span>
      </p>
    </div>
  </div>
);

export default Explore;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import airplaneImg from '../assets/airplane.png';
// import jetImg from '../assets/jet.png';
// import Sidebar from './Sidebar';
// // Import your real logo here
// import TravactiveLogo from '../assets/TravactiveLogo.png'; 
// import { 
//   LayoutDashboard, Compass, Star, MessageSquare, 
//   Settings, LogOut, Search, Bell, MapPin, 
//   ChevronLeft, ChevronRight 
// } from 'lucide-react';

// /* ===================== USER AVATAR COMPONENT ===================== */
// const UserAvatar = () => (
//   <div className="flex items-center gap-3">
//     <div className="relative">
//       <img
//         src="https://randomuser.me/api/portraits/men/32.jpg"
//         className="w-11 h-11 rounded-full object-cover border-2 border-teal-100"
//         alt="User"
//       />
//       <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
//     </div>
//     <div className="text-right">
//       <p className="text-sm font-bold leading-none text-gray-800">Samuel F.</p>
//       <p className="text-xs text-gray-500">Traveler</p>
//     </div>
//   </div>
// );

// /* ===================== NOTIFICATION BELL COMPONENT ===================== */
// const NotificationBell = () => (
//   <div className="relative">
//     <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//       <Bell size={24} className="text-gray-600" />
//     </button>
//     <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
//       1
//     </span>
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
  
//   const formatDate = (date) => {
//     return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
//   };
  
//   const getDaysInMonth = (date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const daysInMonth = lastDay.getDate();
//     const startingDay = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
//     // Adjust to start week on Monday (0 = Monday)
//     const adjustedStartingDay = startingDay === 0 ? 6 : startingDay - 1;
    
//     return { daysInMonth, adjustedStartingDay, year, month };
//   };
  
//   const handleDateClick = (day) => {
//     const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
//     setSelectedDate(newSelectedDate);
//   };
  
//   const isToday = (day) => {
//     const today = new Date();
//     return (
//       today.getDate() === day &&
//       today.getMonth() === currentDate.getMonth() &&
//       today.getFullYear() === currentDate.getFullYear()
//     );
//   };
  
//   const isSelectedDate = (day) => {
//     return (
//       selectedDate.getDate() === day &&
//       selectedDate.getMonth() === currentDate.getMonth() &&
//       selectedDate.getFullYear() === currentDate.getFullYear()
//     );
//   };
  
//   const renderCalendar = () => {
//     const { daysInMonth, adjustedStartingDay } = getDaysInMonth(currentDate);
//     const today = new Date();
    
//     const days = [];
    
//     // Add empty cells for starting days
//     for (let i = 0; i < adjustedStartingDay; i++) {
//       days.push(<div key={`empty-${i}`} className="h-8"></div>);
//     }
    
//     // Add day cells
//     for (let day = 1; day <= daysInMonth; day++) {
//       const dateToday = isToday(day);
//       const dateSelected = isSelectedDate(day);
      
//       days.push(
//         <button
//           key={day}
//           onClick={() => handleDateClick(day)}
//           className={`h-8 w-8 flex items-center justify-center rounded-full text-sm font-medium transition-all
//             ${dateSelected ? 'bg-teal-900 text-white shadow-md' : ''}
//             ${dateToday && !dateSelected ? 'bg-teal-100 text-teal-900 border border-teal-300' : ''}
//             ${!dateSelected && !dateToday ? 'hover:bg-gray-100 hover:scale-110' : ''}
//           `}
//         >
//           {day}
//         </button>
//       );
//     }
    
//     return days;
//   };
  
//   return (
//     <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <h4 className="font-bold text-lg">{formatDate(currentDate)}</h4>
//         <div className="flex gap-2">
//           <button 
//             onClick={() => navigateMonth(-1)}
//             className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
//             aria-label="Previous month"
//           >
//             <ChevronLeft className="text-gray-600" size={20} />
//           </button>
//           <button 
//             onClick={() => navigateMonth(1)}
//             className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
//             aria-label="Next month"
//           >
//             <ChevronRight className="text-gray-600" size={20} />
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-7 gap-1 mb-2">
//         {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
//           <div key={day} className="text-center text-gray-500 text-xs font-medium py-2">
//             {day}
//           </div>
//         ))}
//       </div>
//       <div className="grid grid-cols-7 gap-1">
//         {renderCalendar()}
//       </div>
//     </div>
//   );
// };


// /* ===================== NEWS COMPONENT ===================== */
// const NewsCard = () => {
//   const newsItems = [
//     { code: "gb", title: "UK expands Business Visa deadline", source: "https://www.websites.com/2019/01/06/USAFaseEnews" },
//     { code: "us", title: "USA Ease Entry Rule for Health Tourists", source: "The Indian Times" },
//     { code: "ca", title: "Canada Tightens Work Permit Rules", source: "https://ircc.org/" },
//     { code: "au", title: "Australia Ban Multiple Access Route", source: "https://minsha.gov.au" },
//     { code: "fr", title: "France Introduction E-visa Regime in Africa", source: "https://france-visas.gouv.fr/student" },
//     { code: "de", title: "Germany Now Requires Compulsory UV", source: "https://www.daad.de/" },
//     { code: "ie", title: "Ireland Ban Visa on Arrival for Africans", source: "https://www.eban.com/" },
//     { code: "es", title: "Spain Launch New Visa Regime for NG", source: "https://www.sunrise.com/" },
//   ];

//   return (
//     <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <h4 className="font-bold text-lg text-gray-800">Alert and News</h4>
//         <button className="text-xs text-gray-500 hover:underline font-medium">See All</button>
//       </div>
//       <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
//         {newsItems.map((item, index) => (
//           <News 
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

// /* ===================== EXPLORE MAIN ===================== */
// const Explore = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex min-h-screen bg-[#F9FAFB] font-sans text-slate-800">
    
//       {/* SIDEBAR */}
//       <aside className="w-64 bg-white border-r border-gray-100 flex flex-col p-8">
//         <div className="flex items-center gap-2 mb-12">
//           {/* Logo container updated to use your real logo */}
//           <div className="w-40 h-10 flex items-center justify-center">
//             <img src={TravactiveLogo} alt="Travactive Logo" className="w-full h-full object-contain" />
//           </div>
          
//         </div>

//         <nav className="flex-1 space-y-2">
//   <NavItem
//     icon={<LayoutDashboard size={20} />}
//     label="Overview"
//     onClick={() => navigate("/dashboard/overview")}
//   />

//   <NavItem
//     icon={<Compass size={20} />}
//     label="Explore"
//     active
//   />

//   <NavItem
//     icon={<Star size={20} />}
//     label="Top Picks"
//     onClick={() => navigate("/top-picks")}
//   />

//   <NavItem icon={<MessageSquare size={20} />} label="Ask Travactiv" />
//   <NavItem icon={<Settings size={20} />} label="Settings" />
// </nav>


//         {/* <nav className="flex-1 space-y-2">
//           <NavItem icon={<LayoutDashboard size={20}/>} label="Overview" onClick={() => navigate('/dashboard')} />
//           <NavItem icon={<Compass size={20}/>} label="Explore" active />
//           <NavItem icon={<Star size={20}/>} label="Top Picks" />
//           <NavItem icon={<MessageSquare size={20}/>} label="Ask Travactiv" />
//           <NavItem icon={<Settings size={20}/>} label="Settings" />
//         </nav> */}

//         <button className="flex items-center gap-3 text-red-500 hover:bg-red-50 p-3 rounded-xl transition-colors mt-auto font-bold">
//           <LogOut size={20} className="rotate-180" />
//           <span>Log out</span>
//         </button>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="flex-1 flex flex-col overflow-y-auto">
//         <header className="h-20 bg-white px-10 flex items-center justify-between sticky top-0 z-10">
//           <div className="relative w-full max-w-sm">
//             <input type="text" placeholder="Search here...." className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none" />
//             <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//             <div className="absolute right-2 top-1.5 bg-[#0F3D3E] p-1.5 rounded-full text-white"><Search size={14} /></div>
//           </div>

//           <div className="flex items-center gap-6">
//             <UserAvatar />
//             <NotificationBell />
//           </div>
//         </header>

//         <div className="p-10 grid grid-cols-12 gap-8">
//           <div className="col-span-8 space-y-10">
//             <div className="flex gap-6">
//               <SeminarCard color="bg-[#FFF4D1]" accent="bg-[#FFCC33]" />
//               <SeminarCard color="bg-[#E6F4F1]" accent="bg-[#2DB9B0]" />
//             </div>

//             <section>
//               <SectionHeader title="Destination" />
//               <div className="grid grid-cols-3 gap-6">
//                 {[1, 2, 3].map(i => (
//                   <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50 p-2">
//                     <img src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400" className="h-32 w-full object-cover rounded-2xl" alt="Santorini" />
//                     <div className="p-3">
//                       <h4 className="font-bold text-[13px] mb-1">Visit Santorini, Greece</h4>
//                       <p className="text-[10px] text-gray-400 leading-relaxed line-clamp-3">
//                         Surrounded by turquoise water... <span className="text-red-500 cursor-pointer">read more</span>
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             <section>
//               <SectionHeader title="Easy Visa Destination" />
//               <div className="grid grid-cols-3 gap-4">
//                 <VisaCard city="DUBAI" img="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400" />
//                 <VisaCard city="CHINA" img="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?w=400" />
//                 <VisaCard city="BRAZIL" img="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400" />
//               </div>
//             </section>

//           <section>
//             <SectionHeader title="Health Tips Advisory" />
//             <div className="grid grid-cols-2 gap-6">
//             <HealthTipCard img={airplaneImg} />
//             <HealthTipCard img={jetImg} />
//             </div>
//           </section>
//           </div>

//           <div className="col-span-4 space-y-8">
//             <CalendarCard />
//             <NewsCard />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// /* --- SHARED SUB-COMPONENTS --- */
// const NavItem = ({ icon, label, active = false, onClick }) => (
//   <button onClick={onClick} className={`flex items-center gap-4 p-3.5 rounded-xl w-full text-left transition-all ${active ? 'bg-[#0F3D3E] text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}>
//     {icon} <span className="font-bold text-[15px]">{label}</span>
//   </button>
// );

// const SectionHeader = ({ title }) => (
//   <div className="flex justify-between items-center mb-5">
//     <h3 className="text-xl font-extrabold text-[#1A1A1A]">{title}</h3>
//     <button className="text-[11px] text-gray-400 font-bold hover:text-teal-900">See All</button>
//   </div>
// );

// const SeminarCard = ({ color, accent }) => (
//   <div className={`flex-1 ${color} rounded-3xl flex overflow-hidden cursor-pointer`}>
//     <div className={`${accent} w-20 flex flex-col items-center justify-center text-[#0F3D3E] py-4`}>
//       <span className="text-xs font-bold">2025</span>
//       <span className="text-lg font-black uppercase">Aug</span>
//       <span className="text-2xl font-black">30</span>
//     </div>
//     <div className="p-5 flex-1">
//       <p className="text-[10px] font-bold text-teal-700 mb-1 uppercase tracking-tight">Upcoming Seminar</p>
//       <h4 className="text-[13px] font-extrabold leading-tight text-gray-800">Conference on Latest Advancements...</h4>
//       <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold mt-2">
//         <MapPin size={10} className="text-teal-600" /> Toronto, Canada
//       </div>
//     </div>
//   </div>
// );

// const VisaCard = ({ city, img }) => (
//   <div className="relative h-28 rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
//     <img src={img} className="w-full h-full object-cover brightness-[0.6] group-hover:scale-110 transition-transform duration-700" alt={city} />
//     <span className="absolute inset-0 flex items-center justify-center text-white font-black tracking-[4px] text-2xl">{city}</span>
//   </div>
// );

// const HealthTipCard = ({ img }) => (
//   <div className="bg-white border border-gray-100 rounded-3xl p-4 flex gap-4 hover:shadow-md transition-shadow cursor-pointer">
//     <img src={img} className="w-24 h-16 rounded-2xl object-cover" alt="Health tip" />
//     <div>
//       <h4 className="text-[13px] font-extrabold text-gray-800">Beat Jet Lag Like a Pro</h4>
//       <p className="text-[11px] text-gray-400 mt-1">Crossing time zones? <span className="text-red-500 font-bold">read more</span></p>
//     </div>
//   </div>
// );

// const News = ({ flag, title, source }) => (
//   <div className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 group hover:bg-gray-50 px-2 py-1 rounded-lg transition-colors">
//     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">{flag}</div>
//     <div className="flex-1 min-w-0">
//       <h5 className="text-sm font-bold leading-snug mb-1 truncate">{title}</h5>
//       <p className="text-[11px] text-gray-500 truncate">Source: <span className="text-blue-600">{source}</span></p>
//     </div>
//   </div>
// );

// export default Explore;