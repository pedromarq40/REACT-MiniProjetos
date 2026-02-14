function Lista(){

  const pessoas = [
    {nome : 'Joao', idade : 15, peso : 67},
    {nome : 'Pedro', idade : 16, peso : 76},
    {nome : 'Jose', idade : 37, peso : 89}
  ]

  let nova_lista = pessoas.map(pessoa => (
    <li key={pessoa.nome}>
      {pessoa.nome}, {pessoa.idade}, {pessoa.peso}
    </li>
  ))

  return (
    <div style={{border: '2px solid gray'}}>
      <ul>
        {nova_lista}
      </ul>
    </div>
  )
}

export default Lista