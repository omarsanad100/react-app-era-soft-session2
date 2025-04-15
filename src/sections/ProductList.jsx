import React from "react";
import { products } from "../components/constant/Constant";
import ProductListComponentsUi from "../components/layout/ProductListComponentsUi";

const ProductList = () => {
  return <ProductListComponentsUi products={products} />;
};

export default ProductList;
