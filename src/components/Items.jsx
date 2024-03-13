import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/actions/cartActions";
import { addToWishlist } from "../store/actions/wishlistActions";

const Items = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleAddToCart = (item) => {
    dispatch(addItem(item)); 
  };

  const handleAddToWishlist = (item) => {
    if (wishlistItems.includes(item)) {
      window.alert("item already in wishlist");
    } else {
      dispatch(addToWishlist(item));
    }
  };

  const allItems = ["Cap", "Shirt", "Trouser", "Shoe"];

  return (
    <div>
      <h2>All Items</h2>
      {allItems.map((item, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            backgroundColor: "teal",
            border: "1px solid white",
          }}
        >
          <h3>{item}</h3>

          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => handleAddToWishlist(item)}
          >
            Add to Wishlist
          </button>

          <button
            style={{ backgroundColor: "red" }}
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Items;
