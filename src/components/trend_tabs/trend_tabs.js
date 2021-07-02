import CardCarousel from "./card_carousel";
import "./trend_tabs.css";
import Card from "./card";
import axios from "axios";
import { useEffect, useState } from "react";

function Trendtabs() {
  console.log("TrendTabs has been been called");

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [response_data, setResponseData] = useState("");
  useEffect(() => {
    fetch_trending_data();
  },[]);


  function render_card(list) {
    console.log("insode render_card", list);
    if (list.length>0) return list.map((elem) => <Card data={elem} />);
    else
    {
      console.log("inside else")
      return null
    };
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
  return (
    <div className="container mt-4 pb-5">
      <ul className="nav nav-tabs ultab1">
        <li className="tab1 ">
          <a data-toggle="tab" className="active" href="#Featured">
            <b>Featured</b>
          </a>
        </li>
        <li className="tab1">
          <a data-toggle="tab" href="#Trending">
            <b>Trending</b>
          </a>
        </li>
        <li className="tab1 active">
          <a data-toggle="tab" href="#BestSellers">
            <b>Best Sellers</b>
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div id="Featured" className="tab-pane show fade in active">
          <div className="row mt-5">
            <div className="col-12">
            <CardCarousel data={response_data} />
            </div>
          </div>
        </div>
        <div id="Trending" className="tab-pane fade in">
          <div className="row mt-5">
            <div className="col-12">
            <CardCarousel data={response_data} />
          </div>
          </div>
        </div>
        <div id="BestSellers" className="tab-pane fade in">
          <div className="row mt-5">
            <div className="col-12">
            <CardCarousel data={response_data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trendtabs;

