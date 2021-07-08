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
  compare: [],
  wishlist: [],
};

const userInfo = (state = userData, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("inside addcart reducer", action.product);
      if (state.cart.length === 0) {
        return {
          ...state,
          cart: [...state.cart, action.product],
        };
      } else {
        if (
          state.cart.filter((elem) => {
            if (elem.name === action.product.name) return elem;
          }).length === 1
        ) {
          console.log("inside if filter");
          let updatedCart = state.cart.map((elem) => {
            if (elem.name === action.product.name) {
              elem.quantity += action.product.quantity;
              return elem;
            } else return elem;
          });
          console.log("inside if filter", updatedCart);
          return {
            ...state,
            cart: updatedCart,
          };
        } else {
          console.log("inside else filter");
          return {
            ...state,
            cart: [...state.cart, action.product],
          };
        }
      }
      ;
    case ADD_TO_WISHLIST:
      console.log("inside addwishlist reducer", action.product);
      if (state.wishlist.length === 0) {
        return {
          ...state,
          wishlist: [...state.wishlist, action.product],
        };
      } else {
        if (
          state.wishlist.filter((elem) => {
            if (elem.name === action.product.name) return elem;
          }).length === 1
        ) {
          console.log("inside if filter");
          return {
            ...state
          };
        } else {
          console.log("inside else filter");
          return {
            ...state,
            wishlist: [...state.wishlist, action.product],
          };
        }
      }
      
    case ADD_TO_COMPARE:
      console.log("inside addcompare reducer", action.product);
      if (state.compare.length === 0) {
        return {
          ...state,
          compare: [...state.compare, action.product],
        };
      } else {
        if (
          state.compare.filter((elem) => {
            if (elem.name === action.product.name) return elem;
          }).length === 1
        ) {
          return {
            ...state
          };
        } else {
          console.log("inside else filter");
          return {
            ...state,
            compare: [...state.compare, action.product],
          };
        }
      }
      
    case REMOVE_FROM_CART:
      console.log("inside addcart reducer", action.product);
      let updatedCart = state.cart.filter((elem) => {
        if (
          !(
            elem.name === action.product.name &&
            action.product.quantity === elem.quantity
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
      console.log("inside removewishlist reducer", action.product);
      let updatedwishlist = state.wishlist.filter((elem) => {
        if (!(elem.name === action.product.name)) {
          return elem;
        }
      });
      return {
        ...state,
        wishlist: updatedwishlist,
      };
      
    case REMOVE_FROM_COMPARE:
      console.log("inside removecompare reducer", action.product);
      let updatedcompare = state.compare.filter((elem) => {
        if (!(elem.name === action.product.name)) {
          return elem;
        }
      });
      return {
        ...state,
        compare: updatedcompare,
      };
      
    default:
      return {
        ...state,
      };
  }
};

export default userInfo;
