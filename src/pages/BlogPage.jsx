import { Link } from "react-router-dom";
import Blogs from "../components/Blogs";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



function BlogPage({blogs}) {


  
  return [
    <Navbar/>,

    <div className=" p-4 my-7 mx-auto container flex justify-center font-newfont  text-8xl ">
      {" "}
      -Blog-
    </div>,
     <div className=" p-4 my-7 mx-auto container flex justify-center font-newfont text-5xl ">
        {" "}
        <span className="text-neworange">"</span>Pages of Discovery<span className="text-neworange">"</span>
      </div>,
   <Blogs blogs={blogs? blogs:" "} />,
   <div className="flex justify-center mt-5">
   
   <Link to="/blogapp">
     <a className="link font-save text-lg">Back to top</a>
   </Link>
 </div>,
   <Footer />,
  ];  
}

export default BlogPage;
