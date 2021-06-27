import Card from "./card";
import './trend_tabs.css'

function Trendtabs() {

  let removeClass = e =>{
    console.log("hi")
    document.getElementById("tab1").classList.add("active")
  }
  const featured = [
    { category: "Black & Machined with Dark Tint", name: "Niche TARGA M130" },
    { category: "SATIN BLACK", name: "Niche Vosso M203"},
    { category: "ANTHRACITE", name: "Niche VOSSO M204"},
    { category: "Bronze", name: "Niche VICE M227"},
  ];
  function render_card(list) {
    return list.map((elem) => <Card data={elem} />);
  }
  return (
    <div className="container mt-4 pb-5">
      <ul className="nav nav-tabs ultab1">
        <li className="tab1 active">
          <a data-toggle="tab" className="active" href="#Featured" id="tab1">
            <b>Featured</b>
          </a>
        </li>
        <li className="tab1" >
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
            <div className="row mt-5">{render_card(featured)}</div>
          </div>
        </div>
        <div id="Trending" className="tab-pane fade nactive">
        <div className="row mt-5">{render_card(featured)}</div>
        </div>
        <div id="BestSellers" className="tab-pane fade nactive">
        <div className="row mt-5">{render_card(featured)}</div>
        </div>
      </div>
    </div>
  );
}

export default Trendtabs;
