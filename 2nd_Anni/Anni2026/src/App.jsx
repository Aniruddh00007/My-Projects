import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import FirstPage from "./Components/Firstpage";
import Login from "./Components/Login";
import Home from "./Components/Home";
import OpenWhen from "./Components/OpenWhen";
import MiniGames from "./Components/minigames";
import MemoryRoom from "./Components/MemoryRoom";
import Envelop from "./Components/Envelop";
import SecretPage from "./Components/SecretPage";
import Final from "./Components/Final";

function App() {
  return (
        <>
     <ScrollToTop />
    <Routes>   

      
      {/* DEFAULT PAGE */}
      <Route path="/" element={<FirstPage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/openwhen" element={<OpenWhen />} />
      <Route path="/mini-games" element={<MiniGames />} />
      <Route path="/memory-room" element={<MemoryRoom />} />
      <Route path="/envelop" element={<Envelop />} />
      <Route path="/secret" element={<SecretPage />} />
      <Route path="/final" element={<Final />} />

      {/* WRONG URL → FIRST PAGE */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>

    </>
  );
}

export default App;