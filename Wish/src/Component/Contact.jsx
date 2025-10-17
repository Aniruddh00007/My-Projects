import React, { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import SmokeyCursor from "./ui/SmokeyCursor";

// Memoized floating hearts
const FloatingHearts = memo(({ count, windowWidth }) => {
  const heartsArray = Array.from({ length: count });
  return (
    <>
      {heartsArray.map((_, i) => (
        <motion.span
          key={`heart-${i}`}
          className="absolute text-pink-400/60 text-3xl select-none"
          initial={{
            x: Math.random() * windowWidth,
            y: "110vh",
            scale: Math.random() * 0.8 + 0.4,
            rotate: 0
          }}
          animate={{ y: "-10vh", rotate: [0, 10, -10, 0] }}
          transition={{ duration: 12 + Math.random() * 8, repeat: Infinity, delay: i * 0.6 }}
        >
          ❤️
        </motion.span>
      ))}
    </>
  );
});

// Memoized sparkles
const Sparkles = memo(({ count }) => {
  const sparklesArray = Array.from({ length: count });
  return (
    <>
      {sparklesArray.map((_, i) => (
        <motion.span
          key={`sparkle-${i}`}
          className="absolute text-white/50 text-xs select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.5 + Math.random() * 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          ✨
        </motion.span>
      ))}
    </>
  );
});

export default function RomanticContactCard() {
  const quotes = useRef([
    "Love is composed of a single soul inhabiting two bodies.",
    "In all the world, there is no heart for me like yours.",
    "You are my today and all of my tomorrows.",
    "Every love story is beautiful, but ours is my favorite."
  ]);

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const windowWidth = useRef(typeof window !== "undefined" ? window.innerWidth : 0);

  // Cycle quotes every 5s
  useEffect(() => {
    const handleResize = () => (windowWidth.current = window.innerWidth);
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setCurrentQuoteIndex(prev => (prev + 1) % quotes.current.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
  };

  const buttonItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-fuchsia-100 overflow-hidden p-6 font-sans">

      {/* Floating hearts and sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingHearts count={15} windowWidth={windowWidth.current} />
        <Sparkles count={20} />
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
        className="relative z-10 bg-white/70 backdrop-blur-lg border border-purple-200/50 rounded-3xl shadow-2xl shadow-pink-300/30 p-8 w-full max-w-md text-center"
      >
        <motion.h2
          className="font-serif text-5xl italic text-purple-700 mb-3"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          💌 A Note of Love
        </motion.h2>

        <motion.p
          className="text-purple-700/80 mb-8"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Thank you for bringing magic, laughter, and love into every moment.
        </motion.p>

        {/* Contact Buttons */}
        <motion.div className="flex flex-col gap-4 mb-8" variants={buttonContainerVariants} initial="hidden" animate="visible">
          <motion.a variants={buttonItemVariants} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-xl shadow-sm text-purple-700 bg-purple-200/20 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300">
            <FaInstagram /> Connect on Instagram
          </motion.a>
          <motion.a variants={buttonItemVariants} href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-xl shadow-sm text-pink-700 bg-pink-200/20 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-300/50 transition-all duration-300">
            <FaWhatsapp /> Chat on WhatsApp
          </motion.a>
          <motion.a variants={buttonItemVariants} href="mailto:someone@example.com" className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-xl shadow-sm text-fuchsia-700 bg-fuchsia-200/20 hover:bg-fuchsia-500 hover:text-white hover:shadow-lg hover:shadow-fuchsia-300/50 transition-all duration-300">
            <FaEnvelope /> Send an Email
          </motion.a>
        </motion.div>

        {/* Quotes */}
        <div className="h-16 flex flex-col items-center justify-center text-purple-700/90 italic">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="text-sm"
            >
              “{quotes.current[currentQuoteIndex]}”
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Smokey Cursor */}
      <SmokeyCursor
        splatRadius={0.15}
        splatForce={4000}
        densityDissipation={8}
        velocityDissipation={5}
        colorUpdateSpeed={5}
        followMouse
        autoColors
      />
    </div>
  );
}
