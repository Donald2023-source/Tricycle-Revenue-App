import React from "react";
import Hero from "./Hero";
import Benefits from "./Benefits";
import { motion } from "framer-motion";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Footer from "../../Components/Footer";
const Landingpage = () => {
  return (
    <motion.div
      className="max-w-[82rem] mx-auto "
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Hero />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Footer />
    </motion.div>
  );
};

export default Landingpage;
