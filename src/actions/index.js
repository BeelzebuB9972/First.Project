export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST"
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST"
export const ADD_TO_COMPARE = "ADD_TO_COMPARE"
export const REMOVE_FROM_COMPARE = "REMOVE_FROM_COMPARE"

export const addToCart = (product)=>{
    console.log("inside addcart",product)
    return {
        type:ADD_TO_CART,
        product:product
    }
}

export const removeFromCart = (product)=>{
    return {
        type:REMOVE_FROM_CART,
        product
    }
}

export const addToWishlist = (product)=>{
    return {
        type:ADD_TO_WISHLIST,
        product
    }
}

export const removeFromWishlist = (product)=>{
    return {
        type:REMOVE_FROM_WISHLIST,
        product
    }
}

export const addToCompare = (product)=>{
    return {
        type:ADD_TO_COMPARE,
        product
    }
}

export const removeFromCompare = (product)=>{
    return {
        type:REMOVE_FROM_COMPARE,
        product
    }
}