import React, { useState } from "react";
import axios from "axios";

function Payment() {
  const [email, setEmail] = useState("");  // assuming user enters or already has email/id
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [otp, setOtp] = useState("");
  const [serverData, setServerData] = useState(null);

  // Function to fetch data from API and compare
  const checkPin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.get(`http://localhost:8080/api/users/${email}`);
      const data = response.data;
      setServerData(data);

      // compare entered pin or otp with data from server
      if (data.upiPin === pin && data.otp === otp) {
        alert("✅ Payment Successful!");
      } else {
        alert("❌ Incorrect UPI Pin or OTP!");
      }

    } catch (error) {
      console.error(error);
      alert("⚠️ Failed to fetch user data. Check your API or email input.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-[400px]">
        <h2 className="text-2xl font-bold mb-4 text-center">💳 Payment</h2>

        <form onSubmit={checkPin} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="User Email or ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded-lg"
            required
          />
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Enter UPI Pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="p-2 border rounded-lg"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
