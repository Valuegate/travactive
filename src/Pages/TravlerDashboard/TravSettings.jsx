import { useState } from "react";
import ProfilePic from "../../assets/ProfilePic.png";
import Toggle from "../../Components/Toggle";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("edit");

  return (
    <div className="w-full p-6">
      {/* TOP NAV (Edit Profile / Cancel) */}
      <div className="flex items-center justify-between">
        <h2
          className={`cursor-pointer pb-2 ${
            activeTab === "edit"
              ? "border-b-3 border-[#023436]"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("edit")}
        >
          Edit Profile
        </h2>

        <h2
          className={`cursor-pointer pb-2 ${
            activeTab === "cancel"
              ? "border-b-3 border-[#023436]"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("cancel")}
        >
          Cancel
        </h2>
      </div>

      <hr
        className="my-4 mt-[-1.8px] "
        style={{ border: "0.72px solid #DADADA" }}
      />

      {/* PROFILE IMAGE SECTION */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <span>
            <p
              className="text-gray-900"
              style={{
                width: "135px",
                height: "18px",
                opacity: 1,
                fontFamily: "Inter",
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Profile picture
            </p>

            <p
              className="text-gray-900"
              style={{
                width: "135px",
                height: "15px",
                opacity: 1,
                fontFamily: "Inter",
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              PNG, JPEG under 15MB
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="text-gray"
            style={{
              width: "193px",
              height: "40px",
              opacity: 1,
              borderRadius: "16px",
              border: "1px solid var(--Trava-ACC4, #005A58)",
              padding: "10px",
              boxShadow: "0px 6px 16px 0px #00000014",
            }}
          >
            Upload New Picture
          </button>

          <button
            className="px-4 py-2 border border-red-500 text-red-500 rounded-md"
            style={{
              width: "104px",
              height: "40px",
              opacity: 1,
              borderRadius: "16px",
              padding: "10px",
              boxShadow: "0px 6px 16px 0px #00000014",
            }}
          >
            Delete
          </button>
        </div>
      </div>

      <hr className="my-4  " style={{ border: "0.72px solid #DADADA" }} />

      {/* BASIC INFORMATION */}
      <h3 className="mb-4 font-bold text-[12px] leading-[100%] tracking-[-0.05px] w-[129px] h-[15px] font-inter opacity-100" style={{ color: "var(--Trava-ACC4, #005A58)" }}>
  Basic Information
</h3>


      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 mt-1"
            placeholder="Enter full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded-md p-2 mt-1"
            placeholder="Enter password"
          />
        </div>
      </div>

      <hr className="my-4  " style={{ border: "0.72px solid #DADADA" }} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            className="w-full border rounded-md p-2 mt-1"
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            className="w-full border rounded-md p-2 mt-1"
            placeholder="Confirm password"
          />
        </div>
      </div>

      <hr className="my-4  " style={{ border: "0.72px solid #DADADA" }} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">City</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 mt-1"
            placeholder="Enter city"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Country</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 mt-1"
            placeholder="Enter country"
          />
        </div>
      </div>

      <hr className="my-4  " style={{ border: "0.72px solid #DADADA" }} />

      {/* NOTIFICATION SETTINGS */}

      <h3 className="font-semibold text-lg mb-4">Notification Settings</h3>

      {/* PUSH NOTIFICATION ROW */}
      <div className="flex items-start w-full mb-4">
        {/* LEFT */}
        <div className="w-1/3">
          <h4 className="font-medium">Push Notification</h4>
          <p className="text-sm text-gray-500">
            Receive updates on your device
          </p>
        </div>

        {/* CENTER: Two Toggles */}
        <div className="w-1/3 flex flex-col gap-4 items-center">
          <div className="flex items-center gap-3">
            <Toggle />

            <span className="font-medium">
              <p
                className="
  w-[368px] h-[17px]
  font-inter font-medium text-[14px] leading-[100%] tracking-[0px]
  opacity-100
"
              >
                Scholarship
              </p>
              <p
                className="
  w-[368px] h-[15px]
  font-inter font-normal text-[12px] leading-[100%] tracking-[0px]
  whitespace-nowrap overflow-hidden text-ellipsis
  opacity-100
   text-[#333333B8]
"
              >
                Information about available scholarships, deadlines and
                eligibility
              </p>
            </span>
          </div>

          <div className="flex items-center gap-3 ">
            <Toggle className="mr-20" />

            <span className="font-medium">
              <p
                className="
  w-[368px] h-[17px]
  font-inter font-medium text-[14px] leading-[100%] tracking-[0px]
  opacity-100
"
              >
                Other Information
              </p>
              <p
                className="
  w-[368px] h-[15px]
  font-inter font-normal text-[12px] leading-[100%] tracking-[0px]
  whitespace-nowrap overflow-hidden text-ellipsis
  opacity-100
   text-[#333333B8]
"
              >
                Information about available scholarships, deadlines and
                eligibility
              </p>
            </span>
          </div>
        </div>

        {/* RIGHT: Two Dropdowns */}
        <div className="w-1/3 flex flex-col gap-4 items-end">
          <select
            className="
  w-[157px] h-[36px]
  rounded-[16px]
  px-[23px] py-[8px]
  border border-[#DADADA]
  font-inter font-medium text-[14px] leading-[100%] tracking-[0%]
  opacity-100
"
          >
            <option>Suggested</option>
            <option>All</option>
            <option>None</option>
          </select>

          <select
            className="
  w-[157px] h-[36px]
  rounded-[16px]
  px-[23px] py-[8px]
  border border-[#DADADA]
  font-inter font-medium text-[14px] leading-[100%] tracking-[0%]
  opacity-100
"
          >
            <option>Suggested</option>
            <option>All</option>
            <option>None</option>
          </select>
        </div>
      </div>

      {/* EMAIL NOTIFICATION ROW (Merged under same section) */}
      <div className="flex items-start w-full">
        {/* LEFT */}
        <div className="w-1/3">
          <h4 className="font-medium">Email Notifications</h4>
          <p className="text-sm text-gray-500">Receive updates via email</p>
        </div>

        {/* CENTER: Two Toggles */}
        <div className="w-1/3 flex flex-col gap-4 items-center">
          <div className="flex items-center gap-3">
            <Toggle />
            <span className="font-medium">
              <p
                className="
  w-[368px] h-[17px]
  font-inter font-medium text-[14px] leading-[100%] tracking-[0px]
  opacity-100
"
              >
                News and Update
              </p>
              <p
                className="
  w-[368px] h-[15px]
  font-inter font-normal text-[12px] leading-[100%] tracking-[0px]
  whitespace-nowrap overflow-hidden text-ellipsis
  opacity-100
   text-[#333333B8]
"
              >
                Information about available scholarships, deadlines and
                eligibility
              </p>
            </span>
          </div>

          <div className="flex items-center gap-3 ">
            <Toggle className="" />
            <span className="font-medium">
              <p
                className="
  w-[368px] h-[17px]
  font-inter font-medium text-[14px] leading-[100%] tracking-[0px]
  opacity-100
"
              >
                In-App Notification
              </p>

              <p
                className="
  w-[368px] h-[15px]
  font-inter font-normal text-[12px] leading-[100%] tracking-[0px]
  whitespace-nowrap overflow-hidden text-ellipsis
  opacity-100
   text-[#333333B8]
"
              >
                Information about available scholarships, deadlines and
                eligibility
              </p>
            </span>
          </div>
        </div>

        {/* RIGHT: Two Dropdowns */}
        <div className="w-1/3 flex flex-col gap-4 items-end">
          <select
            className="
  w-[157px] h-[36px]
  rounded-[16px]
  px-[23px] py-[8px]
  border border-[#DADADA]
  font-inter font-medium text-[14px] leading-[100%] tracking-[0%]
  opacity-100
"
          >
            <option>Suggested</option>
            <option>All</option>
            <option>None</option>
          </select>

          <select
            className="
  w-[157px] h-[36px]
  rounded-[16px]
  px-[23px] py-[8px]
  border border-[#DADADA]
  font-inter font-medium text-[14px] leading-[100%] tracking-[0%]
  opacity-100
"
          >
            <option>Suggested</option>
            <option>All</option>
            <option>None</option>
          </select>
        </div>
      </div>

      <hr className="my-4  " style={{ border: "0.72px solid #DADADA" }} />

      <button
        style={{
          width: "249px",
          height: "44px",
          position: "absolute",
          top: "923px",
          left: "750px",
          borderRadius: "100px",
          paddingTop: "13px",
          paddingRight: "12px",
          paddingBottom: "13px",
          paddingLeft: "12px",
          gap: "10px",
          background: "var(--Trava-ACC4, #005A58)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          opacity: 1,
          fontFamily: "Sora, sans-serif",
          fontWeight: 600,
          fontStyle: "normal", // SemiBold is usually handled via fontWeight
          fontSize: "14px",
          lineHeight: "100%",
          letterSpacing: "0.6%",
        }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
