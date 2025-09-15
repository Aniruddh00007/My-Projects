import React from "react";

export default function RomanticContactCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50 p-4">
      <div className="relative bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 rounded-2xl shadow-2xl p-6 w-80 text-center transform hover:scale-105 transition-transform duration-500">
        {/* Heart Animation */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 animate-pulse">
          <span className="text-5xl animate-bounce">💖💋</span>
        </div>

        {/* Card Title */}
        <h2 className="text-2xl font-bold text-rose-600 mb-2">
          Sending Love 💌
        </h2>
        <p className="text-pink-700 mb-4 text-sm">
          Hey cutie! Thank you for being amazing 😘💞
        </p>

        {/* Contact Links */}
        <div className="flex flex-col gap-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/direct/t/114119733317020/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            📸 DM me on Instagram
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+918146432981?text=Hey%20love!%20Thanks%20for%20the%20love!%20😘💖"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            💬 Chat on WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:Aniiiii0007@gmail.com?subject=Thank%20you%20❤️&body=Hey%20sweetheart!%20Thanks%20for%20your%20love%20😘💌"
            className="flex items-center justify-center gap-2 bg-purple-400 hover:bg-purple-500 text-white py-2 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            📧 Send me an Email
          </a>
        </div>

        {/* Footer Emoji */}
        <div className="mt-6 text-3xl animate-bounce">
          💖💋💌💞
        </div>
      </div>
    </div>
  );
}
