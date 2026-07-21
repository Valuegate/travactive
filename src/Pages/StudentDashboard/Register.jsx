import React, { useState } from "react";
import Logo from "../../assets/TravactiveLogo.png";
import RightImage from "../../assets/plane.jpg";
import GoogleIcon from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputWrapperClass = `
  w-full sm:w-[478px]
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
  font-normal
  text-[14px]
  sm:text-[14px]
  leading-[16px]
  text-[#0E0E0E]
  placeholder:text-[#9CA3AF]
`;

const Register = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      toast.error("Please fill all the fields before registering.", {
        autoClose: 3000,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", { autoClose: 3000 });
      return;
    }

    setShowDialog(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative p-4">
      <div className="relative w-full max-w-[1488px] rounded-[20px] bg-[#F6F6F6] overflow-hidden flex flex-col lg:flex-row items-center justify-between px-4 sm:px-12 lg:px-20 py-8 lg:py-12 gap-6">
        
        {/* Logo at top-left */}
        <div className="absolute top-4 left-4 sm:top-8 md:top-1 sm:left-8 z-20">
          <Link to="/">
            <img
              src={Logo}
              alt="Travactive Logo"
              className="w-24 sm:w-32 h-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 items-center w-full lg:w-auto mt-16 lg:mt-0">
          
          <h2 className="font-[Outfit] font-semibold text-[20px] sm:text-[24px] text-center leading-[28px] sm:leading-[36px] text-[#212322]">
            Your First Step to Smarter Travel
          </h2>

          <p className="font-[Inter] leading-relaxed text-[14px] sm:text-[16px] text-[rgba(51,51,51,0.72)]">
            Sign up to access AI-powered updates, trusted insights,
            <br className="hidden sm:block" /> and tools designed to make every
            journey easier
          </p>

          <button
            onClick={() => window.open("https://accounts.google.com/signin")}
            className="w-full sm:w-[478px] h-[44px] flex items-center justify-center gap-[10px] px-4 sm:px-[108px] py-[10px] bg-white rounded-[24px] shadow-[0_4px_12px_0_#0000001A] font-[Inter] font-medium text-[#212322] hover:bg-gray-50 transition"
          >
            <img src={GoogleIcon} alt="Google" className="w-[20px] h-[20px]" />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="w-full sm:w-[446px] flex items-center gap-2 sm:gap-[14px] opacity-100">
            <hr className="flex-1 border-gray-300" />
            <span className="text-[12px] sm:text-[16px] font-bold text-gray-500 text-center flex items-center justify-center">
              or
            </span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-[478px] flex flex-col gap-4 sm:gap-[18px]"
          >
            
            {/* Full Name */}
            <div className="flex flex-col gap-2 sm:gap-[8px]">
              <label className="font-[Inter] font-semibold text-[14px] sm:text-[16px] text-[#0E0E0E]">
                Full Name
              </label>

              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className={inputFieldClass}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 sm:gap-[8px]">
              <label className="font-[Inter] font-semibold text-[14px] sm:text-[16px] text-[#0E0E0E]">
                Email Address
              </label>

              <div className={inputWrapperClass}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={inputFieldClass}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 sm:gap-[8px]">
              <label className="font-[Inter] font-semibold text-[14px] sm:text-[16px] text-[#0E0E0E]">
                Password
              </label>

              <div className={inputWrapperClass}>
                <input
                  type="password"
                  placeholder="Create a password"
                  className={inputFieldClass}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2 sm:gap-[8px]">
              <label className="font-[Inter] font-semibold text-[14px] sm:text-[16px] text-[#0E0E0E]">
                Confirm Password
              </label>

              <div className={inputWrapperClass}>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className={inputFieldClass}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#023436]"
                required
              />

              <span className="font-[Inter] text-[10px] sm:text-[9.42px] leading-[140%]">
                I agree to the{" "}
                <Link to="/terms" className="font-bold text-[#023436]">
                  Terms & Conditions
                </Link>
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full py-3 bg-[#023436] text-white rounded-[30px] font-semibold hover:bg-[#029e95] transition"
            >
              Register Now
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600 mt-2">
              Been here before?{" "}
              <Link
                to="/login"
                className="text-[#023436] font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:flex flex-1 justify-center items-center lg:mr-[-46px] mt-6 lg:mt-0">
          <img
            src={RightImage}
            alt="Register Illustration"
            className="w-full max-w-[730px] sm:w-[600px] lg:w-[730px] h-auto rounded-[18px] object-cover"
          />
        </div>
      </div>

      {/* Success Dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] max-w-[420px] rounded-[20px] p-6 shadow-xl text-center animate-fadeIn">
            
            <h3 className="font-[Outfit] text-[20px] font-semibold text-[#212322] mb-2">
              Registration Successful
            </h3>

            <p className="font-[Inter] text-[14px] text-gray-600 mb-6">
              Your account has been created successfully. You can now log in and
              start exploring.
            </p>

            <button
              onClick={() => {
                setShowDialog(false);

                toast.success("Welcome to Travactive!", {
                  autoClose: 2000,
                });

                setFullName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");

                setTimeout(() => {
                  navigate("/login");
                }, 2000);
              }}
              className="w-full py-3 bg-[#023436] text-white rounded-[30px] font-semibold hover:bg-[#029e95] transition"
            >
              Continue
            </button>

          </div>
        </div>
      )}

      {/* Toast */}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Register;