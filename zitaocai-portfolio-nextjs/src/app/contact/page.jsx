"use client";
import Footer from "../../components/organizms/Footer";
import Header from "../../components/organizms/Header";
import Email from "../../components/organizms/Email";
import Providers from "../../components/Providers";

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
