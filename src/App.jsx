import useFetch from "./hooks/useFetch";
import { About, BlogContent, Homeview } from "./pages";
import BlogPage from "./pages/BlogPage";
import { Routes, Route } from "react-router-dom";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  let { loading, data, error } = useFetch(
 "https://lakspaceblog.onrender.com/api/blogs?populate=*"
  );



  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center mx-auto">
        <div className="mx-auto ">
        <span  className="loading loading-dots loading-lg ml-12 text-neworange"></span>
        <div className="justify-center mx-auto font-newfont text-4xl text-neworange m-0 ">Loading..</div>
        </div>

      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ScrollToTop />
      <Routes>
     
        <Route path="/" element={<Homeview blogs = {data ? data : ""} />}></Route>

        <Route
          path="/blog/:id"
          element={<BlogContent blogs={data ? data : ""} />}
        ></Route>
        <Route path="/blogapp"  element={<BlogPage blogs={data ? data : ""} />}/>
        <Route path="/about"  element={<About/>}/>

      <Route path="/homepage"  element={<Homeview blogs = {data ? data : ""} />}/>
      <Route path="/resources"  element={<Resources/>}/>
      <Route path="/contact"  element={<Contact/>}/>


      </Routes>
    </div>
  );
}
export default App;
