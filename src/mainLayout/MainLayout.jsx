import React from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      { children }
      <BottomNav />
    </>
  );
};

export default MainLayout;
