"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Providers from "../components/Providers";
import About from "../components/About";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Main = () => {
  const { theme } = useTheme(); 
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

  let navbarBgColor = theme !== "dark" ? scrolled ? "bg-white" : "bg-black" : "";

  return (
    <main className="flex min-h-screen flex-col">
      <Providers>
        <div className="relative w-full" >
          <Navbar />
        </div>
        <div className="container mt-24 mx-auto px-12 py-4">
          <About />
        </div>
        
        <Footer />
      </Providers>
    </main>
  );
};

export default Main;