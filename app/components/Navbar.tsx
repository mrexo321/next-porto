import Link from "next/link";
import React from "react";
import Container from "./Container";
import ResponsiveNavMenu from "./ResponsiveNavMenu";

const Navbar = () => {
  return (
    <Container>
      <div className="sticky inset-x-20 z-30 py-4">
        <div className="container flex justify-between items-center sm:px-4">
          <Link
            className="font-semibold text-3xl text-transparent bg-clip-text uppercase bg-gradient-to-r from-slate-100 to-gray-600"
            href="/"
          >
            Sans
          </Link>
          <ResponsiveNavMenu />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
