import React from "react";

import "./pcard.css";

const ProductCard = ({ image, title, category, desc, price }) => {
  return (
    <div className="pc-card">
      <div className="pc-image">
        <img width={200} height={200} src={image} />
      </div>
      <div className="pc-title">{title}</div>
      <div className="pc-category">{category}</div>
      <div className="pc-desc">{desc}</div>
      <div className="pc-price">${price}</div>
    </div>
  );
};

export default ProductCard;
