import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";


import Navbar from "./Component/Navbar.jsx"; // Navbar Component
import Signupp from "./Component/Signupp.jsx"; 
import Profile from "./Component/profile.jsx";
import Home from "./Component/Home.jsx"; // Home Page
import Payment from "./Component/Payment.jsx"; // Payment Page

function AppRoutes() {
  return (
    <BrowserRouter>
      {/* Navbar will be shown on every page */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Signupp />} /> {/* Default = Login Page */}
        <Route path="/login" element={<Signupp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
         <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
