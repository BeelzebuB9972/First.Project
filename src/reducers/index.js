import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  ADD_TO_COMPARE,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  REMOVE_FROM_COMPARE,
} from "../actions/index";

const userData = {
  cart: [],
  compare: [1],
  wishlist: [1, 2],
};

const userInfo = (state = userData, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("inside addcart reducer", action.product);
      if(state.cart.length==0){
        return {
          ...state,
          cart: [...state.cart, action.product],
        };
      }else{
        if(state.cart.filter((elem)=>{
          if(elem.name==action.product.name) return elem
        }).length==1
        ){
          console.log("inside if filter")
          let updatedCart=state.cart.map((elem)=>{
            if(elem.name==action.product.name){
              elem.quantity+=action.product.quantity
            return elem
            }
            else return elem
          })
          console.log("inside if filter",updatedCart)
          return{
            ...state,
            cart: updatedCart
          }
        }else {
          console.log("inside else filter")
          return{
          ...state,
          cart:[...state.cart,action.product]
        }
      }
    } 
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...userData.wishlist, action.product],
      };
    case ADD_TO_COMPARE:
      return {
        ...state,
        compare: [...userData.compare, action.product],
      };
    case REMOVE_FROM_CART:
      console.log("inside addcart reducer", action.product);
      let updatedCart = state.cart.filter((elem) => {
        if (
          !(
            elem.name == action.product.name &&
            action.product.quantity == elem.quantity
          )
        ) {
          return elem;
        }
      });
      return {
        ...state,
        cart: updatedCart,
      };
    case REMOVE_FROM_WISHLIST:
      break;
    case REMOVE_FROM_COMPARE:
      break;
    default:
      return {
        ...state,
      };
  }
};

export default userInfo;
