import React,{useState} from 'react'
//components
import ToDoForm from '../ToDoForm'
import ToDo from '../ToDo'

//style
import './style.css'

function ToDoList() {
    const [tasks,setTasks] = useState([])

    const addingTask = (task)  =>{
        setTasks([task, ...tasks])
    }

    const removeTask = (id) => {    
        const remove = [... tasks].filter((value) => value.id !== id);
        setTasks(remove)
    }

    const completeTask = (id) => {
        let refreshTasks = tasks.map(value => {
            if (value.id === id){
                value.isComplete = !value.isComplete
            }
            return(value)
        });
        setTasks(refreshTasks)
    }

  return (
    <div className='list-wrapper'>
      <h1>To Do List</h1>
      <ToDoForm onSubmit={addingTask}/>
      <div className = 'task-wrapper'>
      <ToDo tasks ={tasks} completeTask={completeTask} removeTask ={removeTask}/>
      </div>
    </div>
  )
}

export default ToDoList
