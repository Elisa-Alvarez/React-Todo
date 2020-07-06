  
import React from 'react';


import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const ToDoItems = [
  {
    job: 'Sleep',
    id: new Date(),
    done: false
  },
  {
    job: 'Walk The Dog',
    id: new Date(),
    done: false
  }
];


class App extends React.Component {
 
  constructor(){
    super();
    this.state = {
      ToDoItems: ToDoItems
      
    }
  }

  addToDo = job => {
    let newToDo = {
      job: job,
      id: new Date(),
      done: false
    }
    console.log(newToDo)

    this.setState({
      ToDoItems: [...this.state.ToDoItems, newToDo]
    })
   
  }

  clearAllTasks = () => {
    this.setState({
      ToDoItems: []
    })
  }

  clearDone = () => {
   this.setState({
      ToDoItems: this.state.ToDoItems.filter(job => {
        return !job.done
      })
   })
  }

      

  toggleDone = taskID => {
    
    this.setState({
      ToDoItems: this.state.ToDoItems.map(item => {
        if (item.id === taskID) {
          return {
            ...item,
            done: !item.done
          };
        } else {
          return item;
        }
    })
  })

  
}

 
  render() {
    return (
      <div> 
        <h2>Things I Must Do</h2>
      
        <TodoForm addToDo={this.addToDo} />
        
        <TodoList clearDone={this.clearDone} toggleDone={this.toggleDone} clearAllTasks={this.clearAllTasks} ToDoItems={this.state.ToDoItems}/>
        
      </div>
    );
  }
}

export default App;