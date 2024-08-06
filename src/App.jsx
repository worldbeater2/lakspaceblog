import useFetch from "./hooks/useFetch";
import { About, BlogContent, Homeview } from "./pages";
import BlogPage from "./pages/BlogPage";
import { Routes, Route } from "react-router-dom";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";





function App() {
  // Fetch data from the API
  let { loading, data, error } = useFetch(
    "https://lakspace.up.railway.app/api/blogs?populate=*"
  );

  // Render loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center mx-auto">
        <div className="mx-auto ">
          <span className="loading loading-dots loading-lg ml-12 text-neworange"></span>
          <div className="justify-center mx-auto font-newfont text-4xl text-neworange m-0 ">
            Loading..
          </div>
        </div>
      </div>
    );
  }

  // Render error message if there is an error fetching data
  if (error) {
    return <p>{error}</p>;
  }

  // Render the app component with the fetched data
  return (
    <div>
      {/* Scroll to top of the page when the route changes */}
      <ScrollToTop />

      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Homeview blogs={data ? data : " "} />}></Route>

        {/* Route for the blog post with a specific ID */}
        <Route
          path="/blog/:id"
          element={<BlogContent blogs={data ? data : ""} />}
        ></Route>

        {/* Route for the blog page */}
        <Route path="/blogapp" element={<BlogPage blogs={data ? data : " "} />} />

        {/* Route for the about page */}
        <Route path="/about" element={<About />} />

        {/* Route for the homepage */}
        <Route path="/homepage" element={<Homeview blogs={data ? data : " "} />} />

        {/* Route for the resources page */}
        <Route path="/resources" element={<Resources />} />

        {/* Route for the contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
