import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  const _LandingPage = Auth(LandingPage, null);
  const _LoginPage = Auth(LoginPage, false);
  const _RegisterPage = Auth(RegisterPage, false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<_LandingPage />}></Route>
        <Route path="/login" element={<_LoginPage />}></Route>
        <Route path="/register" element={<_RegisterPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
