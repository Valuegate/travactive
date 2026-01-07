import React, { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Eye, EyeOff, Compass } from "lucide-react";
import WelcomeBackIMG from "../assets/WelcomeBack.png";
import TravactiveLogo from "../assets/TravactiveLogo.png";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F5F5F5] font-sans overflow-hidden">

      {/* LEFT SECTION */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-10 sm:px-20 lg:px-32">

         {/* Logo */}
                 <div className="flex items-center gap-2 mb-8">
                   <img 
                     src={TravactiveLogo} 
                     alt="Travactive Logo" 
                     className="w-25 h-8 object-contain"
                   />
                 </div>

        {/* Header text */}
        <h1 className="text-[28px] font-bold text-gray-900 leading-tight mb-3">
          Welcome Back, Ready to Continue?
        </h1>

        <p className="text-gray-500 text-[14px] max-w-md leading-relaxed mb-8">
          Stay connected to verified travel alerts, global advisories, and
          essential updates that keep your journey safe and stress-free
        </p>

        {/* GOOGLE BUTTON */}
        <button className="flex items-center justify-center w-full py-3.5 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition mb-4">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/smartlock/google.svg"
            alt="google"
            className="w-5 h-5 mr-3"
          />
          <span className="text-gray-700 font-semibold text-sm">
            Continue with Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-sm text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* FORM */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block mb-2 ml-1 text-[13px] font-bold text-gray-800">
              Email Address:
            </label>
            <input
              type="email"
              defaultValue="samuelsamule@gmail.com"
              className="w-full px-6 py-4 text-sm text-gray-500 rounded-[20px] bg-white border border-gray-200 focus:outline-none shadow-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 ml-1 text-[13px] font-bold text-gray-800">
              Password:
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                defaultValue="password123"
                className="w-full px-6 py-4 text-sm text-gray-500 rounded-[20px] bg-white border border-gray-200 focus:outline-none shadow-sm"
              />

              {/* Eye toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Forget password */}
            <div className="flex justify-end mt-2">
              <button
                type="button"
                className="text-[11px] font-bold text-red-600 hover:underline"
              >
                Forget Password
              </button>
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full py-4 bg-[#002D2D] text-white font-bold text-base rounded-full shadow-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-[12px] text-gray-600 mt-8">
          Been here before?{" "}
          <button className="font-bold underline underline-offset-2 text-[#002D2D]">
            Log In
          </button>
        </p>
      </div>

      {/* RIGHT IMAGE SECTION */}
<div className="hidden lg:block w-[45%] p-6">
  <div
    className="h-full w-full rounded-[40px] bg-cover bg-center shadow-xl"
    style={{
      backgroundImage: `url(${WelcomeBackIMG})`,
    }}
  ></div>
</div>

    </div>
  );
};

export default LoginPage;
