import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";

const TotalTransactionCard = () => {
  const [isBalance, setIsBalance] = useState(false);

  const handleToggle = () => {
    setIsBalance(!isBalance);
  };
  return (
    <div className="border w-[30%] md:w-[40%] bg-white rounded-2xl p-7 flex flex-col space-y-3">
      <div className="flex items-center justify-between">
        <h2>Total Transaction for This month</h2>
      </div>

      <div className="flex items-center gap-3">
        <p className="font-bold text-2xl">0</p>
      </div>
    </div>
  );
};

export default TotalTransactionCard;
