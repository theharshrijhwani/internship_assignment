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
  const [productData, setProductData] = useState(product_data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", (e) => {
      setSearch(e.target.value.toLowerCase());
    });
    console.log(search);
  }, []);

  useEffect(() => {
    const sortedData = [productData].sort((a, b) => a.price - b.price);
    setProductData(sortedData[0]);
    console.log(sortedData);
  }, [filter, productData]);

  return (
    <div className="pw-container">
      <div className="pw-card-holder">
        <div className="pw-heading">
          <h1>Products Available</h1>
        </div>
        <div className="pw-options">
          <div className="search">
            <input id="search-bar" type="text" placeholder="Search" />
          </div>
          <div className="filter-container">
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
        </div>
        <div className="pw-card-section">
          <div className="pw-card-container">
            {search === ""
              ? filter === null
                ? category === null
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
                      ))
                : category === null
                ? product_data
                    .sort((a, b) =>
                      filter === "asc" ? a.price - b.price : b.price - a.price
                    )
                    .map((item, idx) => (
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
                    .sort((a, b) =>
                      filter === "asc" ? a.price - b.price : b.price - a.price
                    )
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
                    ))
              : filter === null
              ? category === null
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
                    ))
              : category === null
              ? product_data

                  .sort((a, b) =>
                    filter === "asc" ? a.price - b.price : b.price - a.price
                  )
                  .map((item, idx) => (
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

                  .sort((a, b) =>
                    filter === "asc" ? a.price - b.price : b.price - a.price
                  )
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
            {/* {filter === null
              ? category === null
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
                    ))
              : category === null
              ? product_data
                  .sort((a, b) =>
                    filter === "asc" ? a.price - b.price : b.price - a.price
                  )
                  .map((item, idx) => (
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
                  .sort((a, b) =>
                    filter === "asc" ? a.price - b.price : b.price - a.price
                  )
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
                  ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWindow;
