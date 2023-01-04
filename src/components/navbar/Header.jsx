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
      className="fixed left-0 top-0 w-full z-10 ease-in duration-30"
    >
      <div className="container mx-auto p-3 w-full">
        <div className="flex px-2 md:px-10 items-center justify-between">
          <Link href={"/"}>
            <h1 style={{ color: `${textColor}` }} className="text-2xl text-white font-semibold cursor-pointer">Photography</h1>
          </Link>

          <Navbar />

          {/* mobile nav functionality */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="md:hidden text-white text-3xl cursor-pointer"
          />

          <div className={`${navMobile ? "-right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>

          {/* mobile nav ends here */}

        </div>
      </div>
    </header>
  );
};

export default Header;
