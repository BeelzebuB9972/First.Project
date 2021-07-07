import './wishlist.css'
import WishlistCard from "../featured_products/fp_card"

let Wishlist = (props)=>{
    let wlist = props.wishlist
    console.log("Wishlist",wlist)
    let renderWishlistCard = ()=>{
        if(wlist && wlist.length>0){
            console.log("inside renderWishlistCard aka modal body",wlist)
            return (wlist.map(elem=>{return <WishlistCard wishlist={elem} dispatch={props.dispatch}/>})
            )
        }else return( <h2>Wishlist is empty</h2>)
    }

    return(
        <div
            class="modal fade"
            id="Wishlist"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Your Wishlist
                  </h5>
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
                {renderWishlistCard()}
                </div>
              </div>
            </div>
          </div>
    )
}

export default Wishlist;