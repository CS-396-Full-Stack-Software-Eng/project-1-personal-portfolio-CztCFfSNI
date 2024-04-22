"use client";
import { useTheme } from "next-themes";
import React from "react";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  
  let navbarBgColor = theme !== "dark" ? "bg-white" : "";

  // return <div className="text-center py-2">Copyright © 2024 Zitao Cai. Last edit on April, 2024.</div>;
  return (
    <footer className="footer z-10">
      <div className="container p-12 flex justify-between">
        <span></span>
        <p>Copyright © 2024 Zitao Cai. All rights reserved. Last edit on April, 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
