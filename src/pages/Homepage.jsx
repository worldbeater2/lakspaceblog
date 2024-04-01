import Blogs from "../components/Blogs";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Homepage({blogs}) {


  
  return [
    <Navbar/>,
   <Carousel />,
    <div className=" p-4 my-7 mx-auto container flex justify-center font-navfont text-8xl">
      {" "}
      -Blog-
    </div>,
   <Blogs blogs={blogs? blogs:" "} />,
   <Footer />,
  ];  
}

export default Homepage;
