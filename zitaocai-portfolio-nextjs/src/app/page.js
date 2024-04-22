"use client";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Providers from "./components/Providers";
import About from "./components/About";
import Project from "./components/Project";
import Email from "./components/Email";
import Tech from "./components/Tech";
import Main from "./main/page";
import LightMode from "./components/MainLight";
import DarkMode from "./components/MainDark";
import { useTheme } from "next-themes";

const Home = () => {
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
    <main className={`flex min-h-screen flex-col `} 
    // style={backgroundStyle}
    >
      <Providers>
       <div className="relative w-full">
          <Navbar />
          <Main />
          {/* {theme === "dark" ? <DarkMode /> : <LightMode />} */}
        </div>
      </Providers>
    </main>
    // <div className="max-w-6xl mx-auto flex items-center py-12">
    //   <div className="flex-1">
    //     <span className="uppercase">About Me</span>

    //     <h1 className="capitalize font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-950 dark:from-red-600 dark:to-green-950">
    //       Zitao Cai
    //     </h1>
    //     <br />
    //     <h1 className="capitalize font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-950 dark:from-red-600 dark:to-green-950">
    //       Full-Stack Engineer
    //     </h1>

    //     <hr className="block bg-emerald-700 h-1.5 w-24 my-5 border-none" />

    //     <p>
    //       Hi, This is Zitao from Northwestern. I hold a degree in Computer and
    //       Information Science from the Ohio State University and have furthered
    //       my studies at Northwestern University, focusing on both software
    //       development and machine learning.
    //       <br />
    //       My passion lies in crafting software solutions that push the
    //       boundaries of what's possible, and I am continually seeking
    //       opportunities to grow, contribute, and learn in the field of software
    //       engineering.
    //       <br />I have a keen interest in sports and photography. Additionally,
    //       I'm a movie enthusiast, always eager to explore new pictures.
    //     </p>

    //     <a
    //       href="#"
    //       className="uppercase inline-block py-2 px-7 mt-9 border-2 rounded-full"
    //     >
    //       download app
    //     </a>
    //   </div>

    //   <div className="flex-1 flex justify-end">
    //     <Image
    //       src="/assets/osu_graduate.JPG"
    //       alt="personal images"
    //       width={350} // desired width
    //       height={300} // desired height
    //       className="rounded-3xl"
    //     />
    //   </div>
    // </div>
  );
};

export default Home;
