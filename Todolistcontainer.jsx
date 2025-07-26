import React from "react";
import Todo from "./Todo";

function Todocontainer({todos, deltodo}){
    return(
        <div className="todo-container">
            {todos.map((todo, index)=> (
                <Todo key={index} todo={todo} index={index} deltodo={deltodo} />
            )
            )}
        </div>
    )
};

export default Todocontainer;