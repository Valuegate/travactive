import Sidebar from "./TravelerSidebar";
import { Outlet } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import ProfilePic from "../assets/ProfilePic.png";

const TravDashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F6F6F6]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        
        
        {/* Top Bar */}
<div className="hidden md:flex items-center justify-start md:pl-70 lg:justify-end h-16 lg:h-20 bg-white border-b border-gray-200 shadow-md px-4 lg:px-6">
  <div className="flex items-center gap-6 lg:gap-14 w-full md:w-auto">

    {/* Search */}
    <div className="relative flex items-center w-[160px] md:w-[180px] lg:w-[220px] h-[30px] rounded-full border border-[#400097] px-3">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-full bg-transparent text-xs md:text-sm placeholder-gray-500 outline-none pr-6"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#005A58] rounded-full flex items-center justify-center">
        <Search size={10} className="text-white" />
      </div>
    </div>

    {/* Profile + Bell */}
    <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
      
      <div className="flex items-center gap-2">
        <img
          src={ProfilePic}
          alt="Profile"
          className="w-9 h-9 md:w-10 md:h-10 lg:w-[50px] lg:h-[52px] rounded-full object-cover"
        />

        <div className="leading-tight">
          <p className="text-gray-900 text-xs md:text-sm font-semibold">
            Samuel F.
          </p>
          <p className="text-gray-500 text-[10px] md:text-xs">
            Traveler
          </p>
        </div>
      </div>

      <Bell className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer" />
    </div>
  </div>
</div>



        {/* Main */}
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default TravDashboardLayout;
