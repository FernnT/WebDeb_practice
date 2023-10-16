import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    // const handleDelete = props.handleDelete;
    
   // console.log(props,blogs);
 

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
               {blogs.map((blogs) => (
                <div className="blog-preview" key={blogs.id}>
                    <Link to = {`/blogs/${blogs.id}`}>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <button>Delete Blog</button>

                    </Link>
                   
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;