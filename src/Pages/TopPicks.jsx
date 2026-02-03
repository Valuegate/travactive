import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Compass,
  Star,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TopPicks = () => {
  const location = useLocation();

   const isActive = (path) => location.pathname.startsWith(path);

const sidebarItems = [
  { icon: <LayoutDashboard size={20} />, label: "Overview", path: "/dashboard/overview" },
  { icon: <Compass size={20} />, label: "Explore", path: "/explore" },
  { icon: <Star size={20} />, label: "Top Picks", path: "/top-picks" },
  { icon: <MessageSquare size={20} />, label: "Ask Travactiv", path: "/ask" },
  { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
];


 
const links = [
  {
    title: "Study in Germany (No Tuition Fees)",
    desc: "Public universities offering world-class education with minimal cost.",
  },
  {
    title: "Canada Student Visa Guide",
    desc: "Step-by-step process and funding options for international students.",
  },
  {
    title: "Scholarships in Finland",
    desc: "Fully funded and partial scholarships for international students.",
  },
];

const visaAlerts = [
  {
    flag: "🇨🇦",
    country: "Canada",
    news: "New study permit cap announced for 2025",
    source: "IRCC",
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    news: "Extended post-study work visa duration",
    source: "DAAD",
  },
  {
    flag: "🇫🇮",
    country: "Finland",
    news: "More English-taught programs added",
    source: "StudyInfo",
  },
];

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-sans text-[#333333]">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-100 flex flex-col justify-between py-8 px-4">
        <div>
          <div className="flex items-center gap-2 px-4 mb-12">
            <div className="w-8 h-8 bg-[#004D40] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rotate-45"></div>
            </div>
            <span className="text-xl font-bold text-[#004D40] tracking-tight">
              Travactiv
            </span>
          </div>

          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive(item.path)
                    ? "bg-[#004D40] text-white shadow-lg"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <button className="flex items-center gap-3 px-4 py-3 text-[#D32F2F] font-medium hover:bg-red-50 rounded-lg transition-colors">
          <LogOut size={20} className="rotate-180" />
          <span className="text-sm">Log out</span>
        </button>
      </aside>

      {/* Main Body */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-20 bg-white border-b border-gray-100 px-10 flex items-center justify-between">
          <div className="relative w-[450px]">
            <input 
              type="text" 
              placeholder="Search here...." 
              className="w-full bg-[#F1F3F4] border-none rounded-full py-2.5 px-6 text-sm focus:ring-1 focus:ring-teal-600 outline-none"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#004D40] p-1.5 rounded-full text-white">
              <Search size={14} />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/150?u=samuel" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
              <div className="leading-tight">
                <p className="text-sm font-bold">Samuel S.</p>
                <p className="text-[11px] text-gray-400">Student</p>
              </div>
            </div>
            <div className="relative">
              <Bell size={22} className="text-gray-400" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-10 flex gap-8">
          {/* Main Feed */}
          <div className="flex-1 space-y-8">
            
            {/* Recommendation Cards */}
            {[1, 2].map((card) => (
              <div key={card} className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex gap-8">
                <div className="w-[340px] shrink-0">
                  <img src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800" 
                       className="w-full h-44 object-cover rounded-xl mb-4" alt="Santorini Main" />
                  <div className="grid grid-cols-4 gap-2">
                    <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=150" className="h-16 w-full object-cover rounded-lg" alt="Thumb" />
                    <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=150" className="h-16 w-full object-cover rounded-lg" alt="Thumb" />
                    <img src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?w=150" className="h-16 w-full object-cover rounded-lg" alt="Thumb" />
                    <div className="relative h-16 w-full rounded-lg overflow-hidden cursor-pointer group">
                      <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=150" className="w-full h-full object-cover brightness-50 group-hover:brightness-40 transition-all" alt="More" />
                      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">+4</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Visit Santorini, Greece</h2>
                    <p className="text-gray-500 text-[13px] leading-relaxed">
                      Surrounded by turquoise water, the Island is cluttered with multi-colored cliffs, hot-headed volcanoes, and acres of sun-toasted sand. Adding to the marvels of nature are the ancient relics, delectable cuisine. The island is known for its unique geological formations, including a caldera (a large volcanic crater) and beaches with black, red, and white lava pebbles.
                    </p>
                  </div>
                  <button className="bg-[#004D40] text-white w-full py-3 rounded-full text-sm font-bold mt-4 hover:bg-[#003d33] transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}

            {/* Links List */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-1">Carefully Researched Links For You</h3>
              <p className="text-gray-400 text-[12px] mb-8">Explore countries with low tuition, scholarships, and easy visa access perfect for your study journey.</p>
              
              <div className="space-y-4">
                {links.map((link, idx) => (
                  <div key={idx} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                        <img src={`https://picsum.photos/seed/link${idx}/100`} className="w-full h-full object-cover" alt="icon" />
                      </div>
                      <div className="max-w-md">
                        <h4 className="text-[13px] font-bold text-gray-800">{link.title}</h4>
                        <p className="text-[11px] text-gray-400 leading-tight">{link.desc}</p>
                      </div>
                    </div>
                    <button className="px-5 py-1.5 border border-[#004D40] text-[#004D40] text-[11px] font-bold rounded-full hover:bg-[#004D40] hover:text-white transition-all">
                      Browse Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Hero */}
            <div className="relative h-24 rounded-2xl overflow-hidden bg-[#1A1A1A] flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200" 
                   className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Background" />
              <div className="relative z-10 text-center">
                <h3 className="text-white font-bold text-lg">Start Your Journey with the Right Opportunity</h3>
                <p className="text-gray-300 text-[11px]">Discover scholarships, visa-friendly countries, and top universities with fewer requirements. Find your best-fit option and apply with confidence.</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[320px] space-y-8 shrink-0">
            {/* Calendar Widget */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-sm">July 2025</h3>
                <div className="flex gap-4 text-gray-400">
                  <ChevronLeft size={16} className="cursor-pointer" />
                  <ChevronRight size={16} className="cursor-pointer" />
                </div>
              </div>
              <div className="grid grid-cols-7 gap-y-3 text-center text-[12px]">
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                  <span key={day} className="text-gray-400 font-medium">{day}</span>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <div key={i} className="flex justify-center">
                    <span className={`w-7 h-7 flex items-center justify-center rounded-full cursor-pointer transition-colors
                      ${i === 7 ? 'bg-[#004D40] text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                      {i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* News Widget */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-sm mb-6">Alert and News</h3>
              <div className="space-y-5">
                {visaAlerts.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-xl shrink-0">{item.flag}</span>
                    <div className="space-y-0.5">
                      <h4 className="text-[12px] font-bold leading-tight text-gray-800">{item.country}: {item.news}</h4>
                      <p className="text-[9px] text-gray-400 italic">Source: {item.source}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;