import React from "react";

import "./pcard.css";
import { demo } from "../../data/productdata";
import { product_data } from "../../data/productdata";

const ProductCard = () => {
  return (
    <div className="card-container">
      {product_data.map((item, idx) => (
        <div className="card" key={idx}>
          <div className="image">
            <img width={200} height={200} src={item.image} />
          </div>
          <div className="title">{item.name}</div>
          <div className="category">{item.category}</div>
          <div className="desc">{item.desc}</div>
          <div className="price">${item.price}</div>
        </div>
      ))}
      {/* <div className="card">
        <div className="image">
          <img width={200} height={200} src={demo.image} />
        </div>
        <div className="title">{demo.name}</div>
        <div className="category">{demo.category}</div>
        <div className="desc">{demo.desc}</div>
        <div className="price">{demo.price}</div>
      </div> */}
    </div>
  );
};

export default ProductCard;

// { image, title, category, desc, price }
