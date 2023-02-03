import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import History from "../components/History";
import FAQs from "../components/FAQs";
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/FAQs" element={<FAQs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
