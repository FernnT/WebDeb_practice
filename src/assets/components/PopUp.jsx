import React, { useState } from 'react'


function PopUp(props) {

  const[title,setTitle] = useState("");
  const[description,setDescrip] = useState("");
  const [checked, setChecked] = useState(false);


  function submitForm(e){

    //e.preventDefault();

    const task = {title,description,checked}
    console.log(task)

    fetch("http://localhost:3000/TODOs",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(task)
    }).then(()=>console.log("new task added"));

  }

  

    
  return (
    <div>
      <form onSubmit={submitForm}>
                <div className="form-row">
                    <label htmlFor="title">ADD NEW TASK</label>
                        <input type="text"
                          required
                         id="title"
                         value={title} onChange={(e)=>setTitle(e.target.value)}/>

                    <label htmlFor="des">Description</label>
                        <textarea
                        required
                         id="des"
                         value={description} onChange={(e)=>setDescrip(e.target.value)}/>

                </div>
                <button className="btn">ADD TASK</button>

        </form> 
    </div>
  )
}

export default PopUp
