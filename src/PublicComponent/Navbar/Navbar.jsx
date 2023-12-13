import { NavLink } from "react-router-dom";
import ModeChange from "../../DarkLight/ModeChange";

const Navbar = () => {
  const NavLinks = (
    <>
      <div className="uppercase font-bold text-lg space-x-5 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-200" : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            isActive ? "text-yellow-200" : "text-white"
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-yellow-200" : "text-white"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/ourmenu"
          className={({ isActive }) =>
            isActive ? "text-yellow-200" : "text-white"
          }
        >
          Our Menu
        </NavLink>
        <NavLink
          to="/ourshop"
          className={({ isActive }) =>
            isActive ? "text-yellow-200" : "text-white"
          }
        >
          Our Shop
        </NavLink>
      </div>
    </>
  );

  return (
    <div className="">
      <div className="py-3 flex items-center justify-evenly w-full  fixed z-10 bg-base-100 bg-opacity-50">
        <div className="uppercase text-white">
          <h1 className=" text-3xl font-bold ">Bistro Boss</h1>
          <h3 className="text-2xl font-semibold">Restaurant</h3>
        </div>

        <div className="">{NavLinks}</div>
        <ModeChange />
      </div>
    </div>
  );
};

export default Navbar;
