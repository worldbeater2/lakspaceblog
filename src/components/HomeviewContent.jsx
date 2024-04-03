import React from "react";

const HomeviewContent = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-screen">
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage: "url(/sel.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
              <h1 className="mb-7 mx-auto text-9xl font-bold font-navfont text-pink-100">
                Lakspace
              </h1>
              <p className="my-20 mx-auto text-center text-2xl">
                A reminder to be{" "}
                <span className=" font-navfont text-4xl text-pink-400">
                  grateful
                </span>
                , a space to appreciate my{" "}
                <span className=" font-navfont text-4xl text-green-400">
                  growth
                </span>{" "}
                . Count the little steps, acknowledge little{" "}
                <span className=" font-navfont text-4xl text-yellow-500">
                  wins
                </span>{" "}
                and you’ll see how far you have come
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className=" p-4  mx-auto container  justify-center ">
        {" "}
        <p className="font-navfont text-5xl border-pink-50 border-b-2 mb-10 p-5 text-center">
          -Categories-
        </p>
        <div className="mx-auto p-5">
          <div className="grid grid-cols-3 gap-5 mb-10">
            <div className="card w-96 glass">
              <figure>
                <img
                  className="max-h-48 overflow-hidden w-full object-fill"
                  src="/Travel.jpg"
                  alt="home!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-3xl text-gray-800 ">
                  Travel
                </h2>
                <p className="text-center text-lg text-black">
                  How to park your car at your garage?
                </p>
                <div className="card-actions justify-center p-2 ">
                  <button className="btn btn-outline px-10  hover:bg-pink-300  hover:border-pink-300 transition duration-400">
                    Explore
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-96 glass">
              <figure>
                <img
                  className="max-h-48 overflow-hidden w-full object-fill"
                  src="/Waakye.jpg"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-3xl text-gray-800">
                  Food
                </h2>
                <p className="text-center text-lg text-black">
                  How to park your car at your garage?
                </p>
                <div className="card-actions justify-center p-2">
                  <button className="btn btn-outline px-10  hover:bg-pink-300   hover:border-pink-300 transition duration-400">
                    Explore
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-96 glass">
              <figure>
                <img
                  className="max-h-48 overflow-hidden w-full object-fill "
                  src="/Mentalhealth.jpg"
                  alt="Mental Health!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-3xl text-gray-800">
                  Mental Health
                </h2>
                <p className="text-center text-lg text-black">
                  How to park your car at your garage?
                </p>
                <div className="card-actions justify-center  p-2">
                  <button className="btn btn-outline px-10  hover:bg-pink-300  hover:border-pink-300 transition duration-400">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" p-4 mx-auto container  justify-center ">
        {" "}
        <p className="font-navfont text-5xl border-green-50 border-b-2 mb-10 pb-7  p-5 text-center">
          -Latest Posts-
        </p>
        <div className="grid grid-cols-5 gap-x-7 ">
          <div className="col-span-3 ">
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-md hover:shadow-2xl hover:bg-green-300 hover:shadow-green-300 shadow-pink-300 duration-700">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title font-semibold">New album is released!</h2>
                <p className="">Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-outline px-10 hover:bg-pink-300 hover:border-pink-300 hover:text-white">Read more..</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 min-w-full p-5 bg-white border rounded-lg mx-auto">
          <a href="/">
          <div className="flex flex-col border py-5 px-5 rounded-xl hover:shadow-2xl hover:shadow-pink-300 duration-700" >
              <div className="flex ">
                <img
                  src="/Travel.jpg"
                  className="overflow-hidden object-fill rounded-lg w-24 h-24 "
                ></img>
                <div className="p-5 flex-row">
                  <h1 className="font-semibold ">My Forever Love</h1>
                  <p1 className="font-light ">This is the Description</p1>
                </div>
              </div>

            </div>

          </a>
          <a href="/">
          <div className="flex flex-col border py-5 px-5 rounded-xl hover:shadow-2xl  hover:shadow-pink-300 shadow-pink-300 duration-1000 mt-5" >
              <div className="flex ">
                <img
                  src="/Travel.jpg"
                  className="overflow-hidden object-fill rounded-lg w-24 h-24 "
                ></img>
                <div className="p-5 flex-row">
                  <h1 className="font-semibold ">My Forever Love</h1>
                  <p1 className="font-light ">This is the Description</p1>
                </div>
              </div>

            </div>

          </a>
        
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeviewContent;
