import React, { useState } from "react";
import "../styles/ShopPage.css";
import { useNavigate } from "react-router-dom";

export default function ShopPage() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const products = [
        { id: 1, name: "Lotus Design", price: 100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqXEh6LV7ZIprbMv2RlDZMzOIAmZoocGzgw&s" },
        { id: 2, name: "White Stoned Pendant", price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCHjK1FXMb6JUi5LIv5hwEKtWGrxwENVkgA&s" },
        { id: 3, name: "Oxidised Nosering", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VycWmKIM0tFJSy--0D9498dohlSw9jrM0A&s" },
        { id: 4, name: "Trendy Temple Gold Plated Elephant Necklace Set", price: 100, image: "https://www.sasitrends.com/cdn/shop/products/DSC08470_1a8bd818-ee2d-4777-938e-34586a48d344.jpg?v=1687931130" },
        { id: 5, name: "Morpankh Style Oxidised Silver Choker", price: 250, image:"https://www.thejewelbox.in/cdn/shop/files/MorpankhStyleOxidisedSilverChokerNecklaceSet-TheJewelbox.png?v=1694509570" },
        { id: 6, name: "Ravishing Silver Gold Plated Bangle", price: 100, image: "https://www.matapayals.com/cdn/shop/files/WhatsAppImage2025-01-07at5.14.14PM_2.jpg?v=1736254337&width=720" },
        { id: 7, name: "Gold Plated Fuse Ring", price: 100, image: "https://estele.co/cdn/shop/products/072_RING_1_31ad513d-d369-4f0f-bc4d-d070b32f6092.jpg?v=1688738388" },
        { id: 8, name: "Oxidized Bangle Set Of 6", price: 100, image: "https://www.jewelpalace.in/cdn/shop/products/7_4da62aca-4609-402e-b434-45ba31dd9df1_600x.jpg?v=1642674887" },
        { id: 9, name: "Love Heart Couple Matching", price: 180, image: "https://jewllerydesign.com/cdn/shop/products/His_HerLoveHeartSilverCoupleMatchingRings.jpg?v=1665667872" }
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="shop-container">

            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>₹{product.price}</p>
                        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <div className="cart-container">
                <h2>Shopping Cart</h2>
                {cart.length === 0 ? <p>Your cart is empty.</p> : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                {item.name} - ₹{item.price}
                                <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
                <h3>Total: ₹{totalPrice}</h3>
                <button className="buy-now-btn" onClick={() => navigate("/checkout")}>Buy Now</button>
                <p> </p>
                <button className="exit-btn" onClick={() => navigate("/login")}>Exit</button>
            </div>
        </div>
    );
}
