import NavLink from "../atoms/NavLink";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const Navbar = ({ navLinks, setTheme }) => {
  const { theme } = useTheme();

  return (
    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 mr-6">
      {navLinks.map((link, index) =>
        index === navLinks.length - 1 ? (
          <div
            className={`relative w-16 h-8 flex items-center ${
              theme === "dark" ? "bg-gray-900" : "bg-teal-500"
            } cursor-pointer rounded-full p-1`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <FaMoon className="text-white" size={18} />
            <div
              className="absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
              style={theme === "dark" ? { left: "2px" } : { right: "2px" }}
            ></div>
            <BsSunFill className="ml-auto text-yellow-400" size={18} />
          </div>
        ) : (
          <li className="hover:text-purple-700">
            <NavLink href={link.path} title={link.title} />
          </li>
        )
      )}
    </ul>
  );
};

export default Navbar;
