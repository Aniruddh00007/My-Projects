import React from "react";
import imgg from '../assets/backgr.jpg'

function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
       // backgroundImage: `linear-gradient(rgba(128, 0, 128, 0.7), rgba(255, 105, 180, 0.7)), url(${imgg})`,
       // backgroundImage: `linear-gradient(rgba(128, 0, 128, 0.7), rgba(255, 218, 185, 0.7)), url(${imgg})`,
        //backgroundImage: `linear-gradient(rgba(128, 0, 128, 0.7), rgba(220, 20, 60, 0.7)), url(${imgg})`,
        backgroundImage:`linear-gradient(rgba(76, 0, 130, 0.7), rgba(217, 70, 239, 0.7)), url(${imgg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
        ❤️ Enter Tittle ❤️
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
        Send your heartfelt wishes to your loved ones with a touch of love and magic ✨
      </p>

      <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition transform">
        Send a Wish 💌
      </button>

      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-bounce text-pink-300 text-5xl absolute top-10 left-1/4">❤️</div>
        <div className="animate-pulse text-red-400 text-6xl absolute top-32 right-1/3">💖</div>
        <div className="animate-bounce text-pink-400 text-4xl absolute bottom-10 left-1/2">💕</div>
      </div>
    </section>
  );
}

export default Hero;
