import TcCard from "./tc_card.js";
import './top_categories.css'

function top_categories() {
  const arr = [
    { name: "Bodykits in India" },
    { name: "Sports Mufflers" },
    { name: "Eibach Lowering Springs" },
    { name: "Subwoofers" },
    { name: "Light Force Lights" },
    { name: "Accessories" },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <span className="tcfont">
            <b><span className="tc_brdr">Top Catego</span>ries This Month</b>
          </span>
          <hr />
        </div>
        {arr.map((elem) => (
          <TcCard data={elem}/>
        ))}
      </div>
    </div>
  );
}

export default top_categories;
