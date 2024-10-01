import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";

const Root = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="max-w-7xl  mx-auto">
        <Header />
        <div className="grow">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
