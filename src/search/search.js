import "./search.css";

function search() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <b>
            <a href="#" className="logo_anchor">LOGO DESIGN</a>
          </b>
        </div>
        <div className="col-md-7 input-group">
          <input
            type="search"
            placeholder="Search for item"
            name="search"
            id="search"
            size="65"
            autoComplete="off"
            className="srch "
          />
          <button id="search-btn" name="search-btn">
            <i className="fas fa-search "></i>
          </button>
        </div>
        <div className="col-md-3 ">
          <a href="#" className="sanchor" data-toggle="tooltip" data-placement="bottom" title="Compare">
            <span className="sicon fas fa-exchange-alt fa-2x"></span>
            <span className="slink badge badge-light">0</span>
          </a>
          <a href="#" className="sanchor" data-toggle="tooltip" data-placement="bottom" title="Wishlist">
          <i className="sicon fa fa-heart fa-2x" aria-hidden="true"></i>
          <span className="slink2 badge badge-light">0</span>
          </a>
          <a href="#" className="sanchor">
          <i className="sicon fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
          <span className="slink3 badge badge-warning">0</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default search;
