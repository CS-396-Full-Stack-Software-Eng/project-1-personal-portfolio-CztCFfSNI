"use client";
import React, { useTransition, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Tab from "./Tab";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <div className="flex flex-col items-start">
            <span>CIS & Mathematics @ tOSU</span>
            <Image
              src="/assets/osu.svg"
              alt="Ohio State University Logo"
              width={50}
              height={50}
              layout="responsive"
              className="max-w-[100px] max-h-[100px] w-auto h-auto"
            />
          </div>
        </li>
        <li>
          <div className="flex flex-col items-start">
            <span>MSCS @ Northwestern</span>
            <Image
              src="/assets/nu.svg"
              alt="Northwestern University Logo"
              width={50}
              height={50}
              layout="responsive"
              className="max-w-[100px] max-h-[100px] w-auto h-auto"
            />
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Courses",
    id: "courses",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Structure & Algorithm</li>
        <li>Database</li>
        <li>Artificial Intelligence & Machine Learning</li>
        <li>Software Development & Full-stack Development</li>
        <li>...</li>
      </ul>
    ),
  },
  {
    title: "Research",
    id: "research",
    content: (
      <ul className="list-disc pl-2">
        <li>Towards Automatic Penetration Testing with LLMs</li>
        <li>Measurement Study of Super Mini-Apps</li>
        <li>An Integrated Data Cyberinfrastructure</li>
        <li>...</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-2">
        <li>🏀</li>
        <li>📷</li>
        <li>🎬</li>
        <li>...</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();
  const { theme, setTheme } = useTheme();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const textColor = theme === "dark" ? "bg-[#121212]" : "bg-white";
  const bgColor = theme === "dark" ? "bg-[#121212]" : "bg-white";

  return (
    <section className={`${bgColor} ${textColor}`}>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/osu_graduate.JPG"
            alt="personal images"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-base lg:text-lg">
                🎓 👨🏻‍🎓 Hi, This is Zitao from Northwestern. I hold a degree in
                Computer and Information Science from the Ohio State University
                and have furthered my studies at Northwestern University,
                focusing on both software development and machine learning.
                <br />
                💻 🧑‍💻 My passion lies in crafting software solutions that push
                the boundaries of what is possible, and I am continually seeking
                opportunities to grow, contribute, and learn in the field of
                software engineering and development.
                <br />
                📷 🎬 I have a keen interest in sports and photography.
                Additionally, I'm a movie enthusiast, always eager to explore
                new pictures.
              </p>
              <div className="flex flex-row justify-start mt-8">
                <Tab
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  Education{" "}
                </Tab>
                <Tab
                  selectTab={() => handleTabChange("courses")}
                  active={tab === "courses"}
                >
                  Courses{" "}
                </Tab>
                <Tab
                  selectTab={() => handleTabChange("research")}
                  active={tab === "research"}
                >
                  Research{" "}
                </Tab>
                <Tab
                  selectTab={() => handleTabChange("hobbies")}
                  active={tab === "hobbies"}
                >
                  Hobbies{" "}
                </Tab>
              </div>
              <div className="mt-4">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
