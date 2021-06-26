import Card from "./card";
import React from "react";

function trendTabs() {
  const featured = [
    { category: "Black & Machined with Dark Tint", name: "Niche TARGA M130" },
    { category: "SATIN BLACK", name: "Niche Vosso M203" },
    { category: "ANTHRACITE", name: "Niche VOSSO M204" },
    { category: "Bronze", name: "Niche VICE M227" },
  ];
  function render_card(list) {
    return list.map((elem) => <Card data={elem} />);
  }
  return (
    <div className="container">
      <ul class="nav nav-tabs">
        <li class="active">
          <a data-toggle="tab" href="#Featured">
            Featured
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#Trending">
            Trending
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#BestSellers">
            Best Sellers
          </a>
        </li>
      </ul>

      <div class="tab-content">
        <div id="Featured" class="tab-pane show fade in active">
          <div className="container">
            <div className="row mt-5">{render_card(featured)}</div>
          </div>
        </div>
        <div id="Trending" class="tab-pane fade">
          <h3>Menu 1</h3>
          <p>Some content in menu 1.</p>
        </div>
        <div id="BestSellers" class="tab-pane fade">
          <h3>Menu 2</h3>
          <p>Some content in menu 2.</p>
        </div>
      </div>
    </div>
  );
}

export default trendTabs;
