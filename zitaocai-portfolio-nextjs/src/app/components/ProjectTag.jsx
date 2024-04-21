import React, { useTransition, useState } from "react";
import { useTheme } from "next-themes";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const { theme, setTheme } = useTheme();

  const classColorSelected =
    theme === "dark"
      ? "text-purple-500 border-purple-500"
      : "text-slate-700 border-slate-700";
      
  const classColorUnSelected =
    theme === "dark"
      ? "text-[#ADB7BE] border-slate-600 hover:border-purple-500"
      : "text-slate-400 border-slate-300 hover:border-slate-700";

  const buttonStyles = isSelected ? classColorSelected : classColorUnSelected;

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
