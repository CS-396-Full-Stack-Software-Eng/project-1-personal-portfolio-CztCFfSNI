import React, { useTransition, useState } from "react";
import { useTheme } from "next-themes";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const { theme, setTheme } = useTheme();

  const titleColor = theme === "dark" ? "text-white" : "text-black";
  const descriptionColor = theme === "dark" ? "text-[#ADB7BE]" : "text-black";

  return (
    // <div className="rounded-xl relative group border-2 border-salte-200">
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {gitUrl !== "#" && (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          {previewUrl !== "#" && (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className={`${titleColor} rounded-b-xl mt-3 bg-[#181818]py-6 px-4`}>
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className={`${descriptionColor}`}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
