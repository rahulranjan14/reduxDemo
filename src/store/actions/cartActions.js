// Define action types
export const ADD_ITEM = "cart/ADD_ITEM";
export const REMOVE_ITEM = "cart/REMOVE_ITEM";
export const CLEAR_CART = "cart/CLEAR_CART";

// Define action creators
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (index) => ({
  type: REMOVE_ITEM,
  payload: index,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
