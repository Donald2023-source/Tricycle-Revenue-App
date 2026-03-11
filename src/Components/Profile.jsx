import moment from "moment/moment";
import React, { useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import profile from "../assets/Frame 1099.png";

const Profile = () => {
  const Date = moment().format("LL");
  console.log(Date);

  const time = moment().format("LT");
  return (
    <div className="md:flex hidden w-[70%] bg-white my-2 mx-auto justify-between px-6 py-2 rounded-full">
      <div className="flex items-center font-semibold gap-4">
        <span>
          <MdOutlineDateRange size={20} />
        </span>
        <h2 className="text-black/50">{Date}</h2>
      </div>

      <div className="flex">
        <span className="flex items-center font-semibold gap-4">
          <LuClock3 />
          <h2 className="text-black/50">{time}</h2>
        </span>
      </div>

      <span className="flex items-center gap-6">
        <FiMoon size={20} />
        <IoIosNotificationsOutline size={25} />
        <img className="h-9 hover:scale-105 transition-all" src={profile} />
      </span>
    </div>
  );
};

export default Profile;
