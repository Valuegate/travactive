import { useState } from "react";
import ProfilePic from "../../assets/ProfilePic.png";
import Toggle from "../../Components/Toggle";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("edit");

  return (
    <div className="w-full p-4 md:p-6 pt-16 md:pt-6">
      {/* TOP NAV */}
      <div className="flex items-center justify-between">
        <h2
          className={`cursor-pointer pb-2 ${
            activeTab === "edit"
              ? "border-b-2 border-[#023436]"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("edit")}
        >
          Edit Profile
        </h2>

        <h2
          className={`cursor-pointer pb-2 ${
            activeTab === "cancel"
              ? "border-b-2 border-[#023436]"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("cancel")}
        >
          Cancel
        </h2>
      </div>

      <hr className="my-4 border-[#DADADA]" />

      {/* PROFILE IMAGE */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />

          <div>
            <p className="text-sm font-medium">Profile picture</p>
            <p className="text-xs text-gray-500">PNG, JPEG under 15MB</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="border border-[#005A58] text-[#005A58] px-4 py-2 rounded-xl shadow-sm">
            Upload
          </button>

          <button className="border border-red-500 text-red-500 px-4 py-2 rounded-xl shadow-sm">
            Delete
          </button>
        </div>
      </div>

      <hr className="my-6 border-[#DADADA]" />

      {/* BASIC INFO */}
      <h3 className="text-[#005A58] text-sm font-semibold mb-4 uppercase tracking-wide">
        Basic Information
      </h3>

      {/* NAME + PASSWORD */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-md p-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-md p-2"
        />
      </div>

      <hr className="my-6 border-[#DADADA]" />

      {/* EMAIL + CONFIRM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-md p-2"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border rounded-md p-2"
        />
      </div>

      <hr className="my-6 border-[#DADADA]" />

      {/* CITY + COUNTRY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="City"
          className="w-full border rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Country"
          className="w-full border rounded-md p-2"
        />
      </div>

      <hr className="my-6 border-[#DADADA]" />

      {/* NOTIFICATIONS */}
      <h3 className="text-[#005A58] text-sm font-semibold mb-4 uppercase tracking-wide">
        Notification Settings
      </h3>

      {/* PUSH */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* LEFT */}
        <div className="w-full lg:w-1/3">
          <h4 className="font-medium">Push Notification</h4>
          <p className="text-sm text-gray-500">
            Receive updates on your device
          </p>
        </div>

        {/* CENTER */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          {["Scholarship", "Other Information"].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <Toggle />
              <div>
                <p className="font-medium text-sm">{item}</p>
                <p className="text-xs text-gray-500 max-w-xs">
                  Information about scholarships, deadlines and eligibility
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:items-end">
          <select className="w-full sm:w-[160px] border rounded-xl px-3 py-2">
            <option>Suggested</option>
            <option>All</option>
            <option>None</option>
          </select>

          <select className="w-full sm:w-[160px] border rounded-xl px-3 py-2">
            <option>Suggested</option>
            <option>All</option>
            <option>None</option>
          </select>
        </div>
      </div>

      {/* EMAIL */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT */}
        <div className="w-full lg:w-1/3">
          <h4 className="font-medium">Email Notifications</h4>
          <p className="text-sm text-gray-500">Receive updates via email</p>
        </div>

        {/* CENTER */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          {["News and Update", "In-App Notification"].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <Toggle />
              <div>
                <p className="font-medium text-sm">{item}</p>
                <p className="text-xs text-gray-500 max-w-xs">
                  Information about scholarships, deadlines and eligibility
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:items-end">
          <select className="w-full sm:w-[160px] border rounded-xl px-3 py-2">
            <option>Suggested</option>
            <option>All</option>
            <option>None</option>
          </select>

          <select className="w-full sm:w-[160px] border rounded-xl px-3 py-2">
            <option>Suggested</option>
            <option>All</option>
            <option>None</option>
          </select>
        </div>
      </div>

      <hr className="my-6 border-[#DADADA]" />

      {/* SAVE BUTTON */}
      <div className="flex justify-center mt-6">
        <button className="w-[249px] h-[44px] rounded-full bg-[#005A58] text-white font-semibold text-sm shadow-md hover:opacity-90 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
