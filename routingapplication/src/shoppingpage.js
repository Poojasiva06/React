import React, { useState } from "react";
import "./shoppingpage.css";

export default function ShoppingPage() {
  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Smartphone", price: 500 },
    { id: 3, name: "Headphones", price: 100 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
  };

  return (
    <div className="shop-container">
      <h1>Shop Our Products</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>🛒 Cart ({cart.length} items)</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}
