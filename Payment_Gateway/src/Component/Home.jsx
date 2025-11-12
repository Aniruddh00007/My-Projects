import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", id: "" });

  useEffect(() => {
    // Get stored userId from localStorage (set during login)
    const storedUserId = localStorage.getItem("userId");

    if (!storedUserId) {
      navigate("/"); // redirect to login if not found
      return;
    }

    // Fetch user details from backend by ID
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:9191/Userdata/${storedUserId}`);
        if (response.data) {
          setUserData({
            name: response.data.name || "User",
            id: response.data._id || storedUserId,
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-900 text-white">
      
      {/* Header */}
      <div className="bg-gradient-to-tl from-blue-900 via-blue-700 to-blue-500 h-16 flex items-center shadow-lg px-6">
        <h1 className="text-2xl font-bold font-serif text-white">
          Welcome, {userData.name}!
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
            <div>
              <strong>User Name:</strong> <span className="text-white">{userData.name}</span>
            </div>
            <div>
              <strong>User ID:</strong> <span className="text-white">{userData.id}</span>
            </div>
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
          {[
            { title: "Secure Payments", desc: "All transactions are encrypted and processed securely using industry standards." },
            { title: "Fast Transactions", desc: "Payments are processed instantly, making your experience smooth and hassle-free." },
            { title: "Track Your Balance", desc: "View your account details and track your deposits easily from your dashboard." },
            { title: "24/7 Support", desc: "Our support team is always available to help you with any queries or issues." }
          ].map((card, index) => (
            <div key={index} className="bg-blue-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-200">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
