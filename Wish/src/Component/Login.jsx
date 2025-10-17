import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ConfettiButton } from "../Component/ui/ConfettiButton";
import { Sparkles } from "lucide-react";
import SmokeyCursor from "./ui/SmokeyCursor";


function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emojiArray, setEmojiArray] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "Ani123";

    if (password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/Home");
    } else {
      setError("❌ Wrong password! Try again.");
    }
  };

  // create floating emojis
  useEffect(() => {
    const emojis = ["❤️", "🌹", "😘", "💖",];
    const items = [];
    for (let i = 0; i < 20; i++) {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const left = Math.random() * 100; // percentage
      const duration = 8 + Math.random() * 8; // between 8–16s
      const delay = Math.random() * 8;
      const size = 20 + Math.random() * 24; // 20–44px
      items.push({ emoji: randomEmoji, left, duration, delay, size });
    }
    setEmojiArray(items);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-fuchsia-400 via-pink-400 to-rose-500 overflow-hidden">
      {/* Floating emojis */}
      {emojiArray.map((item, index) => (
        <span
          key={index}
          style={{
            left: `${item.left}%`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            fontSize: `${item.size}px`
          }}
          className="absolute bottom-[-50px] animate-float"
        >
          {item.emoji}
        </span>
      ))}

      {/* Glass card */}
      <div
        className="backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl w-80 text-center border border-white/30
        animate-fadeIn hover:shadow-pink-300/40 hover:scale-105 transition-all duration-300 z-10"
      >
        <h2 className="text-3xl font-extrabold text-white drop-shadow-md mb-6 tracking-wide">
          💖 Enter Secret Key 💖
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-6 rounded-xl bg-white/80 placeholder-gray-500 text-gray-800 
                       focus:outline-none focus:ring-4 focus:ring-fuchsia-400 focus:bg-white transition"
          />
           <ConfettiButton className="bg-pink-500`"
      icon={<Sparkles className="h-4 w-4 "  />}
      confettiOptions={{
        particleCount: 100,
        spread: 70
      }}
    >
          <button
            type="submit"
            // className="w-full py-3 rounded-xl font-bold text-white text-lg shadow-md
            //            bg-gradient-to-r from-fuchsia-500 via-rose-500 to-pink-500
            //            hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200"
          >
            Unlock ❤️
          </button>
          </ConfettiButton>
        </form>
        {error && (
          <p className="text-rose-100 mt-4 font-semibold drop-shadow-md">{error}</p>
        )}
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes float {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-120vh) translateX(20px) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          position: absolute;
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
<SmokeyCursor />

    </div>
  );
}

export default Login;
