import React from "react";
import { Link } from "react-router-dom";
import { About, BlogPage, Homeview } from "../pages";
import Resources from "../pages/Resources";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 w-screen flex items-center sticky font-newfont ">
      <Link to={"/homepage"}>
        {" "}
        <img
          src="/logo.png"
          className=" w-52
       h-10 ml-10"
        ></img>
      </Link>

      <ul className="mx-auto ">
        <Link
          to={"/homepage"}
          className="btn btn-ghost text-lg  hover:bg-neworange "
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="btn btn-ghost text-lg  hover:bg-neworange  "
        >
          About me
        </Link>
        <Link
          to={"/blogapp"}
          className="btn btn-ghost text-lg    hover:bg-neworange  "
        >
          Blog
        </Link>
        <Link
          to={"/resources"}
          className="btn btn-ghost text-lg    hover:bg-neworange  "
        >
          Resources
        </Link>
      </ul>
      <Link
        to={"/contact"}
        className="btn btn-ghost text-lg  relative  hover:bg-neworange  mr-10 "
      >
        Contact me
      </Link>

      <ul className="bg-white w-full md:hidden absolute px-8">
        <li className=" btn btn-ghost  hover:bg-neworange  text-sm">
          Home
        </li>
        <li className=" btn btn-ghost  hover:bg-neworange  text-sm">
          About me
        </li>
        <li className=" btn btn-ghost  hover:bg-neworange  text-sm">
          Blog
        </li>
        <li className="  btn btn-ghost  hover:bg-neworange  text-sm">
          Resources
        </li>
        <li className="  btn btn-ghost  hover:bg-neworange  text-sm">
          Contact me
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
