import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";

const Layout = () => {
  return (
    <>
      <div className="layout_container">
        <Sidebar />
        <Home />
      </div>
    </>
  );
};

export default Layout;
