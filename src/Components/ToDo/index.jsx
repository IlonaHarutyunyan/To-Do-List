import React,{useState} from 'react'
//style
import './style.css'
//icon
import {RiCloseCircleLine} from 'react-icons/ri'

function ToDo({tasks,completeTask,removeTask}) {
  return (
    tasks.map((value,index) => (
        <div key ={index} className={value.isComplete ? 'completeTask' : 'rowTask'}>
            <div key = {value.id} onClick = {() => completeTask(value.id)}>
                {value.text}
            </div>
            <div className ='icons'>
                <RiCloseCircleLine className = 'taskRemoveIcon' onClick ={() => removeTask(value.id)}/>
            </div>
        </div>
    ))
  )
}

export default ToDo
