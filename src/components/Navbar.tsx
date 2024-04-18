import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex items-center justify-between w-[95%] my-0 mx-auto p-4">
        {/* -----------------nav_left------------ */}
        <div className="flex items-center gap-2">
          <img
            src="./RealEstate.gif"
            alt="estate logo"
            className=" w-8 h-8 object-contain"
          />
          <span className=" font-semibold text-[1.25rem]">Real Estate</span>
        </div>

        {/* -----------------nav_mid------------ */}

        <div className="flex items-center gap-10 font-normal text-[0.9rem]">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>

        {/* -----------------nav_right------------ */}
        <div className="flex items-center gap-2 font-light text-[0.9rem]">
          <Link
            to="/signin"
            className="py-[0.3rem] px-[0.7rem] bg-[#ebff00] text-black rounded font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
