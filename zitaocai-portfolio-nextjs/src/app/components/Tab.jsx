import React, { useTransition, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const Tab = ({ active, selectTab, children }) => {
  const { theme, setTheme } = useTheme();
  const buttonClasses =
    theme === "dark"
      ? active
        ? "text-white"
        : "text-[#ADB7BE]"
      : "text-red";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default Tab;
