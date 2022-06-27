import React from 'react'
import Task from './Task'
// const Tasks = props => {
//Já que as tasks estão dentro do objeto props, é possível fazer isso abaixo:
const Tasks = ({ tasks }) => {
  //Pode dar um console.log aqui para ver o obj e tasks se quiser/for necessário
  return (
    //Renderizar uma task para cada Tasks
    <>
      {tasks.map(task => (
        <Task task={task} />
      ))}
    </>
  )
}

export default Tasks

//Criamos um componente, o componente Task e estamos usando-o mais de uma vez
//e dinamicamente, porque se no App.js nós add outras tasks (objetos)
//ele irá renderizar todas elas
