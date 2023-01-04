//@ts-nocheck
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className="fixed top-0 left-0 z-50 w-full ease-in duration-30"
    >
      <div className="container w-full p-3 mx-auto">
        <div className="flex items-center justify-between px-2 md:px-10">
          <Link href={"/"}>
            <h1
              style={{ color: `${textColor}` }}
              className="text-2xl font-semibold text-white cursor-pointer w-fit"
            >
              Photography
            </h1>
          </Link>

          <Navbar />

          {/* mobile nav functionality */}
          <button onClick={() => setNavMobile(true)}>
            <HiMenu className="text-3xl text-white cursor-pointer md:hidden" />
          </button>

          <div className={`${navMobile ? "right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>
          {/* mobile nav ends here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
