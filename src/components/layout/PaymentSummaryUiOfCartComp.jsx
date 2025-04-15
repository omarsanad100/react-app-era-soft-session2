import React from "react";

const PaymentSummaryUiOfCartComp = ({ paymentMethods }) => {
  const subtotal = 100;
  const tax = 6;
  const total = subtotal + tax;

  return (
    <section className="border-gray-300 border-2 rounded-md p-4 mt-4 bg-gray-100">
      {/* Payment Summary */}
      <div>
        <h3 className="font-bold mb-4">Payment Summary</h3>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax}</span>
        </div>
        <div className="flex justify-between font-bold mt-4">
          <span>Total Payment</span>
          <span>${total}</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-6">
        <h3 className="font-bold mb-2">Payment Method</h3>
        <div className="flex">
          {paymentMethods.map(({ id, image, isActive }) => (
            <img
              key={id}
              src={image}
              alt="Payment Method"
              className={`w-10 h-10 object-contain border-2 rounded-md ${
                isActive
                  ? "border-orange-500 bg-[rgba(238,88,51,0.10)]"
                  : "border-gray-300 bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Place Order Button */}
      <button className="bg-orange-500 text-white w-full mt-4 py-2 rounded cursor-pointer hover:bg-orange-600 transition duration-300">
        Place An Order Now
      </button>
    </section>
  );
};

export default PaymentSummaryUiOfCartComp;
