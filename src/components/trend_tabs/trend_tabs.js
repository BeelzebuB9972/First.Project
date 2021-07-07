import "./trend_tabs.css";
import Card from "./card";
import axios from "axios";
import { useEffect, useState } from "react";
import {connect} from 'react-redux'

function Trendtabs(data) {
  console.log("TrendTabs has been been called");
  function render_card(list) {
    console.log("INSIDE CARD CAROUSEL", list);
    if (list) {
      console.log("inside iff");
      return list.map((elem, index) => {
        return <Card key={index} data={elem} />;
      });
    } else {
      console.log("inside else");
      return null;
    }
  }

  const [response_data, setResponseData] = useState("");
  useEffect(() => {
    fetch_trending_data();
  }, []);

  let tab1
  let tab2
  let tab3
useEffect(()=>{
   tab1 = document.getElementById("tab1")
   tab2 = document.getElementById("tab2")
   tab3 = document.getElementById("tab3")
})
  
  function render_card(list,id) {
    console.log("insode render_card", list);
    if (list.length > 0) return list.map((elem) => <Card data={elem} dispatch={data.dispatch} />);
    else {
      console.log("inside else");
      return null;
    }
  }

  var trending_url = "https://jsonplaceholder.typicode.com/users";
  let fetch_trending_data = () => {
    axios
      .get(trending_url)
      .then((response) => {
        console.log("inside get", response);
        setResponseData(response.data);
      })
      .catch((err) => console.log(err.response));
  };

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  return (
    <div className="container mt-4 pb-5">
      <ul className="nav ultab1">
        <li className="tab1 active">
          <a data-toggle="tab" className="active" href="#Featured">
            <b>Featured</b>
          </a>
        </li>
        <li className="tab1">
          <a data-toggle="tab" href="#Trending">
            <b>Trending</b>
          </a>
        </li>
        <li className="tab1">
          <a data-toggle="tab" href="#BestSellers">
            <b>Best Sellers</b>
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div id="Featured" className="tab-pane show fade in active">
          <div className="row mt-5 d-flex flex-row flex-nowrap horscroll" id="tab1">
            {render_card(response_data,"Featured")}
            </div>
            <div className="d-flex justify-content-center mt-3">
    <button
      id="slideBack"
      className="btn btn-warning mr-3"
      onClick={() => {
        sideScroll(tab1, "left", 35, 400, 40);
      }}
    >
      <i class="fas fa-chevron-left"></i>
    </button>
    <button
      id="slide"
      className="btn btn-warning"
      onClick={() => {
        sideScroll(tab1, "right", 35, 400, 40);
      }}
    >
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
        </div>
        <div id="Trending" className="tab-pane fade in">
          <div className="row mt-5 d-flex flex-row flex-nowrap horscroll" id="tab2">
          {render_card(response_data,"Trending")}
          </div>
          <div className="d-flex justify-content-center mt-3">
    <button
      id="slideBack"
      className="btn btn-warning mr-3"
      onClick={() => {
        sideScroll(tab2, "left", 35, 400, 40);
      }}
    >
      <i class="fas fa-chevron-left"></i>
    </button>
    <button
      id="slide"
      className="btn btn-warning"
      onClick={() => {
        sideScroll(tab2, "right", 35, 400, 40);
      }}
    >
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
        </div>
        <div id="BestSellers" className="tab-pane fade in">
          <div className="row mt-5 d-flex flex-row flex-nowrap horscroll" id="tab3">
            {render_card(response_data,"BestSellers")}
            </div>
            <div className="d-flex justify-content-center mt-3">
    <button
      id="slideBack"
      className="btn btn-warning mr-3"
      onClick={() => {
        sideScroll(tab3, "left", 35, 400, 40);
      }}
    >
      <i class="fas fa-chevron-left"></i>
    </button>
    <button
      id="slide"
      className="btn btn-warning"
      onClick={() => {
        sideScroll(tab3, "right", 35, 400, 40);
      }}
    >
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(Trendtabs);
