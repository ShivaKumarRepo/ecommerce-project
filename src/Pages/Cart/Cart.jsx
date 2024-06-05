import React, { useContext } from "react";
import { CartContext } from "../../Context/Cartcontext";
import Navbar from "../../Components/Navbar/Navbar";
const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <div className="cart">
        <h2>Selected Items</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map(({ id, productName, price, catImg }) => (
            <div key={id} className="cart-item">
              <img src={catImg} alt={productName} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{productName}</h4>
                <p>Price: ₹{price}</p>
                <button onClick={() => removeFromCart(id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
