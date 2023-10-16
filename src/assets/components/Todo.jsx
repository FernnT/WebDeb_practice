import { useState } from "react";
import { useEffect } from "react";
import './todo.css'
import PopUp from "./PopUp";

const Todo = () => {
    const [todos,setTodos] = useState(null);
    const [buttonPopUp,setPopUp] = useState(false);
    const [isChecked,setChecked] = useState(false);
    const [refresh,setRefresh] = useState(false);

    useEffect(()=>{
        fetch("http://localhost:3000/TODOs")
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setTodos(data);
            console.log(data);
        })
      
    },[refresh])


    function popUp(e){
        e.preventDefault();
        setPopUp(!buttonPopUp);
    }

    const deleteTask = (id) =>{
        fetch("http://localhost:3000/TODOs/" +id ,{
            method: "DELETE"
        }).then(()=>{
            console.log("deleted");
            setRefresh(!refresh);
        })
    }



    return ( 
        <div className="dodo">

                    <button className="btn" onClick={popUp}>ADD TASK</button>
                    {buttonPopUp && <PopUp/>}

                    <h1 className="header"> TODO LIST </h1>
                    <ul className="list">
                        {todos && todos.map((todos)=>(
                            <div className="task" key={todos.id}>
                                <input type="checkbox" />
                                <h2>{todos.title}</h2>
                                <p>{todos.description}</p>
                                <button onClick={()=>deleteTask(todos.id)}>Delete</button>
                            </div>
                        ))}

                    </ul>





        </div>
     );
}
 
export default Todo;