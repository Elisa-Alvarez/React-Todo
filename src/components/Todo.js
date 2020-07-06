
import React from 'react'
import './Todo.css'

const Todo = props => {

   
    return (
        <div>
            <p onClick={ () => 
            props.toggleDone(props.todo.id)} className={`item${props.todo.done ? ' done' : ""}`}> {props.todo.job}</p>
        </div>
    )
}

export default Todo 