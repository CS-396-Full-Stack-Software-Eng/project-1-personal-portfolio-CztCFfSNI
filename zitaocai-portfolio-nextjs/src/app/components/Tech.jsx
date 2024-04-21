"use client";
import React, { useState, useRef } from "react";
import { useTheme } from "next-themes";

export const collabApps = [
  {
    id: "0",
    title: "Java",
    icon: "/assets/java.png",
    width: 42,
    height: 42,
  },
  {
    id: "1",
    title: "AWS",
    icon: "/assets/aws.png",
    width: 42,
    height: 42,
  },
  {
    id: "2",
    title: "MySQL",
    icon: "/assets/mysql.png",
    width: 42,
    height: 42,
  },
  {
    id: "3",
    title: "Next.js",
    icon: "/assets/nextjs.png",
    width: 42,
    height: 42,
  },
  {
    id: "4",
    title: "Node.js",
    icon: "/assets/nodejs.png",
    width: 42,
    height: 42,
  },
  {
    id: "5",
    title: "Python",
    icon: "/assets/py.png",
    width: 42,
    height: 42,
  },
  {
    id: "6",
    title: "React",
    icon: "/assets/react.png",
    width: 42,
    height: 42,
  },
  {
    id: "7",
    title: "Ruby",
    icon: "/assets/ruby.png",
    width: 42,
    height: 42,
  },
];

const Tech = () => {
  const { theme, setTheme } = useTheme();

  const classColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <section id="tech" className={`py-12 px-4`}>
      <h2
        className={`text-center text-4xl font-bold ${classColor} mt-4 mb-8 md:mb-12`}
      >
        Tech Stack
      </h2>
      <div className="lg:ml-auto xl:w-[38rem] mt-4">
        <div className="relative left-1/2 flex w-[22rem] aspect-square rounded-full -translate-x-1/2 scale:75 md:scale-100">
          <div className="flex w-60 aspect-square m-auto rounded-full">
            <div className="w-[6rem] aspect-square m-auto rounded-full">
              <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <img
                  src={"/assets/developer.png"}
                  width={45}
                  height={45}
                  alt="brainwave"
                />
              </div>
            </div>
          </div>

          <ul>
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute w-12 h-12 flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2`}
                style={{
                  left: `calc(50% + ${
                    Math.sin((index * 2 * Math.PI) / collabApps.length) * 150
                  }px)`,
                  top: `calc(50% - ${
                    Math.cos((index * 2 * Math.PI) / collabApps.length) * 150
                  }px)`,
                }}
              >
                <img
                  className="block"
                  width={app.width}
                  height={app.height}
                  alt={app.title}
                  src={app.icon}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tech;
