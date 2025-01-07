import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext, useEffect } from "react";
import { AppContext } from "./components/context/AppContext";
import "./App.css"
import { Route, Router, useLocation, useSearchParams } from "react-router-dom";

export default function App() {
  const {fetchBlogPosts} =useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(()=>{
    const page =searchParams.get("page") ?? 1;
    console.log(page);
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at[-1].replaceAll("-"," ") ; 
      fetchBlogPosts(Number(page),tag); 
    }else if(location.pathname.includes("category")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),category);
    }else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tag/:tag" element={<TagPage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
    </Routes>

  )
}
