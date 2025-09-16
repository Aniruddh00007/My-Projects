import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "Ani123";

    if (password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/hero");
    } else {
      setError("❌ Wrong password! Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-400 via-rose-300 to-purple-400">
      <div
        className="backdrop-blur-lg bg-white/20 p-8 rounded-3xl shadow-2xl w-80 text-center border border-white/30 
        animate-fadeIn"
      >
        <h2 className="text-3xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
          💕 Enter Secret Key 💕
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-5 rounded-xl bg-white/80 placeholder-gray-500 text-gray-800 
                       focus:outline-none focus:ring-4 focus:ring-pink-400 focus:bg-white transition"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-white text-lg shadow-md
                       bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500
                       hover:scale-105 hover:shadow-xl active:scale-95 transition-transform duration-200"
          >
            Unlock ❤️
          </button>
        </form>
        {error && (
          <p className="text-red-100 mt-4 font-medium drop-shadow-md">{error}</p>
        )}
      </div>

      {/* Tailwind keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Login;
