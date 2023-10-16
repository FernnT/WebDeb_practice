import { useState } from "react";
import { useNavigate } from "react-router-dom";


const create = () => {
    const [title,setTitle] = useState ('');
    const [body,setBody] = useState ("");
    const [author,setAuthor] = useState("Mario");
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    function handleSubmit (e){
         e.preventDefault();

         const blog = {title, body , author};

        //console.log(blog);

        setIsPending(true);

        fetch('http://localhost:3000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new BLOG ADDED");
            setIsPending(false);
            navigate("/");
        })



        
    }


    return (  
        <div className="create">
            <h2>Add a new Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input type="text" 
                 value={title} onChange={(e)=>setTitle(e.target.value)} 
                required  />

                <label>Blog body:</label>
                <textarea  
                required
                value={body} onChange={(e)=>setBody(e.target.value)}/>

                

                 <label>Blog Author:</label>
                 <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Yoshi">Yoshi</option>
                 </select>
                

                 {!isPending && <button style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    border: "0",
                    padding: "8px",
                    borderRadius: "8px",
                    cursor: "pointer"

                 }} >Add BLOG</button>}


                    {isPending && <button disabled style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    border: "0",
                    padding: "8px",
                    borderRadius: "8px",
                    cursor: "pointer"

                 }} >ADDING BLOG...</button>}
                 
                     {/* <p>{title}</p>
                     <p>{body}</p>
                     <p>{author}</p> */}
                


            </form>


        </div>
    );
}
 
export default create;

