import React from "react";
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  return (
    <section className="w-full py-4">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-8 px-3">
          {blogs.data.map((blog) => {
            return [
              <Link to={`/blog/${blog.id}`}>

                                <div className="card w-96 relative rounded-md hover:cursor-pointer glass hover:shadow-neworange hover:shadow-sm">
                  <figure className="relative">
                    <img
                      className="h-[300px] overflow-hidden object-cover"
                      src={`${blog.attributes.coverImg.data.attributes.url}`}
                      alt="Paps Beach"
                    />
                    {/* <div className="badge absolute bottom-2 right-2 bg-black bg-opacity-20 text-white p-2">
                      Travel
                    </div>{" "} */}
                  </figure>
                  <div className="card-body font-save hover:cursor-pointer">
                    <div className="flex flex-row opacity-25 text-xs -mt-5">
                      <div>By: Lako Apo </div>
                      <div>• Nov 10, 2023</div>
                    </div>

                    <h2 className="card-title font-semibold font-newfont">
                    {blog.attributes.blogTitle}
                    </h2>
                    <p className="font-light text-xs">
                   {blog.attributes.blogDesc}
                    </p>
                  </div>
                </div>










              </Link>,
            ];
          })}


        </div>
      </div>
    </section>
  );
};

export default Blogs;
