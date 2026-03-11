import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import Naira from "../assets/naira.png";

const BalanceCard = () => {
  const [isBalance, setIsBalance] = useState(false);

  const handleToggle = () => {
    setIsBalance(!isBalance);
  };
  return (
    <div className="border w-[30%] md:md-[40%] bg-white rounded-2xl p-6 flex flex-col space-y-3">
      <div className="flex items-center justify-between">
        <h2>Current Balance</h2>
        {isBalance ? (
          <FaEye
            className="cursor-pointer"
            onClick={handleToggle}
            color="gray"
          />
        ) : (
          <GoEyeClosed
            className="cursor-pointer"
            onClick={handleToggle}
            color="gray"
          />
        )}
      </div>

      <div className="flex items-center gap-3">
        <img className="h-6" src={Naira} alt="" />
        <p className="font-bold text-2xl">{isBalance ? "20,000" : "****"}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
