import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiMoon } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { BsSun, BsSunFill } from "react-icons/bs";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from "../atoms";

const Menu = ({ links }) => {
  const { theme, setTheme } = useTheme();

  const backgroundColor = theme === "dark" ? "bg-[#121212]" : "bg-white";

  return (
    <ul className={`flex flex-col py-4 items-center ${backgroundColor}`}>
      {links.map((link, index) =>
        index === links.length - 1 ? (
          <div
            className={`relative w-16 h-8 flex items-center ${
              theme === "dark" ? "bg-gray-900" : "bg-teal-500"
            } cursor-pointer rounded-full p-1`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <FaMoon className="text-white" size={18} />
            <div
              className="absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
              style={theme === "dark" ? { left: "2px" } : { right: "2px" }}
            ></div>
            <BsSunFill className="ml-auto text-yellow-400" size={18} />
          </div>
        ) : (
          <li className="hover:text-purple-700">
            <NavLink href={link.path} title={link.title} />
          </li>
        )
      )}
    </ul>
  );
};

export default Menu;
