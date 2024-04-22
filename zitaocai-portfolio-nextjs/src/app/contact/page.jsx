"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Email from "../components/Email";
import Providers from "../components/Providers";
import { useTheme } from "next-themes";

const Main = () => {
  // const { theme } = useTheme();

  return (
    <main className={`flex min-h-screen flex-col `}>
      <Providers>
        <div className="relative">
          <Navbar />
        </div>
        <div className="container mt-24 mx-auto px-12 py-4">
          <Email />
        </div>
        <Footer />
      </Providers>
    </main>
  );
};

export default Main;
