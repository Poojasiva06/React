import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import JewelryList from "./components/JewelryList";
import "./App.css"; // Import the CSS file

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (item) => {
    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify([...cart, item]));
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handlePlaceOrder = () => {
    if (cart?.length > 0) {
      alert(`Order placed successfully! Total: $${calculateTotal()}`);
      clearCart();
    } else {
      alert("Your cart is empty");
    }
  };

  const HomePage = () => {
    const handleLogout = () => {
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("cart");
      window.location.href = "/login";
    };

    return (
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome to the Jewelry Store!</h1>
          <button onClick={handleLogout} className="logout-button">
            Exit
          </button>
        </header>
        <JewelryList addToCart={addToCart} />
        <div className="cart-container">
          <h2>Shopping Cart</h2>
          <ul>
            {cart?.map((item) => (
              <li key={item.id} className="cart-item">
                {item.name} - ${item.price}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          {cart?.length > 0 && (
            <div>
              <p className="total-price">Total: ${calculateTotal()}</p>
              <button onClick={handlePlaceOrder} className="buy-button">
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;