import React from 'react';
import { jewelryItems } from '../data';
import './JewelryList.css'; 

const JewelryList = ({ addToCart }) => {
  return (
    <div className="jewelry-list">
      {jewelryItems.map((item) => (
        <div key={item.id} className="jewelry-item">
          <img src={item.imageUrl} alt={item.name} className="jewelry-image" />
          <h3 className="jewelry-name">{item.name}</h3>
          <p className="jewelry-price">Rs. {item.price}</p>
          <button onClick={() => addToCart(item)} className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default JewelryList;