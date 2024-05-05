import { useState } from "react";
import { Link } from "react-router-dom";
import { realestateGif } from "../utils/index.ts";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import "./NavbarResponsive.css";
import { GoDotFill } from "react-icons/go";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const user = false;

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
          <Link to="/" onClick={() => setOpenMenu(false)}>
            Home
          </Link>
          <Link to="/" onClick={() => setOpenMenu(false)}>
            About
          </Link>
          <Link to="/" onClick={() => setOpenMenu(false)}>
            Contact
          </Link>
        </div>

        {/* -----------------nav_right------------ */}
        <div className="flex items-center gap-2 font-light text-sm lg:text-[0.9rem]">
          {!user ? (
            <div>
              <Link
                to="/profile"
                className="relative flex font-semibold items-center gap-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1691335053879-02096d6ee2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2ZpbGUlMjBtZW58ZW58MHwwfDB8fHww"
                  alt="user img"
                  className=" w-9 h-9 rounded-full object-cover cursor-pointer"
                />
                <span>
                  <GoDotFill className="absolute top-[-10px] left-6 text-yellow-400" />
                </span>
                <span className=" text-xs lg:text-base">John Doe</span>
              </Link>
            </div>
          ) : (
            <Link
              to="/signin"
              className="py-[0.2rem] px-[0.5rem]  md:py-[0.3rem] md:px-[0.7rem] bg-[#ebff00] text-black rounded font-medium"
            >
              Sign In
            </Link>
          )}

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
