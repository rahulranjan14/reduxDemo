import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../store/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveFromCart = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        <h3>Cart items : {cartItems.length}</h3>
      </div>
      <div>
        <h3>Items in cart :</h3>
      </div>
      <div>
        {cartItems.length === 0 ? (
          <h4>Cart is empty</h4>
        ) : (
          <div>
            {cartItems.map((item, index) => (
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
                  style={{ backgroundColor: "red" }}
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remove from cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        {cartItems.length !== 0 && (
          <div>
            <button
              style={{ backgroundColor: "red" }}
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
