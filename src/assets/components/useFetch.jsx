import { useState,useEffect } from "react";

const useFetch = (url) => {

    const [data,setData] = useState(null);
    const [name,setName] = useState("mario");
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {                        //setTimeout()to simulate loading time
            //    console.log("use effect ran");
            fetch(url)
            .then(res => {
                console.log(res)
                 if(!res.ok){
                    throw Error("Could not fetch data from resource");
                 }
            return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
    
            })
            .catch((err) => {
                // console.log(err.message);
            

                
                setIsPending(false);
                setError(err.message);
                
            })
        },300);

// return () => abortCont.abort();

    },[url]);

    return {data,isPending,error}

}
 
export default useFetch;