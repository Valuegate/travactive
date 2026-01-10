import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Eye, EyeOff } from 'lucide-react';

const PasswordReset = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // 1. Basic Validation
    if (!password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // 2. Logic for API call would go here
    console.log("Password reset successful logic...");

    // 3. Navigate to Success Page
    // Use { replace: true } so they can't go back to the reset form via back button
    navigate('/reset-success', { replace: true });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2d2d2d]">
      <div className="w-full max-w-lg p-12 bg-white rounded-xl shadow-2xl mx-4">
        <div className="text-center mb-10">
          <p className="text-gray-700 text-lg font-medium">We have received your password reset request.</p>
          <p className="text-gray-700 text-lg font-medium">Enter your new password below</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Error Message Display */}
          {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-black font-bold text-md ml-1">Password:</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 bg-white border border-gray-100 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-900/20 transition-all"
                placeholder="········"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label className="block text-black font-bold text-md ml-1">Confirm Password:</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-5 py-4 bg-white border border-gray-100 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-900/20 transition-all"
                placeholder="········"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-4 bg-[#003131] hover:bg-[#004141] text-white font-bold rounded-full transition-colors duration-200 shadow-md"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;