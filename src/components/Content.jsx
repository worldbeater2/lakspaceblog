import React from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";





const Content = ({blogs}) => {
  

// const blogs=[
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
  const {id} = useParams()

  let blog={}
  if(blog){

    let arr = blogs.data.filter(blog => blog.id == id);
    blog= arr[0]

  }else{
    blog={}
  }




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
