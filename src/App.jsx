import useFetch from "./hooks/useFetch";
import { About, BlogContent, Homeview } from "./pages";
import BlogPage from "./pages/BlogPage";

import { Routes, Route } from "react-router-dom";
import Resources from "./pages/Resources";

function App() {
  let { loading, data, error } = useFetch(
    "https://lakspaceblog.onrender.com/api/blogs?populate=*"
  );
  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center mx-auto">
        <div className="mx-auto ">
        <span  className="loading loading-dots loading-lg ml-12"></span>
        <div className="justify-center mx-auto font-navfont text-4xl text-pink-300 m-0 ">Loading..</div>
        </div>

      </div>
    );
  if (error) return <p>{error}</p>;
  console.log(error);

  console.log(data);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homeview blogs={data ? data : ""} />}></Route>

        <Route
          path="/blog/:id"
          element={<BlogContent blogs={data ? data : ""} />}
        ></Route>
        <Route path="/blogapp"  element={<BlogPage blogs={data ? data : ""} />}/>
        <Route path="/about"  element={<About/>}/>

      <Route path="/homepage"  element={<Homeview/>}/>
      <Route path="/resources"  element={<Resources/>}/>

      </Routes>
    </div>
  );
}
export default App;
