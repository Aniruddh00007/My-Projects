import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [signupData, setSignupData] = useState({
    name: "",
    amount: "",
    fatherName: "",
    city: "",
    password: "",
    confirmPassword: "",
    upi: "",
  });

  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // 🔹 Signup Submit
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("⚠️ Password and Confirm Password do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:9191/Userdata", signupData);
      if (response.status === 200 || response.status === 201) {
        alert("✅ Signup Successful!");
        setSignupData({
          name: "",
          amount: "",
          fatherName: "",
          city: "",
          password: "",
          confirmPassword: "",
          upi: "",
        });
        setIsSignup(false);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Signup Failed! Check backend.");
    }
  };

  // 🔹 Login Submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get all users from MongoDB
      const response = await axios.get("http://localhost:9191/Userdata");
      const users = response.data;

      // Find matching user by name & password
      const matchedUser = users.find(
        (user) =>
          user.name === loginData.name && user.password === loginData.password
      );

      if (matchedUser) {
        alert(`✅ Welcome ${matchedUser.name}! Login Successful`);

        // ✅ Save user info to localStorage
        localStorage.setItem("username", matchedUser.name);
        localStorage.setItem("userId", matchedUser.userId || matchedUser._id);

        // Redirect to Home
        navigate("/home");

        setLoginData({ name: "", password: "" });
      } else {
        alert("❌ Invalid credentials! Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Failed to connect to backend!");
    }
  };

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-md py-4">
        <h1 className="text-gray-100 text-2xl font-bold text-center tracking-wide">
          💳 Payment Gateway
        </h1>
      </div>

      {/* Form Container */}
      <div className="w-full min-h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 flex justify-center items-center py-10">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[400px] p-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            {isSignup ? "Signup Form" : "Login Form"}
          </h2>

          {/* Switch Buttons */}
          <div className="flex border border-gray-300 rounded-xl mb-6 overflow-hidden relative">
            <button
              type="button"
              onClick={() => setIsSignup(false)}
              className={`w-1/2 py-2 font-semibold ${
                !isSignup ? "text-white" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsSignup(true)}
              className={`w-1/2 py-2 font-semibold ${
                isSignup ? "text-white" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Signup
            </button>
            <div
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-800 to-blue-500 transition-all duration-500 rounded-xl"
              style={{ left: isSignup ? "50%" : "0%" }}
            ></div>
          </div>

          {/* Forms */}
          {!isSignup ? (
            <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Username"
                value={loginData.name}
                onChange={handleLoginChange}
                required
                className="h-12 px-4 rounded-xl border border-gray-300 focus:border-blue-600 outline-none"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                  className="h-12 w-full px-4 rounded-xl border border-gray-300 focus:border-blue-600 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-800 to-blue-500 text-white font-semibold"
              >
                Login
              </button>
            </form>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSignupSubmit}>
              <input type="text" name="name" placeholder="Full Name" value={signupData.name} onChange={handleSignupChange} required className="h-12 px-4 rounded-xl border border-gray-300"/>
              <input type="number" name="amount" placeholder="Deposit Amount" value={signupData.amount} onChange={handleSignupChange} required className="h-12 px-4 rounded-xl border border-gray-300"/>
              <input type="text" name="fatherName" placeholder="Father's Name" value={signupData.fatherName} onChange={handleSignupChange} required className="h-12 px-4 rounded-xl border border-gray-300"/>
              <input type="text" name="city" placeholder="City" value={signupData.city} onChange={handleSignupChange} required className="h-12 px-4 rounded-xl border border-gray-300"/>
              <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} required className="h-12 px-4 rounded-xl border border-gray-300"/>
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={signupData.confirmPassword} onChange={handleSignupChange} required className="h-12 px-4 rounded-xl border border-gray-300"/>
              <input type="text" name="upi" placeholder="UPI Pin" value={signupData.upi} onChange={handleSignupChange} required className="h-12 px-4 rounded-xl border border-gray-300"/>
              <button type="submit" className="h-12 w-full mt-3 rounded-xl bg-gradient-to-r from-blue-800 to-blue-500 text-white font-semibold">Signup</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
