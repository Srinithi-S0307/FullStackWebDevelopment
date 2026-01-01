import React, { useState } from "react";

export default function ECommerce() {

  const products = [
    { id: 1, name: "Wireless Headphones", price: 1999 },
    { id: 2, name: "Smart Watch", price: 2999 },
    { id: 3, name: "Bluetooth Speaker", price: 1499 },
    { id: 4, name: "Power Bank", price: 999 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`✔ ${product.name} added to cart`);
  };

  return (
    <div className="container">
      <h1>🛒 Simple E-Commerce Store</h1>

      <div className="shop">
        <div className="products">
          <h2>Products</h2>
          {products.map((p) => (
            <div key={p.id} className="card">
              <p>{p.name}</p>
              <p>₹ {p.price}</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <div className="cart">
          <h2>🧺 Cart ({cart.length})</h2>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              {item.name} - ₹ {item.price}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(120deg, #232526, #414345);
        }

        .container {
          min-height: 100vh;
          padding: 30px;
          color: white;
          text-align: center;
        }

        .shop {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .products, .cart {
          background: rgba(255,255,255,0.15);
          padding: 20px;
          border-radius: 15px;
          width: 300px;
        }

        .card {
          background: rgba(0,0,0,0.3);
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        button {
          padding: 6px 12px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #f7971e, #ffd200);
          color: #333;
          cursor: pointer;
        }

        .cart-item {
          background: rgba(0,0,0,0.3);
          padding: 8px;
          border-radius: 8px;
          margin-bottom: 6px;
        }
      `}</style>
    </div>
  );
}