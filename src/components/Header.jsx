import React from "react";
import { logo } from "../data/products";
import "./styles.css";

const Header = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="logo" className="logo" />
    </div>
  )
};

export default Header;
