import "./cart_card.css";
import { removeFromCart } from "../../actions/index";

const CartCard = (props) => {
  console.log("cartCard", props);
  const cartData = props.data;
  const dispatch = props.dispatch;
  let updateCart = (elem) => {
    dispatch(removeFromCart(elem));
  };
  let cartSum = () => {
    return cartData.length > 0
      ? cartData.reduce(
          (sum, elem) => sum + elem.quantity * parseInt(elem.price.replace(/,/g, ""))
        ,0)
      : null;
  };
  console.log("cartSum", cartSum());
  let totalPart = () => {
    if (cartData.length > 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-6 offset-1">
              <h3>Total</h3>
            </div>
            <div className="col-3">
              <h3>Rs.{cartSum()}</h3>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <button className="btn pcartbtn"><b>View Cart</b></button>
            </div>
            <div className="col-6">
              <button className="btn pcartbtn"><b>Checkout</b></button>
            </div>
          </div>
        </div>
      );
    } else return null;
  };
  let renderCart = () => {
    if (cartData.length == 0) {
      return (
        <div className="empty-cart">
          <h4 className="d-flex justify-content-center align-items-center">
            <b>An Empty Cart</b>
          </h4>
          <p className="d-flex justify-content-center">
            You have no item in your shoppoing cart
          </p>
        </div>
      );
    } else {
      console.log("cartData", cartData);
      return cartData.map((elem) => {
        return (
          <div className="container">
            <div className="row cart">
              <div className="col-11">
                <div className="row">
                  <div className="col-3">
                    <span>PIC</span>
                  </div>
                  <div className="col-9">
                    <span>{elem.name}</span>
                    <div className="row">
                      <div className="col-12">
                        <span>
                          <span>
                            {elem.quantity} x Rs. {elem.price}{" "}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                    type="button"
                    class="close"
                    aria-label="Close"
                    onClick={() => updateCart(elem)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
            </div>
            <hr />
          </div>
        );
      });
    }
  };
  return (
    <div class="dropdown-content">
      {renderCart()}
      {totalPart()}
    </div>
  );
};

export default CartCard;
