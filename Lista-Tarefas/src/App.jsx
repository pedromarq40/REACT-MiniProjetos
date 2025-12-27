import { useState } from 'react'
import './App.css'
import Tarefa from './tarefa.js'

/**
 * Marcar Tarefas com um ~ ao inves de sumir
 * Contador de Tarefas a serem feitas
 * Editar Tarefa
 * Mostrar Todas/Pendentes/Concluidas
 * Organização Automática das Tarefas
 */

function App() {

  const [lista, setLista] = useState(Array())
  const [tarefa, setTarefa] = useState('')

  function submeter(event){

    event.preventDefault()

    if(tarefa === ''){
      return
    }

    let nova_tarefa = new Tarefa(lista.length + 1, tarefa)

    let nova_lista = lista.slice()
    nova_lista.push(nova_tarefa)
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
      <li key={item.id}>
        <p>{item.tarefa}</p>
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
