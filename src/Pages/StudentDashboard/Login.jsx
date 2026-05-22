import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../../assets/TravactiveLogo.png";
import RightImage from "../../assets/LoginImg.jpg";
import GoogleIcon from "../../assets/google.png";
import successIcon from "../../assets/success.png";

// ✅ Import the branded loader
import Loader from "../../Components/Loader.jsx"; 

const inputWrapperClass = `
  w-full max-w-[478px]
  h-[42px]
  flex items-center
  gap-[10px]
  bg-[#FFFFFF]
  rounded-[24px]
  px-[23px]
  py-[13px]
  shadow-[0_2px_12px_0.5px_#031A0914]
`;

const inputFieldClass = `
  flex-1
  bg-transparent
  outline-none
  font-[Inter]
  text-[14px]
  text-[#0E0E0E]
  placeholder:text-[#9CA3AF]
`;

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return;
    }

    // Show the loader
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Login successful!");
      setLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  const handlePasswordReset = () => {
    if (!resetEmail) {
      toast.error("Enter your email.");
      return;
    }
    setShowResetModal(false);
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      {/* Main Container */}
      <div className="relative w-full max-w-[1488px] min-h-[600px] lg:min-h-[900px] rounded-[20px] bg-[#F6F6F6] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-10 gap-10">

        {/* Logo */}
        <Link
          to="/"
          className="absolute top-4 sm:top-6 md:top-[-100px] lg:top-8 left-4 sm:left-8 md:left-10 lg:left-10 z-10"
        >
          <img src={Logo} alt="Travactive" className="w-24 sm:w-28 md:w-32" />
        </Link>

        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 items-center w-full lg:w-auto mt-16 lg:mt-0">
          <h2 className="w-full max-w-[478px] text-xl sm:text-2xl text-center font-semibold text-[#212322]">
            Welcome Back, Ready to Continue?
          </h2>
          <p className="w-full max-w-[478px] text-sm sm:text-base text-gray-600">
            Stay connected to verified travel alerts, global advisories, and updates.
          </p>

          {/* Google Button */}
          <button
            onClick={() => window.open("https://accounts.google.com/signin")}
            className="w-full max-w-[478px] h-[44px] flex items-center justify-center gap-3 bg-white rounded-[24px] shadow hover:bg-gray-50"
          >
            <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="w-full max-w-[478px] flex items-center gap-3">
            <hr className="flex-1" />
            <span className="text-gray-500 font-bold">or</span>
            <hr className="flex-1" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-[478px] flex flex-col gap-4">

            {/* Email */}
            <div>
              <label className="font-semibold">Email Address</label>
              <div className={inputWrapperClass}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={inputFieldClass}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="font-semibold">Password</label>
              <div className={inputWrapperClass}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className={inputFieldClass}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex justify-between text-sm">
              <label className="flex gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <button onClick={() => setShowResetModal(true)} type="button" className="text-[#FF4C29]">
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              disabled={loading}
              className="mt-3 w-full py-3 bg-[#023436] text-white rounded-full flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Login"
              )}
            </button>

            <p className="text-center text-sm">
              New here?{" "}
              <Link to="/register" className="text-[#023436]">
                Create an account
              </Link>
            </p>
          </form>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex flex-1 w-full justify-center">
          <img
            src={RightImage}
            alt="Login"
            className="w-full max-w-[600px] lg:max-w-[730px] h-[300px] sm:h-[400px] lg:h-[918px] object-cover rounded-[18px]"
          />
        </div>
      </div>

      {/* Reset Modal */}
      {showResetModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] max-w-[500px] p-6 rounded-xl text-center">
            <p>Enter your email</p>
            <input
              className="w-full mt-4 p-3 border rounded"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <button onClick={handlePasswordReset} className="mt-4 bg-[#023436] text-white px-6 py-2 rounded-full">
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] max-w-[400px] p-6 rounded-xl text-center">
            <img src={successIcon} alt="" className="w-20 mx-auto mb-4" />
            <h2>Password Changed</h2>
            <button onClick={() => navigate("/dashboard")} className="mt-4 bg-[#023436] text-white px-6 py-2 rounded-full">
              Login
            </button>
          </div>
        </div>
      )}

      {/* Loader */}
      {loading && <Loader />}

      <ToastContainer />
    </div>
  );
};

export default Login;
