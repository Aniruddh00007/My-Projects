import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Hero", "Wish", "Love", "Contact"];

  return (
    <nav className="w-full bg-gradient-to-r from-pink-300 via-red-200 to-pink-200 shadow-xl">
      <div className="px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 px-2">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto ml-2 drop-shadow-lg" />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex">
            <ul className="flex space-x-10 text-red-700 font-semibold tracking-wide">
              {navItems.map((item) => (
                <li key={item} className="relative group">
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `px-3 py-1 cursor-pointer transition-all duration-300 transform ${
                        isActive ? "text-white" : "text-red-700 hover:text-pink-600 hover:scale-105"
                      }`
                    }
                  >
                    {({ isActive }) =>
                      isActive && (
                        <span className="absolute inset-0 flex justify-center items-center -z-10">
                          <svg
                            className="w-8 h-8 text-pink-500 opacity-40"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                              4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3
                              19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </span>
                      )
                    }
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-pink-100 via-red-100 to-pink-200 px-4 pb-4 shadow-inner">
          <ul className="flex flex-col space-y-4 text-red-700 font-semibold">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-1 cursor-pointer transition-all duration-300 ${
                      isActive ? "text-white" : "text-red-700 hover:text-pink-600 hover:scale-105"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
