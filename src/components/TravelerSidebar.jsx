import { useState } from "react";
import { lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";
import { LogOut, Menu, X, Search } from "lucide-react";
import Logo from "../assets/TravactiveLogo.png";
import ProfilePic from "../assets/ProfilePic.png";

// Icons
import OverviewIcon from "../assets/OverviewIcon1.png";
import ExploreIcon from "../assets/ExploreIcon.png";
import SavedIcon from "../assets/SavedItemIcon.png";
import AskTravactIcon from "../assets/AskTravIcon.png";
import SettingIcon from "../assets/SettingsIcon.png";

// Active Icons
import OverviewIconActive from "../assets/OverviewIconActive.png";
import ExploreIconActive from "../assets/ExploreIconActive.png";
import SavedIconActive from "../assets/SavedItemIconActive.png";
import AskTravactIconActive from "../assets/AskTravIconActive.png";
import SettingIconActive from "../assets/SettingsIconActive.png";

const TravelerSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔹 MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white shadow">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 🔹 OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔹 SIDEBAR */}
      <aside
        className={`
          fixed md:relative z-50
          flex flex-col bg-white
          transition-all duration-300
          ${open ? "translate-x-0 w-[250px]" : "-translate-x-full"}
          md:translate-x-0 md:w-[80px] lg:w-[250px]
        `}
        style={{
          minHeight: "100vh",
          boxShadow: "0px 5px 12px #1212120A",
          borderRight: "0.16px solid #DADADA",
        }}
      >
        {/* CLOSE BUTTON */}
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* 🔹 LOGO */}
        <div className="p-6 flex justify-center lg:justify-start">
          <NavLink to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-[100px] md:w-[40px] lg:w-[120px]"
            />
          </NavLink>
        </div>

        {/* 🔥 MOBILE ONLY: SEARCH + PROFILE */}
        <div className="block md:hidden px-4 pb-4">
          {/* SEARCH */}
          <div className="relative flex items-center w-full h-[36px] rounded-full border px-3 mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-sm outline-none pr-8"
            />
            <div className="absolute right-2 w-6 h-6 bg-[#005A58] rounded-full flex items-center justify-center">
              <Search size={12} className="text-white" />
            </div>
          </div>

          {/* PROFILE */}
          <div className="flex items-center gap-3">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">Samuel F.</p>
              <p className="text-xs text-gray-500">Traveler</p>
            </div>
          </div>
        </div>

        {/* 🔹 NAV */}
        <nav className="px-4 md:px-2 lg:px-4 space-y-2 flex-1 pt-4 md:pt-9">
  <NavItem setOpen={setOpen} to="/traveler-dashboard/Travoverview" icon={OverviewIcon} activeIcon={OverviewIconActive} label="Overview" />
  <NavItem setOpen={setOpen} to="/traveler-dashboard/TravExplore" icon={ExploreIcon} activeIcon={ExploreIconActive} label="Explore" />
  <NavItem setOpen={setOpen} to="/traveler-dashboard/TopPicks" icon={SavedIcon} activeIcon={SavedIconActive} label="Top Picks" />
  <NavItem setOpen={setOpen} to="/traveler-dashboard/TravAsk" icon={AskTravactIcon} activeIcon={AskTravactIconActive} label="Ask Travact" />
  <NavItem setOpen={setOpen} to="/traveler-dashboard/TravSettings" icon={SettingIcon} activeIcon={SettingIconActive} label="Settings" />
</nav>


        {/* 🔹 LOGOUT */}
        <div className="mt-auto px-4 md:px-2 lg:px-4 pb-6">
          <NavLink
            to="/get-started"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50
              justify-start md:justify-center lg:justify-start"
          >
            <LogOut size={18} />

            {/* 🔥 TEXT RULE */}
            <span className="block md:hidden lg:inline">Logout</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

/* 🔹 NAV ITEM */
const NavItem = ({ to, icon, activeIcon, label, setOpen }) => (
  <NavLink 
    to={to} 
    className={navClass}
    onClick={() => setOpen(false)}
  >
    {({ isActive }) => (
      <>
        <img
          src={isActive ? activeIcon : icon}
          alt={label}
          className="w-[20px] h-[20px]"
        />

        <span className="font-semibold text-[15px] block md:hidden lg:inline">
          {label}
        </span>
      </>
    )}
  </NavLink>
);


/* 🔹 NAV STYLE */
const navClass = ({ isActive }) => `
  flex items-center gap-3 w-full h-[44px]
  rounded-[12px]
  px-4 md:px-0 lg:px-4
  justify-start md:justify-center lg:justify-start
  text-sm transition
  ${isActive ? "bg-[#023436] text-white" : "text-gray-600 hover:bg-gray-100"}
`;

export default TravelerSidebar;
