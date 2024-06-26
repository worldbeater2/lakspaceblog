import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

/**
 * About component renders a section containing information about the author and a link to the homepage and blog page.
 * @returns {JSX.Element} A React component containing the About section.
 */
const About = () => {
  // Return a JSX element containing the About section.
  return (
    <div>
      {/* Render the Navbar component. */}
      <Navbar />,

      {/* Render the Carousel component. */}
      <Carousel />,

      {/* Render a section containing information about the author. */}
      <div>
        <section className="  w-screen h-[800px] text-justify font-save font-light text-lg  p-10">
          <div className="w-[900px] h-[700px] mx-auto ">
            {/* Render a paragraph containing information about the author's creativity. */}
            <p1 className="tracking-wide" >
              My journey through life is like a kaleidoscope, always shifting
              and blending colors to create something new and exciting. From
              doodling on napkins to dreaming up fantastical worlds, creativity
              flows through my veins.
            </p1>
            <br></br>
            <br></br>

            {/* Render a paragraph containing information about the author's eclectic hobbies. */}
            <p2 className=" my-6 tracking-wide">
              Beyond creativity, I'm a connoisseur of quirky hobbies. Whether
              it's experimenting with fusion cuisine or collecting vintage comic
              books, my interests are as eclectic as they are entertaining. You
              might find me stargazing on rooftops or perfecting my salsa moves
              – the world is my playground!
            </p2>

            <br></br>
            <br></br>

            {/* Render a paragraph containing information about the author's goal to create meaningful connections. */}
            <p3 className=" my-6  tracking-wide">
              As I navigate through this whimsical journey called life, my
              sights are set on creating meaningful connections and spreading
              joy through my endeavors. Whether it's through my art, writing, or
              just a warm smile, I strive to leave a positive mark on everyone I
              meet.
            </p3>

            <br></br>
            <br></br>

            {/* Render a paragraph containing information about the author's love for exploration. */}
            <p3 className=" my-6  tracking-wide">
              When I'm not busy chasing creative sparks, you'll likely find me
              exploring hidden gem cafes for the perfect cup of chai latte or
              wandering through art galleries for inspiration. I thrive on the
              thrill of discovering new perspectives and weaving them into my
              vibrant tapestry of ideas. Join me on this whimsical journey as we
              uncover the beauty in everyday moments and turn them into stories
              worth sharing.
            </p3>

            <div className="flex justify-center mt-10">
              {/* Render a link to the homepage. */}
              <Link to="/homepage">
                <a className="link mr-5">Back</a>
              </Link>

              {/* Render a link to the blog page. */}
              <Link to="/blogapp">
                <a className="link">View Blog</a>
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* Render the Footer component. */}
      <Footer />
    </div>
  );
};

export default About;
