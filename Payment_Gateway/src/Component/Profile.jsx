import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const userId = localStorage.getItem("userId"); // logged-in user ID
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        setError("⚠️ Please login first!");
        setLoading(false);
        return;
      }

      try {
        // Fetch user data from backend by ID
        const res = await axios.get(`http://localhost:9191/Userdata/${userId}`);
        if (res.data) {
          setUserData(res.data); // store all user info
        } else {
          setError("User data not found");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data from server");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <p className="text-xl font-semibold">Loading profile...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <p className="text-xl font-semibold">{error}</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="bg-blue-800 p-6 rounded-xl shadow-md w-full max-w-md flex flex-col gap-4">
        {userData && (
          <>
            <p><span className="font-semibold">Name:</span> {userData.name}</p>
            <p><span className="font-semibold">User ID:</span> {userData._id}</p>
            <p><span className="font-semibold">City:</span> {userData.city}</p>
            <p><span className="font-semibold">Father's Name:</span> {userData.fatherName}</p>
            <p><span className="font-semibold">Deposit Amount:</span> ₹{userData.amount}</p>
            <p><span className="font-semibold">UPI Pin:</span> {userData.upi}</p>
            {/* Agar aur fields hai database me, wo bhi yahi show kar sakte ho */}
          </>
        )}
      </div>
    </div>
  );
}
