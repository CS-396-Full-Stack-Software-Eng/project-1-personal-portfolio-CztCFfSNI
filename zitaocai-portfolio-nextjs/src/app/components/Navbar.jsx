"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

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
      {theme === "dark" ? (
        <BsSun size={25} cursor="pointer" onClick={() => setTheme("light")} />
      ) : (
        <FiMoon size={25} cursor="pointer" onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default Navbar;
