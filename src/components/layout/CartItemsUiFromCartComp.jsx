import React from "react";
import { cartItems } from "../constant/Constant";

const CartItemsUiFromCartComp = () => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <h2 className="text-xl font-bold mb-4 ">Cart Items</h2>
      <ul className="">
        {cartItems.map(({ image, name, price, quantity, id }) => (
          <li
            key={id}
            className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2"
          >
            <div className="w-16 h-16 mr-4">
              <img src={image} />
            </div>
            <div className="flex justify-between w-full h-full items-center">
              <section>
                <h3 className="font-bold">{name}</h3>
                <p className="text-orange-400"> ${price} </p>
              </section>
              <p className="text-gray-500  relative top-3.5">x{quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-bold">Subtotal: ${subtotal}</div>
    </>
  );
};

export default CartItemsUiFromCartComp;
