import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";
import Logo from "../assets/TravactiveLogo.png";

// Normal Icons
import OverviewIcon from "../assets/OverviewIcon1.png";
import ExploreIcon from "../assets/ExploreIcon.png";
import SavedIcon from "../assets/SavedItemIcon.png";
import AskTravactIcon from "../assets/AskTravIcon.png";
import SettingIcon from "../assets/SettingsIcon.png";

// Active Icons (MAKE SURE YOU HAVE THESE IMAGES)
import OverviewIconActive from "../assets/OverviewIconActive.png";
import ExploreIconActive from "../assets/ExploreIconActive.png";
import SavedIconActive from "../assets/SavedItemIconActive.png";
import AskTravactIconActive from "../assets/AskTravIconActive.png";
import SettingIconActive from "../assets/SettingsIconActive.png";

const Sidebar = () => {
  return (
    <aside
      className="relative flex flex-col"
      style={{
        width: "250px",
        height: "1074px",
        background: "#FFFFFF",
        boxShadow: "0px 5px 12px 0px #1212120A",
        borderRight: "0.16px solid #DADADA",
        opacity: 1,
      }}
    >
      {/* Logo */}
      <div className="p-6 flex items-center justify-center">
        <NavLink to="/">
          <img
            src={Logo}
            alt="Travactive Logo"
            className="w-[127px] h-[32px] object-contain"
          />
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="px-4 space-y-2 flex-1 pt-9">
        <NavItem
          to="/dashboard/overview"
          icon={OverviewIcon}
          activeIcon={OverviewIconActive}
          label="Overview"
        />

        <NavItem
          to="/dashboard/explore"
          icon={ExploreIcon}
          activeIcon={ExploreIconActive}
          label="Explore"
        />

        <NavItem
          to="/dashboard/saved"
          icon={SavedIcon}
          activeIcon={SavedIconActive}
          label="Saved"
        />

        <NavItem
          to="/dashboard/ask"
          icon={AskTravactIcon}
          activeIcon={AskTravactIconActive}
          label="Ask Travact"
        />

        <NavItem
          to="/dashboard/settings"
          icon={SettingIcon}
          activeIcon={SettingIconActive}
          label="Settings"
        />
      </nav>

      {/* Logout */}
       <div className="absolute bottom-6 w-full px-4">
        <NavLink
          to="/get-started"
          className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-200"
        >
          <LogOut size={18} />
          Logout
        </NavLink>
      </div>
    </aside>
  );
};

// Reusable Nav Item Component
const NavItem = ({ to, icon, activeIcon, label }) => (
  <NavLink to={to} className={navClass}>
    {({ isActive }) => (
      <>
        <img
          src={isActive ? activeIcon : icon}
          alt={label}
          className="w-[19.98px] h-[20px]"
        />
        <span className="font-semibold text-[16px]">{label}</span>
      </>
    )}
  </NavLink>
);

const navClass = ({ isActive }) => `
  flex items-center gap-2
  w-[202px] h-[44px]
  rounded-[12px]
  px-[24px] py-[10px]
  text-sm font-medium
  opacity-100
  shadow-[0px_8px_24px_0px_#8888881F]
  ${
    isActive
      ? "bg-[#023436] text-white border-l-2 border-[#023436]"
      : "text-gray-600 hover:bg-gray-100"
  }
`;

export default Sidebar;
