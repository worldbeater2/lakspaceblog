import React from "react";
import {Link} from 'react-router-dom';
import { About, BlogPage, Homeview } from "../pages";
import Resources from "../pages/Resources";




const Navbar = () => {
  return (

    <div className="navbar bg-base-100 w-screen flex items-center   ">
    <Link> <img src="/logo.png" className=" w-52
       h-10 ml-10"></img></Link>
     
      <ul className="mx-auto ">

        <Link to={"/homepage"} className="btn btn-ghost text-lg  hover:bg-pink-300 font-navfont">
          Home
        </Link>
        <Link to={"/about"} className="btn btn-ghost text-lg font-navfont  hover:bg-pink-300 ">
          About me
        </Link>
        <Link to={"/blogapp"} className="btn btn-ghost text-lg font-navfont  hover:bg-pink-300 ">
          Blog
        </Link>
        <Link to={"/resources"} className="btn btn-ghost text-lg font-navfont  hover:bg-pink-300 ">
          Resources
        </Link>
        
 
      </ul>
      <Link className="btn btn-ghost text-lg font-navfont relative hover:bg-pink-300 mr-10 ">
        Contact me
      </Link>

      {/* <div className="md:hidden ">
        <svg
          dataSlot="icon"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className=" w-[28px] h-[28px] "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />

        </svg>
      </div> */}

      <ul className="bg-white w-full md:hidden absolute px-8">
        <li className="font-navfont btn btn-ghost hover:bg-pink-300 text-sm" >
          Home
        </li>
        <li className="font-navfont btn btn-ghost hover:bg-pink-300 text-sm" >
          About me
        </li>
        <li className="font-navfont btn btn-ghost hover:bg-pink-300 text-sm">
          Blog
        </li>
        <li className=" font-navfont btn btn-ghost hover:bg-pink-300 text-sm">
          Resources
        </li>
        <li className=" font-navfont btn btn-ghost hover:bg-pink-300 text-sm">
          Contact me
        </li>


      </ul>

    </div>


    
  );
};

Navbar.propTypes = {};

export default Navbar;
