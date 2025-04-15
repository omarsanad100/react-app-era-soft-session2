import React from "react";
import Logo from "../common/logo/Logo";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="navbar bg-white px-16 py-4 flex items-center justify-between h-[10vh]">
      <Logo />
      <div className="navbar-service flex items-center gap-4">
        <IoMdNotificationsOutline size={25} className="cursor-pointer" />
        <div className=" bg-gray-300 navbar-service-user border-1 border-gray-400 w-[180px] p-2 rounded-md flex items-center justify-between cursor-pointer">
          <div className="navbar-service-user-profile flex items-center gap-2">
            <div className=" w-10 h-10 ">
              <img src="../assets/images/18.png" className="rounded-full" />
            </div>
            <span className="max-w-[100px] text-nowrap truncate">
              Omar Programming
            </span>
          </div>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </nav>
  );
}
