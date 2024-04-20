"use client";
import React, { useTransition, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Tab from "./Tab";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>CIS & Mathematics @ tOSU</li>
        <li>MSCS @ Northwestern</li>
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

  return (
    <section
      className="${theme === 'dark' ? 'bg-black' : 'bg-white'} ${textColor} py-16 px-4"
      id="about"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="flex flex-col mb-8 md:mb-0 md:mr-8">
            <Image
              src="/assets/osu.svg"
              alt="Ohio State University Logo"
              width={200}
              height={200}
              layout="responsive" 
              className="w-full h-auto"
            />
            <br />
            <Image
              src="/assets/nu.svg"
              alt="Northwestern University Logo"
              width={200}
              height={200}
              layout="responsive" 
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              🎓 👨🏻‍🎓 Hi, This is Zitao from Northwestern. I hold a degree in
              Computer and Information Science from the Ohio State University
              and have furthered my studies at Northwestern University, focusing
              on both software development and machine learning.
              <br />
              💻 🧑‍💻 My passion lies in crafting software solutions that push the
              boundaries of what's possible, and I am continually seeking
              opportunities to grow, contribute, and learn in the field of
              software engineering.
              <br />
              📷 🎬 I have a keen interest in sports and photography.
              Additionally, I'm a movie enthusiast, always eager to explore new
              pictures.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <Tab
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </Tab>
              <Tab
                selectTab={() => handleTabChange("courses")}
                active={tab === "courses"}
              >
                {" "}
                Courses{" "}
              </Tab>
              <Tab
                selectTab={() => handleTabChange("hobbies")}
                active={tab === "hobbies"}
              >
                Hobbies{" "}
              </Tab>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
