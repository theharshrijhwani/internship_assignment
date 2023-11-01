import React from "react";

import "./pwindow.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductWindow = () => {
  return (
    <div className="container">
      <div className="card-holder">
        <div className="heading">
          <h1>Products Available</h1>
        </div>
        <div className="card-section">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductWindow;
