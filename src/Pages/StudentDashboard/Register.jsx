import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../../assets/TravactiveLogo.png";
import RightImage from "../../assets/plane.jpg";
import GoogleIcon from "../../assets/google.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inputWrapperClass = `
  w-[478px]
  h-[42px]
  flex items-center
  gap-[10px]
  bg-[#FFFFFF]
  rounded-[24px]
  px-[23px]
  py-[13px]
  opacity-100
  shadow-[0_2px_12px_0.5px_#031A0914]
`;

const inputFieldClass = `
  flex-1
  bg-transparent
  outline-none
  font-[Inter]
  font-normal
  text-[14px]
  leading-[16px]
  text-[#0E0E0E]
  placeholder:text-[#9CA3AF]
`;

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showDialog, setShowDialog] = useState(false);


  const handleSubmit = (e) => {
  e.preventDefault();

  if (!fullName || !email || !password || !confirmPassword) {
    toast.error("Please fill all the fields before registering.", { autoClose: 3000 });
    return;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match.", { autoClose: 3000 });
    return;
  }

  // Open dialog box instead of immediate success
  setShowDialog(true);
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <div className="relative w-[1488px]   h-[958px] rounded-[20px] bg-[#F6F6F6] overflow-hidden flex flex-col lg:flex-row items-center justify-between px-12 lg:px-20 py-12 gap-12">
        
        {/* Left side */}
        <div className="flex-1 flex flex-col ml-9.5 gap-6">
          <Link to="/" className="absolute top-8 left-27 z-10">
            <img src={Logo} alt="Travactive Logo" className="w-32 h-auto cursor-pointer" />
          </Link>

          <h2 className="w-[478px] font-[Outfit] font-semibold text-[24px] leading-[36px] text-[#212322] ml-8">
            Your First Step to Smarter Travel
          </h2>

          <p className="w-[478px] font-[Inter] text-[16px] text-[rgba(51,51,51,0.72)] ml-8">
            Sign up to access AI-powered updates, trusted insights, and tools designed to make every journey easier
          </p>

          <button
  onClick={() => window.open("https://accounts.google.com/signin")}
className="w-[478px] h-[44px] flex items-center justify-center gap-[10px] px-[108px] py-[10px] bg-white rounded-[24px] shadow-[0_4px_12px_0_#0000001A] font-[Inter] font-medium text-[#212322] hover:bg-gray-50 transition ml-8"
>
  <img src={GoogleIcon} alt="Google" className="w-[20px] h-[20px]" />
  Continue with Google
</button>

          <div className="w-[446px] h-[24px] flex items-center gap-[14px] opacity-100 ml-9">
            <hr className="flex-1 border-gray-300" />
            <span className="w-[16px] h-[24px] font-['Public_Sans'] font-bold text-[16px] leading-[24px] text-gray-500 opacity-100 text-center flex items-center justify-center">
              or
            </span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <form onSubmit={handleSubmit} className="w-[478px] h-[476.15px] flex flex-col gap-[18px] ml-8">
            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] font-semibold text-[16px] leading-[16px] text-[#0E0E0E]">Full Name</label>
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

            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] font-semibold text-[16px] leading-[16px] text-[#0E0E0E]">Email Address</label>
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

            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] font-semibold text-[16px] leading-[16px] text-[#0E0E0E]">Password</label>
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

            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] font-semibold text-[16px] leading-[16px] text-[#0E0E0E]">Confirm Password</label>
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

            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 text-[#023436] bg-danger" required />
              <span className="font-[Inter] text-[9.42px] leading-[140%] tracking-[0%]">
                I agree to the{" "}
                <Link to="/terms" className="font-[Inter] font-bold text-[9.42px] leading-[140%] tracking-[0%]">
                  Terms & Conditions
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className="mt-4 w-full py-3 bg-[#023436] text-white rounded-[30px] font-semibold hover:bg-[#029e95] transition"
            >
             
              Register Now
              
            </button>

            <p className="text-center text-sm text-gray-600 mt-2">
              Been here before?{" "}
              <Link to="/login" className="text-[#023436] font-medium hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>

        <div className="flex-1 flex justify-center items-center mr-[-46px]">
          <img src={RightImage} alt="Register Illustration" className="w-[730px] h-[918px] rounded-[18px] object-cover" />
        </div>
      </div>

      {showDialog && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white w-[420px] rounded-[20px] p-6 shadow-xl text-center animate-fadeIn">
      
      <h3 className="font-[Outfit] text-[20px] font-semibold text-[#212322] mb-2">
        Registration Successful 
      </h3>

      <p className="font-[Inter] text-[14px] text-gray-600 mb-6">
        Your account has been created successfully. You can now log in and start exploring.
      </p>

      <button
        onClick={() => {
          setShowDialog(false);
          toast.success("Welcome to Travactive!", { autoClose: 3000 });

          // Optional: clear form
          setFullName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }}
        className="w-full py-3 bg-[#023436] text-white rounded-[30px] font-semibold hover:bg-[#029e95] transition"
      >
        Continue
      </button>
    </div>
  </div>
)}


      {/* Toast Container */}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Register;
