import React from "react";
import { useNavigate } from "react-router-dom"; // for redirect

function GiftPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-red-100 to-pink-200 relative overflow-hidden">
      
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-bounce text-red-500 text-5xl absolute top-10 left-1/4">❤️</div>
        <div className="animate-pulse text-red-400 text-6xl absolute top-32 right-1/3">💖</div>
        <div className="animate-bounce text-pink-500 text-4xl absolute bottom-10 left-1/2">💕</div>
        <div className="animate-pulse text-red-600 text-5xl absolute top-1/2 right-1/4">❤️</div>
      </div>

      {/* Gift Box */}
      <div
        className="cursor-pointer hover:scale-110 transition transform"
        onClick={() => navigate("/login")}
      >
        🎁
      </div>
    </div>
  );
}

export default GiftPage;
