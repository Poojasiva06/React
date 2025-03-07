import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css"; 

export default function LoginPage() {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="welcome-text">WELCOME TO POOJA'S FASHION</h1>  
                <h2>Login</h2>
                <input type="text" placeholder="Enter Email" className="input-field" />
                <input type="password" placeholder="Enter Password" className="input-field" />
                <button className="login-btn" onClick={() => navigate("/shop")}>Login</button>
            </div>
        </div>
    );
}
