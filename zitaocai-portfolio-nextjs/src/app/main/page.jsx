"use client";
import { Header, MainLight, MainDark } from "@/components";
import Providers from "../../components/Providers";
import { React, useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Main = () => {
  const { theme, setTheme } = useTheme();
  const [backgroundStyle, setBackgroundStyle] = useState({});

  useEffect(() => {
    const newBackgroundStyle =
      theme === "dark"
        ? {
            backgroundImage: "url('/assets/Header.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }
        : {
            backgroundImage: "url('/assets/light.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          };

    setBackgroundStyle(newBackgroundStyle);
  }, [theme]);

  return (
    <main className={`flex min-h-screen flex-col `} style={backgroundStyle}>
      <Providers>
        <div className="relative w-full">
          <Header />
          {theme === "dark" ? <MainDark /> : <MainLight />}
        </div>
      </Providers>
    </main>
  );
};

export default Main;
