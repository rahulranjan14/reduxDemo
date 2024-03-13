// Define action types
export const ADD_TO_WISHLIST = "wishlist/ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "wishlist/REMOVE_FROM_WISHLIST";

// Define action creators
export const addToWishlist = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item,
});

export const removeFromWishlist = (index) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: index,
});
