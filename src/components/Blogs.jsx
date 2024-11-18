import React, { useContext } from 'react'
import {AppContext} from "./context/AppContext"
import Spinner from "./Spinner"
import "./Blog.css"

function Blogs() {
  const {loading ,posts} =  useContext(AppContext);
  return (
    <div>
      {loading ? (<Spinner/>) :
      (
        posts.length === 0 ? (<h1>No posts found</h1>) :
        (posts.map((post)=>(
          <div key={post.id}>
            <p className=' text-xl text-red-800'>{post.title}</p>
            <p>
              By<span>{post.author}</span> on <span>{post.category}</span>
            </p>  
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div>
              {
                post.tags.map((tag,index)=>{
                  return <span key={index}>{`#${tag}`}</span>
                })
              }
            </div>
          </div>
        )))
      ) 
      }
    </div>
  )
}

export default Blogs