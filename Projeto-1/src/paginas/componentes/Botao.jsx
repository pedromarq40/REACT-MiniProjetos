import Alerta from './Alerta.jsx'
import { useState } from 'react'

function Botao(){

  const [count_proprio, setCount_proprio] = useState(0)

  function Contador_proprio(){
    setCount_proprio(count_proprio + 1)
  }

  let estilo = {color: 'white', backgroundColor: 'gray'}
  let divisor = ''

  if ( count_proprio % 2 == 0){
    estilo.color = 'white'
    divisor = '2'
  } else if ( count_proprio % 3 == 0){
    estilo.color = 'blue'
    divisor = '3'
  } else {
    estilo.color = 'red'
    divisor = 'outro número'
  }

  return (
    <div style={{border: '2px solid gray'}}>
      <h1>Contador Normal</h1>
      <button onClick={Contador_proprio} style={estilo}>Contador</button>
      <p>Clicado {count_proprio} vezes</p>
      <p>Número de cliques divisível por {divisor}</p>
      <Alerta />
    </div>
  )
}

export default Botao