import React from "react";
import maPix from "../image/my_pix_7.jpg";
import Azure from "../image/microsoft_2.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home_container">
      <div className="img_wrapper">
        <div className="inner_img">
          <img src={maPix} alt="" className="ma_img" />
        </div>
      </div>
      <div className="body_container">
        <p className="body_description">I am....</p>
        <h3 className="body_name">MATTHEW UTTI</h3>
        <div className="body_cert_wrapper">
          <p className="body_cert">Microsoft Certified</p>
          <div className="microsoft_logo">
            <img src={Azure} className="micro" alt="Azure" />
          </div>
        </div>
        <h3 className="body_job">DATA SCIENTIST</h3>
        <div className="tune_in">
          Tune in to learn about me and have fun with surfing through my
          publications on the exciting world of data science
        </div>
        <div className="find_out">
          <div className="body_about">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <p className="link">ABOUT ME</p>
            </Link>
          </div>
          <div className="body_publication">
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <p className="link">PORTFOLIO</p>
            </Link>
          </div>
          <div className="body_publication">
            <Link to="/cv" style={{ textDecoration: "none" }}>
              <p className="link">CV</p>
            </Link>
          </div>
          <div className="body_publication">
            <Link to="/publications" style={{ textDecoration: "none" }}>
              <p className="link">PUBLICATION</p>
            </Link>
          </div>
          <div className="body_publication">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <p className="link">CONTRACT</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
