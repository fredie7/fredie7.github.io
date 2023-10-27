import React from "react";
import { ImHome } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_wrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <ImHome fontSize={28} className="font_icon" />
        </Link>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <BsGithub fontSize={28} className="font_icon" />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/matthew-utti"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <BsLinkedin fontSize={28} className="font_icon" />
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <FaHeadphones fontSize={28} className="font_icon" />
        </Link>
        <Link to="/cv" style={{ textDecoration: "none" }}>
          <FaBookReader fontSize={28} className="font_icon" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
