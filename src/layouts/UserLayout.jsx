import React, { useState } from "react";
import Aside from "../Components/Aside";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
const userLayout = ({ children }) => {
  const [nav, setNav] = useState(false);
  return (
    <div className="h-screen bg-[#f5f5f5] py-3">
      <div className="flex relative items-center container ">
        <span
          className={`w-full absolute top-0 transition duration-300 z-20 ${
            nav
              ? "translate-x-0"
              : "-translate-x-96 md:-translate-x-[35rem] lg:translate-x-0"
          }`}
        >
          <Aside />
        </span>

        <span
          onClick={() => setNav(!nav)}
          className="text-lg lg:hidden md:left-[100%] md:ml-10 md:text-xl cursor-pointer absolute top-0 bottom-0 z-50  left-[95%]"
        >
          <HiOutlineMenuAlt2 />
        </span>

        <div
          onClick={() => setNav(false)}
          className="w-full lg:ml-[26%] px-1 lg:w-[85%] relative"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default userLayout;
