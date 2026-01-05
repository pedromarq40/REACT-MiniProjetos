import React from 'react'

function Forms({submeter, setTarefa, organizar_tarefas, setStatusLista, Tarefas_a_serem_feitas, tarefa}){

  return (
    <>
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
    </>
  )
}

export default Forms