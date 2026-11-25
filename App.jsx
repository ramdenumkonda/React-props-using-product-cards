
import React from "react";
import "./App.css";

function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>₹{props.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Our Products</h1>
      <p>Explore Our Latest Products</p>

      <div className="product-container">

        <ProductCard
          name="Headphones"
          price="1,499"
          description="High quality wireless headphones."
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
        />

        <ProductCard
          name="Smart Watch"
          price="2,499"
          description="Modern smart watch."
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
        />

        <ProductCard
          name="Shoes"
          price="1,999"
          description="Comfortable shoes for daily use."
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
        />

        <ProductCard
          name="Backpack"
          price="999"
          description="Stylish everyday backpack."
          image="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
        />

      </div>
    </div>
  );
}

export default App;
