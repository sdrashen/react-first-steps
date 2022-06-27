import React, { useState } from 'react'
import Tasks from './components/tasks'

import './App.css'

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
  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

//Props são dados que podem ser passados de um componente pai para um componente filho
//Nesse caso, ao App é o comp pai da Tasks, porque ele está renderizando a Tasks
//No file tasks.js recebe um parâmetro chamado props

export default App
