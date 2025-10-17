import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Envelope.css";
import SmokeyCursor from "./ui/SmokeyCursor";

export default function Wish() {
  const [open, setOpen] = useState(false);

  const wishes = [
    "One year down, forever to go. You’ve made my world brighter, my heart fuller, and my life more beautiful. Happy 1st Anniversary, my love! ❤️ 💕🥂🌹",
    "तेरे साथ बीता हर पल एक कहानी बन गया, तेरी मुस्कान मेरा जहाँ बन गया पहला साल यूँ ही गुजर गया तेरे साए में, अब हर जन्म तेरा इंतज़ार बन गया। ❤️",
    "From the moment I met you, my heart knew its home. One year later, and I still fall for you every single day",
    "One year of holding hands, sharing dreams, and creating memories — and I still feel like the luckiest person alive to call you mine. 💫",
    "Before the distance, you always asked why I took so many photos… Now, it’s because of those photos that we feel close, even when we’re apart. ❤️ 😊",
    "Aisa kaunsa hawa khilaya tumne, jo us din se sirf tumhara ho gaya… Aur aisa kya hug tha tumhara, ki sirf tumhara ho gaya?....25th October…,  kiss mein, aisa  kya jaadu tha, ki 26th ko tumne mujhe sirf apna bana liya?...Main chahta hoon ki aise aur bhi mauke aayein, jisse hum ek dusre ko aur bhi zyada apna banate rahein… ❤️",
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden
                    bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 animate-gradientMove p-6">
      {/* Cursor Effects */}
      <SmokeyCursor
        splatRadius={0.12}
        splatForce={3000}
        densityDissipation={7}
        velocityDissipation={4}
        colorUpdateSpeed={6}
        intensity={1.2}
      />

      {/* Floating hearts & sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-pink-400 text-3xl"
            initial={{ y: "100vh", x: Math.random() * window.innerWidth, rotate: Math.random() * 360 }}
            animate={{ y: "-20vh", rotate: 360 }}
            transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, delay: i * 0.3 }}
          >
            ❤️
          </motion.div>
        ))}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute text-yellow-100 text-sm"
            initial={{ y: "100vh", x: Math.random() * window.innerWidth, opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 1, 0] }}
            transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, delay: i * 0.2 }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-pink-700 mb-12 z-10 drop-shadow-lg mt-14"
      >
         Hᴀᴘᴘʏ 1ˢᵗ Aɴɴɪᴠᴇʀsᴀʀʏ, ᴍʏ ʟᴏᴠᴇ! 😘
      </motion.h1>

      {/* Wishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        {wishes.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0 0 30px rgba(255,105,180,0.5)" }}
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
        initial={{ y: 50, opacity: 0, rotate: -5 }}
        animate={{ y: [50, 0, 10, 0], opacity: 1, rotate: [-5, 5, -5] }}
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
        <p className="text-pink-600 font-bold mt-2 text-lg animate-bounce">Open message ❤️</p>
      </motion.div>

      {/* Modal */}
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
              💖 Happy 1st year of our Togetherness!
            </motion.h2>
            <p className="text-pink-700 mt-4 font-medium">
              So finally, after all our cute fights and crazy moments, we’ve completed one amazing year together.
                  I pray we stay like this forever — just the way we’ve always dreamed.
                  Thank you for standing by me, loving me, and never giving up on “us.” ❤️
            </p>
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl animate-bounce"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              💕
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* Custom Styles */}
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
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce { animation: bounce 1.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
