import React, { useState } from "react";
import FirstPage from "./Components/Firstpage";
import Login from "./Components/Login";

function App() {

  const [page, setPage] = useState("first");

  return (
    <>
      {page === "first" && (
        <FirstPage
          onContinue={() => setPage("login")}
        />
      )}

      {page === "login" && (
        <Login
          onLogin={() => setPage("home")}
        />
      )}

      {page === "home" && (
        <div>
          Our World ❤️
        </div>
      )}
    </>
  );
}

export default App;