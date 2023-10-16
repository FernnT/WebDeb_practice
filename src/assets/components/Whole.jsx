import { useState } from "react";


const Whole = () => {

    const [htie,setHtie] = useState();

    function wholeApi(){

        fetch("https://wholesomelist.com/api/random")
        .then((res) => {
            res.json();
        })
        .then((data) => {
            console.log(data);
        })
    }




    return (
    <div className="hole">
  

      <button onClick={wholeApi}>Click here for image</button>
    </div>
  );
}
 
export default Whole;