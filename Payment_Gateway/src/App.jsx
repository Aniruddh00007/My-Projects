import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signupp from "../Component/Signupp";
import Home from "./Home";
import Payment from "./Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signupp/>} />
        <Route path="/signupp" element={<Signupp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
