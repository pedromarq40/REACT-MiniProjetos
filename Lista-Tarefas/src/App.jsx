import { useState } from 'react'
import './App.css'
import Tarefa from './tarefa.js'

/**
 * Organização Automática das Tarefas
 */

function App() {

  const [lista, setLista] = useState(Array())
  const [tarefa, setTarefa] = useState('')
  const [statusLista, setStatusLista] = useState(1)
  let Tarefas_a_serem_feitas = lista.filter( tarefa => !tarefa.concluida).length

  function submeter(event){

    event.preventDefault()

    if(tarefa === ''){
      return
    }

    let nova_tarefa = new Tarefa(Date.now(), tarefa)

    let nova_lista = lista.slice()
    nova_lista.push(nova_tarefa)

    setLista(nova_lista)
  }

  function remover(index){
    
    let nova_lista = lista.slice()
    nova_lista.splice(index, 1)

    setLista(nova_lista)

  }

  function priorizar(item, index){
    
    let nova_lista = lista.slice()
    nova_lista.splice(index, 1)
    nova_lista.unshift(item)

    setLista(nova_lista)

  }

  function marcar(item, index){

    let nova_lista = lista.slice()
    let novo_item = {... item, 'concluida' : true}
    nova_lista[index] = novo_item

    setLista(nova_lista)

  }

  function editar_tarefa(item, index){

    let nova_lista = lista.slice()
    let novo_item = item 

    let nova_tarefa = prompt('Diga a sua nova tarefa: ')

    novo_item.tarefa = nova_tarefa
    nova_lista[index] = novo_item

    setLista(nova_lista)
  }

  function mostrar_todas_tarefas(){

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

  return lista_de_tarefas
  }

  function mostrar_com_condicao(statusLista){

    let condição 

    switch(statusLista){
      case 2:
      condição = true
      break
      case 3:
      condição = false
      break
    }

    const lista_de_tarefas = lista.map( (item, index) => {

      if(item.concluida === condição){

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

      }else{
        return null
      }
    })

    return lista_de_tarefas

  }

  function organizar_tarefas(){

    let nova_lista = lista.slice()

    let concluidos = nova_lista.filter( item => item.concluida)
    let pendentes = nova_lista.filter( item => !item.concluida)

    nova_lista = concluidos.concat(pendentes)

    setLista(nova_lista)
    
  }
  
  let lista_de_tarefas

  switch(statusLista){
    case 1: lista_de_tarefas = mostrar_todas_tarefas()
    break;
    default:
    lista_de_tarefas = mostrar_com_condicao(statusLista)
    break;
  }


  return (
    <>
      <div className='inputs'>

        <p>Quantidade de tarefas a serem feitas: {Tarefas_a_serem_feitas}</p>
        <br />

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

        <button onClick={ () => organizar_tarefas()}>Organizar Tarefas</button>
        <button onClick={ () => setStatusLista(1)}>Mostrar Todas as Tarefas</button>
        <button onClick={ () => setStatusLista(2)}>Mostrar Tarefas Concluidas</button>
        <button onClick={ () => setStatusLista(3)}>Mostrar Tarefas Pendentes</button>
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
