import "./top_section.css";
import React from "react";

function top_section() {
  return (
    <React.Fragment>
      <div className="container top_section">
        <div className="row">
          <div className="col-2 mq-hid">
            <i className="yellove fa fa-phone" aria-hidden="true"></i>
            <span className="top_section_span">9882673489</span>
          </div>
          <div className="col-2 mq-hid">
            <i className="yellove fas fa-envelope-square"></i>
            <span className="top_section_span">abc@xyz.com</span>
          </div>
          <div className="offset-md-4 col-md-4 col-sm-12 mq-center">
            <a href="#" className="top_hover mq-hid">
              <i className="fas fa-shipping-fast" aria-hidden="true"></i>
              <span className="top_section_span">Your order</span>
            </a>
            <span className="m-2 mq-hid">|</span>
            <span className="top_hover">
              <span className="top_section_span">
                <a href="#" className="top_section_span top_hover">
                  <i className="fa fa-user" aria-hidden="true"></i> Register{" "}
                </a>
              </span>
            </span>
            &nbsp;or
            <a href="#" className="top_section_span top_hover">
              Sign-in
            </a>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default top_section;
