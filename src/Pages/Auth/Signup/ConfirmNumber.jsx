import React, { useEffect, useState } from "react";
import aside from "../../../Components/Aside";
import Aside from "../../../Components/Aside";
import img1 from "../../../assets/Frame 1147.png";
import logo from "../../../assets/logo.jpg";
import { BiPhone } from "react-icons/bi";
import { Link, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ConfirmNumber = () => {
  const phoneNumber = localStorage.getItem("phoneNumber").split('"');
  const [code, setCode] = useState(new Array(6).fill(""));
  console.log(code.length);

  const navigate = useNavigate();

  useEffect(() => {
    if (code.join("").length === 6) {
      toast.success("Verified. Redirecting....");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [code]);
  return (
    <div className="w-full h-screen flex items-center relative gap-3">
      <div className="relative lg:w-[60%] w-full h-full border">
        <img
          className="h-full object-cover w-full"
          src={img1}
          alt="sign up img"
        />
      </div>

      <div className="lg:w-[40%] md:w-[70%] w-fit lg:static left-0 right-0 absolute h-full flex flex-col items-center justify-center px-1 top-0 z-50 mx-auto">
        <div className="lg:w-[80%] shadow-lg justify-center bg-white lg:mx-auto px-14 rounded-lg py-20 flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-2">
            <img className="h-10 w-40" src={logo} alt="logo" />
            <h2 className="font-semibold text-2xl">Confirm your number</h2>
            <p>
              Enter the number sent to{" "}
              {phoneNumber ? phoneNumber : "your phone number"}
            </p>
          </div>
          <div className="flex gap-2">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                onChange={(e) => {
                  const { value } = e.target;

                  const newCode = [...code];
                  newCode[index] = value;
                  setCode(newCode);

                  if (value.length === 1) {
                    const nextSibling = e.target.nextElementSibling;
                    if (nextSibling) nextSibling.focus();
                  }
                }}
                className="w-10 h-10 p-3 border border-gray-300 rounded text-center text-lg"
              />
            ))}
          </div>
          <h4 className="text-mainColor cursor-pointer font-semibold">
            Send code again
          </h4>
          <h4 className="text-mainColor cursor-pointer font-semibold">
            <Link to={"/auth/signup"}>Edit Phone Number</Link>
          </h4>
        </div>
      </div>
      <div className="bg-black/70 lg:hidden h-full w-full absolute top-0 left-0" />
    </div>
  );
};

export default ConfirmNumber;
