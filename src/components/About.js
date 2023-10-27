import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about_container">
      <Sidebar />
      <div className="about_wrapper">
        <div className="about_content">
          <div className="academic abt">
            <h4 className="academic_experience">ACADEMIC BACKGROUND</h4>
            <p className="academic_exp">
              I’m a Bachelor’s degree holder in Mathematics and Computer Science
              from the National Open University of Nigeria, and currently on a
              Master’s degree program in Business Analytics, Computer Science
              and Engineering at the University of Oulu, Finland.
            </p>
          </div>
          <div className="professional abt">
            <h4 className="professional_experience">PROFESSIONAL BACKGROUND</h4>
            <p className="professional_exp">
              I have 2 years of professional experience as a data scientist and
              it’s been fun collaborating with cross-functional teams while
              ensuring accuracy and integrity around data driven solutions,
              along with accompanying actionable insights, in furtherance of
              strategic business goals and efficiency
            </p>
          </div>
          <div className="more_about abt">
            <h4 className="more_experience">MORE ABOUT ME</h4>
            <p className="more_exp">
              I’m passionate about driving innovation and growth in a classic
              forward-thinking organization through synthesizing and identifying
              patterns within relevant datasets, using algorithmic thought
              processes and advanced analytical techniques, for measurable and
              sustainable business outcome.
            </p>
          </div>
          <div className="available">
            <p className="avai">I’m available to being hired ……………………..</p>
          </div>
          <div className="find_out">
            <div className="body_about">
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <p className="link">CONTACT ME</p>
              </Link>
            </div>
            <div className="body_publication">
              <Link to="/portfolio" style={{ textDecoration: "none" }}>
                <p className="link">PORTFOLIO</p>
              </Link>
            </div>
            <div className="body_publication">
              <Link to="/CV" style={{ textDecoration: "none" }}>
                <p className="link">CV</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
