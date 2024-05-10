"use client";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";
import Email from "../../components/organisms/Email";
import Providers from "../../components/organisms/Providers";

const Main = () => {
  return (
    <main className={`flex min-h-screen flex-col `}>
      <Providers>
        <div className="relative">
          <Header />
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
