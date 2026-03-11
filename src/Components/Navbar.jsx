import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { FaArrowCircleDown, FaBars, FaGlobe } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const languages = ["English", "Hausa", "Igbo"];

  const navLinks = [
    { name: "Agents", path: "/agents" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Support", path: "/support" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isSelect, setIsSelect] = useState(false);
  const [nav, setNav] = useState(false);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    if (isSelect) {
      setIsSelect(false);
    }
  };

  return (
    <div
      className="fixed z-50 max-w-[82rem] md:p-0 p-3 mx-auto inset-0 h-fit bg-white w-[100%]"
      onClick={handleClose}
    >
      <nav className="flex items-center justify-between lg:py-3 p-2 lg:px-7 font-semibold">
        <AnimatePresence>
          <motion.img
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 1.5 }}
            className="lg:h-10 h-6"
            src={logo}
            alt=""
          />
        </AnimatePresence>

        <section className="flex  items-center gap-9">
          <div>
            <div
              onClick={() => setIsSelect(!isSelect)}
              className="lg:flex cursor-pointer md:flex gap-6 hidden rounded-2xl items-center border w-fit p-3"
            >
              <FaGlobe size={20} />
              {selectLanguage && <p>{selectedLanguage}</p>}
              <FaArrowCircleDown size={20} />
            </div>

            <span
              className={
                isSelect
                  ? "block absolute bg-white translate-y-0 transition duration-700 "
                  : "absolute -translate-y-96 transition rduration-700"
              }
            >
              {languages.map((language, idx) => (
                <h3
                  className="cursor-pointer hover:text-mainColor transition ease-in-out w-32 border-b p-3 mx-7"
                  key={idx}
                  onClick={() => selectLanguage(language)}
                >
                  {language}
                </h3>
              ))}
            </span>
          </div>

          <motion.div
            className={
              nav
                ? "flex lg:flex-row bg-white lg:relative lg:inset-0 lg:shadow-none shadow pr-20 pl-2 py-5 absolute top-8 flex-col gap-8  lg:gap-24"
                : "hidden lg:flex gap-20"
            }
          >
            {navLinks.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `px-1 w-24 hover:text-mainColor transition ${isActive ? "border-b-2" : ""}`
                }
                to={item.path}
                key={item.id}
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        </section>
        <span className="lg:flex hidden gap-5">
          <button className="p-3 text-mainColor text-lg">
            <Link to={"/auth/agentLogin"}>Login</Link>
          </button>

          <AnimatePresence>
            <motion.button
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 1.5 }}
              className="bg-mainColor px-4  rounded-2xl text-white"
            >
              <Link to={"/auth/signup"}>Get Started</Link>
            </motion.button>
          </AnimatePresence>
        </span>
        <FaBars
          className="cursor-pointer lg:hidden"
          onClick={handleNav}
          size={20}
        />
      </nav>
    </div>
  );
};

export default Navbar;
