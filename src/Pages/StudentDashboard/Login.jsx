import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../../assets/TravactiveLogo.png";
import RightImage from "../../assets/LoginImg.jpg";
import GoogleIcon from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import successIcon from "../../assets/success.png";

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

const Login = () => {
  const navigate = useNavigate(); // ✅ added

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Reset password states
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  // Change password flow
const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
const [showSuccessModal, setShowSuccessModal] = useState(false);

const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter your email and password.", {
        autoClose: 3000,
      });
      return;
    }

    // ✅ Save login state (temporary auth)
    localStorage.setItem("isAuthenticated", "true");

    toast.success("Login successful. Welcome back!", {
      autoClose: 2000,
    });

    // ✅ Navigate to dashboard
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  const handlePasswordReset = () => {
  if (!resetEmail) {
    toast.error("Please enter your registered email address.", {
      autoClose: 3000,
    });
    return;
  }

  setShowResetModal(false);
  setShowChangePasswordModal(true);
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <div className="relative  w-[1488px] h-[958px] rounded-[20px] bg-[#F6F6F6] overflow-hidden flex flex-col lg:flex-row items-center justify-between px-12 lg:px-20 py-12 gap-12">
        {/* Left Side */}
        <div className="flex-1 flex flex-col ml-9.5 gap-6">
          <Link to="/" className="absolute top-8 left-27 z-10">
            <img
              src={Logo}
              alt="Travactive Logo"
              className="w-32 h-auto cursor-pointer"
            />
          </Link>

          <h2 className="w-[478px] font-[Outfit] font-semibold text-[24px] leading-[36px] text-[#212322] ml-8">
            Welcome Back, Ready to Continue?
          </h2>

          <p className="w-[478px] font-[Inter] text-[16px] text-[rgba(51,51,51,0.72)] ml-8">
            Stay connected to verified travel alerts, global advisories, and
            essential updates that keep your journey safe and stress-free
          </p>

          <button
            onClick={() => window.open("https://accounts.google.com/signin")}
            className="w-[478px] h-[44px] flex items-center justify-center gap-[10px] px-[108px] py-[10px] bg-white rounded-[24px] shadow-[0_4px_12px_0_#0000001A] font-[Inter] font-medium text-[#212322] hover:bg-gray-50 transition ml-8"
          >
            <img src={GoogleIcon} alt="Google" className="w-[20px] h-[20px]" />
            Continue with Google
          </button>

          <div className="w-[446px] h-[24px] flex items-center gap-[14px] ml-9">
            <hr className="flex-1 border-gray-300" />
            <span className="font-bold text-gray-500">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-[478px] flex flex-col gap-[18px] ml-8"
          >
            {/* Email */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] font-semibold text-[16px]">
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
            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] font-semibold text-[16px]">
                Password
              </label>
              <div className={inputWrapperClass}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={inputFieldClass}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                Remember me
              </label>

              <button
                type="button"
                onClick={() => setShowResetModal(true)}
                className="text-[#FF4C29] font-medium"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="mt-4 w-full py-3 bg-[#023436] text-white rounded-[30px] font-semibold hover:bg-[#029e95] transition"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600 mt-2">
              New here?{" "}
              <Link to="/register" className="text-[#023436] font-medium">
                Create an account
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center mr-[-46px]">
          <img
            src={RightImage}
            alt="Login Illustration"
            className="w-[730px] h-[918px] rounded-[18px] object-cover"
          />
        </div>
      </div>

            {/* RESET PASSWORD MODAL */}
{showResetModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white w-[649px] h-[474px] rounded-[12px] p-[85px] shadow-xl flex flex-col gap-[10px]">
      
      <p className="w-[381px] mb-4 font-[Inter] font-medium text-[18px] leading-[27px] text-center text-gray-600 mx-auto">
        Enter your registered email address to receive password reset link
      </p>

      {/* Email Label */}
      <label
        htmlFor="resetEmail"
        className="w-[478px] mx-auto mb-1 text-left font-[Inter] font-bold text-[18px] leading-[27px] text-[#000000]"
      >
        Email address
      </label>

      <input
        id="resetEmail"
        type="email"
        placeholder="Enter your email address"
        className="w-[478px] h-[42px] px-[23px] py-[13px] rounded-[24px] bg-white shadow outline-none mx-auto"
        value={resetEmail}
        onChange={(e) => setResetEmail(e.target.value)}
      />

      <button
        onClick={handlePasswordReset}
       className="
    w-[479px]
    h-[42px]
    flex
    items-center
    justify-center
    gap-[8px]
    rounded-[30px]
    px-[20px]
    py-[9px]
    opacity-100
    font-semibold
    font-[Sora]
    text-white
    mt-6
  "
  style={{ background: "var(--Trava-PRY, #023436)" }}
      >
        Continue
      </button>

      <button
        onClick={() => setShowResetModal(false)}
        className="mt-6 text-center text-red-600 font-bold hover:underline"
      >
        Cancel
      </button>
    </div>
  </div>
)}

      {/* CHANGE PASSWORD MODAL */}
{showChangePasswordModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div
  className="
    bg-white
    w-[649px]
    h-[536px]
    rounded-[12px]
    p-[85px]
    flex
    flex-col
    gap-[10px]
    opacity-100
    shadow-xl
  "
>


      <h2 className="w-[381px] mb-4 font-[Inter] font-medium text-[18px] leading-[27px] text-center text-gray-600 mx-auto">
        We have received your password reset request. Enter your new password below
      </h2>

      <label
  className="
    w-[479px]
    h-[19px]
    font-[Inter]
    font-semibold
    mb-[3px]
    text-[16px]
    leading-[16px]
    tracking-[0]
    opacity-100
  "
  
>
  Password
</label>

      <input
        type="password"
         className="
    w-[479px]
    h-[42px]
    px-[23px]
    py-[13px]
    rounded-[24px]
    flex
    gap-[10px]
    opacity-100
    shadow
    mb-[18px]
    outline-none
    mx-auto
  "
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <label  className="
    w-[479px]
    h-[19px]
    mb-[3px]
    font-[Inter]
    font-semibold
    text-[16px]
    leading-[16px]
    tracking-[0]
    opacity-100
  ">
        Confirm Password
      </label>
      <input
  type="password"
  className="
    w-[479px]
    h-[42px]
    px-[23px]
    py-[13px]
    rounded-[24px]
    flex
    gap-[10px]
    opacity-100
    shadow
    outline-none
    mx-auto
  "
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
/>


      <button
  onClick={() => {
    if (!newPassword || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setShowChangePasswordModal(false);
    setShowSuccessModal(true);
  }}
  className="
    w-[479px]
    h-[42px]
    flex
    items-center
    justify-center
    gap-[8px]
    rounded-[30px]
    px-[20px]
    py-[9px]
    opacity-100
    font-semibold
    font-[Sora]
    text-white
    mt-6
  "
  style={{ background: "var(--Trava-PRY, #023436)" }}
>
  Change Password
</button>

    </div>
  </div>
)}

{/* SUCCESS MODAL */}
{showSuccessModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div
      className="
        bg-white
        w-[649px]
        h-[444px]
        rounded-[12px]
        p-[85px]
        flex
        flex-col
        items-center
        gap-[10px]
        opacity-100
        shadow-xl
      "
    >
      {/* SUCCESS ICON */}
     <img
  src={successIcon}
  alt="Success"
  className="w-[96px] h-[96px] mb-4 opacity-100"
/>


      <h2 className="font-[Inter] font-bold text-[24px]">
        Password Changed
      </h2>

      <p className="font-[Inter] text-[16px] text-center">
        Your Password has been changed successfully
      </p>

      <button
        onClick={() => {
          setShowSuccessModal(false);
          navigate("/dashboard");

        }}
        className="
          w-[479px]
          h-[42px]
          flex
          items-center
          justify-center
          gap-[8px]
          rounded-[30px]
          px-[20px]
          py-[9px]
          opacity-100
          font-semibold
          font-[Sora]
          text-white
          mt-6
        "
        style={{ background: "var(--Trava-PRY, #023436)" }}
      >
          Login
      </button>
    </div>
  </div>
)}





      <ToastContainer position="top-right" />
    </div>
  );
};

export default Login;
