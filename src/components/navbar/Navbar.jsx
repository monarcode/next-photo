import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="capitalize hidden md:flex">
      <ul className="flex items-center space-x-12 text-white">
        <li >
          <Link className="cursor-pointer"  href="/">home</Link>
        </li>
        <li>
          <Link href="/gallery">gallery</Link>
        </li>
        <li>
          <Link href="/work">work</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
