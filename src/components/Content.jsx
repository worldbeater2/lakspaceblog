import React from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";





const Content = ({blogs}) => {
  

  const {id} = useParams()

  const blog = blogs.data.find(blog => blog.id == id) || {};



  return (
    <section className="w-full pb-10 bg-gray-50">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:gap-y-8 lg:gap-8 md:gap-8 px-4 sm:pt-16 md:mt-0 ">
          <div className="col-span-2 md:gap-8 lg:gap-8 ">
            <img
              src={`${blog.attributes.coverImg.data.attributes.url}`}
              className="object-cover w-full h-56 rounded-md "
            />
            <h1 className="font-bold my-1 text-4xl pt-4 font-newfont ">{blog.attributes.blogTitle}</h1>
            <div className="pt-5 font-save font-light">
              <Markdown className="text-justify line-break">{blog.attributes.blogContent}</Markdown>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden shadow-md max-h-[250px] py-5 mx-auto">
            <div>
                <img className="h-32 w-32 rounded-full p-2 mx-auto object-cover" src="/image.webp" ></img>
                <h1 className="font-bold text-center text-2xl text-gray-900 pt-3 font-newfont">Lako Apo</h1>
                <p className="text-center font-medium text-neworange font-save">Author</p>
            </div>
           
          </div>
        </div>
        <div className="flex justify-center mt-5">
            <Link to="/blogapp">
              <a className="link mr-5">Back</a>
            </Link>

            <Link to="/homepage">
              <a className="link">Home</a>
            </Link>
          </div>
    
      </div>
      
    </section>
  );
};

export default Content;
