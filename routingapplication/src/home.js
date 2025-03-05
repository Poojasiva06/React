import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to the Shopping App</h1>
      <p>Find the best products at the best prices.</p>
      <button className="shop-btn" onClick={() => navigate("/shop")}>
        Start Shopping
      </button>
    </div>
  );
}
