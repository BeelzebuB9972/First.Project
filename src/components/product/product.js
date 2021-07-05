import "./product.css";
import PriceCard from "./price_card";
import ProdImgCarousel from "./prod_img_carousel";


let Product = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <ProdImgCarousel />
        </div>
        <div className="col-md-3 mt-3 col-sm-12">
          <span className="prod-sfont">Category:</span>
          <p className="prod-lfont"><b>Name:</b></p>
          <div className="d-flex product">
            <a href="#" className="nav-link">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="nav-link">
              {" "}
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" className="nav-link">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" className="nav-link">
              <i class="fab fa-pinterest" aria-hidden="true"></i>
            </a>
          </div>

          <li>Vendor:</li>
          <li>Category:</li>
        </div>
        <div className="col-md-4 col-sm-12">
          <PriceCard />
        </div>
      </div>
    </div>
  );
};

export default Product;
