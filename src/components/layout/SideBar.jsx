import React from "react";
import MenuLink from "./MenuLink";
import { menuItems } from "../constant/Constant";

const SideBar = () => {
  return (
    <div className="sidebar col-span-2 bg-white h-[90vh] px-6 py-2">
      {menuItems.map((link) => (
        // Spread operator to pass all props, it's a clean way to pass props
        <MenuLink {...link} key={link.id} />
      ))}
    </div>
  );
};

export default SideBar;
