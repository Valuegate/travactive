import React, { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleIcon from "../assets/GoogleIcon.png";
import { Link } from "react-router-dom";
import SignUpImage from "../assets/SignUpImage.png";
import TravactiveLogo from "../assets/TravactiveLogo.png";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT – FORM SECTION */}
        <div className="px-10 py-12 flex flex-col justify-center">

          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <img
              src={TravactiveLogo}
              alt="Travactive Logo"
              className="w-40 h-auto object-contain"
            />
          </div>

          <h1 className="text-3xl font-semibold mb-3">
            Your First Step to Smarter Travel
          </h1>

          <p className="text-gray-500 mb-8 leading-relaxed">
            Sign up to access AI-powered updates, trusted insights, and tools
            designed to make every journey easier.
          </p>

          {/* Google Sign-In Button */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-full py-3 mb-8 bg-white shadow-sm hover:bg-gray-50 transition">
            <img
              src={GoogleIcon}
              alt="Google Icon"
              className="w-5 h-5 object-contain"
            />
            <span className="font-medium text-gray-700">Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-8">
            <hr className="flex-1 border-gray-300" />
            <span className="text-sm text-gray-400">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* FORM FIELDS */}
          <form className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="text-sm text-gray-700">Full Name:</label>
              <input
                type="text"
                defaultValue="Enter your full name"
                className="w-full mt-1 px-4 py-3 rounded-full bg-gray-100 text-gray-600 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-700">Email Address:</label>
              <input
                type="email"
                defaultValue="Enter your email address"
                className="w-full mt-1 px-4 py-3 rounded-full bg-gray-100 text-gray-600 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-700">Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  defaultValue="password123"
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

            {/* Confirm Password */}
            <div>
              <label className="text-sm text-gray-700">Confirm Password:</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  defaultValue="password123"
                  className="w-full mt-1 px-4 py-3 rounded-full bg-gray-100 focus:outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-emerald-700" />
              <span className="text-gray-600">I agree to the Terms and conditions</span>
            </div>

            {/* Submit */}
            <button className="w-full bg-emerald-900 hover:bg-emerald-950 text-white rounded-full py-3 font-medium transition">
              Register Now
            </button>
          </form>

          {/* Switch to Login */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Been here before?{" "}
            <Link to="/login" className="font-semibold text-emerald-700 hover:underline">
              Log In
            </Link>
          </p>
        </div>

        {/* RIGHT – IMAGE SECTION */}
        <div className="hidden lg:block relative">
          <img
            src={SignUpImage}
            alt="Travel"
            className="w-full h-full object-cover p-5 rounded-3xl"
          />
        </div>

      </div>
    </div>
  );
};

export default SignUpPage;
