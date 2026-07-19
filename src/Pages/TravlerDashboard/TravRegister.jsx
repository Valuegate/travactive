import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../../assets/TravactiveLogo.png";
import RightImage from "../../assets/plane.jpg";
import GoogleIcon from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../services/register";

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

const TravRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "traveler",
    });
    const [showDialog, setShowDialog] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        toast.error("Please fill all the fields before registering.", {
          autoClose: 3000,
        });
        return;
      }
  
      console.log('password:', formData.password, 'confirmPassword:', formData.confirmPassword);
  
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }
      
       try {
          
          const data = await register(formData);
          console.log(data);
          toast.success("Registration successful!");
          setShowDialog(true);
        } catch (error) {
          toast.error(
            error.response?.data?.message || "Invalid email or password."
          );
          if(error){
            setShowDialog(false)
          } 
        } 
        
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="w-full max-w-[1400px] rounded-[20px] bg-[#F6F6F6] overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 gap-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start gap-6">

          {/* LOGO */}
          <Link to="/" className="absolute top-6 left-6 lg:left-12 z-10">
            <img
              src={Logo}
              alt="Logo"
              className="w-24 sm:w-28 h-auto object-contain"
            />
          </Link>

          {/* TEXT */}
          <h2 className="w-full max-w-[478px] text-xl font-semibold text-center lg:text-left">
            Your First Step to Smarter Travel
          </h2>

          <p className="w-full max-w-[478px] text-sm text-gray-600 text-center lg:text-left">
            Sign up to access AI-powered updates, trusted insights, and tools
            designed to make every journey easier
          </p>

          {/* GOOGLE */}
          <button
            type="button"
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
          <form className="w-full max-w-[478px] flex flex-col gap-4">

            <div>
              <label className="text-sm font-semibold">Full Name</label>

              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className={inputFieldClass}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Email Address</label>

              <div className={inputWrapperClass}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={inputFieldClass}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Password</label>

              <div className={inputWrapperClass}>
                <input
                  type="password"
                  placeholder="Create a password"
                  className={inputFieldClass}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">
                Confirm Password
              </label>

              <div className={inputWrapperClass}>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className={inputFieldClass}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                />
              </div>
            </div>

            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4" required />

              <span>
                I agree to the{" "}
                <Link to="/terms" className="font-bold">
                  Terms & Conditions
                </Link>
              </span>
            </label>

            <button
              type="button"
              onClick={handleSubmit}
              className="mt-3 w-full py-3 bg-[#023436] text-white rounded-full font-semibold hover:bg-[#029e95]"
            >
              Register Now
            </button>

            <p className="text-center text-sm text-gray-600">
              Been here before?{" "}
              <Link to="/TravLogin" className="text-[#023436] font-medium">
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <img
            src={RightImage}
            alt="Register"
            className="w-[730px] h-[918px] rounded-[18px] object-cover"
          />
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] max-w-[420px] rounded-2xl p-6 text-center shadow-xl">

            <h3 className="text-lg font-semibold mb-2">
              Registration Successful
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Your account has been created successfully.
            </p>

            <button
              onClick={() => {
                setShowDialog(false);
                navigate("/TravLogin");
              }}
              className="w-full py-3 bg-[#023436] text-white rounded-full font-semibold"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default TravRegister;