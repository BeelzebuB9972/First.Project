import Card from "./bs_card";
import "./best_sellers.css";

function Best_Selleres() {
  let bestSellers = () => {
    let best_sellers_data = [
      {
        category: "Black & Machined with Dark Tint",
        name: "Niche TARGA M130",
        sale: "yes",
        price: "",
        discount: "",
      },
      {
        category: "SATIN BLACK",
        name: "Niche Vosso M203",
        sale: "yes",
        price: "",
        discount: "",
      },
      {
        category: "ANTHRACITE",
        name: "Niche VOSSO M204",
        price: "",
        discount: "",
      },
      { category: "Bronze", name: "Niche VICE M227", price: "" },
      {
        category: "Race Series",
        name: "Borla XR1 2.50 40941 Core Oval Small Body",
        price: "18,000.00",
      },
      {
        category: "ProXS Series(Non Polished Without Tip)",
        name: "Borla ProXS 2.50 40941 Core 40659",
        price: "14,000.00",
      },
    ];
    return best_sellers_data.map((elem) => <Card data={elem} />)
  };
  return (
    <div className="container mt-4 pb-5">
      <ul className="nav nav-tabs ultab2">
        <li className="bstitle">
          <a>
            <b>Best Sellers</b>
          </a>
        </li>
        <li className="tab2 active">
          <a data-toggle="tab" className="active" href="#Sports_Mufflers">
            <b>Sports Mufflers</b>
          </a>
        </li>
        <li className="tab2">
          <a data-toggle="tab" href="#Subwoofers">
            <b>Subwoofers</b>
          </a>
        </li>
        <li className="tab2">
          <a data-toggle="tab" href="#Component_Speakers">
            <b>Component Speakers</b>
          </a>
        </li>
        <li className="tab2">
          <a data-toggle="tab" href="#Suspension">
            <b>Suspension</b>
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div
          id="Sports_Mufflers"
          className="tab-pane show fade in active nactive"
        >
          <div className="container">
            <div className="row mt-5">
                <div className="col-7">
                    <div className="row">
                        {bestSellers()}
                    </div>
                </div>
                <div className="w-100 col-5 bg-warning"></div>
            </div>
          </div>
        </div>
        <div id="Subwoofers" className="tab-pane fade nactive">
          <div className="row mt-5">TAB CONTENT</div>
        </div>
        <div id="Component_Speakers" className="tab-pane fade nactive">
          <div className="row mt-5">TAB CONTENT</div>
        </div>
        <div id="Suspension" className="tab-pane fade in active nactive">
          <div className="container">
            <div className="row mt-5">TAB CONTENT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Best_Selleres;
