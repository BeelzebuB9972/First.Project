import "./top_section.css";
import React from "react";

function top_section() {
  return (
    <React.Fragment>
      <div className="container top_section">
        <div className="row">
          <p className="col-2">
            <i className="yellove fa fa-phone" aria-hidden="true"></i>
            <span className="top_section_span">9882673489</span>
          </p>
          <p className="col-2">
            <i className="yellove fas fa-envelope-square"></i>
            <span className="top_section_span">abc@xyz.com</span>
          </p>
          <p className="offset-md-4 col-md-4">
            <a href="#" className="top_hover">
              <i className="fas fa-shipping-fast" aria-hidden="true"></i>
              <span className="top_section_span">Your order</span>
            </a>
            <span className="m-4">|</span>
            <span className="top_hover">
              <span className="top_section_span">
                <a href="#" className="top_section_span top_hover">
                  <i className="fa fa-user" aria-hidden="true"></i> Register{" "}
                </a>
              </span>
            </span>
            or
            <a href="#" className="top_section_span top_hover">
              Sign-in
            </a>
          </p>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default top_section;
