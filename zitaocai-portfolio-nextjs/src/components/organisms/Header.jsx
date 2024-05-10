import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Navbar, Menu } from "../molecules"; 

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

const Header = () => {
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

  let navbarBgColor =
    theme !== "dark" ? "bg-white" : scrolled ? "bg-[#121212]" : "";

  const buttonColor =
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
            <Link href={"/"}>ZitaoCai</Link>
          </span>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className={`flex items-center px-3 py-2 border rounded ${buttonColor}`}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className={`flex items-center px-3 py-2 border rounded ${buttonColor}`}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <Navbar navLinks={navLinks} setTheme={setTheme} />
        </div>
      </div>
      {navbarOpen ? <Menu links={navLinks} /> : null}
    </nav>
  );
};

export default Header;
