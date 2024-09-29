import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";

const Root = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className=" grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;