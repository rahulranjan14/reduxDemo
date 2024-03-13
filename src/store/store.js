import { createStore, combineReducers } from "redux";

// Importing reducers of different slices
import cartReducer from "./reducers/cartReducer";
import wishlistReducer from "./reducers/wishlistReducer";

// Combining reducers from different slices
const rootReducer = combineReducers({
  cart: cartReducer, 
  wishlist: wishlistReducer, 
});

// Creating the central Redux store
const store = createStore(rootReducer);

// Exporting the Redux store
export default store;
