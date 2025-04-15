import React from "react";

const ExploreProductUi = ({ productName, isActive, image }) => {
  return (
    <div
      className={` ${
        isActive ? "border-[#EE5733]" : "border-gray-300"
      } rounded-md p-2 w-45 h-15 border-2 cursor-pointer flex justify-center items-center gap-3 ${
        isActive ? "bg-[rgba(238,88,51,0.10)]" : "bg-white"
      } ${isActive ? "text-[#EE5733] font-semibold" : "text-black"}`}
    >
      <div className="flex items-center justify-center w-8 h-8">
        <img
          src={image}
          alt={productName}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="capitalize font-medium text-sm ">{productName}</span>
    </div>
  );
};

export default ExploreProductUi;
