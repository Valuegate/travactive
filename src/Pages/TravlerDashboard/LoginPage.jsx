import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../../assets/TravactiveLogo.png";
import RightImage from "../../assets/LoginImg.jpg";
import GoogleIcon from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  text-[14px]
  text-[#0E0E0E]
  placeholder:text-[#9CA3AF]
`;

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ FIXED STATES
  const [showResetModal, setShowResetModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Login successful. Welcome back!");
      navigate("/traveler-dashboard");
    }, 1500);
  };

  // ✅ RESET HANDLER
  const handlePasswordReset = () => {
    if (!resetEmail) {
      toast.error("Please enter your email");
      return;
    }

    setShowResetModal(false);
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen relative bg-gray-100 pt-20 px-4">

      {/* LOGO */}
      <Link to="/" className="absolute top-4 left-4 z-50">
        <img src={Logo} alt="Logo" className="w-24 sm:w-28 h-auto object-contain" />
      </Link>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1400px] rounded-[20px] bg-[#F6F6F6] overflow-hidden flex flex-col lg:flex-row px-4 sm:px-6 lg:px-20 py-10 sm:py-12 lg:py-16 gap-10 mx-auto">

        {/* LEFT SIDE */}
        <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start gap-6 mt-16 sm:mt-10 md:mt-0">
          
          <h2 className="w-full max-w-[478px] text-[#031A09] text-xl font-semibold text-center lg:text-left">
            Welcome Back, Ready to Continue?
          </h2>

          <p className="w-full max-w-[478px] text-sm text-gray-600 text-center lg:text-left">
            Stay connected to verified travel alerts, global advisories, and essential updates that keep your journey safe and stress-free
          </p>

          {/* GOOGLE LOGIN */}
          <button
            onClick={() => window.open("https://accounts.google.com/signin")}
            className="w-full max-w-[478px] h-[44px] flex items-center justify-center gap-2 bg-white rounded-full shadow hover:bg-gray-50"
          >
            <img src={GoogleIcon} alt="Google" className="w-5" />
            Continue with Google
          </button>

          {/* DIVIDER */}
          <div className="w-full max-w-[478px] flex items-center gap-3">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-500 font-bold">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="w-full max-w-[478px] flex flex-col gap-4">

            {/* EMAIL */}
            <div>
              <label className="font-semibold text-sm">Email Address</label>
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

            {/* PASSWORD */}
            <div>
              <label className="font-semibold text-sm">Password</label>
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

            {/* OPTIONS */}
            <div className="flex justify-between text-sm">
              <label className="flex gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              {/* ✅ FIXED */}
              <button
                type="button"
                onClick={() => setShowResetModal(true)}
                className="text-[#FF4C29]"
              >
                Forgot password?
              </button>
            </div>

            {/* BUTTON */}
            <button className="mt-3 w-full py-3 bg-[#023436] text-white rounded-full font-semibold hover:bg-[#029e95]">
              Login
            </button>

            <p className="text-center text-sm">
              New here?{" "}
              <Link to="/TravRegister" className="text-[#023436] font-medium">
                Create an account
              </Link>
            </p>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <img
            src={RightImage}
            alt="Login"
            className="w-full max-w-[600px] h-[500px] xl:h-[700px] rounded-[18px] object-cover"
          />
        </div>
      </div>

      {/* RESET MODAL */}
      {showResetModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] max-w-[500px] p-6 rounded-xl text-center">
            <p>Enter your email</p>
            <input
              className="w-full mt-4 p-3 border rounded"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <button
              onClick={handlePasswordReset}
              className="mt-4 bg-[#023436] text-white px-6 py-2 rounded-full"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] max-w-[400px] p-6 rounded-xl text-center">
            <h2 className="text-lg font-semibold">Password Reset Link Sent</h2>
            <button
              onClick={() => {
                setShowSuccessModal(false);
              }}
              className="mt-4 bg-[#023436] text-white px-6 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* LOADER */}
      {loading && <Loader text="Logging in..." />}

      <ToastContainer />
    </div>
  );
};

export default LoginPage;
