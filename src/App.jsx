import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Tasks from './components/Tasks'

import './App.css'
import AddTask from './components/AddTask'

const App = () => {
  // A var normal quando alterada não atualiza o componente
  //O state atualiza o componente
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true
    }
  ])

  const handleTaskAddition = taskTitle => {
    //Vai add o título no useState
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        //Foi instalada e importada a biblioteca uuid para gerar uma id aleatória. Assim, podemos
        //excluir o Math.random(10)
        //id: Math.random(10),
        id: uuidv4(),
        completed: false
      }
    ]
    setTasks(newTasks)
  }
  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

//Props são dados que podem ser passados de um componente pai para um componente filho
//Nesse caso, ao App é o componente pai da Tasks, porque ele está renderizando a Tasks
//No file tasks.js recebe um parâmetro chamado props

export default App
