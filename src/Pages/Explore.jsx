import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Compass, Star, MessageSquare, 
  Settings, LogOut, Search, Bell, MapPin, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-slate-800">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-teal-900 rounded-lg flex items-center justify-center">
            <Compass className="text-white w-5 h-5" />
          </div>
          <h1 className="text-xl font-bold text-teal-900">Travactiv</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {/* Fixed: Changed to correct path from App.jsx */}
          <NavItem 
            icon={<LayoutDashboard size={20}/>} 
            label="Overview" 
            onClick={() => navigate('/dashboard/overview')} 
          />
          {/* Active State - Already on Explore page */}
          <NavItem 
            icon={<Compass size={20}/>} 
            label="Explore" 
            active 
          />
          <NavItem icon={<Star size={20}/>} label="Top Picks" />
          <NavItem icon={<MessageSquare size={20}/>} label="Ask Travactiv" />
          <NavItem icon={<Settings size={20}/>} label="Settings" />
        </nav>

        <button 
          type="button"
          className="flex items-center gap-3 text-red-500 hover:bg-red-50 p-3 rounded-xl transition-colors mt-auto"
        >
          <LogOut size={20} />
          <span className="font-medium">Log out</span>
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* TOP NAVBAR */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search here...." 
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Search"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <button 
              type="button"
              className="absolute right-2 top-1.5 bg-teal-800 p-1.5 rounded-full text-white hover:bg-teal-700 transition-colors"
              aria-label="Search"
            >
              <Search size={14} />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-bold text-sm">Samuel F.</p>
              <p className="text-xs text-gray-500">Traveler</p>
            </div>
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel" 
              alt="Samuel's profile" 
              className="w-10 h-10 rounded-full bg-gray-200" 
            />
            <div className="relative cursor-pointer" role="button" tabIndex={0}>
              <Bell className="text-gray-400" />
              <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full border-2 border-white"></span>
            </div>
          </div>
        </header>

        <div className="p-8 grid grid-cols-12 gap-8">
          {/* LEFT COLUMN */}
          <div className="col-span-8 space-y-8">
            <div className="flex gap-4">
              <SeminarCard color="bg-amber-100" accent="bg-amber-400" />
              <SeminarCard color="bg-teal-50" accent="bg-teal-400" />
            </div>

            <SectionHeader title="Destination" />
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400" 
                    alt="Santorini, Greece" 
                    className="h-32 w-full object-cover" 
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-1">Visit Santorini, Greece</h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      Surrounded by turquoise water, the island is cluttered with multi-colored cliffs, hot-headed volcanoes... <span className="text-red-500 hover:underline">read more</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <SectionHeader title="Easy Visa Destination" />
            <div className="grid grid-cols-3 gap-4">
              <VisaCard city="DUBAI" img="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400" />
              <VisaCard city="CHINA" img="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?auto=format&fit=crop&w=400" />
              <VisaCard city="BRAZIL" img="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=400" />
            </div>

            <SectionHeader title="Health Tips Advisory" />
            <div className="grid grid-cols-2 gap-4">
              <HealthTipCard />
              <HealthTipCard />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-4 space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">July 2025</h3>
                <div className="flex gap-2">
                  <button type="button" aria-label="Previous month">
                    <ChevronLeft size={18} className="text-gray-400 cursor-pointer hover:text-teal-900" />
                  </button>
                  <button type="button" aria-label="Next month">
                    <ChevronRight size={18} className="text-gray-400 cursor-pointer hover:text-teal-900" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 text-center text-sm gap-y-4">
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                  <span key={day} className="text-gray-400 font-medium">{day}</span>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <span 
                    key={i} 
                    className={`py-1 cursor-pointer hover:bg-gray-100 rounded-full ${i + 1 === 8 ? 'bg-teal-900 text-white hover:bg-teal-800' : ''}`}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4">Alert and News</h3>
              <div className="space-y-4">
                <NewsItem country="UK" text="UK expands Business Visa deadline" source="gov.uk" flag="🇬🇧" />
                <NewsItem country="USA" text="USA Ease Entry Rule for Health Tourists" source="The Indian Times" flag="🇺🇸" />
                <NewsItem country="Canada" text="Canada Tightens Work Permit Rules" source="ircc.canada.ca" flag="🇨🇦" />
                <NewsItem country="Australia" text="Australia Ban Multiple Access Route" source="homeaffairs.gov.au" flag="🇦🇺" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const NavItem = ({ icon, label, active = false, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all w-full text-left ${
        active ? 'bg-teal-900 text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'
      }`}
      aria-current={active ? 'page' : undefined}
    >
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
};

const SectionHeader = ({ title }) => (
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-bold">{title}</h3>
    <button 
      type="button"
      className="text-xs text-gray-400 hover:text-teal-900 font-semibold uppercase tracking-wider"
    >
      See All
    </button>
  </div>
);

const SeminarCard = ({ color, accent }) => (
  <article className={`flex-1 ${color} rounded-2xl flex overflow-hidden cursor-pointer hover:brightness-95 transition-all`}>
    <div className={`${accent} w-16 p-3 flex flex-col items-center justify-center text-teal-900`}>
      <span className="text-[10px] font-bold">2025</span>
      <span className="text-lg font-black leading-none uppercase">Aug</span>
      <span className="text-lg font-black leading-none">30</span>
    </div>
    <div className="p-4 flex-1">
      <p className="text-[10px] font-bold text-teal-800 mb-1 uppercase">Upcoming Seminar</p>
      <h4 className="text-xs font-bold leading-tight mb-2">International Conference on Latest Advancements in Science...</h4>
      <div className="flex items-center gap-1 text-[10px] text-gray-500 font-medium">
        <MapPin size={10} /> Toronto, Canada
      </div>
    </div>
  </article>
);

const VisaCard = ({ city, img }) => (
  <article className="relative h-24 rounded-xl overflow-hidden group cursor-pointer shadow-sm">
    <img src={img} alt={`${city} skyline`} className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-500" />
    <span className="absolute inset-0 flex items-center justify-center text-white font-black tracking-widest text-lg">{city}</span>
  </article>
);

const HealthTipCard = () => (
  <article className="bg-white border border-gray-100 rounded-xl p-3 flex gap-3 hover:shadow-md transition-shadow cursor-pointer">
    <img 
      src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&w=150" 
      alt="Health tip illustration" 
      className="w-20 h-14 rounded-lg object-cover" 
    />
    <div>
      <h4 className="text-xs font-bold">Beat Jet Lag Like a Pro</h4>
      <p className="text-[10px] text-gray-400 mt-1">Crossing time zones? Discover proven ways to... <span className="text-red-500 font-semibold">read more</span></p>
    </div>
  </article>
);

const NewsItem = ({ flag, text, source }) => (
  <article className="flex gap-3 items-start group cursor-pointer pb-2 border-b border-gray-50 last:border-0">
    <span className="text-xl" role="img" aria-label="Country flag">{flag}</span>
    <div className="flex-1">
      <p className="text-xs font-bold leading-tight group-hover:text-teal-700 transition-colors">{text}</p>
      <p className="text-[9px] text-gray-400 truncate mt-1">Source: {source}</p>
    </div>
  </article>
);

export default Explore;



// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Add this
// import { 
//   LayoutDashboard, Compass, Star, MessageSquare, 
//   Settings, LogOut, Search, Bell, MapPin, 
//   ChevronLeft, ChevronRight, ExternalLink 
// } from 'lucide-react';

// const Explore = () => {
//   const navigate = useNavigate(); // Add this
//   return (
//     <div className="flex min-h-screen bg-gray-50 font-sans text-slate-800">
//       {/* SIDEBAR */}
//       <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-6">
//         <div className="flex items-center gap-2 mb-10">
//           <div className="w-8 h-8 bg-teal-900 rounded-lg flex items-center justify-center">
//             <Compass className="text-white w-5 h-5" />
//           </div>
//           <h1 className="text-xl font-bold text-teal-900">Travactiv</h1>
//         </div>

//         <nav className="flex-1 space-y-2">
//           <NavItem icon={<LayoutDashboard size={20}/>} label="Overview" />
//           <NavItem icon={<Compass size={20}/>} label="Explore" active />
//           <NavItem icon={<Star size={20}/>} label="Top Picks" />
//           <NavItem icon={<MessageSquare size={20}/>} label="Ask Travactiv" />
//           <NavItem icon={<Settings size={20}/>} label="Settings" />
//         </nav>

//         <button className="flex items-center gap-3 text-red-500 hover:bg-red-50 p-3 rounded-xl transition-colors mt-auto">
//           <LogOut size={20} />
//           <span className="font-medium">Log out</span>
//         </button>
//       </aside>

//       {/* MAIN CONTENT AREA */}
//       <main className="flex-1 flex flex-col">
//         {/* TOP NAVBAR */}
//         <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8">
//           <div className="relative w-full max-w-md">
//             <input 
//               type="text" 
//               placeholder="Search here...." 
//               className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//             <button className="absolute right-2 top-1.5 bg-teal-800 p-1.5 rounded-full text-white">
//               <Search size={14} />
//             </button>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="text-right">
//               <p className="font-bold text-sm">Samuel F.</p>
//               <p className="text-xs text-gray-500">Traveler</p>
//             </div>
//             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel" alt="Profile" className="w-10 h-10 rounded-full bg-gray-200" />
//             <div className="relative">
//               <Bell className="text-gray-400" />
//               <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full border-2 border-white"></span>
//             </div>
//           </div>
//         </header>

//         <div className="p-8 grid grid-cols-12 gap-8">
//           {/* LEFT COLUMN */}
//           <div className="col-span-8 space-y-8">
//             {/* SEMINAR BANNER */}
//             <div className="flex gap-4">
//               <SeminarCard color="bg-amber-100" accent="bg-amber-400" />
//               <SeminarCard color="bg-teal-50" accent="bg-teal-400" />
//             </div>

//             {/* DESTINATIONS SECTION */}
//             <SectionHeader title="Destination" />
//             <div className="grid grid-cols-3 gap-4">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
//                   <img src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400" alt="Santorini" className="h-32 w-full object-cover" />
//                   <div className="p-4">
//                     <h4 className="font-bold text-sm mb-1">Visit Santorini, Greece</h4>
//                     <p className="text-[10px] text-gray-500 leading-relaxed">
//                       Surrounded by turquoise water, the island is cluttered with multi-colored cliffs, hot-headed volcanoes... <span className="text-red-500 cursor-pointer">read more</span>
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* EASY VISA DESTINATION */}
//             <SectionHeader title="Easy Visa Destination" />
//             <div className="grid grid-cols-3 gap-4">
//               <VisaCard city="DUBAI" img="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400" />
//               <VisaCard city="CHINA" img="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?auto=format&fit=crop&w=400" />
//               <VisaCard city="BRAZIL" img="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=400" />
//             </div>

//             {/* HEALTH TIPS */}
//             <SectionHeader title="Health Tips Advisory" />
//             <div className="grid grid-cols-2 gap-4">
//               <HealthTipCard />
//               <HealthTipCard />
//             </div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="col-span-4 space-y-8">
//             {/* CALENDAR */}
//             <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="font-bold">July 2025</h3>
//                 <div className="flex gap-2">
//                   <ChevronLeft size={18} className="text-gray-400 cursor-pointer" />
//                   <ChevronRight size={18} className="text-gray-400 cursor-pointer" />
//                 </div>
//               </div>
//               <div className="grid grid-cols-7 text-center text-sm gap-y-4">
//                 {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
//                   <span key={day} className="text-gray-400 font-medium">{day}</span>
//                 ))}
//                 {Array.from({ length: 31 }, (_, i) => (
//                   <span key={i} className={`py-1 ${i + 1 === 8 ? 'bg-teal-900 text-white rounded-full' : ''}`}>
//                     {i + 1}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* ALERTS & NEWS */}
//             <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
//               <h3 className="font-bold mb-4">Alert and News</h3>
//               <div className="space-y-4">
//                 <NewsItem country="UK" text="UK expands Business Visa deadline" source="gov.uk" flag="🇬🇧" />
//                 <NewsItem country="USA" text="USA Ease Entry Rule for Health Tourists" source="The Indian Times" flag="🇺🇸" />
//                 <NewsItem country="Canada" text="Canada Tightens Work Permit Rules" source="ircc.canada.ca" flag="🇨🇦" />
//                 <NewsItem country="Australia" text="Australia Ban Multiple Access Route" source="homeaffairs.gov.au" flag="🇦🇺" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// // Sub-components for cleaner code
// const NavItem = ({ icon, label, active = false }) => (
//   <div className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-teal-900 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>
//     {icon}
//     <span className="font-medium">{label}</span>
//   </div>
// );

// const SectionHeader = ({ title }) => (
//   <div className="flex justify-between items-center">
//     <h3 className="text-lg font-bold">{title}</h3>
//     <button className="text-xs text-gray-400 hover:underline">See All</button>
//   </div>
// );

// const SeminarCard = ({ color, accent }) => (
//   <div className={`flex-1 ${color} rounded-2xl flex overflow-hidden`}>
//     <div className={`${accent} w-16 p-3 flex flex-col items-center justify-center text-teal-900`}>
//       <span className="text-[10px] font-bold">2025</span>
//       <span className="text-lg font-black leading-none">Aug</span>
//       <span className="text-lg font-black leading-none">30</span>
//     </div>
//     <div className="p-4 flex-1">
//       <p className="text-[10px] font-bold text-teal-800 mb-1">Upcoming Seminar</p>
//       <h4 className="text-xs font-bold leading-tight mb-2">International Conference on Latest Advancements in Science...</h4>
//       <div className="flex items-center gap-1 text-[10px] text-gray-500">
//         <MapPin size={10} /> Toronto, Canada
//       </div>
//     </div>
//   </div>
// );

// const VisaCard = ({ city, img }) => (
//   <div className="relative h-20 rounded-xl overflow-hidden group cursor-pointer">
//     <img src={img} alt={city} className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform" />
//     <span className="absolute inset-0 flex items-center justify-center text-white font-black tracking-widest">{city}</span>
//   </div>
// );

// const HealthTipCard = () => (
//   <div className="bg-white border border-gray-100 rounded-xl p-2 flex gap-3">
//     <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&w=100" className="w-16 h-12 rounded-lg object-cover" alt="tip" />
//     <div>
//       <h4 className="text-xs font-bold">Beat Jet Lag Like a Pro</h4>
//       <p className="text-[10px] text-gray-400">Crossing time zones? Discover proven way <span className="text-red-500 cursor-pointer">read more</span></p>
//     </div>
//   </div>
// );

// const NewsItem = ({ flag, text, source }) => (
//   <div className="flex gap-3 items-start">
//     <span className="text-xl">{flag}</span>
//     <div className="flex-1">
//       <p className="text-xs font-bold leading-tight">{text}</p>
//       <p className="text-[9px] text-gray-400 truncate">Source: {source}</p>
//     </div>
//   </div>
// );

// export default Explore;