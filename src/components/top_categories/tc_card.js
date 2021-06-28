import "./tc_card.css";
import React from 'react'

const Tc_card = (data) => {
  return (
      <React.Fragment>
          <div className="col-4 tc_hvr">
              <div className="row">
              <div className="col-4">
          PIC
      </div>
      <div className="col-8 tc_card">
          <p>{data.data.name}</p>
          <p><a href="#" className>See All</a></p>
      </div>  
              </div>
          </div>
      </React.Fragment>
  );
};

export default Tc_card;
