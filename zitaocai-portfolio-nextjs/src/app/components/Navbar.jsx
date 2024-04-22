"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiMoon } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { BsSun, BsSunFill } from "react-icons/bs";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./Menu";

const navLinks = [
  {
    title: "About",
    path: "about/#about",
  },
  {
    title: "Skills",
    path: "tech/#tech",
  },
  {
    title: "Projects",
    path: "tech/#projects",
  },
  {
    title: "Contact",
    path: "contact/#contact",
  },
  {},
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const logoColor1 = theme === "dark" ? 'text-pink-300' : 'text-pink-500';
  // const logoColor2 = theme === "dark" ? 'text-blue-300' : 'text-blue-400';
  let navbarBgColor = theme !== "dark" ? "bg-white" : scrolled ? "bg-[#121212]" : "";
  
  const bottonColor =
    theme === "dark"
      ? "border-slate-200 text-slate-400 hover:text-white hover:border-white"
      : "border-slate-700 text-slate-400 hover:text-black hover:border-black";

      
  return (
    <nav
    className={`fixed mx-auto top-0 left-0 right-0 z-10 ${navbarBgColor} bg-opacity-100`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className={`font-bold text-3xl`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700">
            <Link href={"/"}>
              ZitaoCai
            </Link>
          </span>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className={`flex items-center px-3 py-2 border rounded ${bottonColor}`}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className={`flex items-center px-3 py-2 border rounded ${bottonColor}`}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 mr-6">
            {navLinks.map((link, index) =>
              index === navLinks.length - 1 ? (
                <div
                  className={`relative w-16 h-8 flex items-center ${
                    theme === "dark" ? "bg-gray-900" : "bg-teal-500"
                  } cursor-pointer rounded-full p-1`}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <FaMoon className="text-white" size={18} />
                  <div
                    className="absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
                    style={
                      theme === "dark" ? { left: "2px" } : { right: "2px" }
                    }
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
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
