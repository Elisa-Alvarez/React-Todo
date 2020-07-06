// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {

    return (
        <div>
            {props.ToDoItems.map(item => (
                <Todo toggleDone={props.toggleDone} key={item.id} todo={item}/>
            ))}

            <button onClick={() => props.clearAllTasks()}>Clear All</button>
            <button onClick={() => props.clearDone()}>Clear Completed</button>
        </div>
    )
}

export default TodoList