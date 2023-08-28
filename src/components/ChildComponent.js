import React, { useState } from "react";



const ChildComponent = ({todos,setTodoId}) => {
    const [todoItem , setTodoItem]=useState("")
    return (
        <div>
            <ul>
                <h1>Child Component</h1>
                {
                    todos.map((todo) => (
                        <li>
                            {todo.text}
                            {
                                !todo.state &&
                                (
                                    <button onClick={()=>{setTodoId(todo.id)}}>Complete</button>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ChildComponent;