import React from "react";

import "./pcard.css";

const ProductCard = ({ image, title, category, desc, price }) => {
  return (
    <div className="card">
      <div className="image">
        <img width={200} height={200} src={image} />
      </div>
      <div className="title">{title}</div>
      <div className="category">{category}</div>
      <div className="desc">{desc}</div>
      <div className="price">${price}</div>
    </div>
  );
};

export default ProductCard;
