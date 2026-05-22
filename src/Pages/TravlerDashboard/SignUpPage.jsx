import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleIcon from "../../assets/google.png";
import { Link } from "react-router-dom";
import SignUpImage from "../../assets/plane.jpg";
import TravactiveLogo from "../../assets/TravactiveLogo.png";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

        {/* LEFT – FORM */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6 sm:p-8 lg:p-12">

          <div className="w-full max-w-md">

            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img
                src={TravactiveLogo}
                alt="Travactive Logo"
                className="w-28 h-auto object-contain"
              />
            </div>

            {/* Heading */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 text-center lg:text-left">
              Your First Step to Smarter Travel
            </h1>

            <p className="text-gray-500 mb-6 text-sm text-center lg:text-left">
              Sign up to access AI-powered updates, trusted insights, and tools
              designed to make every journey easier
            </p>

            {/* Google Button */}
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-full py-3 mb-6 hover:bg-gray-50 transition shadow-sm bg-white">
              <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
              <span className="font-medium text-gray-700">
                Continue with Google
              </span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <hr className="flex-1 border-gray-300" />
              <span className="text-sm text-gray-400">or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* FORM */}
            <form className="space-y-5">

              {/* NAME */}
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-3 rounded-full bg-gray-100 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-600">Email Address</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-3 rounded-full bg-gray-100 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm text-gray-600">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full mt-1 px-4 py-3 rounded-full bg-gray-100 focus:outline-none pr-10"
                    placeholder="Enter password"
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

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="text-sm text-gray-600">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full mt-1 px-4 py-3 rounded-full bg-gray-100 focus:outline-none pr-10"
                    placeholder="Confirm password"
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

              {/* TERMS */}
              <div className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-emerald-600" />
                <span>I agree to the Terms and conditions</span>
              </div>

              {/* BUTTON */}
              <button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white rounded-full py-3 font-medium transition">
                Register Now
              </button>
            </form>

            {/* LOGIN LINK */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Been here before?{" "}
              <Link
                to="/TravLogin"
                className="font-semibold text-emerald-700 hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT – IMAGE (HIDDEN ON SMALL + TABLET) */}
        <div className="hidden lg:flex lg:w-1/2">
          <img
            src={SignUpImage}
            alt="Travel"
            className="w-full h-full object-cover p-4 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
