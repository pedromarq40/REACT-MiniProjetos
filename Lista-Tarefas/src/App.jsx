import { useState } from 'react'
import './App.css'

function App() {

  const [lista, setLista] = useState(Array())
  const [tarefa, setTarefa] = useState('')

  function submeter(event){

    event.preventDefault()

    if(tarefa === ''){
      return
    }

    let nova_lista = lista.slice()
    nova_lista.push(tarefa)
    console.log(nova_lista)

    setLista(nova_lista)
  }

  function remover(index){
    
    let nova_lista = lista.slice()
    nova_lista.splice(index, 1)
    console.log(nova_lista)

    setLista(nova_lista)

  }

  function priorizar(item, index){
    
    let nova_lista = lista.slice()
    nova_lista.splice(index, 1)
    nova_lista.unshift(item)
    console.log(nova_lista)

    setLista(nova_lista)

  }

  const lista_de_tarefas = lista.map( (item, index) => {

    return (
      <li key={item}>
        <p>{item}</p>
        <button onClick={ () => remover(index)}>Remover Tarefa</button>
        <button onClick={ () => priorizar(item, index)}>Priorizar Tarefa</button>
      </li>
    )

  })

  return (
    <>
      <div className='inputs'>
        <form onSubmit={submeter}>
          <label htmlFor="input">Insira sua tarefa: </label>
          <input 
          type="text" 
          id='input' 
          value={tarefa} //O valor do input sempre sera o de value
          onChange={(e) => setTarefa(e.target.value)} // função que atualiza tarefa enquanto atualiza/digita
           />
          <button type='submit'>Submeter</button>
        </form>
      </div>
      <div className='Lista'>
        <ol>
          {lista_de_tarefas}
        </ol>
      </div>
    </>
  )
}

export default App
