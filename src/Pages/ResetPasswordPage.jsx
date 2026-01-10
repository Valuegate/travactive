import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TravactiveLogo from "../assets/TravactiveLogo.png";
import GoogleIcon from "../assets/GoogleIcon.png";
import WelcomeBackIMG from "../assets/WelcomeBack.png";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    navigate("/password-reset");
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center font-sans">

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 flex w-full h-full">

        {/* LEFT SIDE */}
        <div className="w-1/2 bg-white p-16 flex flex-col justify-center">
          
          {/* LOGO FIXED */}
          <div className="mb-12 flex items-center gap-3 text-gray-600">
            <img 
              src={TravactiveLogo} 
              alt="Travactive Logo" 
              className="w-25 h-8 object-contain" 
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome Back, Ready to Continue?
          </h1>

          <p className="text-gray-400 text-sm mb-10 max-w-md leading-relaxed">
            Stay connected to verified travel alerts, global advisories, and essential updates that keep your journey safe and stress-free
          </p>

          {/* GOOGLE BUTTON FIXED */}
          <button className="w-full border border-gray-200 py-3 rounded-lg flex items-center justify-center gap-3 text-sm font-medium mb-6 hover:bg-gray-50 transition">
            <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <div className="relative flex items-center mb-8">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="mx-4 text-gray-400 text-xs">or</span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address:
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none text-sm text-gray-400"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password:
              </label>
              <input
                type="password"
                value="........"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none text-sm text-gray-400"
                disabled
              />
            </div>
          </div>

          <button className="w-full bg-slate-700 text-white py-4 rounded-xl mt-12 font-medium opacity-80">
            Login
          </button>

          <p className="text-center mt-6 text-xs text-gray-400">
            Been here before?{" "}
            <span className="text-gray-700 font-bold">Login</span>
          </p>
        </div>

        {/* RIGHT SIDE IMAGE FIXED */}
        <div className="w-1/2 p-4">
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <img
              src={WelcomeBackIMG}
              alt="Welcome"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* OVERLAY RESET PASSWORD MODAL */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 flex items-center justify-center">
        <div className="bg-white rounded-[2rem] p-10 w-full max-w-lg shadow-2xl text-center">
          <h2 className="text-gray-700 font-medium text-lg mb-8 px-8">
            Enter your registered email address to receive password link reset
          </h2>

          <div className="text-left mb-8">
            <label className="block text-sm font-bold text-gray-800 mb-3">
              Email Address:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-full border border-gray-100 bg-gray-50/50 text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/10"
            />
          </div>

          {/* ⭐ FIXED BUTTON WITH NAVIGATION */}
          <button
            onClick={handleContinue}
            className="w-full bg-[#032d2a] text-white py-4 rounded-full font-bold text-sm tracking-wide mb-6 hover:bg-[#05413d] transition-colors"
          >
            Continue
          </button>

          <button className="text-red-500 font-bold text-sm hover:underline">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;




// import React, { useState } from "react";
// import { Compass } from "lucide-react"; // Optional if you're using logo instead
// import { useNavigate } from "react-router-dom";
// import TravactiveLogo from "../assets/TravactiveLogo.png";
// import GoogleIcon from "../assets/GoogleIcon.png";
// import WelcomeBackIMG from "../assets/WelcomeBack.png";

// const ResetPasswordPage = () => {
//   const [email, setEmail] = useState("Enter your email address");

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center font-sans">

//       {/* BACKGROUND LAYER */}
//       <div className="absolute inset-0 flex w-full h-full">

//         {/* LEFT SIDE */}
//         <div className="w-1/2 bg-white p-16 flex flex-col justify-center">
          
//           {/* LOGO FIXED */}
//           <div className="mb-12 flex items-center gap-3 text-gray-600">
//             <img 
//               src={TravactiveLogo} 
//               alt="Travactive Logo" 
//               className="w-25 h-8 object-contain" 
//             />
//             {/* <span className="font-semibold text-sm">Travactiv</span> */}
//           </div>

//           <h1 className="text-3xl font-bold text-gray-800 mb-4">
//             Welcome Back, Ready to Continue?
//           </h1>

//           <p className="text-gray-400 text-sm mb-10 max-w-md leading-relaxed">
//             Stay connected to verified travel alerts, global advisories, and essential updates that keep your journey safe and stress-free
//           </p>

//           {/* GOOGLE BUTTON FIXED */}
//           <button className="w-full border border-gray-200 py-3 rounded-lg flex items-center justify-center gap-3 text-sm font-medium mb-6 hover:bg-gray-50 transition">
//             <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
//             Continue with Google
//           </button>

//           <div className="relative flex items-center mb-8">
//             <div className="flex-grow border-t border-gray-100"></div>
//             <span className="mx-4 text-gray-400 text-xs">or</span>
//             <div className="flex-grow border-t border-gray-100"></div>
//           </div>

//           <div className="space-y-6">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Email Address:
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none text-sm text-gray-400"
//                 disabled
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 value="........"
//                 className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none text-sm text-gray-400"
//                 disabled
//               />
//             </div>
//           </div>

//           <button className="w-full bg-slate-700 text-white py-4 rounded-xl mt-12 font-medium opacity-80">
//             Login
//           </button>

//           <p className="text-center mt-6 text-xs text-gray-400">
//             Been here before?{" "}
//             <span className="text-gray-700 font-bold">Login</span>
//           </p>
//         </div>

//         {/* RIGHT SIDE IMAGE FIXED */}
//         <div className="w-1/2 p-4">
//           <div className="w-full h-full rounded-3xl overflow-hidden">
//             <img
//               src={WelcomeBackIMG}
//               alt="Welcome"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//       </div>

//       {/* OVERLAY RESET PASSWORD MODAL */}
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 flex items-center justify-center">
//         <div className="bg-white rounded-[2rem] p-10 w-full max-w-lg shadow-2xl text-center">
//           <h2 className="text-gray-700 font-medium text-lg mb-8 px-8">
//             Enter your registered email address to receive password link reset
//           </h2>

//           <div className="text-left mb-8">
//             <label className="block text-sm font-bold text-gray-800 mb-3">
//               Email Address:
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-5 py-4 rounded-full border border-gray-100 bg-gray-50/50 text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/10"
//             />
//           </div>

//           <button className="w-full bg-[#032d2a] text-white py-4 rounded-full font-bold text-sm tracking-wide mb-6 hover:bg-[#05413d] transition-colors">
//             Continue
//           </button>

//           <button className="text-red-500 font-bold text-sm hover:underline">
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPasswordPage;

