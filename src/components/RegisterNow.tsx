"use client";

import React from "react";
import { motion } from "framer-motion";

interface RegisterNowProps {
  title: string;
  description: string;
  ctaText: string;
}

const RegisterNow: React.FC<RegisterNowProps> = ({
  title,
  description,
  ctaText,
}) => {
  return (
    <div className="bg-[#FFF6E6]">
    <div id="register" className="flex flex-col items-center justify-center bg-[#FFF6E6] pt-30 pb-20 mx-2">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold text-[#A10C22]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 mb-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {description}
      </motion.p>

      <motion.button
        className="bg-[#A10C22] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#8B0A1E] transition"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        onClick={() => window.open("https://register.srmd.org/events/SSV2501", "_blank")}
      >
        {ctaText}
      </motion.button>
    </div>
    </div>
  );
};

export default RegisterNow;
