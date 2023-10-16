import React, { useState } from "react";
import { useEffect } from "react";

const Hehe = () => {
  const [images, setImages] = useState(null);
  


  function wApi() {
    fetch("https://api.waifu.im/search?is_nsfw=true&gif=true")
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed with status code: ' + response.status);
      }
    })
    .then(data => {
        setImages(data.images);
        console.log(images);
 
    })
    .catch(error => {
      console.error('An error occurred:', error.message);
    });
      
  }

  return (
    <div className="tie">
      
      {images && images.map((image)=>(
        <img src={image.url} key={image.image_id}/>
      
))}

      <button onClick={wApi}>Click here for image</button>
    </div>
  );
};

export default Hehe;
