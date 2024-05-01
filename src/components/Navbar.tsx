import { useState } from "react";
import { Link } from "react-router-dom";
import { realestateGif } from "../utils/index.ts";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import "./NavbarResponsive.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={
        openMenu
          ? "fixed w-full top-0 z-[9999] bg-gradient-to-l from-[#040813] to-[#201f1f] text-white mobileActive"
          : "fixed w-full top-0 z-[9999] bg-gradient-to-l from-[#040813] to-[#201f1f] text-white"
      }
    >
      <div className="flex items-center justify-between w-[95%] my-0 mx-auto lg:p-4 px-2 py-4">
        {/* -----------------nav_left------------ */}
        <div className="flex items-center gap-2">
          <img
            src={realestateGif}
            alt="estate logo"
            className=" w-8 h-8 object-contain"
          />
          <span className=" font-semibold text-[1rem] lg:text-[1.25rem]">
            Real Estate
          </span>
        </div>

        {/* -----------------nav_mid------------ */}

        <div className="flex items-center gap-10 font-normal text-sm lg:text-[0.9rem] nav-mid">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/">Contact</Link>
        </div>

        {/* -----------------nav_right------------ */}
        <div className="flex items-center gap-2 font-light text-sm lg:text-[0.9rem]">
          <Link
            to="/signin"
            className="py-[0.2rem] px-[0.5rem]  md:py-[0.3rem] md:px-[0.7rem] bg-[#ebff00] text-black rounded font-medium"
          >
            Sign In
          </Link>
          <div className="menuClose_icon">
            <MdOutlineMenu
              className="mobile_nav_icon menuIcon"
              onClick={() => setOpenMenu(true)}
            />
            <MdClose
              className="mobile_nav_icon closeIcon"
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
