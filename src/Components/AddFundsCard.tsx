import React, { useState } from "react";
import { BiTransferAlt } from "react-icons/bi";
import { FaEye, FaPlus } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { GoEyeClosed } from "react-icons/go";

const AddFundsCard = () => {
  const [isBalance, setIsBalance] = useState(false);

  const handleToggle = () => {
    setIsBalance(!isBalance);
  };
  return (
    <div className="border w-[30%] md:w-[40%] bg-white rounded-2xl p-7 flex flex-col space-y-3">
      <div className="flex items-center gap-3 justify-between">
        <span className=" w-14 flex items-center gap-2 flex-col text-center">
          <FaPlus
            size={50}
            className="bg-myGreen text-white p-3 rounded-lg text-2xl"
          />
          <p className="text-black/50 leading-5 font-semibold">Add Funds</p>
        </span>
        <span className=" w-14 flex items-center gap-2 flex-col text-center">
          <BiTransferAlt
            size={50}
            className="bg-myGreen text-white p-3 rounded-lg text-2xl"
          />
          <p className="text-black/50 leading-5 font-semibold">Transfer Funds</p>
        </span>
        <span className=" w-14 flex items-center gap-2 flex-col text-center">
          <FaMoneyBills
            size={50}
            className="bg-myGreen text-white p-3 rounded-lg text-2xl"
          />
          <p className="text-black/50 leading-5 font-semibold">Make Payments</p>
        </span>
      </div>
    </div>
  );
};

export default AddFundsCard;
