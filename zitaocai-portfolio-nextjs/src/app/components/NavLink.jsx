import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <li className=" hover:text-purple-700">
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default NavLink;
