import React from "react";
import { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import SideBar from "./components/layout/SideBar";
import Explore from "./components/layout/Explore";
import ProductList from "./sections/ProductList";
import Cart from "./sections/Cart";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="bg-gray-300 h-[120vh] grid grid-cols-12">
        <SideBar />
        <div className="content  col-span-10 h-[90vh] p-8 flex justify-between">
          <div className="flex flex-col items-center w-full">
            <Explore />
            <ProductList />
          </div>
          <Cart />
        </div>
      </main>
    </Fragment>
  );
};

export default App;
