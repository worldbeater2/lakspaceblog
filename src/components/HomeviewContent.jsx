import React from "react";
import Hero from "./Hero";
import Displaybar from "./Displaybar";
import Mentalhealth from "./Mentalhealth";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import { Link } from "react-router-dom";



const HomeviewContent = ({blogs}) => {



console.log(blogs)
  
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
    <div className="w-full overflow-x-hidden -mt-5">
      <div className="mx-auto w-screen">
        <Hero />
      </div>

      <div className="carousel carousel-end flex h-[500px] brightness-105 shadow-sm">
        <div className="carousel-item">
          <img src="./boat.jpg" alt="Boat" />
        </div>
        <div className="carousel-item">
          <img src="./dog.jpg" alt="Otis" />
        </div>
        <div className="carousel-item">
          <img src="food.jpg" alt="Noodles" />
        </div>
        <div className="carousel-item">
          <img src="./shells.jpg" alt="Shells on a beach" />
        </div>
        <div className="carousel-item">
          <img src="./swim.jpg" alt="Swimming" />
        </div>
        <div className="carousel-item">
          <img src="bird.jpg" alt="Bird on a roof" />
        </div>
        <div className="carousel-item">
          <img src="./lako2.jpg" alt="Picture of Lako" />
        </div>
      </div>
      
      <Displaybar blogs={blogs} />

      <section className=" p-4  mx-auto container -mt-16 justify-center flex flex-row ">
        {" "}
        <div className="font-newfont text-5xl mb-10 p-5 text-center items-center flex flex-col justify-center">
          Categories
        </div>
        <div className=" container grid grid-cols-4 mt-1 mx-auto p-7 gap-x-3 font-newfont  ">
          <div className="card w-75  hover:cursor-pointer bg-base-100 shadow-xl image-full hover:-translate-y-6 transition-all duration-100 hover:brightness-200" >
            <figure>
              <img
                className="h-full w-full "
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mental Health"
              />
            </figure>
            <div className="card-body flex flex-row justify-center" data-aos="zoom-in" data-aos-offset="100"   data-aos-delay="50"    data-aos-duration="1000">
              <h2 className="card-title text-center ">Mental Health</h2>
            </div>
          </div>

          <div className="card w-75 bg-base-100 image-full  hover:cursor-pointer hover:-translate-y-6 transition-all duration-100 hover:brightness-200 " >
            <figure>
              <img src="./hut.jpg" alt="Travel" />
            </figure>
            <div className="card-body flex flex-row justify-center" data-aos="zoom-in" data-aos-offset="100"   data-aos-delay="50"    data-aos-duration="1000">
              <h2 className="card-title text-center">Travel</h2>
            </div>
          </div>

          <div className="card w-75 bg-base-100 shadow-xl  hover:cursor-pointer image-full hover:-translate-y-6 transition-all duration-100 hover:brightness-200" >
            <figure>
              <img src="friedrice.jpg" alt="Abstract Technology" />
            </figure>
            <div className="card-body flex flex-row justify-center" data-aos="zoom-in" data-aos-offset="100"   data-aos-delay="50"    data-aos-duration="1000">
              <h2 className="card-title text-center">Food & Recipes</h2>
            </div>
          </div>
          <div className="card w-75 bg-base-100 hover:cursor-pointer shadow-xl image-full hover:-translate-y-6 transition-all duration-100 hover:brightness-200 ">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="building"
              />
            </figure>
            <div className="card-body flex flex-row justify-center"data-aos="zoom-in" data-aos-offset="100"   data-aos-delay="50"    data-aos-duration="1000">
              <h2 className="card-title text-center">Love & Relationships</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="ml-16 container text-justify mx-auto mb-10 font-navFont mt-4">
        <div className="flex justify-center ">
          <div className="flex text-black  px-9 duration-150 hover:animate-bounce  hover:border-b-2 hover:border-neworange hover:cursor-pointer border-black font-newfont" data-aos="zoom-in" data-aos-offset="100"   data-aos-delay="50"    data-aos-duration="1000">
            View All Categories{" "}
            <svg
              className="w-4 ml-3"
            
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    

      <section className=" p-4 mx-auto container  justify-center ">
        {" "}
        <p className="font-newfont text-5xl  mb-10 pb-7  p-5 text-center">
          -Latest Posts-
        </p>
        <div className="grid grid-cols-6 gap-x-7 font-save max-w-[1000px] ">
          <div className="col-span-4 ">
            <div className="card lg:card-side bg-base-100  rounded-md cursor-pointer  duration-700  p-2">
              <figure>
                <img
                  className="overflow-hidden h-[350px] w-[400px] object-cover "
                  src="dog.jpg"
                  alt="Otis"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title font-normal">
                Pet Parenthood: Lessons Learned from My Furry Friends
                </h2>
                <p1 className="opacity-25">04 April,2024</p1>
                <div className="card-actions justify-start">
                  <button className="btn btn-outline px-10 hover:bg-neworange hover:border-neworange  hover:text-black" data-aos="zoom-in" data-aos-offset="100"   data-aos-delay="50"    data-aos-duration="1000">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 w-[600px] rounded-lg mx-auto font-navFont p-2">
            <a href="/">
              <div className="flex flex-col border-l py-5 px-5  hover:border-neworange duration-700">
                <div className="flex">
                  <img
                    src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="overflow-hidden object-cover rounded-lg w-[200px] h-[200px] flex-none"
                  ></img>
                  <div className="p-5 flex-row">
                    <h1 className="font-semibold font-save text-sm ">
                    Culinary Adventures: My Quest for the Perfect Homemade Pizza
                    </h1>
                    <p1 className="font-light opacity-25 text-sm ">03 March,2024</p1>
                  </div>
                </div>
              </div>
            </a>
            
            <a href="/">
              <div className="flex flex-col border-l  hover:border-neworange py-5 px-5 duration-700 mt-2 ">
                <div className="flex ">
                  <img
                    src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="overflow-hidden  image-full object-cover rounded-lg w-[200px] h-[200px] flex-none"
                  ></img>
                  <div className="p-5 flex-row">
                    <h1 className="font-semibold font-sans text-sm ">
                    Running Free: How I Fell in Love with Marathon Training
                    </h1>
                    <p1 className="font-light opacity-25 text-sm ">10 February,2024</p1>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="container text-justify mx-auto mb-16 font-navFont mt-4">
        
          <div className="flex justify-center ">
            <div className="flex text-black  px-9 duration-150 hover:animate-bounce  hover:border-b-2 hover:border-neworange hover:cursor-pointer border-black font-newfont" data-aos="zoom-in" data-aos-offset="100"   data-aos-delay="50"    data-aos-duration="1000">
              Go to Blogs {" "}
              <svg
                className="w-4 ml-3"
           
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        
      </section>

      <Mentalhealth/>

      
    </div>
  );
};

export default HomeviewContent;
