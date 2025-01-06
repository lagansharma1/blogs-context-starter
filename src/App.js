import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext, useEffect } from "react";
import { AppContext } from "./components/context/AppContext";
import "./App.css"
import { Route, Router } from "react-router-dom";

export default function App() {
  const {fetchBlogPosts} =useContext(AppContext)
  useEffect(()=>{
    fetchBlogPosts();
  },[]);
  return (
    <Routes>
      <Route Path="/" element={<Home/>}/>
      <Route Path="/blog/:blogId" element={<BlogPage/>}/>
      <Route Path="/tag/:tag" element={<TagPage/>}/>
      <Route Path="/category/:category" element={<CategoryPage/>}/>
   </Routes>
  )
}
