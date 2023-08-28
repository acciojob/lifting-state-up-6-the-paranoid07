import React, { useState } from "react";
import ChildComponent from "./ChildComponent";




const ParentComponent = () => {

    const [todos,setTodos] = useState([
        {id:1,text:"Learn React",state:false},
        {id:2,text:"Build a React app",state:false},
        {id:3,text:"Deploy the React app",state:false}
    ])

    const [todoId,setTodoId]=useState("");
    // console.log(todoId);

    function updateState(id){
       todos.forEach(todo => {
        if(todo.id===id){
            todo.state=true;
        }
       })
    }
    updateState(todoId);
    // console.log(todos)
    return (
        <div>
            <h1>Parent Compoent</h1>
            <ChildComponent todos={todos} setTodoId={setTodoId}/>
        </div>
    )
}  

export default ParentComponent;