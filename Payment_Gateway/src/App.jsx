import { useState } from 'react'
import Payment from './Component/Payment.jsx'  // ✅ Correct import
import Home from './Component/Home.jsx'
import Signupp from './Component/Signupp.jsx'
import './App.css'

function App() {
  return (
    <>
      <div className="w-screen h-screen m-0 p-0 overflow-hidden">
        <Payment /> 
        {/* <Home/>  ✅ Render Payment instead of Home */}
        {/* <Signupp/> */}
      </div>
    </>
  )
}

export default App
