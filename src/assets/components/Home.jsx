import React from "react";
import Hehe from "./Hehe";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import Whole from "./Whole";

const Home = () => {
//    // let name = 'mario'

//     const[name,setName] = useState("Mario");
//     const [age,setAge] = useState(25)

//     const handleClick = (e) =>{
//         console.log("HELLO NINJAS",e);
//         setName("Luigi")
//         setAge(30)
//     }

//    function handleClickAgain(name,e){
//     console.log("hello" + name, e.target)
//    }

// function handleDelete(id){
//     const newBlogs = blogs.filter((blogs) => blogs.id !== id )
//     setBlogs(newBlogs);
// }

// useEffect(() => {
//     setTimeout(() => {                        //setTimeout()to simulate loading time
//             console.log("use effect ran");
//         fetch(url)
//         .then(res => {
//             console.log(res)
//              if(!res.ok){
//                 throw Error("Could not fetch data from resource");
//              }
//         return res.json();
//         })
//         .then(data => {
//             console.log(data);
//             setData(data);
//             setIsPending(false);
//             setError(null);

//         })
//         .catch((err) => {
//             // console.log(err.message);
//             setIsPending(false);
//             setError(err.message);
//         })
//     },1000);
// },[]);

const {data:blogs, isPending , error} = useFetch('http://localhost:3001/blogs');


 

    return ( 
        <div className="home">
         {isPending && <div>LOADING...</div>}

            {error && <div>{error}</div>}

            {blogs && <BlogList blogs={blogs} title="All BLOGZ!" />}

            {blogs &&<BlogList blogs={blogs.filter((blogs) => blogs.author === 'Mario')} title="Marios'blogs"/>}
            
            {/* <button onClick={() => setName("Luigi")}>Change Name</button>
            <p>{name}</p>  */} 

             {/* <Hehe></Hehe>  */}

            {/* <Whole></Whole> */}
     
    </div>
     );
}
 
export default Home;