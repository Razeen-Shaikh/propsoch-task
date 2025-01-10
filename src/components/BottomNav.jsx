import React from "react";
import "./styles.css";
import { FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <Link to="/" className="nav-item">
        <FaSearch />
        <span>Explore</span>
      </Link>
      <div className="nav-item">
        <FaRegHeart />
        <span>Wishlists</span>
      </div>
      <div className="nav-item">
        <FiMapPin />
        <span>Show map</span>
      </div>
      <div className="nav-item">
        <FaRegUser />
        <span>Log In</span>
      </div>
    </div>
  );
};

export default BottomNav;
