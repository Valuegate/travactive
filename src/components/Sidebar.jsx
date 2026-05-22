import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogOut, Menu, X, Search, Bell } from "lucide-react";
import Logo from "../assets/TravactiveLogo.png";
import ProfilePic from "../assets/ProfilePic.png";

// Icons
import OverviewIcon from "../assets/OverviewIcon1.png";
import ExploreIcon from "../assets/ExploreIcon.png";
import SavedIcon from "../assets/SavedItemIcon.png";
import AskTravactIcon from "../assets/AskTravIcon.png";
import SettingIcon from "../assets/SettingsIcon.png";

import OverviewIconActive from "../assets/OverviewIconActive.png";
import ExploreIconActive from "../assets/ExploreIconActive.png";
import SavedIconActive from "../assets/SavedItemIconActive.png";
import AskTravactIconActive from "../assets/AskTravIconActive.png";
import SettingIconActive from "../assets/SettingsIconActive.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔹 Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white shadow">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 🔹 Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔹 Sidebar */}
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
        {/* CLOSE (mobile) */}
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* LOGO */}
        <div className="p-6 flex justify-start">
          <NavLink to="/" onClick={() => setOpen(false)}>
            <img
              src={Logo}
              alt="Logo"
              className="w-[100px] md:w-[40px] lg:w-[120px]"
            />
          </NavLink>
        </div>

        {/* 🔹 MOBILE CONTENT */}
        <div className="md:hidden px-4 pb-4 border-b border-gray-200">
          
          {/* Search */}
          <div className="relative flex items-center w-full h-[34px] rounded-full border px-3 mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-xs outline-none pr-6"
            />
            <div className="absolute right-2 w-5 h-5 bg-[#005A58] rounded-full flex items-center justify-center">
              <Search size={10} className="text-white" />
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-xs font-semibold">Samuel S.</p>
                <p className="text-[10px] text-gray-500">Student</p>
              </div>
            </div>

            <Bell className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* NAV */}
        <nav className="px-4 md:px-2 lg:px-4 space-y-2 flex-1 pt-4 md:pt-9">
          <NavItem setOpen={setOpen} to="/dashboard/overview" icon={OverviewIcon} activeIcon={OverviewIconActive} label="Overview" open={open} />
          <NavItem setOpen={setOpen} to="/dashboard/explore" icon={ExploreIcon} activeIcon={ExploreIconActive} label="Explore" open={open} />
          <NavItem setOpen={setOpen} to="/dashboard/saved" icon={SavedIcon} activeIcon={SavedIconActive} label="Saved Items" open={open} />
          <NavItem setOpen={setOpen} to="/dashboard/ask" icon={AskTravactIcon} activeIcon={AskTravactIconActive} label="Ask Travact" open={open} />
          <NavItem setOpen={setOpen} to="/dashboard/settings" icon={SettingIcon} activeIcon={SettingIconActive} label="Settings" open={open} />
        </nav>

        {/* 🔹 LOGOUT */}
        <div className="mt-auto px-4 md:px-2 lg:px-4 pb-6">
          <NavLink
            to="/get-started"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 justify-start md:justify-center lg:justify-start"
          >
            <LogOut size={18} />

            <span
              className={`
                font-semibold text-[16px]
                ${open ? "inline" : "hidden md:hidden lg:inline"}
              `}
            >
              Logout
            </span>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

/* 🔹 NavItem */
const NavItem = ({ to, icon, activeIcon, label, open, setOpen }) => (
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

        <span
          className={`
            font-semibold text-[16px]
            ${open ? "inline" : "hidden md:hidden lg:inline"}
          `}
        >
          {label}
        </span>
      </>
    )}
  </NavLink>
);

/* 🔹 Styles */
const navClass = ({ isActive }) => `
  flex items-center gap-3 w-full h-[44px]
  rounded-[12px]
  px-4 md:px-0 lg:px-4
  justify-start md:justify-center lg:justify-start
  text-sm transition
  ${isActive ? "bg-[#023436] text-white" : "text-gray-600 hover:bg-gray-100"}
`;

export default Sidebar;
