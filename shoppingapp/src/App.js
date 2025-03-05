import { useState } from "react";
import "./App.css";

export default function ShoppingApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Perfume", price: 800 },
    { id: 2, name: "Body wash", price: 500 },
    { id: 3, name: "Hair Spray", price: 100 },
  ];

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setCart([]);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <h1 className="title">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button onClick={handleLogin} className="button">Login</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Let's Do Shopping!!</h1>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <h2>Products Available</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: Rs {product.price}</p>
            <button onClick={() => addToCart(product)} className="button">Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}
