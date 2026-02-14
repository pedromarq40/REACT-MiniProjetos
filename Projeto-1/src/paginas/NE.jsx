import { Link } from "react-router-dom"

function PaginaNaoEncontrada() {

  return (
    <div style={{padding: '20px', textAlign: 'center', color: 'red'}}>
      <h1>Erro 404
      </h1>
      <p>Ops! Essa página não existe.</p>
      {}
      <Link to="/">Voltar para o Início</Link>
    </div>
  )
}

export default PaginaNaoEncontrada