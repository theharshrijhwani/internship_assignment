import React from "react";

import "./pwindow.css";
import ProductCard from "../ProductCard/ProductCard";

import { product_data } from "../../data/productdata";

const ProductWindow = () => {
  return (
    <div className="container">
      <div className="card-holder">
        <div className="heading">
          <h1>Products Available</h1>
        </div>
        <div className="options"></div>
        <div className="card-section">
          <div className="card-container">
            {product_data.map((item, idx) => (
              <ProductCard
                key={idx}
                title={item.name}
                price={item.price}
                image={item.image}
                desc={item.desc}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWindow;
