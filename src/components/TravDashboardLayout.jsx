import Sidebar from "./TravelerSidebar";
import { Outlet } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import ProfilePic from "../assets/ProfilePic.png";

const TravDashboardLayout = () => {
  // Logic: These can later be replaced by actual status from your Auth/Context
  const isOnline = true;
  const hasNotifications = true;

  return (
    <div className="flex min-h-screen bg-[#F6F6F6]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-end h-20 bg-white border-b border-gray-200 shadow-md px-6">
          <div className="flex items-center gap-14">
            
            {/* Search box */}
            <div className="relative flex items-center w-[321px] h-[32px] rounded-full border-[0.5px] border-[#400097] px-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-full bg-transparent text-sm placeholder-gray-500 outline-none pr-8"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#005A58] rounded-full flex items-center justify-center cursor-pointer">
                <Search size={12} className="text-white" />
              </div>
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-2">
              {/* Avatar with Online Indicator */}
              <div className="relative">
                <img
                  src={ProfilePic}
                  alt="Profile"
                  className="w-[50px] h-[50px] rounded-full object-cover border border-gray-100"
                />
                {isOnline && (
                  <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              
              <div className="flex flex-col ml-1">
                <p className="text-gray-900 font-semibold text-[14px] leading-tight font-inter">Samuel F.</p>
                <p className="text-gray-500 font-normal text-[12px] leading-tight font-inter opacity-90">Traveler</p>
              </div>
            </div>

            {/* Notification Bell with Red Badge */}
            <div className="relative cursor-pointer">
              <Bell size={24} className="text-gray-600 hover:text-gray-900 transition-colors" />
              {hasNotifications && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  {/* The pulse effect makes it look modern/active */}
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 border border-white"></span>
                </span>
              )}
            </div>

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

export default TravDashboardLayout;








// import Sidebar from "./TravelerSidebar";
// import { Outlet } from "react-router-dom";
// import { User, Search, Bell } from "lucide-react";
// import ProfilePic from "../assets/ProfilePic.png";

// const TravDashboardLayout = () => {
//   return (
//     <div className="flex min-h-screen bg-[#F6F6F6] ">
//       {/* Sidebar first so it stretches from top */}
//       <Sidebar />

//       {/* Main content area */}
//       <div className="flex-1 flex flex-col">
//         {/* Top Bar */}
//         <div className="flex items-center justify-end h-20 bg-white border-b border-gray-200 shadow-md px-6 ">
//   {/* Right Section: Search + Profile + Bell */}
//   <div className="flex items-center gap-14">
//     {/* Search box */}
//     <div className="relative flex items-center w-[321px] h-[29px] rounded-full border-[0.2px] border-[#400097] px-3 py-1.5">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="w-full h-full bg-transparent text-sm placeholder-gray-500 outline-none pr-8"
//       />
//       <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#005A58] rounded-full flex items-center justify-center">
//         <Search size={12} className="text-white" />
//       </div>
//     </div>

//     {/* Profile */}
//     <div className="flex items-center gap-2 h-full">
//       <img
//                   src={ProfilePic}
//                   alt="Profile"
//                   className="w-[50px] h-[52px] rounded-full object-cover"
//                 />
//       <span className="ml-2">
//         <p className="text-gray-900" style={{ width: "76px", height: "17px", opacity: 1, fontFamily: "Inter", fontWeight: 600, fontStyle: "normal", fontSize: "14px", lineHeight: "100%", letterSpacing: "0px" }}>Samuel F.</p>

//         <p className="text-gray-500" style={{ width: "86px", height: "15px", opacity: 0.9, fontFamily: "Inter", fontWeight: 400, fontStyle: "normal", fontSize: "12px", lineHeight: "100%", letterSpacing: "0px" }}>Traveler</p>

//       </span>
//     </div>

//     {/* Notification Bell */}
//     <Bell size={24} className="text-gray-600 cursor-pointer" />
//   </div>
// </div>


//         {/* Main Outlet */}
//         <main className="flex-1 p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default TravDashboardLayout;
