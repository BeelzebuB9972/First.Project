import "./card.css";

function card(data) {
  console.log("Card", data);
  return (
    <div className="col-12 card-brdr item">
      <p className="card-smallf">{data.data.category}</p>
      <p className="card-bluec">
        <b>{data.data.name}</b>
      </p>
      <div className="card-body">
        <div className="pic">PIC</div>
        <div className="pos">
          <span className="card-smallf">
            <a href="#" className="pr-2 card-tabanch">
              <span
                className="fas fa-exchange-alt card-hid"
                aria-hidden="true"
              ></span>
              <span className="card-hid"> Quick View </span>
            </a>
            <a href="#" className="card-tabanch">
              <i className="fa fa-heart card-hid" aria-hidden="true"></i>
              <span className="card-hid"> Wishlist </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default card;
