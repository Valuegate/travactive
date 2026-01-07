import React, { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import SignUpImage from "../assets/SignUpImage.png";
import TravactiveLogo from "../assets/TravactiveLogo.png";

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
          <button className="w-full flex items-center justify-center gap-3 border rounded-full py-3 mb-6 hover:bg-gray-50 transition">
            <FaGoogle className="text-red-500" />
            <span className="font-medium">Continue with Google</span>
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
            <Link to="/login" className="font-semibold text-emerald-700 hover:underline">
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




// import React, { useState } from 'react';
// import { FaGoogle, FaEye, FaEyeSlash, FaCheck, FaTimes } from 'react-icons/fa';

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: 'Samuel Sonola',
//     email: 'samuelsamule@gmail.com',
//     password: '',
//     confirmPassword: ''
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [passwordRequirements, setPasswordRequirements] = useState({
//     length: false,
//     uppercase: false,
//     lowercase: false,
//     number: false,
//     special: false
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     if (name === 'password') {
//       setPasswordRequirements({
//         length: value.length >= 8,
//         uppercase: /[A-Z]/.test(value),
//         lowercase: /[a-z]/.test(value),
//         number: /\d/.test(value),
//         special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your registration logic here
//     console.log('Form submitted:', formData);
//   };

//   const handleGoogleSignUp = () => {
//     // Add Google OAuth logic here
//     console.log('Google sign up clicked');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
//       <div className="max-w-6xl w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white">
        
//         {/* Left Side - Brand/Info Section */}
//         <div className="lg:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-8 lg:p-12 flex flex-col justify-between">
//           <div>
//             <div className="mb-8">
//               <h1 className="text-2xl font-bold mb-2">TravelAI</h1>
//               <p className="text-blue-200">Smarter Journeys, Powered by AI</p>
//             </div>
            
//             <div className="mb-10">
//               <h2 className="text-3xl font-bold mb-4 leading-tight">
//                 Your First Step to <span className="text-yellow-300">Smarter Travel</span>
//               </h2>
//               <p className="text-blue-100 text-lg">
//                 Sign up to access AI-powered updates, trusted insights, and tools designed to make every journey easier
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <div className="bg-blue-500 p-2 rounded-lg">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">AI-Powered Updates</h3>
//                   <p className="text-blue-200 text-sm">Real-time travel intelligence and predictive alerts</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="bg-blue-500 p-2 rounded-lg">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Trusted Insights</h3>
//                   <p className="text-blue-200 text-sm">Verified information from reliable sources</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="bg-blue-500 p-2 rounded-lg">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Smart Tools</h3>
//                   <p className="text-blue-200 text-sm">Everything you need for seamless travel planning</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 pt-6 border-t border-blue-500">
//             <p className="text-blue-200 text-sm">
//               <span className="font-semibold">Bueno Fono:</span> Reforfor® LeaLib
//             </p>
//           </div>
//         </div>

//         {/* Right Side - Form Section */}
//         <div className="lg:w-3/5 p-8 lg:p-12">
//           <div className="max-w-md mx-auto">
//             <div className="text-center mb-10">
//               <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h2>
//               <p className="text-gray-600">Join thousands of smart travelers today</p>
//             </div>

//             {/* Google Sign Up Button */}
//             <button
//               onClick={handleGoogleSignUp}
//               className="w-full flex items-center justify-center space-x-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-200 mb-8"
//             >
//               <FaGoogle className="text-red-500" />
//               <span>Continue with Google</span>
//             </button>

//             <div className="relative mb-8">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500">Or sign up with email</span>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Full Name Field */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-10"
//                     placeholder="Create a password"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                 </div>

//                 {/* Password Requirements */}
//                 <div className="mt-3 grid grid-cols-2 gap-2">
//                   {Object.entries(passwordRequirements).map(([key, met]) => (
//                     <div key={key} className="flex items-center space-x-2">
//                       {met ? (
//                         <FaCheck className="text-green-500 text-sm" />
//                       ) : (
//                         <FaTimes className="text-red-400 text-sm" />
//                       )}
//                       <span className={`text-xs ${met ? 'text-green-600' : 'text-gray-500'}`}>
//                         {key === 'length' && '8+ characters'}
//                         {key === 'uppercase' && 'Uppercase letter'}
//                         {key === 'lowercase' && 'Lowercase letter'}
//                         {key === 'number' && 'Number'}
//                         {key === 'special' && 'Special character'}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Confirm Password Field */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Confirm Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-10"
//                     placeholder="Confirm your password"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   >
//                     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                 </div>
                
//                 {/* Password Match Indicator */}
//                 {formData.password && formData.confirmPassword && (
//                   <div className="mt-2 flex items-center space-x-2">
//                     {formData.password === formData.confirmPassword ? (
//                       <>
//                         <FaCheck className="text-green-500" />
//                         <span className="text-green-600 text-sm">Passwords match</span>
//                       </>
//                     ) : (
//                       <>
//                         <FaTimes className="text-red-500" />
//                         <span className="text-red-600 text-sm">Passwords don't match</span>
//                       </>
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* Terms and Conditions */}
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="terms"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   required
//                 />
//                 <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
//                   I agree to the{' '}
//                   <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
//                     Terms of Service
//                   </a>{' '}
//                   and{' '}
//                   <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
//                     Privacy Policy
//                   </a>
//                 </label>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
//               >
//                 Register Now
//               </button>
//             </form>

//             {/* Already have account */}
//             <div className="mt-8 text-center">
//               <p className="text-gray-600">
//                 Already have an account?{' '}
//                 <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
//                   Sign In
//                 </a>
//               </p>
//             </div>

//             {/* Security Note */}
//             <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
//               <div className="flex items-start">
//                 <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//                 <p className="text-sm text-blue-700">
//                   Your information is secured with 256-bit SSL encryption. We never share your personal data.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for additional styling */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
        
//         .floating {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         input:focus {
//           outline: none;
//           box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SignUpPage;