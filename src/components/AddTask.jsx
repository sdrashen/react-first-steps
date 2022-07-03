import React, { useState } from 'react'
import Button from './Button'

import './AddTask.css'

const AddTask = ({ handleTaskAddition }) => {
  //Esse AddTask pega o useState e add na lista de tarefas do file App.jsx
  const [inputData, setInputData] = useState('')
  const handleInputChange = e => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    //Vai pegar o que for inserido pelo usuário e colocar no inputData
    //quando clicar em "Adicionar", ela vai pegar o que estiver no inputData abaixo
    //e mandar para o taskAdition que por sua vez vai pegar o inputData
    //que nesse caso será o taskTitle e vai add nas tasks e setar o state.
    handleTaskAddition(inputData)
    setInputData('')
  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  )
}

export default AddTask
