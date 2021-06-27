import "./bs_card.css";

function card(data) {
  const saleTag = ()=>{
    if("sale" in data.data){
      console.log("inside saleTag")
      return(
      <span className="sale-tag">SALE</span>
      )
    }else return null
  }
  const priceListings = () => {
    if ("price" in data.data == true && "discount" in data.data == true) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-8">
              <span className="disc">Rs.{data.data.discount}</span>
              <div className="row">
                <div className="col-8">
                  <span className="price">Rs.{data.data.price}</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <a
                href="#"
                className="sanchor"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add to Cart"
              >
                <a href="#" className="top_hover">
                  {" "}
                  <i class="fas fa-shopping-cart fa-2x" />
                </a>
              </a>
            </div>
          </div>
          <hr className="hid" />
        </div>
      );
    } else if (
      "price" in data.data == true &&
      "discount" in data.data == false
    ) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-8 price">Rs.{data.data.price}</div>
            <div className="col-4">
              <a
                href="#"
                className="sanchor"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add to Cart"
              >
                <a href="#" className="top_hover">
                  {" "}
                  <i class="fas fa-shopping-cart fa-2x" />
                </a>
              </a>
            </div>
          </div>
          <hr className="hid" />
        </div>
      );
    } else {
      return (
        <div className="container mty">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="col-4 brdr">
      <p className="smallf">{data.data.category}</p>
      <p className="bluec">
        <b>{data.data.name}</b>
      </p>
      <div className="card-body">
        <div className="pic">PIC</div>
        {saleTag()}
        {priceListings()}
        <div className="pos">
          <span className="smallf">
            <a href="#" className="pr-2 tabanch">
              <span
                className="fas fa-exchange-alt hid"
                aria-hidden="true"
              ></span>
              <span className="hid"> Quick View </span>
            </a>
            <a href="#" className="tabanch">
              <i className="fa fa-heart hid" aria-hidden="true"></i>
              <span className="hid"> Wishlist </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default card;
