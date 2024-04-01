import React from "react";


const Navbar = () => {
  return (

    <div className="navbar bg-base-100 w-screen flex items-center   ">
      <img src="/public/logo.png" className=" w-52
       h-10 ml-10"></img>
      <ul className="mx-auto ">

        <a className="btn btn-ghost text-lg  hover:bg-pink-300 font-navfont">
          Home
        </a>
        <a className="btn btn-ghost text-lg font-navfont  hover:bg-pink-300 ">
          About me
        </a>
        <a className="btn btn-ghost text-lg font-navfont  hover:bg-pink-300 ">
          Blog
        </a>
        <a className="btn btn-ghost text-lg font-navfont  hover:bg-pink-300 ">
          Resources
        </a>
        
 
      </ul>
      <a className="btn btn-ghost text-lg font-navfont relative hover:bg-pink-300 mr-10 ">
        Contact me
      </a>

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

export default Navbar;
