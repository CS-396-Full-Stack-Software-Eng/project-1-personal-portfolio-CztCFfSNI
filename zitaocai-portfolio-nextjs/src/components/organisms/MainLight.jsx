"use client";
import Image from "next/image";
import { React, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const ImageSequence = () => {
  const images = [
    "/assets/me2.jpeg",
    "/assets/l2.jpg",
    "/assets/l3.jpg",
    "/assets/l4.jpg",
    "/assets/l5.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Image
      src={images[currentIndex]}
      alt="Personal Image"
      width={350}
      height={350}
      className="rounded-3xl"
    />
  );
};

const MainLight = () => {
  const { theme, setTheme } = useTheme();

  const descriptionColor =
    theme === "dark" ? "text-slate-200" : "text-slate-600";

  return (
    <section>
      <div className="container mt-24 mx-auto px-12 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-purple-600 mb-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
                Hi, I&apos;m <br />
                <TypeAnimation
                  sequence={[
                    "Zitao Cai",
                    1000,
                    "A Graduate Student",
                    1000,
                    "A BSCS @ OSU",
                    1000,
                    "A MSCS @ Northwestern",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <br />
            <p
              className={`${descriptionColor} text-base sm:text-lg mb-6 lg:text-xl`}
            >
              Honesty and diligence should be your eternal mates. — Franklin
            </p>
            <div>
              <Link
                href="/about"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-black text-white"
              >
                More Info
              </Link>
              {/* <Link
                href="mailto:321321@gmail.com"
                target="_blank"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-purple-700 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-500 hover:text-black rounded-full px-5 py-2">
                  Contact
                </span>
              </Link> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="flex-1 flex justify-end">
              <ImageSequence />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainLight;
