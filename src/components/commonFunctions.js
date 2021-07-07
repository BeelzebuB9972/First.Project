export const addToWlist = (e,dispatch,productData,addToWishlist) => {
  e.stopPropagation();
  e.preventDefault();
  console.log("inside addToWlist");
  dispatch(addToWishlist(productData));
};

export const addToCompre = (e,dispatch,productData,addToCompare) => {
  e.stopPropagation();
  e.preventDefault();
  console.log("inside addToCompre");
  dispatch(addToCompare(productData));
};
