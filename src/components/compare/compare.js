import "./compare.css";
import { removeFromCompare } from "../../actions";

let Compare = ({ compare, dispatch }) => {
  console.log("compare", { compare, dispatch });
  let renderCompareProducts = (option) => {
    if (compare.length === 0) return null;
    else if (compare.length > 4) return null;
    else {
      console.log("inside compare else");
      switch (option) {
        case "Features":
          return compare.map((elem) => {
            return (
              <div className="col">
                <div className="row">
                  <div className="col">
                    <button
                      type="button"
                      class="close"
                      aria-label="Close"
                      onClick={() => dispatch(removeFromCompare(elem))}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col">PIC</div>
                </div>
                <div className="row">
                  <div className="col">Name</div>
                </div>
                <div className="row">
                  <div className="col">Price</div>
                </div>
                <div className="row">
                  <div className="col">Add to cart</div>
                </div>
              </div>
            );
          });
          break;
        case "Availability":
          return compare.map((elem) => {
            return <div className="col">Available or Not</div>;
          });
          break;
        case "Options":
          return compare.map((elem) => <div className="col"> </div>);
          break;
        case "Vendor":
          return compare.map((elem) => <div className="col">Vendor Name</div>);
          break;
        case "Collection":
          return compare.map((elem) => (
            <div className="col">Collection Name</div>
          ));
          break;
        case "Rating":
          return compare.map((elem) => <div className="col">Rating</div>);
          break;
        default:
          break;
      }
    }
  };
  return (
    <div
      class="modal fade "
      id="Compare"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Compare"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg margi" role="document">
        <div class="modal-content ">
          <div class="modal-header">
            <h5 class="modal-title">Compare Products</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-1 p-2">Features</div>
                    {renderCompareProducts("Features")}
                  </div>
                  <div className="row">
                    <div className="col-1 p-2">Availability</div>
                    {renderCompareProducts("Availability")}
                  </div>
                  <div className="row">
                    <div className="col-1 p-2">Options</div>
                    {renderCompareProducts("Options")}
                  </div>
                  <div className="row">
                    <div className="col-1 p-2">Vendor</div>
                    {renderCompareProducts("Vendor")}
                  </div>
                  <div className="row">
                    <div className="col-1 p-2">Collection</div>
                    {renderCompareProducts("Collection")}
                  </div>
                  <div className="row">
                    <div className="col-1 p-2">Rating</div>
                    {renderCompareProducts("Rating")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
