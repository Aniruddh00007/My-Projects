import React, { useState, useEffect } from "react";
import axios from "axios";

function Payment() {
  const loggedUserId = localStorage.getItem("userId") || ""; // logged-in user's id
  const [userId, setUserId] = useState(loggedUserId); // sender (prefilled, non-editable)
  const [recipientId, setRecipientId] = useState(""); // receiver id input
  const [amount, setAmount] = useState("");
  const [upiInput, setUpiInput] = useState(""); // UPI PIN entered by sender
  const [serverData, setServerData] = useState(null); // holds sender data
  const [recipientData, setRecipientData] = useState(null); // holds recipient data
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If logged-in userId exists, fetch sender info to display current balance etc.
    const fetchSender = async () => {
      if (!loggedUserId) return;
      try {
        const res = await axios.get(`http://localhost:9191/Userdata/${loggedUserId}`);
        setServerData(res.data);
        setUserId(loggedUserId);
      } catch (err) {
        console.error("Failed to fetch logged-in user:", err);
      }
    };
    fetchSender();
  }, [loggedUserId]);

  const handlePayment = async (e) => {
    e.preventDefault();

    // Basic validations
    if (!userId) {
      alert("Sender userId not found. Please login first.");
      return;
    }
    if (!recipientId) {
      alert("Please enter recipient user ID.");
      return;
    }
    if (!amount || parseInt(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    if (!upiInput) {
      alert("Please enter your UPI PIN.");
      return;
    }
    if (userId === recipientId) {
      alert("Sender and recipient cannot be the same.");
      return;
    }

    setLoading(true);

    try {
      // Fetch sender and recipient from backend using their IDs
      const [senderRes, recipientRes] = await Promise.all([
        axios.get(`http://localhost:9191/Userdata/${userId}`),
        axios.get(`http://localhost:9191/Userdata/${recipientId}`),
      ]);

      const sender = senderRes.data;
      const recipient = recipientRes.data;

      // Save fetched to state (show in UI)
      setServerData(sender);
      setRecipientData(recipient);

      // Validate UPI
      if (String(sender.upi) !== String(upiInput)) {
        alert("❌ Incorrect UPI PIN for sender.");
        setLoading(false);
        return;
      }

      // Validate balance
      const sendAmount = parseInt(amount, 10);
      const senderBalance = parseInt(sender.amount, 10);

      if (isNaN(senderBalance) || senderBalance < sendAmount) {
        alert("⚠️ Insufficient balance!");
        setLoading(false);
        return;
      }

      // All good -> perform transaction (update both users)
      const updatedSender = { ...sender, amount: senderBalance - sendAmount };
      const recipientBalance = parseInt(recipient.amount, 10) || 0;
      const updatedRecipient = { ...recipient, amount: recipientBalance + sendAmount };

      // Update backend (PUT to /Userdata/{id})
      // Note: your backend update method expects full User_credentials object with id path
      await Promise.all([
        axios.put(`http://localhost:9191/Userdata/${userId}`, updatedSender),
        axios.put(`http://localhost:9191/Userdata/${recipientId}`, updatedRecipient),
      ]);

      // Refresh local state with updated values
      setServerData(updatedSender);
      setRecipientData(updatedRecipient);

      alert("✅ Transaction Successful!");
      setAmount("");
      setUpiInput("");
    } catch (err) {
      console.error("Payment error:", err);
      if (err.response && err.response.status === 404) {
        alert("❌ One of the users was not found (check IDs).");
      } else {
        alert("⚠️ Failed to complete transaction. Check backend or network.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4">
      <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-full max-w-[520px]">
        <h2 className="text-2xl font-bold mb-4 text-center">💳 Payment Gateway</h2>

        {/* Show logged-in userId */}
        <div className="mb-4 text-sm text-gray-700">
          <p>
            <strong>Logged-in User ID:</strong>{" "}
            <span className="font-mono text-sm">{userId || "Not logged in"}</span>
          </p>
          {serverData && (
            <p>
              <strong>Available Balance:</strong> ₹{serverData.amount}
            </p>
          )}
        </div>

        <form onSubmit={handlePayment} className="flex flex-col gap-3">
          {/* Sender ID (prefilled, readonly) */}
          <input
            type="text"
            placeholder="Sender User ID (auto-filled)"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="p-2 border rounded-lg text-gray-700"
            required
            readOnly
          />

          {/* Recipient ID (editable) */}
          <input
            type="text"
            placeholder="Enter Recipient User ID"
            value={recipientId}
            onChange={(e) => setRecipientId(e.target.value)}
            className="p-2 border rounded-lg text-gray-700"
            required
          />

          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 border rounded-lg text-gray-700"
            required
            min="1"
          />

          <input
            type="password"
            placeholder="Enter Your UPI Pin"
            value={upiInput}
            onChange={(e) => setUpiInput(e.target.value)}
            className="p-2 border rounded-lg text-gray-700"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`py-2 rounded-lg font-semibold transition ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {loading ? "Processing..." : "Send Money"}
          </button>
        </form>

        {/* Show fetched sender & recipient info */}
        <div className="mt-4 text-sm text-gray-700">
          {serverData && (
            <div className="mb-2">
              <h3 className="font-semibold">Sender Info</h3>
              <p><strong>Name:</strong> {serverData.name}</p>
              <p><strong>Balance:</strong> ₹{serverData.amount}</p>
              <p><strong>UPI:</strong> **** (hidden)</p>
            </div>
          )}

          {recipientData && (
            <div>
              <h3 className="font-semibold">Recipient Info</h3>
              <p><strong>Name:</strong> {recipientData.name}</p>
              <p><strong>Balance:</strong> ₹{recipientData.amount}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
