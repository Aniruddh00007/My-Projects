import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Wish", "Love", "Contact"];

  
  return (
    <nav className="w-full bg-gradient-to-r from-pink-300/80 via-rose-200/80 to-pink-300/80 backdrop-blur-md shadow-xl fixed top-0 left-0 z-50">
      <div className="px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 px-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/Images/girl.jpg"
              alt="Logo"
              className="w-12 h-12 bg-blue-500 rounded-full ml-2 drop-shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex space-x-10 text-rose-700 font-semibold tracking-wide">
              {navItems.map((item) => (
                <li key={item} className="relative group">
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `px-3 py-1 relative transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-rose-700 hover:text-rose-500"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item}
                        {/* Heart highlight if active */}
                        {isActive && (
                          <span className="absolute inset-0 flex justify-center items-center -z-10">
                            <svg
                              className="w-8 h-8 text-pink-500 opacity-40"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                               2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                               C13.09 3.81 14.76 3 16.5 3
                               19.58 3 22 5.42 22 8.5
                               c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                          </span>
                        )}
                        {/* Floating kisses/hearts on hover */}
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 opacity-0 group-hover:opacity-100 pointer-events-none">
                          {[...Array(3)].map((_, i) => (
                            <motion.span
                              key={i}
                              className="absolute text-rose-400 text-xl"
                              initial={{ y: 0, opacity: 0 }}
                              animate={{
                                y: [-5 - i * 5, -25 - i * 10],
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 1.5,
                                delay: i * 0.2,
                                repeat: Infinity
                              }}
                              style={{
                                left: `${i * 8 - 8}px`,
                              }}
                            >
                              {i % 2 === 0 ? "💋" : "❤️"}
                            </motion.span>
                          ))}
                        </div>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden bg-gradient-to-r from-pink-100 via-rose-100 to-pink-200 px-4 pb-4 shadow-inner"
        >
          <ul className="flex flex-col space-y-4 text-rose-700 font-semibold">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-1 transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-rose-700 hover:text-rose-500"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
