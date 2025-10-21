import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ useNavigate instead of Navigate
import imgg from "../assets/kkk.jpg";
import SmokeyCursor from "./ui/SmokeyCursor";

function Hero() {
  const navigate = useNavigate(); // ✅ gives you the navigate() function

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(
            rgba(76, 0, 130, 0.6),
            rgba(217, 70, 239, 0.6)
          ), url(${imgg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content */}
      <div className="z-10 animate-fadeDown">
        <h1 className="font-[Parisienne] text-5xl md:text-7xl tracking-wide drop-shadow-2xl mb-4">
          ❤️ Share Your Love ❤️
        </h1>
        <p className="mt-2 text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md text-pink-100">
          Send heartfelt wishes wrapped in magic and starlight ✨
        </p>

        
        <button
          onClick={() => navigate("/wish")}
          className="mt-8 px-8 py-3 text-lg font-semibold rounded-full
                     bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500
                     shadow-xl hover:shadow-rose-500/50
                     hover:scale-110 transition-transform duration-300
                     border border-pink-200/40 backdrop-blur-sm"
        >
          Send a Wish 💌
        </button>
        <button onClick={()=> navigate("/Love")}  className="mt-8 px-8 py-3 text-lg font-semibold rounded-full
                     bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500
                     shadow-xl hover:shadow-rose-500/50
                     hover:scale-110 transition-transform duration-300
                     border border-pink-200/40 backdrop-blur-sm ml-4"
                     >
                      View Our Love 💖

        </button>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-300/70 text-4xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { opacity: 1; }
          100% { transform: translateY(-60vh) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation: float 12s linear infinite;
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeDown {
          animation: fadeDown 1s ease-out;
        }
      `}</style>
       <SmokeyCursor
         splatRadius={0.1}
        splatForce={3000}
        densityDissipation={8}
        velocityDissipation={5}
        colorUpdateSpeed={5}
       
      />
    </section>
  );
}

export default Hero;
