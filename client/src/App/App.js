import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import History from "../components/History/History";
import Login from "../Login/Login.js";
import useToken from "../hooks/useToken.js";

function App() {
  const { token, setToken } = useToken();

  if (token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
