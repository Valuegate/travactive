import React from "react";
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

const Overview = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-800 font-sans">

      {/* ===================== SIDEBAR ===================== */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">

  {/* Logo */}
  <div className="flex items-center justify-center mb-10">
    <img
      src={TravactiveLogo}
      alt="Travactive Logo"
      className="w-40 h-auto object-contain"
    />
  </div>

  <nav className="flex-1 space-y-1">
    <SidebarItem icon={<LayoutDashboard size={20} />} label="Overview" active />
    <SidebarItem icon={<Compass size={20} />} label="Explore" />
    <SidebarItem icon={<Bookmark size={20} />} label="Top Picks" />
    <SidebarItem icon={<MessageSquare size={20} />} label="Ask Travactiv" />
    <SidebarItem icon={<Settings size={20} />} label="Settings" />
  </nav>

  <button className="flex items-center gap-3 text-red-500 hover:bg-red-50 p-3 rounded-xl transition-colors mt-auto">
    <LogOut size={20} />
    <span className="font-medium">Log out</span>
  </button>
</aside>


      {/* ===================== MAIN CONTENT ===================== */}
      <main className="flex-1 overflow-y-auto">

        {/* ===================== NAVBAR ===================== */}
        <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
          <div className="relative w-[420px]">
            <input
              type="text"
              placeholder="Search here...."
              className="w-full bg-gray-100 py-2.5 pl-5 pr-12 rounded-full border-none focus:ring-2 focus:ring-teal-500 text-sm italic"
            />
            <button className="absolute right-2 top-1.5 bg-teal-900 p-2 rounded-full text-white">
              <Search size={16} />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-full border border-gray-300"
                alt="User"
              />
              <div>
                <p className="text-sm font-bold leading-none">Samuel F.</p>
                <p className="text-xs text-gray-500">Traveler</p>
              </div>
            </div>

            <div className="relative">
              <Bell size={24} className="text-gray-400" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                1
              </span>
            </div>
          </div>
        </header>

        {/* ===================== CONTENT GRID ===================== */}
        <div className="p-8 grid grid-cols-12 gap-6">

          {/* ===================== LEFT COLUMN ===================== */}
          <div className="col-span-8 space-y-6">

            {/* ===== HERO BANNER ===== */}
        <div className="relative w-full h-48 rounded-3xl overflow-hidden flex items-center px-10">
            {/* Background Image */}
        <img
        src={heroImg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
</div>


            {/* ===== INFO CARDS ===== */}
            <div className="grid grid-cols-2 gap-6">
              <InfoCard
                title="Upcoming Seminars"
                desc="Stay ahead of closing dates for scholarships, conferences, and visa applications in your saved countries."
                button="Explore"
              />
              <InfoCard
                title="Important Visa Requirements"
                desc="Access your saved scholarships, grants, travel updates, and important resources anytime in one convenient place."
                button="See more"
              />
            </div>

            {/* ===== RECOMMENDATIONS ===== */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Recommendations</h3>
                <button className="text-xs text-gray-500 hover:underline">See All</button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <RecommendCard
                  img={rec1}
                  title="Conference in Singapore"
                  desc="Find scholarships currently open across top universities in Europe & the Americas, fully funded options..."
                />
                <RecommendCard
                  img={rec2}
                  title="Visa Policy Updates"
                  desc="Find scholarships currently open across top universities in Europe & the Americas, including tuition and cost..."
                />
                <RecommendCard
                  img={rec3}
                  title="Health Tourism Update"
                  desc="Find scholarships currently open across top universities in Europe & the Americas, covering living expenses..."
                />
              </div>
            </div>
          </div>

          {/* ===================== RIGHT COLUMN ===================== */}
          <div className="col-span-4 space-y-6">
            {/* ===== CALENDAR ===== */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold">July 2025</h4>
                <div className="flex gap-4">
                  <ChevronLeft className="text-gray-400 cursor-pointer" size={18} />
                  <ChevronRight className="text-gray-400 cursor-pointer" size={18} />
                </div>
              </div>
              <Calendar />
            </div>

            {/* ===== NEWS ===== */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h4 className="font-bold mb-6">Alert and News</h4>
              <div className="space-y-5">
                <News flag="🇬🇧" title="UK expands Business Visa deadline" source="www.gov.uk" />
                <News flag="🇺🇸" title="USA Ease Entry Rule for Health Tourists" source="The Indian Times" />
                <News flag="🇨🇦" title="Canada Tightens Work Permit Rules" source="ircc.canada.ca" />
                <News flag="🇦🇺" title="Australia Ban Multiple Access Route" source="immi.homeaffairs.gov.au" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

/* ===================== SUB-COMPONENTS ===================== */

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer 
      ${active ? "bg-teal-900 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}
  >
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </div>
);

const InfoCard = ({ title, desc, button }) => (
  <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
      <span className="text-sm font-bold text-teal-900">{button}</span>
      <ArrowRight size={16} />
    </div>
  </div>
);

const RecommendCard = ({ img, title, desc }) => (
  <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 hover:shadow-md transition">
    <img src={img} className="h-32 w-full object-cover rounded-xl mb-3" alt={title} />
    <h5 className="font-bold text-sm mb-1">{title}</h5>
    <p className="text-xs text-gray-500 leading-snug mb-3">{desc}</p>
    <div className="flex items-center gap-1 text-green-600 text-[10px] font-semibold mb-4">
      <div className="w-3 h-3 bg-green-500 rounded-full"></div> Actively Open
    </div>
    <button className="w-full py-2 border border-teal-900 text-xs font-bold rounded-xl hover:bg-teal-900 hover:text-white transition">
      Explore
    </button>
  </div>
);

const Calendar = () => {
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  return (
    <div className="grid grid-cols-7 gap-y-4 text-center text-sm">
      {days.map((d) => (
        <span key={d} className="text-gray-400 font-medium">{d}</span>
      ))}
      {Array.from({ length: 31 }, (_, i) => (
        <span
          key={i}
          className={`py-1 ${
            i + 1 === 8 ? "bg-teal-900 text-white rounded-full w-8 h-8 mx-auto flex items-center justify-center" : ""
          }`}
        >
          {i + 1}
        </span>
      ))}
    </div>
  );
};

const News = ({ flag, title, source }) => (
  <div className="flex gap-4">
    <span className="text-2xl mt-1">{flag}</span>
    <div>
      <h5 className="text-xs font-bold leading-snug">{title}</h5>
      <p className="text-[10px] text-gray-500 italic">Source: {source}</p>
    </div>
  </div>
);

export default Overview;


