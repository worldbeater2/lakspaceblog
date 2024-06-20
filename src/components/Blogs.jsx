import React from "react";
import { Link } from "react-router-dom";

const Blogs = ({blogs}) => {
  

  return (
    <section className="w-full py-4">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-8 px-3">

        {blogs.data.map((blog) => {
            return [
              <Link to={`/blog/${blog.id}`}>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                  <img src={`${blog.attributes.coverImg.data.attributes.url}`} alt="blogimage" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{blog.attributes.blogTitle}</h2>
                    <p>{blog.attributes.blogDesc}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-outline hover:border-pink-300 text-white hover:bg-pink-300 focus:ring-0 ">
                        Read me
                      </button>
                    </div>
                  </div>
                </div>
              </Link>,
            ];
          })}


          {/* {blogs1.map((blog) => {
            return [
              <Link to={`/blog/${blog.id}`}>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img src={blog.coverImg} alt="blogimage" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p>{blog.desc}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-outline hover:border-pink-300 text-white hover:bg-pink-300 focus:ring-0 ">
                        Read me
                      </button>
                    </div>
                  </div>
                </div>
              </Link>,
            ];
          })} */}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
