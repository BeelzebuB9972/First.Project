import "./fp_card.css";

let FpCard = (data) => {
  const { name, price, discount } = data.data;
  console.log("name", name);
  if (price && discount) {
    return (
      <div className="row">
        <div className="col-4">PIC</div>
        <div className="col-8">
          <p>
            <a href="#" className="fp_font">
              <b>{name}</b>
            </a>
          </p>
          <p>
            <span className="fp_disc pr-1">Rs.{discount}</span>
            <span className="fp_price "> Rs.{price}</span>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-4">PIC</div>
        <div className="col-8">
          <p>
            <a href="#" className="fp_font">
              <b>{name}</b>
            </a>
          </p>
          <p>Content</p>
        </div>
      </div>
    );
  }
};

export default FpCard;
