import "./fp_card.css";
import { removeFromWishlist } from '../../actions'

let FpCard = (props) => {
  if(props.wishlist){
    console.log("WISH wishlist",props.wishlist)
    return (
      <div className="row">
        <div className="col-4">PIC</div>
        <div className="col-8">
          <p>
            <a href="#" className="fp_font">
              <b>{props.wishlist.name}</b>
            </a>
            <button
                    type="button"
                    class="close"
                    aria-label="Close"
                    onClick={()=>props.dispatch(removeFromWishlist(props.wishlist))}
                  >
                    <i class="fa fa-trash-alt"></i>
                  </button>
          </p>
          <p>
            <span className="fp_disc pr-1">Rs.{props.wishlist.discount}</span>
            <span className="fp_price "> Rs.{props.wishlist.price}</span>
          </p>
        </div>
      </div>
    )
}else if(props.data)
  if ((props.data.price && props.data.discount) ) {
    console.log("name", props.data.name);
    return (
      <div className="row">
        <div className="col-4">PIC</div>
        <div className="col-8">
          <p>
            <a href="#" className="fp_font">
              <b>{props.data.name}</b>
            </a>
          </p>
          <p>
            <span className="fp_disc pr-1">Rs.{props.data.discount}</span>
            <span className="fp_price "> Rs.{props.data.price}</span>
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
              <b>{props.data.name}</b>
            </a>
          </p>
          <p>Content</p>
        </div>
      </div>
    );
  }
};

export default FpCard;
