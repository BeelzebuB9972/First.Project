import "./card.css";

function card(data) {
  return (
    <div className="col-3 brdr">
      <p className="smallf">{data.data.category}</p>
      <p className="bluec">
        <b>{data.data.name}</b>
      </p>
      <div className="card-body">
        <div className="pic">PIC</div>
        <span className="smallf">
          <a href="#" className="pr-2 tabanch">
            <span className="fas fa-exchange-alt hid" aria-hidden="true"></span>
            <span className="hid"> Quick View </span>
          </a>
          <a href="#" className="tabanch">
          <i className="fa fa-heart hid" aria-hidden="true"></i>
          <span className="hid"> Wishlist </span>
          </a>
        </span>
      </div>
    </div>
  );
}

export default card;
