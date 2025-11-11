import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Fetch logged-in user from localStorage
    const storedUser = localStorage.getItem("userId");
    if (storedUser) setUserName(storedUser);
    else navigate("/"); // redirect to login if no user
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-900 text-white">
      
      {/* Header */}
      <div className="bg-gradient-to-tl from-blue-900 via-blue-700 to-blue-500 h-16 flex items-center shadow-lg px-6">
        <h1 className="text-2xl font-bold font-serif text-white">
          Welcome, {userName || "User"}!
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow items-center justify-center px-4">
        <div className="bg-blue-800 p-8 rounded-2xl shadow-xl w-full max-w-lg text-white text-center transition-transform transform hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold mb-4">Home Page</h2>
          <p className="text-gray-200 mb-6">
            This is your personalized dashboard of the Payment Gateway. You can view your details and make payments securely.
          </p>
          <div className="text-lg text-gray-300 mb-4">
            Your User ID: <span className="font-semibold text-white">{userName}</span>
          </div>
          <button
            onClick={() => navigate("/payment")}
            className="mt-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Make Payment
          </button>
        </div>

        {/* Extra Info Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl px-4">
          <div className="bg-blue-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-200">
              All transactions are encrypted and processed securely using industry standards.
            </p>
          </div>
          <div className="bg-blue-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Fast Transactions</h3>
            <p className="text-gray-200">
              Payments are processed instantly, making your experience smooth and hassle-free.
            </p>
          </div>
          <div className="bg-blue-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Track Your Balance</h3>
            <p className="text-gray-200">
              View your account details and track your deposits easily from your dashboard.
            </p>
          </div>
          <div className="bg-blue-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-200">
              Our support team is always available to help you with any queries or issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
