import React, { useState } from "react";
import down from "../../assets/down.png";

import "./dropdown.css";

const Dropdown = ({ placeholder, values, func }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="dropdown-container">
      <div
        className="dropdown-name"
        onClick={() => {
          setShow(!show);
        }}
      >
        {placeholder}
        <img
          src={down}
          width={20}
          height={20}
          style={{ backgroundColor: "transparent", filter: "invert(1)" }}
        />
      </div>
      {show ? (
        <div className="dropdown-menu">
          <ul>
            {values.map((item, idx) => (
              <>
                <li
                  key={idx}
                  onClick={() => {
                    item.custom === null ? func(item.name) : func(item.custom);
                    setShow(false);
                  }}
                >
                  {item.name}
                </li>
                <div className="seperator" key={idx}></div>
              </>
            ))}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const DropdownItem = ({ value, onClick }) => {
  <li>{value}</li>;
};

export default Dropdown;
