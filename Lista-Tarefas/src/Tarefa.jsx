import React from 'react'

function Tarefa({item , remover, priorizar, marcar, editar_tarefa, statusLista, estilo}){

  return (
    <li key={item.id}>
            <p style={estilo}>{item.tarefa}</p>
            <button onClick={ () => remover(item.id)}>Remover Tarefa</button>
            <button onClick={ () => priorizar(item.id)}>Priorizar Tarefa</button>
            <button onClick={ () => marcar(item.id)}>Marcar Tarefa Como Concluida</button>
            <button onClick={ () => editar_tarefa(item.id)}>Editar Tarefa</button>
    </li>
  )
}

export default Tarefa