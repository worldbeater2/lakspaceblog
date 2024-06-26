import React, { useState } from "react";
import { Link } from "react-router-dom";

const Displaybar = ({ blogs }) => {
  blogs = blogs.data;
  console.log(blogs);

  const getRandomBlogs = (blogs) => {
    const randomBlogs = [];
    while (randomBlogs.length < 3) {
      const randomIndex = Math.floor(Math.random() * blogs.length);
      const randomBlog = blogs[randomIndex];
      if (!randomBlogs.includes(randomBlog)) {
        randomBlogs.push(randomBlog);
      }
    }
    return randomBlogs;
  };

  const randomBlogs = getRandomBlogs(blogs);



  return (
    <div className="w-screen p-20 -mt-5 flex flex-row h-screen">
  
  


   
      <div className="card w-[550px] h-[650px]  relative rounded-md hover:cursor-pointer glass hover:shadow-neworange hover:shadow-sm">
       
        <figure className="relative">

          <img
            className=" h-[600px] overflow-hidden object-cover"
            src={randomBlogs[0].attributes.coverImg.data.attributes.url}
            alt="Paps Beach"
          />
          <div className="badge absolute bottom-2 right-2 bg-black bg-opacity-20 text-white p-2">
            Travel
          </div>{" "}
        </figure>
        <Link to={`/blog/${randomBlogs[0].id}`} >
        <div className="card-body font-save hover:cursor-pointer">
          <div className="flex flex-row opacity-25 text-xs -mt-5">
            <div>By: Lako Apo </div>
            <div>• Nov 10, 2023</div>
          </div>

          <h2 className="card-title font-semibold font-newfont">
            {randomBlogs[0].attributes.blogTitle}
          </h2>
          <p className="font-light text-xs">
            {randomBlogs[0].attributes.blogDesc}
          </p>
        </div>
        </Link>
      </div>
  

      <div className="flex flex-col ml-5">

        <Link to={`/blog/${randomBlogs[1].id}`} >
        <div className="card w-[320px] h-[320px] mb-4 relative rounded-md hover:cursor-pointer glass  hover:shadow-neworange hover:shadow-sm">
        <figure className="relative h-[320px] w-[320px]">
            <img
    className="object-cover h-full w-full"
              src={randomBlogs[1].attributes.coverImg.data.attributes.url}
              alt="Paps Beach"
              style={{objectFit: "cover"}}
            />
            <div className="badge absolute bottom-2 right-2 bg-black bg-opacity-20 text-white p-2">
              Health
            </div>{" "}
          </figure>
          <div className="card-body font-save hover:cursor-pointer ">
            <div className="flex flex-row opacity-25 text-xs -mt-5">
              <div>By: Lako Apo </div>
              <div>• Dec 28, 2023</div>
            </div>
            <h2 className="card-title font-semibold font-newfont">
              {randomBlogs[1].attributes.blogTitle}
            </h2>
            <p className="font-light text-xs"> {randomBlogs[1].attributes.blogDesc}</p>
          
          </div>
        </div>
        </Link>
        <Link to={`/blog/${randomBlogs[2].id}`}>
        <div className="card w-[320px] h-[320px] mb-4 relative rounded-md hover:cursor-pointer glass  hover:shadow-neworange hover:shadow-sm">
          <figure className="relative h-[320px] w-[320px]">
            <img
              className="object-cover h-full w-full"
              src={randomBlogs[2].attributes.coverImg.data.attributes.url}
              alt="Paps Beach"
              style={{objectFit: "cover"}}
            />
            <div className="badge absolute bottom-2 right-2 bg-black bg-opacity-20 text-white p-2">
              Food
            </div>{" "}
          </figure>
          <div className="card-body font-save hover:cursor-pointer ">
            <div className="flex flex-row opacity-25 text-xs -mt-5">
              <div>By: Lako Apo </div>
              <div>• Jan 14, 2024</div>
            </div>
            <h2 className="card-title font-semibold font-newfont">
              {randomBlogs[2].attributes.blogTitle}
            </h2>
            <p className="font-light text-xs"> {randomBlogs[2].attributes.blogDesc}</p>
          </div>
        </div>
        </Link>
      </div>

      <div className="flex flex-col ">

        {blogs.sort((a, b) => b.id - a.id).slice(0, 6).map((blog) => (

          <Link to={`/blog/${blog.id}`} key={blog.id}>
          <div className="card lg:card-side h-[100px] w-[500px] rounded-md border  ml-5 font-save mb-2 flex hover:cursor-pointer  hover:shadow-neworange hover:shadow-sm " key={blog.id}>
            <figure className="h-full w-[150px] flex-none">
              <img
                className="w-full h-full object-cover overflow-hidden"
                src={blog.attributes.coverImg.data.attributes.url}
                alt="Album"
              />
            </figure>
            <div className="card-body h-full -mt-5 -ml-4 flex-grow">
              <h2 className="card-title text-start text-xs font-normal font-save">
                {blog.attributes.blogTitle}
              </h2>
              <p className="font-light text-xs">
                {blog.attributes.blogDesc.split(" ").slice(0, 20).join(" ") } </p>

              <div className="flex opacity-25 text-xs -mt-2 font-save">
              <div>Jan 14, 2024</div>
              </div>
            </div>
          </div>
          </Link>
        ))}

        
    

      </div>
    </div>
  );
};

export default Displaybar;
