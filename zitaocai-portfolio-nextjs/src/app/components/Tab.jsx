import React, { useTransition, useState } from "react";
import { useTheme } from "next-themes";
import { TypeAnimation } from "react-type-animation";
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
      : active
      ? "text-black"
      : "text-slate-500";

  const buttonHover =
    theme === "dark" ? "hover:text-white" : "hover:text-black";

  const lineColor = theme === "dark" ? "bg-purple-500" : "bg-slate-800";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonHover} ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 ${lineColor} mt-2 mr-3`}
      ></motion.div>
    </button>
  );
};

export default Tab;
