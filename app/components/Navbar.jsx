"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { HiBars3, HiXMark } from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 w-full mx-auto border-b border-gray-500 backdrop-blur-lg">
      <div className="flex flex-wrap items-center justify-between p-8">
        <Link
          href={"/"}
          className="font-mono text-xl font-semibold text-gray-800 uppercase lg:text-3xl dark:text-white"
        >
          dev.Rence
        </Link>
        {currentTheme === "dark" ? (
          <button>
            <BsFillMoonStarsFill
              onClick={() => setTheme("light")}
              className="text-2xl cursor-pointer"
            />
          </button>
        ) : (
          <button>
            <BsFillSunFill
              onClick={() => setTheme("dark")}
              className="text-2xl text-gray-800 cursor-pointer"
            />
          </button>
        )}
        <div className="block md:hidden mobile-menu">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded-lg border-slate-700 text-slate-700 dark:text-white dark:border-white"
            >
              <HiBars3 className="size-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded-lg border-slate-700 text-slate-700 dark:text-white dark:border-white"
            >
              <HiXMark className="size-5" />
            </button>
          )}
        </div>

        <div className="hidden menu md:block md:w-auto" id="navbar">
          <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;
