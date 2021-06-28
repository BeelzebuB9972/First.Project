import "./bs_card.css";

function card(data) {
  const saleTag = ()=>{
    if("sale" in data.data){
      console.log("inside saleTag")
      return(
      <span className="rounded-circle sale-tag">SALE</span>
      )
    }else return null
  }
  const priceListings = () => {
    if ("price" in data.data == true && "discount" in data.data == true) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <span className="bs-disc">Rs.{data.data.discount}</span>
              <div className="row">
                <div className="col-8">
                  <span className="bs-price">Rs.{data.data.price}</span>
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
        </div>
      );
    } else if (
      "price" in data.data == true &&
      "discount" in data.data == false
    ) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-8 bs-price">Rs.{data.data.price}</div>
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
        </div>
      );
    } else {
      return (
        <div className="container bs-mty">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="col-4 bs-brdr">
      <p className="bs-smallf">{data.data.category}</p>
      <p className="bs-bluec">
        <b>{data.data.name}</b>
      </p>
      <div className="">
        <div className="bs-pic">PIC</div>
        {saleTag()}
        {priceListings()}
        <div className="pos">
          <span className="bs-smallf1">
            <a href="#" className="pr-2 bs-tabanch">
              <span
                className="fas fa-exchange-alt bs-hid"
                aria-bs-hidden="true"
              ></span>
              <span className="bs-hid"> Quick View </span>
            </a>
            <a href="#" className="bs-tabanch">
              <i className="fa fa-heart bs-hid" aria-bs-hidden="true"></i>
              <span className="bs-hid"> Wishlist </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default card;
