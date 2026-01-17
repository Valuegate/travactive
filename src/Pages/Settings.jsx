import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Compass, 
  ThumbsUp, 
  MessageSquare, 
  Settings as SettingsIcon, 
  LogOut, 
  Search, 
  Bell, 
  Eye, 
  ChevronDown,
  Camera
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Settings');

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-slate-700">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col py-8 px-6">
        <div className="flex items-center gap-2 mb-12 px-2">
          <div className="bg-teal-900 p-1.5 rounded-lg">
            <Compass className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-teal-950">Travactiv</span>
        </div>

        <nav className="flex-1 space-y-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Overview" active={activeTab === 'Overview'} />
          <NavItem icon={<Compass size={20} />} label="Explore" active={activeTab === 'Explore'} />
          <NavItem icon={<ThumbsUp size={20} />} label="Top Picks" active={activeTab === 'Top Picks'} />
          <NavItem icon={<MessageSquare size={20} />} label="Ask Travactiv" active={activeTab === 'Ask Travactiv'} />
          <NavItem icon={<SettingsIcon size={20} />} label="Settings" active={activeTab === 'Settings'} />
        </nav>

        <button className="flex items-center gap-3 text-red-500 font-medium px-4 py-3 hover:bg-red-50 rounded-xl transition-colors mt-auto">
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white h-20 flex items-center justify-between px-12 border-b border-gray-100">
          <div className="relative w-96">
            <input 
              type="text" 
              placeholder="Search here...." 
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            />
            <div className="absolute right-1 top-1 bg-teal-800 p-1.5 rounded-full text-white cursor-pointer">
              <Search size={18} />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover border-2 border-slate-100"
              />
              <div className="leading-tight">
                <p className="font-bold text-sm">Samuel F.</p>
                <p className="text-xs text-slate-500 font-medium">Traveler</p>
              </div>
            </div>
            <div className="relative cursor-pointer">
              <Bell size={22} className="text-slate-400" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-12">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 min-h-[800px] flex flex-col">
            {/* Form Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
              <h2 className="text-lg font-bold border-b-2 border-teal-800 pb-5 -mb-[25px]">Edit Profile</h2>
              <button className="text-red-500 font-semibold text-sm">Cancel</button>
            </div>

            <div className="p-10 max-w-5xl">
              {/* Profile Picture Section */}
              <div className="flex items-center gap-6 mb-10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" 
                  alt="Current Profile" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold mb-1">Profile picture</h3>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-4">PNG, JPEG under 15MB</p>
                </div>
                <div className="flex gap-3 ml-auto">
                  <button className="px-6 py-2.5 border border-slate-800 text-slate-800 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors">
                    Upload New Picture
                  </button>
                  <button className="px-8 py-2.5 border border-red-200 text-red-500 rounded-xl font-bold text-sm hover:bg-red-50 transition-colors">
                    Delete
                  </button>
                </div>
              </div>

              {/* Basic Information Form */}
              <section className="mb-12">
                <h3 className="text-teal-800 font-bold text-sm mb-6">Basic Information</h3>
                <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                  <InputField label="Full Name:" defaultValue="Samuel Sonola" />
                  <InputField label="Password:" defaultValue="********" type="password" showEye />
                  <InputField label="Email Address:" defaultValue="samuelsonola@g******" />
                  <InputField label="Confirm Password:" defaultValue="********" type="password" showEye />
                  <InputField label="City:" placeholder="Type here.." />
                  <div>
                    <label className="block text-sm font-bold mb-2">Country:</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-slate-200 rounded-2xl py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500/20">
                        <option>Choose</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Notification Settings */}
              <section>
                <h3 className="text-teal-800 font-bold text-sm mb-6">Notification Settings</h3>
                <div className="space-y-6">
                  <NotificationRow 
                    title="Push Notifications" 
                    desc="Get push notifications in-app to find out what's going when you're online."
                    items={[
                      { label: "Scholarship", desc: "Information about available scholarships, deadlines and eligibility" },
                      { label: "Other Information", desc: "Information about available scholarships, deadlines and eligibility" }
                    ]}
                  />
                  <NotificationRow 
                    title="Email Notifications" 
                    desc="Get emails to find out what's going on when you're not online."
                    items={[
                      { label: "News and Update", desc: "Information about available scholarships, deadlines and eligibility" },
                      { label: "In-App Notification", desc: "Information about available scholarships, deadlines and eligibility" }
                    ]}
                  />
                </div>
              </section>
            </div>

            {/* Save Button */}
            <div className="mt-auto flex justify-center pb-12">
              <button className="bg-teal-900 text-white px-24 py-3.5 rounded-2xl font-bold text-md hover:bg-teal-950 transition-all shadow-lg shadow-teal-900/20">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Sub-components for cleaner structure
const NavItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all ${
    active ? 'bg-teal-900 text-white font-bold' : 'text-slate-600 hover:bg-slate-50'
  }`}>
    {icon}
    <span>{label}</span>
  </div>
);

const InputField = ({ label, defaultValue = "", placeholder = "", type = "text", showEye = false }) => (
  <div className="w-full">
    <label className="block text-sm font-bold mb-2">{label}</label>
    <div className="relative">
      <input 
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full bg-white border border-slate-200 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
      />
      {showEye && (
        <Eye size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
      )}
    </div>
  </div>
);

const NotificationRow = ({ title, desc, items }) => (
  <div className="flex gap-12">
    <div className="w-1/3">
      <h4 className="font-bold text-sm mb-1">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
    <div className="flex-1 space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start justify-between">
          <div className="flex gap-4">
            <Toggle checked={true} />
            <div>
              <p className="text-sm font-bold leading-none mb-1">{item.label}</p>
              <p className="text-[10px] text-slate-400">{item.desc}</p>
            </div>
          </div>
          <div className="relative">
            <select className="bg-white border border-slate-100 rounded-xl py-1.5 px-3 pr-8 text-xs text-slate-500 appearance-none focus:outline-none">
              <option>Suggested</option>
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Toggle = ({ checked }) => (
  <div className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${checked ? 'bg-teal-900' : 'bg-slate-300'}`}>
    <div className={`bg-white w-3 h-3 rounded-full shadow-sm transform transition-transform ${checked ? 'translate-x-5' : ''}`}></div>
  </div>
);

export default Settings;