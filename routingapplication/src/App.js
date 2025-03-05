import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import shoppingpage from "./shoppingpage";
import Navbar from "./navbar";

export default function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<shoppingpage />} />
      </Routes>
    </Router>
  );
}
