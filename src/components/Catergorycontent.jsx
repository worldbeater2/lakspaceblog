import React from "react";
import useFetch from "../hooks/useFetch";

const Catergorycontent = () => {
  let { loading, data, error } = useFetch(
    "http://localhost:1337/api/cats?populate=*"
  );
  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center mx-auto">
        <div className="mx-auto ">
          <span className="loading loading-dots loading-lg ml-12"></span>
          <div className="justify-center mx-auto font-navfont text-4xl text-pink-300 m-0 ">
            Loading..
          </div>
        </div>
      </div>
    );
  if (error) return <p>{error}</p>;
  console.log(error);

  const cat = data;
  
     let category = null;

     function selectCategory(category_){
        category = category_
     }


  return (
    <div className="max-w-[1240px] h-screen">
      <div className="flex justify-center">
        <h1 className="font-navfont text-8xl border-b-2 p-2 border-pink-100">
          -Categories-
        </h1>
      </div>
      <div className="mx-auto w-full">
        <div className="grid grid-cols-6 gap-x-10">
          <div className="col-span-2 mt-9 mx-auto">
            <ul className="menu menu-lg  w-56 rounded-box shadow-sm bg-pink-50">
            
            {cat.data.map((categories)=>

               (<li onClick={selectCategory}>
                <a>{categories.attributes.Name}</a>
              </li>) 
            )}

            </ul>
          </div>

        {category?.blogs?.map((blog)=>
            blog.Name
        )}

          <div className="mt-10">
            <div className="card w-[210px] bg-base-100 shadow-xl image-full">
              <figure>
                <img src="/Mentalhealth.jpg" alt="blogimage" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Hellp</h2>
                <p>Hello</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline hover:border-pink-300 text-white hover:bg-pink-300 focus:ring-0 ">
                    Read me
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-10">
            <div className="card w-[210px] bg-base-100 shadow-xl image-full">
              <figure>
                <img src="/Mentalhealth.jpg" alt="blogimage" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Hellp</h2>
                <p>Hello</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline hover:border-pink-300 text-white hover:bg-pink-300 focus:ring-0 ">
                    Read me
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 ">
            <div className="card w-[210px] bg-base-100 shadow-xl image-full">
              <figure>
                <img src="/Mentalhealth.jpg" alt="blogimage" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Hellp</h2>
                <p>Hello</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline hover:border-pink-300 text-white hover:bg-pink-300 focus:ring-0 ">
                    Read me
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Catergorycontent;
