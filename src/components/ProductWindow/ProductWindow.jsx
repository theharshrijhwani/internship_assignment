import React, { useEffect, useState } from "react";

import "./pwindow.css";

import ProductCard from "../ProductCard/ProductCard";

import { product_data } from "../../data/productdata";
import { categories } from "../../data/categories";
import { filters } from "../../data/filters";
import Dropdown from "../Dropdown/Dropdown";
import remove from "../../assets/remove.png";

const ProductWindow = () => {
  const [category, setCategory] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <div className="pw-container">
      <div className="pw-card-holder">
        <div className="pw-heading">
          <h1>Products Available</h1>
        </div>
        <div className="pw-options">
          <img
            src={remove}
            width={20}
            height={20}
            style={{
              backgroundColor: "transparent",
              filter: "invert(1)",
              cursor: "pointer",
            }}
            onClick={() => {
              setFilter(null);
              setCategory(null);
            }}
          />
          <Dropdown
            placeholder="Category"
            values={categories}
            func={setCategory}
          />
          <Dropdown placeholder="Filters" values={filters} func={setFilter} />
        </div>
        <div className="pw-card-section">
          <div className="pw-card-container">
            {category === null
              ? product_data.map((item, idx) => (
                  <ProductCard
                    key={idx}
                    title={item.name}
                    price={item.price}
                    image={item.image}
                    desc={item.desc}
                    category={item.category}
                  />
                ))
              : product_data
                  .filter((item) => item.category === category)
                  .map((item, idx) => (
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
