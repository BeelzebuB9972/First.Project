import {connect} from 'react-redux'
import "./product.css";
import PriceCard from "./price_card";
import ProdImgCarousel from "./prod_img_carousel";

let Product = (props) => {
  console.log("match=",props)
  const compData = JSON.parse(props.params.location.state)
  return (
    <>
    <div className="container mt-4 pb-5">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <ProdImgCarousel />
        </div>
        <div className="col-md-3 mt-3 col-sm-12">
          <span className="prod-sfont">{compData.category}</span>
          <p className="prod-lfont"><b>{compData.name}</b></p>
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
          <PriceCard data={compData} dispatch={props.dispatch} state={props.state}/>
        </div>
      </div>
      </div>
      <div className="container-fullwidth bg-light pt-3 pb-3">
        <div className="container">
      <div className="row">
        <ul className="nav">
          <li className="active pdesc">
            <a href="#Description" className="active" data-toggle="tab"><b>Description</b></a>
          </li>
          <li className="pdesc">
          <a href="#Review" data-toggle="tab"><b>Review</b></a>
          </li>
        </ul>
      </div>
      <hr/>
      <div className="tab-content container bg-white">
      <div
          id="Description"
          className="tab-pane show fade in active"
        > 
        <h2>!!DESCRIPTION OF THE PRODUCT!!</h2>
      </div>
      <div id="Review" className="tab-pane show fade in">
        <h2>!!Reviews for the product!!</h2>
      </div>
      </div>
      </div>
      </div>
      </>
  );
};

const mapStateToProps = state => {return {state}}
export default connect(mapStateToProps)(Product);
