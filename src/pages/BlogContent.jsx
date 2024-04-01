import Content from "../components/Content";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const BlogContent = ({blogs}) => {
  return [<Navbar />,<Content blogs={blogs? blogs:" "} />, 
  <Footer />];
};

export default BlogContent;
