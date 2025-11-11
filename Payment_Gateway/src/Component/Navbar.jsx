import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username"); // username from login
  const userId = localStorage.getItem("userId"); // MongoDB ID from login
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 shadow-lg text-white px-6 py-3 flex justify-between items-center relative">
      
      {/* Logo / Home */}
      <div
        className="text-2xl font-bold font-serif tracking-wide cursor-pointer"
        onClick={() => navigate("/home")}
      >
        💳 PaySecure
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-lg font-medium">
        <Link to="/home" className="hover:text-yellow-300 transition duration-200">Home</Link>
        <Link to="/payment" className="hover:text-yellow-300 transition duration-200">Payment</Link>
      </div>

      {/* User Profile / Login */}
      <div className="flex items-center gap-4 relative">
        {username ? (
          <>
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="bg-white text-blue-700 px-3 py-1 rounded-full font-semibold shadow flex flex-col items-start gap-1 hover:bg-gray-100 transition"
            >
              <span>{username} 👤</span>
              {userId && <span className="text-xs text-gray-500">ID: {userId}</span>} {/* Show MongoDB ID */}
            </button>

            {showProfile && (
              <div className="absolute right-0 top-20 w-48 bg-white text-gray-800 rounded-lg shadow-lg flex flex-col py-2">
                <button
                  onClick={() => { navigate("/profile"); setShowProfile(false); }}
                  className="px-4 py-2 text-left hover:bg-gray-100 transition"
                >
                  My Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-left hover:bg-gray-100 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded-lg text-white font-semibold transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
