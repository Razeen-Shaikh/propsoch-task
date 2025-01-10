import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../screens/Homepage";
import ProductDetail from "../screens/ProductDetail";

const BaseRouter = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/product/:productId" element={<ProductDetail />} />
  </Routes>
);
export default BaseRouter;