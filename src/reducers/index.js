import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  ADD_TO_COMPARE,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  REMOVE_FROM_COMPARE,
} from "../actions/index";

const userData = {
  cart: [1,2,3],
  compare: [1],
  wishlist: [1,2],
};

const userInfo = (state = userData, action) => {
  switch (action.type) {
    case ADD_TO_CART:
        return{
            ...state,
            cart:[...userData.cart,action.product]
        }
    case ADD_TO_WISHLIST:
        return{
            ...state,
            wishlist:[...userData.wishlist,action.product]
        }
    case ADD_TO_COMPARE:
        return{
            ...state,
            compare:[...userData.compare,action.product]
        }
    case REMOVE_FROM_CART:
        break;
    case REMOVE_FROM_WISHLIST:
        break
    case REMOVE_FROM_COMPARE:
        break;
    default:
      return {
        ...state,
      };
  }
};

export default userInfo;
