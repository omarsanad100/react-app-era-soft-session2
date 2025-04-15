import React from "react";
import CartItemsUiFromCartComp from "../components/layout/CartItemsUiFromCartComp";
import PaymentSummaryUiOfCartComp from "../components/layout/PaymentSummaryUiOfCartComp";
import { paymentMethods } from "../components/constant/Constant";

const Cart = () => {
  return (
    <div className="w-80 bg-white shadow-md p-4 mt-12 overflow-auto  rounded-md">
      <CartItemsUiFromCartComp />
      <PaymentSummaryUiOfCartComp paymentMethods={paymentMethods} />
    </div>
  );
};

export default Cart;
