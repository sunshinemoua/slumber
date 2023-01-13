import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Welcome from "../components/Welcome";
import About from "../components/About";
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
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/FAQs" element={<FAQs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
