import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { User, Search, Bell } from "lucide-react";
import ProfilePic from "../assets/ProfilePic.png";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F6F6F6] ">
      {/* Sidebar first so it stretches from top */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-end h-20 bg-white border-b border-gray-200 shadow-md px-6 ">
  {/* Right Section: Search + Profile + Bell */}
  <div className="flex items-center gap-14">
    {/* Search box */}
    <div className="relative flex items-center w-[321px] h-[29px] rounded-full border-[0.2px] border-[#400097] px-3 py-1.5">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-full bg-transparent text-sm placeholder-gray-500 outline-none pr-8"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#005A58] rounded-full flex items-center justify-center">
        <Search size={12} className="text-white" />
      </div>
    </div>

    {/* Profile */}
    <div className="flex items-center gap-2 h-full">
      <img
                  src={ProfilePic}
                  alt="Profile"
                  className="w-[50px] h-[52px] rounded-full object-cover"
                />
      <span className="ml-2">
        <p className="text-gray-900" style={{ width: "76px", height: "17px", opacity: 1, fontFamily: "Inter", fontWeight: 600, fontStyle: "normal", fontSize: "14px", lineHeight: "100%", letterSpacing: "0px" }}>Samuel S.</p>

        <p className="text-gray-500" style={{ width: "86px", height: "15px", opacity: 0.9, fontFamily: "Inter", fontWeight: 400, fontStyle: "normal", fontSize: "12px", lineHeight: "100%", letterSpacing: "0px" }}>Student</p>

      </span>
    </div>

    {/* Notification Bell */}
    <Bell size={24} className="text-gray-600 cursor-pointer" />
  </div>
</div>


        {/* Main Outlet */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
