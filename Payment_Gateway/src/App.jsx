import { useState } from 'react'
import { Home, Signupp } from './Component/index.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Full screen container */}
      <div className="w-screen h-screen m-0 p-0 overflow-hidden">
        <Home />
        {/* <Signupp /> */}
      </div>
    </>
  )
}

export default App
