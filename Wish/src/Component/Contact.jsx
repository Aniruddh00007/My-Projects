import React from "react";
import { motion } from "framer-motion";

export default function RomanticContactCard() {
  const quotes = [
    "Love is composed of a single soul inhabiting two bodies.",
    "In all the world, there is no heart for me like yours.",
    "You are my today and all of my tomorrows.",
    "Every love story is beautiful, but ours is my favorite."
  ];

  // floating heart balloons
  const hearts = Array.from({ length: 15 });

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 overflow-hidden p-6">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-rose-400/60 text-4xl select-none"
            initial={{
              x: Math.random() * window.innerWidth,
              y: "100vh",
              scale: Math.random() * 0.8 + 0.4,
              rotate: 0
            }}
            animate={{
              y: "-10vh",
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: i * 0.6
            }}
          >
            🎈
          </motion.span>
        ))}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/80 backdrop-blur-md border border-rose-200
                   rounded-3xl shadow-xl p-8 w-full max-w-md text-center"
      >
        <h2 className="text-3xl font-semibold text-rose-600 mb-2 tracking-wide">
          A Note of Love
        </h2>
        <p className="text-rose-700 mb-6 text-sm">
          Thank you for bringing light, laughter, and love into every moment.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col gap-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-rose-400 to-pink-500 text-white
                       py-2 px-4 rounded-xl shadow-md hover:shadow-lg
                       transition-all duration-300 hover:scale-105"
          >
            📸 Connect on Instagram
          </a>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-emerald-500 text-white
                       py-2 px-4 rounded-xl shadow-md hover:shadow-lg
                       transition-all duration-300 hover:scale-105"
          >
            💬 Chat on WhatsApp
          </a>

          <a
            href="mailto:someone@example.com"
            className="bg-gradient-to-r from-purple-400 to-violet-500 text-white
                       py-2 px-4 rounded-xl shadow-md hover:shadow-lg
                       transition-all duration-300 hover:scale-105"
          >
            📧 Send an Email
          </a>
        </div>

        {/* Love Quotes */}
        <div className="mt-8 text-rose-600">
          <h3 className="text-lg font-medium mb-3">Love Quotes</h3>
          <ul className="space-y-2 text-sm italic">
            {quotes.map((q, idx) => (
              <li key={idx}>“{q}”</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
