"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Providers from "../components/Providers";
import About from "../components/About";
import LightMode from "../components/MainLight";
import DarkMode from "../components/MainDark";
import { useTheme } from "next-themes";

const Main = () => {
  const { theme } = useTheme(); 
  
  let backgroundStyle = theme === "dark" ? {
    backgroundImage: "url('/assets/Header.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  } : {
    backgroundImage: "url('/assets/light.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main className={`flex min-h-screen flex-col `} style={backgroundStyle}>
       <Providers>
       <div className="relative w-full">
          <Navbar />
          {theme === "dark" ? <DarkMode /> : <LightMode />}
        </div>
      </Providers>
    </main>
  );
};

export default Main;
