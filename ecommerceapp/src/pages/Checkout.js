import React from "react";
import { useNavigate } from "react-router-dom"; 

export default function Checkout() {
    const navigate = useNavigate(); 

    const handleConfirmOrder = () => {
        alert("Order Placed Successfully!");
        navigate("/login"); 
    };

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h2>Checkout Page</h2>
            <p>Your order is being processed.</p>
            <button onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
    );
}
