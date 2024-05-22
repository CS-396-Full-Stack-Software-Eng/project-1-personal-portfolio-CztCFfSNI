"use client";
import Image from "next/image";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/molecules/Navbar";
import Header from "../../components/organisms/Header";
import Project from "../../components/molecules/Project";
import Tech from "../../components/organisms/Tech";
import Providers from "../../components/organisms/Providers";
import { useTheme } from "next-themes";

const Main = () => {
  // const { theme } = useTheme();

  return (
    <main className={`flex min-h-screen flex-col `}>
      <Providers>
        <div className="relative">
          <Header />
        </div>
        <div className="container mt-24 mx-auto px-12 py-4">
          <Tech />
          <Project />
        </div>
        <Footer />
      </Providers>
    </main>
  );
};

export default Main;
