import React from "react";
import Sidebar from "./Sidebar";
import cv from "../image/cv.png";

const Cv = () => {
  return (
    <div className="about_container">
      <Sidebar />
      <div className="about_wrapper cv_wrap">
        <div className="about_content cv_about">
          <h3 className="cv_header">CV - Curriculum Vitae</h3>
          <div className="cv_content">
            <img src={cv} className="cv" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
