import React,{useState} from 'react'
import './style.css'

function ToDoForm(props) {
    const[input,setInput] = useState('')

    const add = (e) =>{
      e.preventDefault()
      props.onSubmit({
        id: Math.floor(Math.random() * 100),
        text:input
      })
      setInput('')
    }
  return (
    <form className = 'todo-formStyle' onSubmit = {add}>
        <input 
            type= 'text' 
            placeholder ='Enter your task' 
            value ={input} 
            className ='todo-inputStyle'
            onChange = {(e) => setInput(e.target.value)}
        />
        <button className = 'todo-addButtonStyle' >Add</button>

    </form>
  )
}

export default ToDoForm
