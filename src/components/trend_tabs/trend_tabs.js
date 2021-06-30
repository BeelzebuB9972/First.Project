import CardCarousel from "./card_carousel";
import "./trend_tabs.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Trendtabs() {
  console.log("TrendTabs has been been called");
  const [response_data, setResponseData] = useState("");
  useEffect(() => {
    fetch_trending_data();
  }, []);

  var trending_url = "https://jsonplaceholder.typicode.com/users";
  let fetch_trending_data = () => {
    axios
      .get(trending_url)
      .then((response) => {
        console.log("inside get", response);
        setResponseData(response);
      })
      .catch((err) => console.log(err.response.data));
  };
  return (
    <div className="container mt-4 pb-5">
      <ul className="nav nav-tabs ultab1">
        <li className="tab1 active">
          <a data-toggle="tab" className="active" href="#Featured" id="tab1">
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
        <div id="Featured" className="tab-pane show fade in active nactive">
          <div className="container">
            <div className="row mt-5">
              <div className="col-12">
                <CardCarousel data={response_data} />
              </div>
            </div>
          </div>
        </div>
        <div id="Trending" className="tab-pane fade nactive">
          <div className="row mt-5">
            <CardCarousel data={response_data} />
          </div>
        </div>
        <div id="BestSellers" className="tab-pane fade nactive">
          <div className="row mt-5">
            <CardCarousel data={response_data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trendtabs;

// const featured = [
//   { category: "Black & Machined with Dark Tint", name: "Niche TARGA M130" },
//   { category: "SATIN BLACK", name: "Niche Vosso M203"},
//   { category: "ANTHRACITE", name: "Niche VOSSO M204"},
//   { category: "Bronze", name: "Niche VICE M227"},
// ];
