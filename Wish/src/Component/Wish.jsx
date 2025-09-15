import React, { useState } from "react";
import { motion } from "framer-motion";

import './Envelope.css';

export default function Wish() {
  const [open, setOpen] = useState(false);

  const wishes = [
    "May your day sparkle with joy ✨",
    "Sending you love & laughter 💖",
    "Dream big & shine bright 🌟",
    "May happiness hug you always 🤗",
    "Keep smiling, the world needs it 😊",
    "Here’s to endless adventures 🚀",
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-6 overflow-hidden">
      {/* Floating animated hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400 text-4xl"
            initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
            animate={{ y: "-10vh" }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-pink-600 mb-8 z-10"
      >
        💌 Lovely Wishes 💌
      </motion.h1>

      {/* Wishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        {wishes.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-white rounded-2xl shadow-lg border-4 border-pink-300 p-6 text-center text-lg font-semibold text-pink-700 hover:shadow-pink-400/50"
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Animated Envelope */}
      <motion.div
        onClick={() => setOpen(true)}
        className="relative mt-16 cursor-pointer z-10 group"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
          <div className="letter-image">
      <div className="animated-mail">
        <div className="back-fold"></div>
        <div className="letter">
          <div className="letter-border"></div>
          <div className="letter-title"></div>
          <div className="letter-context"></div>
          <div className="letter-stamp">
            <div className="letter-stamp-inner"></div>
          </div>
        </div>
        <div className="top-fold"></div>
        <div className="body"></div>
        <div className="left-fold"></div>
      </div>
      <div className="shadow"></div>
    </div>
     Open message ❤️
      </motion.div>

      {/* Modal with Glowing Message */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="bg-white rounded-2xl p-10 shadow-2xl border-4 border-pink-400 relative max-w-sm text-center"
          >
            <motion.h2
              className="text-3xl font-extrabold text-pink-600 animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              💖 You Are Truly Special 💖
            </motion.h2>
            <p className="text-pink-700 mt-4 font-medium">
              Wishing you boundless love, joy, and magical moments every day!
            </p>
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              💕
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
