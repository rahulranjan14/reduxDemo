import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "./../actions/cartActions";

// Defining initial state
const initialState = {
  items: [],
};

// Defining reducer functions
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

// Export the reducer
export default cartReducer;
