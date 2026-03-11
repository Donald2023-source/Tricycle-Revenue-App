import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { steps } from "../../data/data";
const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="flex flex-col justify-center gap-5"
    >
      <div className="text-center">
        <h2 className="font-semibold text-3xl py-2">How it Works</h2>
        <p className="text-center mx-auto py-3 w-[80%] lg:w-[25%] text-lg text-[#00000077]">
          Curious about how to get started? Heres a step-by-step guide:
        </p>
      </div>

      <div className="flex w-[100%] justify-center gap-20">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-[25%] lg:block hidden"
        >
          <ul className="shadow-xl rounded-lg w-[90%] font-semibold py-6 flex flex-col gap-6 px-7">
            {steps.map((item, index) => (
              <li
                key={index}
                className={
                  currentStep === index
                    ? "p-3 w-[100%] bg-myGreen rounded-lg text-white"
                    : "text-black p-3 hover:bg-myGreen hover:text-white cursor-pointer rounded-lg w-[100%]"
                }
                onClick={() => setCurrentStep(index)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="lg:w-[50%] w-[90%] py-6 border bg-[#ffffff6d] backdrop-blur  border-t-gray-400 px-5 flex flex-col justify-center gap-5 shadow-lg rounded-lg"
          key={steps[currentStep].num}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
        >
          <span className="flex lg:block items-center gap-5 justify-center">
            <h4 className="py-3 px-5 bg-mainColor font-bold text-lg border w-fit rounded-[4rem]">
              {steps[currentStep].num}
            </h4>
            <h2 className="font-semibold lg:hidden">
              {steps[currentStep].name}
            </h2>
          </span>

          <p className="leading-[2rem] text-center">
            {steps[currentStep].text}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
