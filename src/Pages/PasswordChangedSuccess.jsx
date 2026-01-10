import React from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordChangedSuccess = () => {
  const navigate = useNavigate();

  return (
    // Main Container: Full screen height and width, centered content
    <div className="min-h-screen w-full bg-[#1c1c1c] flex items-center justify-center p-4 font-sans">
      
      {/* Success Card */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-[580px] py-16 px-8 flex flex-col items-center text-center">
        
        {/* Success Icon (Checkmark) */}
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full border-4 border-[#3a8355] flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-[#3a8355]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-[28px] font-bold text-[#1c1c1c] mb-2">
          Password Changed
        </h1>
        <p className="text-[#6b7280] text-sm mb-10">
          Your Password has been changed successfully
        </p>

        {/* Action Button */}
        
        <button 
          className="w-full max-w-[400px] bg-[#002b2b] hover:bg-[#003d3d] text-white font-semibold py-3.5 rounded-full transition-colors duration-200"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default PasswordChangedSuccess;