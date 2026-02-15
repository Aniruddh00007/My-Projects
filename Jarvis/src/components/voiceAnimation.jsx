import React from "react";

function VoiceAnimation({ active, speaking }) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">

      {/* Orb */}
      <div className="relative flex items-center justify-center">

        {/* Outer Ring */}
        <div
          className={`absolute w-60 h-60 rounded-full border border-cyan-400 transition-all duration-500
          ${active ? "scale-125 opacity-100" : "scale-100 opacity-30"}`}
        />

        {/* Main Orb */}
        <div
          className={`w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500
          ${active ? "animate-pulse shadow-[0_0_80px_#22d3ee]" : ""}`}
        />

      </div>

      {/* Status Text */}
      <h2 className="mt-10 text-lg tracking-widest font-light">
        {speaking
          ? "Speaking..."
          : active
          ? "Listening..."
          : "Say 'Hey Dost'"}
      </h2>
    </div>
  );
}

export default VoiceAnimation;
