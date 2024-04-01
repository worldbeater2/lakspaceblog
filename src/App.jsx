
import useFetch from "./hooks/useFetch";
import { BlogContent } from "./pages";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";


function App() {

let {loading, data, error} = useFetch('https://api.render.com/deploy/srv-co5k56mv3ddc7392hmo0?key=l-Z5Rr1P67M/blogs?populate=*')
if(loading) return <p>Loading...</p>
if(error) return <p>Error!</p>
console.log(data)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage blogs={data? data:""} />} ></Route>
        <Route path="/blog/:id" element={<BlogContent blogs={data? data:""} />} ></Route>
        
      </Routes>
    </div>
  );
}
export default App;
