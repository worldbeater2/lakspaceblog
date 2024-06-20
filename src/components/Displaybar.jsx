import React from 'react'

const Displaybar = () => {
  return (
    <div className="w-screen p-20 -mt-5 flex flex-row h-screen">

    <div className="card w-[550px] h-[650px]  relative rounded-md hover:cursor-pointer glass hover:shadow-neworange hover:shadow-sm">

      <figure className="relative">
        <img
          className="h-[600px] overflow-hidden object-cover"
          src="./newtravel.jpg"
          alt="Paps Beach"
        />
        <div className="badge absolute bottom-2 right-2 bg-black bg-opacity-20 text-white p-2">
          Travel
        </div>{" "}
      </figure>
      <div className="card-body font-save hover:cursor-pointer">
        <div className="flex flex-row opacity-25 text-xs -mt-5">
          <div>By: Lako Apo </div>
          <div>• Nov 10, 2023</div>
        </div>

        <h2 className="card-title font-semibold font-newfont">
          Chasing Serenity at Lake Volta: A Journey to Remember
        </h2>
        <p className="font-light text-xs">
          I miss it already—the stunning scenery, the fresh air, and the
          peaceful escape from city life. Lake Volta was pure magic! 🌊✨
        </p>
      </div>
    </div>

    <div className="flex flex-col ml-5">
      <div className="card w-[320px] h-[320px] mb-4 relative rounded-md hover:cursor-pointer glass  hover:shadow-neworange hover:shadow-sm  ">
        <figure className="relative">
          <img
            className="overflow-hidden object-cover "
            src="https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Paps Beach"
          />
        
          <div className="badge absolute bottom-2 right-2 bg-black bg-opacity-20 text-white p-2">
            Health
          </div>{" "}
        </figure>
        <div className="card-body font-save hover:cursor-pointer ">
          <div className="flex flex-row opacity-25 text-xs -mt-5">
            <div>By: Lako Apo </div>
            <div>• Dec 28, 2023</div>
          </div>
          <h2 className="card-title font-semibold font-newfont">
            Feelings Unfiltered: My Path to Mental Wellness
          </h2>
        </div>
      </div>
      <div className="card w-[320px] h-[320px] mb-4 relative rounded-md hover:cursor-pointer glass  hover:shadow-neworange hover:shadow-sm">
        <figure className="relative">
          <img
            className="overflow-hidden object-cover "
            src="./foodagain.jpg"
            alt="Paps Beach"
          />
          <div className="badge absolute bottom-2 right-2 bg-black bg-opacity-20 text-white p-2">
            Food
          </div>{" "}
        </figure>
        <div className="card-body font-save hover:cursor-pointer ">
          <div className="flex flex-row opacity-25 text-xs -mt-5">
            <div>By: Lako Apo </div>
            <div>• Jan 14, 2024</div>
          </div>
          <h2 className="card-title font-semibold font-newfont">
            Tangy Bliss: Potato Salad and Saucy Chicken Delight
          </h2>
        </div>
      </div>
    </div>

    <div className="flex flex-col ">

    <div className="card lg:card-side h-[100px] w-[500px] rounded-md border  ml-5 font-save mb-2 flex hover:cursor-pointer  hover:shadow-neworange hover:shadow-sm ">
      <figure className="h-full w-[150px] flex-none">
        <img
          className="w-full h-full object-cover overflow-hidden"
          src="https://images.unsplash.com/photo-1489659639091-8b687bc4386e?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Album"
        />
      </figure>
      <div className="card-body h-full -mt-5 -ml-4 flex-grow">

        <h2 className="card-title text-start text-xs font-save">
        My Serene Spa Day Experience: Rejuvenating Mind, Body, and Soul
        </h2>

        <div className="flex opacity-25 text-xs -mt-2 font-save">
          <div>Jan 14, 2024</div>
        </div>
      </div>
    </div>

    <div className="card lg:card-side h-[100px] w-[500px]  hover:shadow-neworange hover:shadow-sm rounded-md border ml-5 font-save mb-2 flex hover:cursor-pointer">
      <figure className="h-full w-[150px] flex-none">
        <img
          className="w-full h-full object-cover overflow-hidden"
          src="https://images.unsplash.com/photo-1471094188469-4a39f5d71ad8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Album"
        />
      </figure>
      <div className="card-body h-full -mt-5 -ml-4 flex-grow">
        <h2 className="card-title text-start text-xs  font-save">
        Love's Tender Embrace: Nurturing Heart and Soul Through Feelings
        </h2>

        <div className="flex opacity-25 text-xs -mt-2 font-save" >
          <div>Jun 19, 2024</div>
        </div>
      </div>
    </div>
    <div className="card lg:card-side   h-[100px] w-[500px]  hover:shadow-neworange hover:shadow-sm rounded-md border  ml-5 font-save mb-2 flex hover:cursor-pointer">
      <figure className="h-full w-[150px] flex-none">
        <img
          className="w-full h-full object-cover overflow-hidden"
          src="https://images.unsplash.com/photo-1591386767153-987783380885?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Album"
        />
      </figure>
      <div className="card-body h-full -mt-5 -ml-4 flex-grow">
        <h2 className="card-title text-start text-xs font-save">
        Waakye Wonderland: A Flavorful Journey Through Ghana's Favorite Dish
        </h2>

        <div className="flex opacity-25 text-xs -mt-2 font-save">
          <div>Mar 28, 2024</div>
        </div>
      </div>
    </div>
    <div className="card lg:card-side h-[100px] w-[500px]  hover:shadow-neworange hover:shadow-sm rounded-md border  ml-5 font-save mb-2 flex hover:cursor-pointer">
      <figure className="h-full w-[150px] flex-none">
        <img
          className="w-full h-full object-cover overflow-hidden"
          src="https://images.unsplash.com/photo-1563921451692-54d41cf25bca?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Album"
        />
      </figure>
      <div className="card-body h-full -mt-5 -ml-4 flex-grow">
        <h2 className="card-title text-xs font-save">
        Shaping a Stronger You: Embracing the Fitness Journey
        </h2>

        <div className="flex opacity-25 text-xs -mt-2 font-save">
          <div>Feb 28, 2024</div>
        </div>
      </div>
    </div>
    <div className="card lg:card-side  h-[100px] w-[500px]  hover:shadow-neworange hover:shadow-sm rounded-md border  ml-5 font-save mb-2 flex hover:cursor-pointer">
      <figure className="h-full w-[150px] flex-none">
        <img
          className="w-full h-full object-cover overflow-hidden"
          src="https://images.unsplash.com/photo-1614544048536-0d28caf77f41?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Album"
        />
      </figure>
      <div className="card-body h-full -mt-5 -ml-4 flex-grow">
        <h2 className="card-title text-start text-xs font-save">
        The Magic of Reading: Exploring Worlds Through Words
        </h2>

        <div className="flex opacity-25 text-xs -mt-2 font-save">
          <div>Jul 13, 2024</div>
        </div>
      </div>
    </div>
    <div className="card lg:card-side  h-[100px] w-[500px] hover:shadow-neworange hover:shadow-sm rounded-md border ml-5 font-save mb-2 flex hover:cursor-pointer">
      <figure className="h-full w-[150px] flex-none">
        <img
          className="w-full h-full object-cover overflow-hidden"
          src="./Dear.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body h-full -mt-5 -ml-4 flex-grow">
        <h2 className="card-title text-start text-xs font-save">
        Dearest Lako: Where Life's Tales Unfold
        </h2>

        <div className="flex opacity-25 text-xs -mt-2 font-save">
          <div>Feb 28, 2024</div>
        </div>
      </div>
    </div>

    </div>
  
  </div>
  )
}

export default Displaybar