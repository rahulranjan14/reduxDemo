import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./../actions/wishlistActions";

// Defining initial state
const initialState = {
  items: [],
};

// Define reducers
const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default wishlistReducer;
