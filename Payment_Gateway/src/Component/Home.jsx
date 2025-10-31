import React from 'react'

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-900 text-white">
      
      {/* Header */}
      <div className="bg-gradient-to-tl from-blue-900 via-blue-700 to-blue-500 h-14 flex items-center shadow-lg px-5">
        <h1 className="text-2xl font-bold font-serif text-white">Welcome to Payment Gateway</h1>
      </div>

      {/* Center Content */}
      <div className="flex flex-col flex-grow items-center justify-center">
        <div className="bg-blue-800 p-8 rounded-xl shadow-lg w-full max-w-md text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Home Page</h2>
          <p className="text-gray-200">
            This is the home page of the Payment Gateway application.
          </p>
        </div>

        {/* Button */}
        <button className="mt-8 bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300">
          Make Payment
        </button>
      </div>
    </div>
  )
}

export default Home
