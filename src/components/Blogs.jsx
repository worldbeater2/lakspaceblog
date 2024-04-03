import React from "react";
import { Link } from "react-router-dom";

const Blogs = ({blogs}) => {

  // const blogs1=[
  //   {
  //     id: 1,
  //     title: "Happiness is Forever!",
  //     desc: "If a dog chews shoes whose shoes does he choose?",
  //     coverImg: "/me.jpg",
  //     content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  //     authorName: "Lako Apo",
  //     authorImg: "/image.webp",
  //     authorDesc: "Author",
  //   },
  //   {
  //     id: 2,
  //     title: "Adulthood and Death",
  //     desc: "Now, adulthood is telling me that these future goals might not happen for many people and I’ll be saying goodbye...",
  //     coverImg: "/third.jpg",
  //     content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  //     authorName: "Lako Apo",
  //     authorImg: "/image.webp",
  //     authorDesc: "Author",
  //   },
  //   {
  //     id: 3,
  //     title: "The Chronicle",
  //     desc: "Several days and nights, I saw myself standing before people, I saw myself causing change...",
  //     coverImg: "/duck.jpg",
  //     content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  //     authorName: "Lako Apo",
  //     authorImg: "/image.webp",
  //     authorDesc: "Author",
  //   },
  //   {
  //     id: 4,
  //     title: "The Chronicle",
  //     desc: "Several days and nights, I saw myself standing before people, I saw myself causing change...",
  //     coverImg: "/duck.jpg",
  //     content:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',

  //     authorName: "Lako Apo",
  //     authorImg: "/image.webp",
  //     authorDesc: "Author",
  //   },
  //   {
  //     id: 5,
  //     title: "Adulthood and Death",
  //     desc: "Now, adulthood is telling me that these future goals might not happen for many people and I’ll be saying goodbye...",
  //     coverImg: "/third.jpg",
  //     content:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',

  //     authorName: "Lako Apo",
  //     authorImg: "/image.webp",
  //     authorDesc: "Author",
  //   },
  //   {
  //     id: 6,
  //     title: "Happiness is Forever!",
  //     desc: "If a dog chews shoes whose shoes does he choose?",
  //     coverImg: "/me.jpg",
  //     content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  //     authorName: "Lako Apo",
  //     authorImg: "/image.webp",
  //     authorDesc: "Author",
  //   },
  // ];

  

  return (
    <section className="w-full py-4">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-8 px-3">

        {blogs.data.map((blog) => {
            return [
              <Link to={`/blog/${blog.id}`}>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                  <img src={`https://lakspaceblog.onrender.com/${blog.attributes.coverImg.data.attributes.url}`} alt="blogimage" />
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
