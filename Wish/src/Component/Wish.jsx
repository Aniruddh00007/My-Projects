import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Envelope.css";
import SmokeyCursor from "./ui/SmokeyCursor";

export default function Wish() {
  const [open, setOpen] = useState(false);

  const wishes = [
    "I love you more today than ever before, and I can’t wait for all the tomorrows we’ll share.” 💕🥂🌹",
    "Sending you love & laughter 💖",
    "Dream big & shine bright 🌟",
    "May happiness hug you always 🤗",
    "Keep smiling, the world needs it 😊",
    "Here’s to endless adventures 🚀",
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden
                    bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 animate-gradientMove p-6">
      {/* Floating animated hearts & sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-pink-400 text-4xl"
            initial={{
              y: "100vh",
              x: Math.random() * window.innerWidth,
              rotate: Math.random() * 360,
            }}
            animate={{ y: "-10vh", rotate: 360 }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            ❤️
          </motion.div>
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute text-yellow-100 text-sm"
            initial={{
              y: "100vh",
              x: Math.random() * window.innerWidth,
              opacity: 0,
            }}
            animate={{ y: "-10vh", opacity: [0, 1, 0] }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl font-extrabold text-pink-700 mb-10 z-10 drop-shadow-lg"
      >
        💌 Happy 1st Anniversary, my love! 😘💌
      </motion.h1>

      {/* Wishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        {wishes.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="bg-white rounded-3xl shadow-xl border-4 border-pink-300
                       p-6 text-center text-lg font-semibold text-pink-700
                       hover:shadow-pink-500/70 hover:animate-pulse transition"
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Animated Envelope */}
      <motion.div
        onClick={() => setOpen(true)}
        className="relative mt-16 cursor-pointer z-10 group"
        initial={{ y: 40, opacity: 0, rotate: -5 }}
        animate={{
          y: [40, 0, 10, 0],
          opacity: 1,
          rotate: [ -5, 5, -5 ],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        whileHover={{ scale: 1.1 }}
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
        <p className="text-pink-600 font-bold mt-2 text-lg">Open message ❤️</p>
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
            className="relative bg-white rounded-3xl p-10 shadow-2xl border-4 border-pink-400
                       max-w-sm text-center animate-glowPink"
          >
            <motion.h2
              className="text-3xl font-extrabold text-pink-600"
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

      {/* Custom keyframes */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
        }
        @keyframes glowPink {
          0%, 100% { box-shadow: 0 0 20px rgba(255,105,180,0.6); }
          50% { box-shadow: 0 0 40px rgba(255,105,180,1); }
        }
        .animate-glowPink {
          animation: glowPink 2.5s ease-in-out infinite;
        }
      `}</style>
     <SmokeyCursor
   splatRadius={0.1}
  splatForce={3000}
  densityDissipation={8}
  velocityDissipation={5}
  colorUpdateSpeed={5}
 
/>
    </div>
  );
}
