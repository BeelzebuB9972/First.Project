import React from "react";
import "./features.css";

function features() {
  return (
    <React.Fragment>
      <div className="container f-pad">
        <div className="row">
          <div className="col">
            <div className="row f-rbdr">
              <div className="col-3">
                <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col">Heading</div>
                  <div className="col">Footing</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row f-rbdr">
              <div className="col-3">
                <i className="fas fa-envelope-square fa-2x"></i>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col">Heading</div>
                  <div className="col">Footing</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row f-rbdr">
              <div className="col-3">
                <i
                  className="fas fa-shipping-fast fa-2x"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col">Heading</div>
                  <div className="col">Footing</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row f-rbdr">
              <div className="col-3">
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col">Heading</div>
                  <div className="col">Footing</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-3">
                <i className="fas fa-exchange-alt fa-2x"></i>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col">Heading</div>
                  <div className="col">Footing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-6 ">
            <div className="col-12 feature-pic">
            <div className="col-12 fani"></div>
            </div>
          </div>
          <div className="col-6">
            <div className="col-12 feature-pic">
            <div className="col-12 fani"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default features;
