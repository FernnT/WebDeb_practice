import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import BlogList from "./BlogList";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();

    const {data:blogs, isPending, error} = useFetch("http://localhost:3001/blogs/"  + id);
    const navigate = useNavigate();

    const handleClick = () =>{
        fetch('http://localhost:3001/blogs/' + blogs.id,{
            method: 'DELETE'
           

        }).then(() => {
            navigate('/');
            
        })
    }



    return ( 
        <div className="blog-details">
            <h2>Blog details - {id}</h2>
                

                {isPending && <div>is LOADING....</div>}

                {!blogs && <p>THIS BLOG IS NOT AVAILABLE</p>}
                

                {/* {blogs &&<BlogList blogs={blogs.filter((blogs) => blogs.id == id)} title={blogs.author}/>} */}
               

                {blogs && <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                
                

                    <button onClick={handleClick}>DELETE</button>

                </article> }


        </div>
     );
}
 
export default BlogDetails;