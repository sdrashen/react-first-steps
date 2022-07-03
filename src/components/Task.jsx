import React from 'react'
import './Task.css'

const Task = ({ task, handleTaskClick }) => {
  return (
    <div
      className="task-container"
      //Style condicional no react:
      style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
      //Se a task.completed for igual a true, retorno o border-left estilizado ali
      //Se ñ for, retorna nada.
      //Usamos chaves aqui porque estamos usando JS.
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
    </div>
  )
}
// return <div className="task-container">{task.title}</div>

export default Task
