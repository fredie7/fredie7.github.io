import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Portfolio = () => {
  return (
    <div className="layout_container">
      <Sidebar />
      <div className="about_wrapper portfolio_wrap">
        <div className="about_content">
          <h4 className="see_portfolio">PORTFOLIO PROJECTS</h4>
          <div className="academic abt">
            <h4 className="academic_experience proj">PROJECTS</h4>
            <br />
            <br />
            <h4 className="academic_experience">
              DIABETES DIAGNOSTIC APPLICATION PROJECT
            </h4>
            <div className="academic_exp">
              A diabetes diagnostics application implemented using decision tree
              classifier which accurately predicts the diabetic status of
              patients with regards to being diabetic, non-diabetic nor
              predicted-diabetic. This features an integration of the model with
              an API, using python, as well as a front end interface to ease
              user experience.
              <br />
              <br />
              Access the front end interface using the link below:
              <br />
              <br />
              <Link
                to={"https://master--majestic-chimera-35e6a4.netlify.app/"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="diabetes_linkk">
                  https://master--majestic-chimera-35e6a4.netlify.app/
                </p>
              </Link>
              <br />
              Diabetes Diagnostics Project Portfolio:
              <br />
              <br />
              <Link
                to={"https://github.com/fredie7/diabetes_diagnostics_api"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="diabetes_linkk">
                  https://github.com/fredie7/diabetes_diagnostics_api
                </p>
              </Link>
              <br />
              More detailed analysis with accompanying visuals can be accessed
              from the following link below:
              <br />
              <br />
              <Link
                to={
                  "https://github.com/fredie7/diabetes_diagnostics_api/blob/main/Untitled.ipynb"
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="diabetes_linkk">
                  https://github.com/fredie7/diabetes_diagnostics_api/blob/main/Untitled.ipynb
                </p>
              </Link>
            </div>
          </div>
          <div className="professional abt">
            <h4 className="professional_experience">
              SALES ENHANCEMENT MODEL BACKED BY CUSTOMER BEHAVIOUR ANALYTICS
            </h4>
            <p className="professional_exp">
              A machine learning model built to tweak customer behavior in a
              seemingly foredoomed business that was on the verge of losing a
              huge number of customer base. Here, a super store giant sought to
              find out and nullify factors debilitating against her business and
              figure out what works best for them, in efforts to optimizing
              sales and maximizing profit potential.
            </p>
          </div>
          <div className="more_about abt">
            <p className="more_experience">
              Sales Enhancement Project portfolio:
            </p>
            <br />
            <Link
              to={"https://github.com/fredie7/change_customer_behaviour"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p className="diabetes_linkk">
                https://github.com/fredie7/change_customer_behaviour
              </p>
            </Link>
            <br />
            More detailed analysis with accompanying visuals can be accessed
            from the following link below:
            <br />
            <Link
              to={
                "https://github.com/fredie7/change_customer_behaviour/blob/main/sales_pred.ipynb"
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p className="diabetes_linkk">
                https://github.com/fredie7/change_customer_behaviour/blob/main/sales_pred.ipynb
              </p>
            </Link>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
