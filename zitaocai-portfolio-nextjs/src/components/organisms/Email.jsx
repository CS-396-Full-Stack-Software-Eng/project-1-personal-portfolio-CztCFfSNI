"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import GithubIcon from "../../../public/assets/github-icon.svg";
import GithubIcon2 from "../../../public/assets/g-light.svg";
import LinkedinIcon from "../../../public/assets/linkedin-icon.svg";
import LinkedinIcon2 from "../../../public/assets/l-light.svg";
import { motion } from "framer-motion";
import { ContactInfo } from "../molecules";

const Email = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  const { theme } = useTheme();
  const githubIcon = theme === "dark" ? GithubIcon : GithubIcon2;
  const linkedInIcon = theme === "dark" ? LinkedinIcon : LinkedinIcon2;
  const iconSize = theme === "dark" ? { width: 40, height: 40 } : { width: 33, height: 33 };

  const titleColor = theme === "dark" ? "text-white" : "text-black";
  const textColor = theme === "dark" ? "text-slate-400" : "text-slate-700";
  const responseColor =
    theme === "dark"
      ? "bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-slate-200"
      : "bg-slate-100 border border-slate-200 placeholder-slate-400 text-slate-700";
  const bottonColor =
    theme === "dark"
      ? "bg-purple-700 hover:bg-purple-800 text-white"
      : "bg-slate-100 hover:bg-slate-200 text-purple-600";
  return (
    <motion.section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="z-10">
        <h5 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-black"} my-2`}>
          Let's Connect
        </h5>
        <p className={`${theme === "dark" ? "text-slate-400" : "text-slate-700"} mb-4 max-w-md`}>
          I'm currently seeking a 2025 full-time SDE opportunity. My inbox is always open, so whether you have a question or just wanna say hi, always feel free to reach out!
        </p>
        <ContactInfo githubIcon={githubIcon} linkedInIcon={linkedInIcon} iconSize={iconSize} />
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Your email is sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="${titleColor} block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] ${responseColor} text-sm rounded-lg block w-full p-2.5`}
                placeholder="email@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="${titleColor} block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] ${responseColor} text-sm rounded-lg block w-full p-2.5`}
                placeholder="Your topic"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="${titleColor} block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] ${responseColor} text-sm rounded-lg block w-full p-2.5`}
                placeholder="Always feel free to reach out!"
              />
            </div>
            <button
              type="submit"
              className={`bg-purple-700 hover:bg-purple-800 text-white font-medium py-2.5 px-5 rounded-lg w-full`}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default Email;
