import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'

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

  const handleTaskClick = taskId => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId)
        //task.id é igual ao taskId que estamos recebendo?
        //Se for igual retorna a task e altera o completed dela para o inverso (false ou true)
        return { ...task, completed: !task.completed }
      return task
    })

    setTasks(newTasks)
  }

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

  const handleTaskDeletion = taskId => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="" exact render={TaskDetails} />
      </div>
    </Router>
    //Precisamos fazer o mapeamento de cada "page" para os nossos componentes
  )
}

//Props são dados que podem ser passados de um componente pai para um componente filho
//Nesse caso, ao App é o componente pai da Tasks, porque ele está renderizando a Tasks
//No file tasks.js recebe um parâmetro chamado props

export default App

//Alterando para true ou false o estado da tarefa ("Tarefa concluída?")
//O fluxo é: o App criou a função e passou para o tasks, nesse mesmo file
//Por sua vez, ele passou para o file Tasks e quando clicar na task
//a função handleTaskClick será executada.
