import React, { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleIcon from "../../assets/google.png"; 

import { Link } from "react-router-dom"; // Import Link
import SignUpImage from "../../assets/plane.jpg";
import TravactiveLogo from "../../assets/TravactiveLogo.png";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT – FORM */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <img 
              src={TravactiveLogo} 
              alt="Travactive Logo" 
              className="w-25 h-8 object-contain"
            />
          </div>

          <h1 className="text-3xl font-semibold mb-2">
            Your First Step to Smarter Travel
          </h1>
          <p className="text-gray-500 mb-8">
            Sign up to access AI-powered updates, trusted insights, and tools
            designed to make every journey easier
          </p>

        {/* Google Button */}
<button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-full py-3 mb-6 hover:bg-gray-50 transition shadow-sm bg-white">
  <img 
    src={GoogleIcon} 
    alt="Google Logo" 
    className="w-5 h-5 object-contain"
  />
  <span className="font-medium text-gray-700">Continue with Google</span>
</button>


          <div className="flex items-center gap-3 mb-6">
            <hr className="flex-1" />
            <span className="text-sm text-gray-400">or</span>
            <hr className="flex-1" />
          </div>

          {/* FORM */}
          <form className="space-y-5">
            <div>
              <label className="text-sm text-gray-600">Full Name:</label>
              <input
                type="text"
                defaultValue="Samuel Sonola"
                className="w-full mt-1 px-4 py-3 rounded-full bg-gray-100 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email Address:</label>
              <input
                type="email"
                defaultValue="samuelsamule@gmail.com"
                className="w-full mt-1 px-4 py-3 rounded-full bg-gray-100 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full mt-1 px-4 py-3 rounded-full bg-gray-100 focus:outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Confirm Password:</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full mt-1 px-4 py-3 rounded-full bg-gray-100 focus:outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-emerald-600" />
              <span>I agree to the Terms and conditions</span>
            </div>

            <button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white rounded-full py-3 font-medium transition">
              Register Now
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Been here before?{" "}
            {/* Replace <a> with <Link> */}
            <Link to="/TravLogin" className="font-semibold text-emerald-700 hover:underline">
              Log In
            </Link>
          </p>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="hidden lg:block">
          <img
            src={SignUpImage}
            alt="Travel"
            className="w-full h-full object-cover p-4 rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;


