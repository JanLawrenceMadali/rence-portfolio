import Link from "next/link";


const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-gray-800 rounded dark:text-gray-300 sm:text-xl md:p-0 hover:text-gray-900 dark:hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
