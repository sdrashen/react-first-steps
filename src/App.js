import React, { useState } from 'react'
import './App.css'

const App = () => {
  //   let message = 'Hello World!'
  // A var normal quando alterada não atualiza o componente
  const [message, setMessage] = useState('Hello world!')
  //O state atualiza o componente
  return (
    <>
      <div className="container"> {message} </div>
      <button onClick={() => setMessage('Hello')}> Mudar mensagem </button>
    </>
  )
}

export default App
