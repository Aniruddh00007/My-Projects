import React, { useState } from "react";

export default function AuthForm() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
      <>
      <div className=" bg-blue-700"> 
        <h1 className="text-gray-300 text-2xl font-bold text-left ml-10 ">   Aniruddh Payment Gateway..$$ </h1>  
         </div>
     
    <div className="flex items-center justify-center min-w-fit min-h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
      <div className="relative bg-white rounded-2xl shadow-2xl w-[400px] overflow-hidden p-8 transition-all duration-500 ease-in-out">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 transition-all duration-500">
          {isSignup ? "Signup Form" : "Login Form"}
        </h2>

        {/* Slide Controls */}
        <div className="relative flex w-full border border-gray-300 rounded-xl mb-6 overflow-hidden">
          <button
            onClick={() => setIsSignup(false)}
            className={`w-1/2 text-lg font-semibold py-2 transition-all ${
              !isSignup ? "text-white" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsSignup(true)}
            className={`w-1/2 text-lg font-semibold py-2 transition-all ${
              isSignup ? "text-white" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Signup
          </button>

          {/* Animated background bar */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-800 to-blue-500 rounded-xl transition-all duration-500 ease-in-out"
            style={{ left: isSignup ? "50%" : "0%" }}
          ></div>
        </div>

        {/* Conditional Form Rendering */}
        <div className="transition-all duration-700 ease-in-out">
          {!isSignup ? (
            // Login Form
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="User Email or ID"
                required
                className="h-12 px-4 rounded-xl border border-gray-300 focus:border-blue-600 outline-none text-gray-700"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="h-12 w-full px-4 rounded-xl border border-gray-300 focus:border-blue-600 outline-none text-gray-700"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-blue-600"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              <div className="text-right">
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-800 to-blue-500 text-white text-lg font-semibold hover:opacity-90 transition"
              >
                Login
              </button>

              <p className="text-center text-sm mt-3">
                Not a member?{" "}
                <span
                  className="text-blue-600 cursor-pointer hover:underline"
                  onClick={() => setIsSignup(true)}
                >
                  Signup now
                </span>
              </p>
            </form>
          ) : (
            // Signup Form
            <form className="flex flex-col gap-4">
              <input
                type="Name"
                placeholder="Name"
                required
                className="h-12 px-4 rounded-xl border border-gray-300 focus:border-blue-600 outline-none text-gray-700"
              />
                 <input
                type="Integer"
                placeholder="Deposite Amount"
                required
                className="h-12 px-4 rounded-xl border border-gray-300 focus:border-blue-600 outline-none text-gray-700"
              />
               <input
                type="Name"
                placeholder="Father Name"
                required
                className="h-12 px-4 rounded-xl border border-gray-300 focus:border-blue-600 outline-none text-gray-700"
              />
               <input
                type="text"
                placeholder="City"
                required
                className="h-12 px-4 rounded-xl border border-gray-300 focus:border-blue-600 outline-none text-gray-700"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="h-12 w-full px-4 rounded-xl border border-gray-300 focus:border-blue-600 outline-none text-gray-700"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-blue-600"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="h-12 px-4 rounded-xl border border-gray-300 focus:border-blue-600 outline-none text-gray-700"
              />
               <input
                type="Pin"
                placeholder="UPI Pin"
                required
                className="h-12 px-4 rounded-xl border border-gray-300 focus:border-blue-600 outline-none text-gray-700"
              />

              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-800 to-blue-500 text-white text-lg font-semibold hover:opacity-90 transition"
              >
                Signup
              </button>

              <p className="text-center text-sm mt-3">
                Already a member?{" "}
                <span
                  className="text-blue-600 cursor-pointer hover:underline"
                  onClick={() => setIsSignup(false)}
                >
                  Login now
                </span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
