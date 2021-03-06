import "./price_card.css";
import { useState } from "react";
import { addToCart,addToCompare,addToWishlist } from "../../actions/index";
import { addToWlist, addToCompre } from '../commonFunctions'

let Price_card = (props) => {
  console.log("price_card", props);
  const [qty, setQty] = useState({ quantity: 1, quantityError: null });
  const price = props.data.price;
  const data = props.data;
  const dispatch = props.dispatch;
  const productData = props.data

  const updateQty = (e) => {
    console.log("inside onchange");
    let input = e.target.value;
    console.log(input, input.match(/[\d]*/g).length, input.length);
    if (
      input.match(/[\d]*/g)[0].length == input.length &&
      parseInt(input) > 0
    ) {
      setQty({ quantity: e.target.value, quantityError: "" });
    } else
      setQty({
        quantity: "",
        quantityError: "Please Enter a valid number",
      });
  };

  const qtyPlusOne = () =>
    setQty((prev) => {
      console.log(prev);
      if (
        (isNaN(prev.quantity) && prev.quantity.match(/\s+/)) ||
        prev.quantity.length == 0
      )
        return { quantity: 1 };
      else {
        let currentQty = parseInt(prev.quantity);
        return { quantity: currentQty + 1 };
      }
    });

  const qtyMinusOne = () =>
    setQty((prev) => {
      if (
        (isNaN(prev.quantity) && prev.quantity.match(/\s+/)) ||
        prev.quantity.length == 0
      )
        return { quantity: 1 };
      let currentQty = parseInt(prev.quantity);
      if (currentQty === 0 || currentQty === 1) {
        console.log(typeof currentQty);
        return { quantity: currentQty };
      } else return { quantity: currentQty - 1 };
    });
  let validateQtyAndAddToCart = () => {
    if (qty.quantity > 0) {
      console.log("qty", qty);
      dispatch(addToCart({ ...data, quantity:qty.quantity }));
    }
  };
  return (
    <div className="card-body border mt-3">
      <p>Availability:</p>
      <p className="price-font">Rs.{price}</p>
      <div class="input-group col-md-10 col-sm-8">
        <input
          type="text"
          className="form-control pinpt"
          value={qty.quantity}
          onChange={(e) => {
            updateQty(e);
          }}
        />
        <div class="input-group-append">
          <button
            class="btn rounded-circle pbtn"
            type="button"
            onClick={qtyPlusOne}
          >
            <b>+</b>
          </button>
          <button
            class="btn rounded-circle pbtn"
            type="button"
            onClick={qtyMinusOne}
          >
            <b>-&nbsp;</b>
          </button>
        </div>
        <p className="text text-warning">{qty.quantityError}</p>
      </div>
      <div className="col-md-12">
        <button
          className="btn btn-warning d-flex align-items-center justify-content-around pcartbtn"
          onClick={validateQtyAndAddToCart}
        >
          <i class="fas fa-shopping-cart pcardwhite" />
          <span>
            <b>Add to cart</b>
          </span>
        </button>
        <div className="col-12 mt-2 d-flex justify-content-around pcard-link">
          <a href="" onClick={(e)=>{addToWlist(e,dispatch,productData,addToWishlist)}}>
            <i className="fa fa-heart "></i>
            <span>Wishlist</span>
          </a>
          <a href="" onClick={(e)=>{addToCompre(e,dispatch,productData,addToCompare)}}>
            <i className="fas fa-exchange-alt"></i>
            <span>Compare</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Price_card;
