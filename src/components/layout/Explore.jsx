import React from "react";
import { exploreProduct } from "../constant/Constant";
import ExploreProductUi from "./ExploreProductUi";

const Explore = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <h1 className="font-bold text-lg mb-5">Explore Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto -mt-3">
        {exploreProduct.map((explore) => (
          // Spread operator to pass all props, it's a clean way to pass props
          <ExploreProductUi key={explore.id} {...explore} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
