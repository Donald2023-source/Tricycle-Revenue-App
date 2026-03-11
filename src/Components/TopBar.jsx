import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
const TopBar = ({ name }) => {
  const [isVisible, setIsVisible] = useState();

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className="flex justify-between lg:text-normal text-sm lg:bg-white md:bg-white text-white lg:py-2 md:py-2 md:text-black lg:mt-0 mt-3 p-10 rounded-3xl bg-myGreen px-7 lg:shadow md:flex-1 border lg:rounded-full items-center">
        <div>
          <h4 className="text-black/50">Hello there, </h4>
          <h4 className="font-semibold">Welcome {name}</h4>
        </div>

        <div className="flex lg:flex-row flex-col">
          <div className="flex items-center">
            <h4>Auto pay</h4>
            <h4>OO</h4>
          </div>

          <h2 className="lg:text-xl lg:hidden flex items-center lg:text-normal text-sm gap-2">
            ₦
            <p className="font-bold text-normal">
              {isVisible ? "20,000" : "****"}
            </p>
            <p className="cursor-pointer" onClick={handleToggle}>
              {isVisible ? (
                <GoEyeClosed onClick={handleToggle} />
              ) : (
                <FaEye onClick={handleToggle} />
              )}
            </p>
          </h2>
        </div>
      </div>
    </>
  );
};
export default TopBar;
