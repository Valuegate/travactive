import React from 'react';
import { 
  LayoutDashboard, 
  Compass, 
  Star, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Search, 
  Send, 
  Bell,
  ChevronDown
} from 'lucide-react';

const AskTravactiv = () => {
  const sidebarItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', active: false },
    { icon: <Compass size={20} />, label: 'Explore', active: false },
    { icon: <Star size={20} />, label: 'Top Picks', active: false },
    { icon: <MessageSquare size={20} />, label: 'Ask Travactiv', active: true },
    { icon: <Settings size={20} />, label: 'Settings', active: false },
  ];

  const chatHistory = [
    {
      id: 1,
      title: "United Kingdom Available Scholarship For International Students in 2025",
      subtitle: "Royal Society Wolfson Visiting Fellowship 2025",
      desc: "This is a prestigious and fully funded opportunity for established international researchers...",
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=300&q=80",
      date: "27/07/2027",
      status: "Just now",
      active: true
    },
    {
      id: 2,
      title: "Post-Study Residency and Migration Paths for International Students",
      desc: "Explore countries that offer graduate visas, work permits, or permanent residency options after your studies.",
      date: "26/07/2027",
      status: "Yesterday",
      active: false
    },
    {
      id: 3,
      title: "Post-Study Residency and Migration Paths for International Students",
      desc: "Explore countries that offer graduate visas, work permits, or permanent residency options after your studies.",
      date: "26/07/2027",
      status: "Yesterday",
      active: false
    }
  ];

  return (
    <div className="flex h-screen w-full bg-[#F4F7F9] text-[#1A3B34] font-sans">
      
      {/* --- LEFT SIDEBAR --- */}
      <aside className="w-64 bg-white flex flex-col border-r border-gray-100">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-[#005F59] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Travactiv</h1>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {sidebarItems.map((item, idx) => (
            <button
              key={idx}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active 
                ? 'bg-[#004D47] text-white' 
                : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-100">
          <button className="flex items-center gap-3 text-red-500 font-medium hover:opacity-80">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8">
          <div className="relative w-96">
            <input 
              type="text" 
              placeholder="Search here..." 
              className="w-full bg-[#F4F7F9] border-none rounded-full py-2 pl-4 pr-10 text-sm focus:ring-1 focus:ring-[#005F59]"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#005F59] p-1.5 rounded-full cursor-pointer">
              <Search size={14} className="text-white" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold">Samuel F.</p>
                <p className="text-xs text-gray-400">Traveler</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&h=40&q=80" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="relative p-2 bg-gray-50 rounded-full cursor-pointer">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 flex p-6 gap-6 overflow-hidden">
          
          {/* Chat List Column */}
          <div className="w-[380px] bg-white rounded-xl shadow-sm border border-gray-50 flex flex-col">
            <div className="p-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search Chat..." 
                  className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#005F59]"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">Chat List <span className="bg-[#5C3EA2] text-white text-[10px] px-1.5 py-0.5 rounded-full ml-1">3</span></span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4">
              {chatHistory.map((chat) => (
                <div 
                  key={chat.id} 
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${chat.active ? 'border-purple-200 bg-purple-50/30' : 'border-gray-100'}`}
                >
                  <h4 className="text-sm font-bold text-[#5C3EA2] leading-tight mb-1">{chat.title}</h4>
                  {chat.subtitle && <p className="text-[11px] font-bold text-gray-700 mb-1">{chat.subtitle}</p>}
                  <p className="text-[10px] text-gray-500 line-clamp-2 mb-2">{chat.desc}</p>
                  {chat.img && (
                    <img src={chat.img} alt="Post" className="w-full h-24 object-cover rounded-lg mb-2" />
                  )}
                  <div className="flex justify-between items-center text-[10px] text-gray-400">
                    <span>{chat.date}</span>
                    <span>{chat.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-50">
              <button className="w-full bg-[#005F59] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#004D47] transition-colors">
                New Chat
              </button>
            </div>
          </div>

          {/* Actual Conversation Area */}
          <div className="flex-1 flex flex-col bg-white rounded-xl shadow-sm border border-gray-50 overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Feature Banner Message */}
              <div className="relative rounded-2xl overflow-hidden mb-8 h-48 flex items-end">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  alt="Background" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h2 className="relative p-6 text-2xl font-bold text-white max-w-md">
                  Royal Society Wolfson Visiting Fellowship 2025
                </h2>
              </div>

              {/* Bot Message */}
              <div className="flex justify-start">
                <div className="bg-[#F4F7F9] p-4 rounded-2xl rounded-tl-none max-w-lg text-sm leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Rutrum orci ipsum ultrices est a. Sed mauris egestas purus nec felis. Nunc at vitae ut nunc mauris. Est ullamcorper felis sagittis id. Lorem ipsum dolor sit amet consectetur. Rutrum orci ipsum ultrices est a. Sed mauris egestas purus nec felis. Nunc at vitae ut nunc mauris. Est ullamcorper felis sagittis id. Lorem ipsum dolor sit amet consectetur. Rutrum orci ipsum ultrices est a. Sed
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-[#E0F7F6] p-4 rounded-2xl rounded-tr-none max-w-lg text-sm leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Rutrum orci ipsum ultrices est a. Sed mauris egestas purus nec felis. Nunc at vitae ut nunc mauris. Est ullamcorper felis sagittis id. Lorem ipsum dolor sit amet consectetur. Rutrum orci ipsum ultrices est a. Sed mauris egestas purus nec felis. Nunc at vitae ut nunc mauris. Est ullamcorper felis
                </div>
              </div>

              {/* Bot Message Short */}
              <div className="flex justify-start">
                <div className="bg-[#F4F7F9] p-4 rounded-2xl rounded-tl-none max-w-lg text-sm leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur. Rutrum orci ipsum ultrices est a. Sed mauris egestas purus nec felis.
                </div>
              </div>
            </div>

            {/* Input Field */}
            <div className="p-6">
              <div className="relative flex items-center bg-[#F4F7F9] rounded-xl px-4 py-2 border border-transparent focus-within:border-[#005F59]">
                <input 
                  type="text" 
                  placeholder="Type here...." 
                  className="flex-1 bg-transparent border-none py-3 focus:ring-0 text-sm text-gray-700"
                />
                <button className="text-[#005F59] p-2 hover:bg-white rounded-lg transition-all">
                  <Send size={20} className="rotate-45" />
                </button>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default AskTravactiv;