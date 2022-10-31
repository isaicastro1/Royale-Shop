import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      {cartItems.map((item) => {
        const { id, name, imageUrl, quantity, price } = item;
        return (
          <div key={id}>
            <img src={imageUrl} />
            <h2>{name}</h2>
            <span onClick={() => removeItemFromCart(item)}>decrement</span>
            <span>{quantity}</span>
            <span onClick={() => addItemToCart(item)}>increment</span>
            <span>${price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
