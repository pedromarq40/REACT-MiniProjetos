import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'


/**
 * Organização Automática das Tarefas
 */

function App() {

  const [lista, setLista] = useState(JSON.parse(localStorage.getItem('lista')) || [])
  const [tarefa, setTarefa] = useState('')
  const [statusLista, setStatusLista] = useState(1)
  let Tarefas_a_serem_feitas = lista.filter( tarefa => !tarefa.concluida).length

  useEffect(() => {
    // Ação: Salvar no navegador
    localStorage.setItem('lista', JSON.stringify(lista))
}, [lista]) // <--- A CONDIÇÃO (Array de Dependências)

  function submeter(event){

    event.preventDefault()

    if(tarefa === ''){
      return
    }

    let nova_tarefa = {
      'concluida' : false,
      'id' : Date.now(),
      'tarefa' : tarefa
    }

    setLista([ ... lista, nova_tarefa])
  }

  function remover(id){
    
    setLista( lista.filter(item => item.id !== id))

  }

  function priorizar(id){
    
    let nova_lista = [...lista]
    
    // 1. Descobrimos qual é o index REAL desse item na lista completa
    const indexReal = nova_lista.findIndex(item => item.id === id)

    if(indexReal !== -1){
      const itemParaMover = nova_lista[indexReal]

      nova_lista.splice(indexReal, 1)
      nova_lista.unshift(itemParaMover)

      setLista(nova_lista)
    }
  }

  function marcar(id){

    setLista( lista.map( (item) =>  
     item.id === id ? { ... item, 'concluida' : true} : item
    ))
  }

  function editar_tarefa(id){

    let nova_tarefa = prompt('Diga a sua nova tarefa: ')

    setLista(lista.map( (item) =>
     item.id === id ? {... item, 'tarefa' : nova_tarefa} : item
    ))
  }

  function mostrar_tarefas() {

    let lista_filtrada = lista.filter( ( tarefa ) => {

      if ( statusLista === 2 ) return ( tarefa.concluida === true )
      if ( statusLista === 3 ) return ( tarefa.concluida === false )
      return true

    })

    let lista_final = lista_filtrada.map( (item, index) => {

        let estilo = {
          color: item.concluida ? 'green' : 'red'
        }

      return (
          <li key={item.id}>
            <p style={estilo}>{item.tarefa}</p>
            <button onClick={ () => remover(item.id)}>Remover Tarefa</button>
            <button onClick={ () => priorizar(item.id)}>Priorizar Tarefa</button>
            <button onClick={ () => marcar(item.id)}>Marcar Tarefa Como Concluida</button>
            <button onClick={ () => editar_tarefa(item.id)}>Editar Tarefa</button>
          </li>
        )

    })

    return lista_final

  }

  function organizar_tarefas(){

    let nova_lista = lista.slice()

    let concluidos = nova_lista.filter( item => item.concluida)
    let pendentes = nova_lista.filter( item => !item.concluida)

    nova_lista = concluidos.concat(pendentes)

    setLista(nova_lista)
    
  }
  
  let lista_de_tarefas = mostrar_tarefas()

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
