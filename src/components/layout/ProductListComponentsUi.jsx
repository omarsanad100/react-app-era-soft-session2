import React from "react";

const ProductListComponentsUi = ({ products }) => {
  return (
    <div className=" -mt-2 w-full  max-w-4xl mx-auto">
      <div className="mb-2 flex gap-4 ">
        <h2 className="text-lg font-bold  border-b-2 border-orange-500 my-3">
          Popular
        </h2>
        <h2 className="text-lg font-bold my-3">Recent</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(({ id, name, price, oldPrice, rating, image }) => (
          <div
            key={id}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            <img src={image} className="w-full h-25 object-cover mb-4" />
            <h3 className="font-bold flex ">{name}</h3>
            <section className="flex justify-between items-center mt-2">
              <section className="flex justify-between items-end">
                <div className="text-orange-500 font-bold text-xl">
                  ${price}
                </div>
                <div className="text-gray-500 line-through text-xs">
                  ${oldPrice}
                </div>
              </section>
              <div className="text-yellow-500 text-sm">⭐ {rating}</div>
            </section>

            <div className="mt-4 flex justify-between">
              <button className="bg-gray-200 px-4 py-2 rounded cursor-pointer">
                Wishlist
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListComponentsUi;
