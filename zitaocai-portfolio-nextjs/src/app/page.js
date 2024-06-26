"use client";
import Header from "../components/organisms/Header";
import Providers from "../components/organisms/Providers";
import Main from "./main/page";
import { useTheme } from "next-themes";

const Home = () => {
  const { theme } = useTheme();

  return (
    <main className={`flex min-h-screen flex-col `}>
      <Providers>
        <div className="relative w-full">
          <Header />
          <Main />
        </div>
      </Providers>
    </main>
  );
};

export default Home;
