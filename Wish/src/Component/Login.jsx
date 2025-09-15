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
      setError("❌ Password wrong! Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-red-100 to-pink-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">💕 Enter Password 💕</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter your secret password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition"
          >
            Unlock ❤️
          </button>
        </form>
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
