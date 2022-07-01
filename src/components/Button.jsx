import React from 'react'

import './Button.css'

const Button = ({ children, onClick }) => {
  //Aqui recebemos como props a função que queremos executar no onClick.
  return (
    //Quando clicar será performado o que for definido em onClick={onClick}
    <button onClick={onClick} className="button">
      {children}
    </button>
  )
}

;<Button>Adicionar</Button>

export default Button

//Aqui vamos passar o children do componente button. Diferente dos outros.
