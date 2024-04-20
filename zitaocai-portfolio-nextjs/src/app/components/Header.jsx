"use client";
import Image from "next/image";
import { React, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-purple-500 mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
              Hi! I&apos;m{" "}
            <br />
            <TypeAnimation
              sequence={[
                "Zitao Cai",
                1000,
                "A Software Engineer",
                1000,
                "A Full-stack Developer",
                1000,
                "A Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            SAY MY NAME
          </p>
          {/* <div>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="flex-1 flex justify-end">
            <Image
              src="/assets/osu_graduate.JPG"
              alt="personal images"
              width={350} // desired width
              height={300} // desired height
              className="rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
