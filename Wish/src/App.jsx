import React, { useState } from 'react';
import './App.css';
import { Hero, Login, Navbar,Love, Wish,Contact , Indexx } from "./Component/Index";

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);

  return (
    <> 
    
   
        

      {loggedIn ? (
        <Hero />  // Show Hero page if logged in
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
