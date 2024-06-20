// import React, { useState, useEffect } from 'react';

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// url: 'https://images.unsplash.com/photo-1518897761968-5a3544c369b5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// url: 'https://images.unsplash.com/photo-1509130298739-651801c76e96?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const images = [
  {
    url: "./sel.jpg",
    heading: "Travel Diaries: Journey with Me Across the Globe",
    text: "Pack your bags and join me as I uncover hidden gems, embrace new cultures, and embark on unforgettable adventures around the world.",
  },
  {
    url: "./duck.jpg",
    heading: "Moments of Joy: Embrace the Fun in Everyday Life",
    text: "Let’s find joy in the little things! Join me for spontaneous fun, quirky hobbies, and all the simple pleasures that make life exciting",
  },
  {
    url: "./me.jpg",
    // heading: 'Where Tradition Meets Innovation',
    // text: 'Guiding Businesses with Timeless Expertise and Modern Solutions'
    heading: "Welcome to Lakspace: Where Every Moment Tells a Story",
    text: "Welcome to my vibrant world! Dive into my adventures, heartfelt musings, and the delightful chaos that colors my everyday life.",
  },

  {
    url: "./foodagain.jpg",
    heading: "Culinary Delights: Savor the Flavors of Life",
    text: "Indulge with me in a culinary adventure! From mouth-watering recipes to delightful restaurant finds, let's celebrate the joy of food together.",
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentHeading, setCurrentHeading] = useState(images[0].heading);
  const [currentText, setCurrentText] = useState(images[0].text);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex =
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setCurrentHeading(images[newIndex].heading);
      setCurrentText(images[newIndex].text);
    }, 15000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div
      className="hero min-h-screen w-full relative overflow-hidden bg-cover font-newfont hover:bg-blend-normal"
      style={{
        backgroundImage: `url(${images[currentImageIndex].url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "background-image 2s ease-in-out",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-slate-900 "></div>
      <div className="hero-content  text-start text-neutral-content">

        <div className="max-w-5xl">
          <h1 className="mb-5 text-4xl md:text-7xl  font-normal  tracking-wider text-center md:text-start">
            {currentHeading}
          </h1>

          <p className="mb-5  md:text-2xl text-base text-center md:text-start ">{currentText}</p>

          

          <Link to="/about">

          <div className="flex flew-row justify-center md:justify-center  " >
          <button className="btn file: text-white btn-outline px-9 text-start hover:bg-neworange hover:border-neworange hover:text-black ">
              Explore
            </button>
          </div>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
