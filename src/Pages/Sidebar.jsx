import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, Compass, Bookmark, MessageSquare, Settings, LogOut 
} from "lucide-react";
import TravactiveLogo from "../assets/TravactiveLogo.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { icon: <LayoutDashboard size={20} />, label: "Overview", path: "/dashboard/overview" },
    { icon: <Compass size={20} />, label: "Explore", path: "/explore" },
    { icon: <Bookmark size={20} />, label: "Top Picks", path: "/top-picks" },
    { icon: <MessageSquare size={20} />, label: "Ask Travactiv", path: "/ask-travactiv" },
    { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col min-h-screen sticky top-0">
      {/* Logo */}
      <div className="flex items-center justify-center mb-10">
        <img src={TravactiveLogo} alt="Travactive Logo" className="w-40 h-auto object-contain" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {sidebarItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={idx}
              onClick={() => handleNavigation(item.path)}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-200 ease-in-out
                ${isActive ? "bg-teal-900 text-white shadow-md" : "text-gray-600 hover:bg-gray-100 hover:pl-6 hover:shadow-sm"}`}
            >
              <div className={isActive ? "text-white" : "text-gray-500"}>
                {item.icon}
              </div>
              <span className="font-medium text-sm">{item.label}</span>
            </div>
          );
        })}
      </nav>

      {/* Logout Button */}
      <button className="flex items-center gap-3 text-red-500 hover:bg-red-50 p-3 rounded-xl transition-all duration-200 hover:pl-6 mt-auto">
        <LogOut size={20} />
        <span className="font-medium">Log out</span>
      </button>
    </aside>
  );
};

export default Sidebar;



// // Sidebar.jsx (Reusable for AskTravactiv and other pages)
// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { 
//   LayoutDashboard, Compass, Star, MessageSquare, Settings, LogOut 
// } from "lucide-react";

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const sidebarItems = [
//     { icon: <LayoutDashboard size={20} />, label: "Overview", path: "/overview" },
//     { icon: <Compass size={20} />, label: "Explore", path: "/explore" },
//     { icon: <Star size={20} />, label: "Top Picks", path: "/toppicks" },
//     { icon: <MessageSquare size={20} />, label: "Ask Travactiv", path: "/asktravactiv" },
//     { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
//   ];

//   return (
//     <aside className="w-64 bg-white flex flex-col border-r border-gray-100">
//       <div className="p-6 flex items-center gap-2">
//         <div className="w-8 h-8 bg-[#005F59] rounded-lg flex items-center justify-center">
//           <span className="text-white font-bold text-xl">T</span>
//         </div>
//         <h1 className="text-xl font-bold tracking-tight">Travactiv</h1>
//       </div>

//       <nav className="flex-1 px-4 space-y-2 mt-4">
//         {sidebarItems.map((item, idx) => {
//           const isActive = location.pathname === item.path;
//           return (
//             <button
//               key={idx}
//               onClick={() => navigate(item.path)}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
//                 isActive ? "bg-[#004D47] text-white" : "text-gray-500 hover:bg-gray-50"
//               }`}
//             >
//               {item.icon}
//               <span className="font-medium">{item.label}</span>
//             </button>
//           );
//         })}
//       </nav>

//       <div className="p-6 border-t border-gray-100">
//         <button className="flex items-center gap-3 text-red-500 font-medium hover:opacity-80">
//           <LogOut size={20} />
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
