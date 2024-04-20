"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiMoon } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { BsSun, BsSunFill } from "react-icons/bs";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto w-full flex justify-between items-center py-5 text-2xl">
      <div className="font-bold text-emerald-700 text-3xl">
        Port<span className="text-red-500">folio</span>
      </div>
      <ul className="flex gap-5">
        <li className=" hover:text-emerald-700">
          <Link href="/">Home</Link>
        </li>
        <li className=" hover:text-emerald-700">
          <Link href="#">About</Link>
        </li>
        <li className=" hover:text-emerald-700">
          <Link href="#">Blog</Link>
        </li>
        <li className=" hover:text-emerald-700">
          <Link href="#">Contact</Link>
        </li>
      </ul>
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

        {/* {theme === "dark" ? (
          <BsSun size={25} cursor="pointer" onClick={() => setTheme("light")} />
        ) : (
          <FiMoon size={25} cursor="pointer" onClick={() => setTheme("dark")} />
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
