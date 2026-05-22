import React, { useState } from "react";
import ImgHeader from "../../assets/RoomAskTrav.png";
import ImgChat from "../../assets/RoomTrav2.png";
import { Search, Send, ChevronDown } from "lucide-react";

const AskTravactiv = () => {
  const chatHistory = [
    {
      id: 1,
      title: "UK Scholarship 2025",
      subtitle: "Royal Society Fellowship",
      desc: "Fully funded opportunity for researchers...",
      img: ImgChat,
      date: "27/07/2027",
      status: "Just now",
      active: true,
    },
    {
      id: 2,
      title: "Post-Study Residency",
      desc: "Explore visa options after studies...",
      date: "26/07/2027",
      status: "Yesterday",
    },
  ];

  // 💬 Chat state
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const msg = input.toLowerCase();

    let botReply =
      "Sorry, I don't understand that yet. You can ask me about Travactive, visas, scholarships or say hi 👋";

    // 👋 greetings
    if (msg.includes("hello") || msg.includes("hi")) {
      botReply =
        "Hello 👋 Welcome to Travactive Chat! How can I assist you today?";
    }

    // 🆘 help
    else if (msg.includes("help")) {
      botReply =
        "Sure 👍 I can help you with scholarships, visas, and information about Travactive.";
    }

    // 🎓 scholarship
    else if (msg.includes("scholarship")) {
      botReply =
        "We post latest scholarship opportunities like UK, Canada, and more in your chat list 👈";
    }

    // 🛂 visa
    else if (msg.includes("visa")) {
      botReply =
        "Travactive provides guidance on student visas, post-study work visas, and residency options.";
    }

    // 🏢 about travactive
    else if (
      msg.includes("what is travactive") ||
      msg.includes("about travactive")
    ) {
      botReply =
        "Travactive is a platform that helps students and professionals explore scholarships, travel opportunities, and visa guidance worldwide 🌍";
    }

    // 👤 user name detection
    else if (msg.includes("my name is")) {
      const nameMatch = input.match(/my name is (.*)/i);
      if (nameMatch && nameMatch[1]) {
        botReply = `Nice to meet you ${nameMatch[1].trim()} 👋 Welcome to Travactive!`;
      } else {
        botReply = "Nice to meet you 👋 Welcome to Travactive!";
      }
    }

    // ❓ ask name of bot
    else if (msg.includes("your name")) {
      botReply =
        "I am Travactive Assistant 🤖 here to guide you with travel and scholarship info.";
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      { from: "bot", text: botReply },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F4F7F9] gap-4 p-4 pt-16 md:pt-4 overflow-y-auto lg:overflow-hidden">
      {/* 🔹 LEFT SIDEBAR */}
      <div className="w-full lg:w-[320px] bg-white rounded-xl shadow flex flex-col">
        <div className="p-4 space-y-4 border-b">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search Chat..."
              className="w-full border rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center text-sm font-semibold">
            <span>Chat List</span>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="flex-1 lg:overflow-y-auto p-4 space-y-3">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className={`p-3 rounded-lg border cursor-pointer ${chat.active ? "bg-purple-50 border-purple-200" : "hover:bg-gray-50"}`}
            >
              <h4 className="text-sm font-semibold text-[#5C3EA2]">
                {chat.title}
              </h4>
              {chat.subtitle && (
                <p className="text-xs font-semibold text-gray-600">
                  {chat.subtitle}
                </p>
              )}
              <p className="text-xs text-gray-500 line-clamp-2">{chat.desc}</p>
              {chat.img && (
                <img
                  src={chat.img}
                  alt=""
                  className="w-full h-32 object-cover rounded mt-2"
                />
              )}
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>{chat.date}</span>
                <span>{chat.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <button className="w-full bg-[#005A58] text-white py-2 rounded-full text-sm hover:bg-teal-800">
            New Chat
          </button>
        </div>
      </div>

      {/* 🔹 RIGHT CHAT AREA */}
      <div className="flex-1 bg-white rounded-xl shadow flex flex-col">
        <div className="relative h-40 sm:h-52">
          <img src={ImgHeader} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/60"></div>
          <h2 className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-semibold">
            Royal Society Fellowship 2025
          </h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl max-w-md text-sm ${msg.from === "user" ? "ml-auto bg-[#E0F7F6]" : "bg-gray-100"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t sticky bottom-0 bg-white">
          <div className="flex items-center bg-gray-100 rounded-lg px-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type here..."
              className="flex-1 bg-transparent py-2 text-sm outline-none"
            />
            <button onClick={handleSend} className="p-2 text-[#005F59]">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskTravactiv;
