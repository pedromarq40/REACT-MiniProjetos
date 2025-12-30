import { useState } from 'react'
import './App.css'
import Tarefa from './tarefa.js'

/**
 * Editar Tarefa
 * Mostrar Todas/Pendentes/Concluidas
 * Organização Automática das Tarefas
 */

function App() {

  const [lista, setLista] = useState(Array())
  const [tarefa, setTarefa] = useState('')
  let Tarefas_a_serem_feitas = 0

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

  function marcar(item, index){

    let nova_lista = lista.slice()
    let novo_item = item

    novo_item.concluida = true
    nova_lista[index] = novo_item
    console.log(nova_lista)

    setLista(nova_lista)

  }

  function editar_tarefa(item, index){

    let nova_lista = lista.slice()
    let novo_item = item 

    let nova_tarefa = prompt('Diga a sua nova tarefa: ')

    novo_item.tarefa = nova_tarefa
    nova_lista[index] = novo_item
    console.log(nova_lista)

    setLista(nova_lista)
  }

  function contar_tarefas(){

    for( let tarefa of lista){
      if ( !tarefa.concluida ){
        Tarefas_a_serem_feitas += 1
      }
    }

  }

  contar_tarefas()

  const lista_de_tarefas = lista.map( (item, index) => {

    let estilo = {
      color: item.concluida ? 'green' : 'red'
    }

    return (
      <li key={item.id}>
        <p style={estilo}>{item.tarefa}</p>
        <button onClick={ () => remover(index)}>Remover Tarefa</button>
        <button onClick={ () => priorizar(item, index)}>Priorizar Tarefa</button>
        <button onClick={ () => marcar(item, index)}>Marcar Tarefa Como Concluida</button>
        <button onClick={ () => editar_tarefa(item, index)}>Editar Tarefa</button>
      </li>
    )

  })

  return (
    <>
      <div className='inputs'>

        <p>Quantidade de tarefas a serem feitas: {Tarefas_a_serem_feitas}</p>

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

        <button onClick={ () => console.clear() }>Limpar Console</button>
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
