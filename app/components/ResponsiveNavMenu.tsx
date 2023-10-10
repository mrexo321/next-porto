"use client";
import React, { FC, useState } from "react";
import MobileNavModal from "./MobileNavModal";
import Link from "next/link";

interface Inav {
  name: string;
  link: string;
}

const ResponsiveNavMenu: FC<Inav> = () => {
  const [open, setOpen] = useState(false);
  const showNavMenu = () => {
    setOpen(!open);
  };

  const navLinks: Inav[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
  ];

  return (
    <>
      <div className="sm:flex  items-center gap-6 hidden">
        {navLinks.map((nav, index) => (
          <>
            <Link
              className="py-2 px-4 rounded-lg text-slate-300 text-xl hover:bg-gray-600 font-semibold hover:bg-transparent hover:text-gray-100 transition duration-200"
              href={nav.link}
            >
              {nav.name}
            </Link>
          </>
        ))}
      </div>
      <button onClick={showNavMenu} className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-deep"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6h16"></path>
          <path d="M7 12h13"></path>
          <path d="M10 18h10"></path>
        </svg>
      </button>
      {open && <MobileNavModal trigger={setOpen} navLinks={navLinks} />}
    </>
  );
};

export default ResponsiveNavMenu;
