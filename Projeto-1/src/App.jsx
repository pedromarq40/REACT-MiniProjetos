import { useState } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import PaginaNaoEncontrada from './paginas/NE'
import Layout from './paginas/componentes/Layout'
import LayoutInfo from './paginas/componentes/LayoutInfo'
import { useParams } from 'react-router-dom'


function App() {

  const [count, setCount] = useState(0)

  function Contador(){
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <Routes >
          <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}></Route>
              <Route path='/sobre' element={<Sobre />}/>
              <Route path='/usuario/:nome' element={<BoasVindas/>}/>
          </Route>
          <Route path='/info' element={<LayoutInfo/>}>
              <Route index element={<h1 style={{color: 'black'}}>Bem-vindo ao Info Center</h1>} />
              <Route path='contato' element={<h1 style={{color: 'black'}}>Email: teste@teste.com</h1>} />
          </Route>
          <Route path='*' element={<PaginaNaoEncontrada />}/>
        </Routes>
      </div>
    </>
  )
}

function BoasVindas(){

  const {nome} = useParams()

  return (
    <div style={{border: '2px solid blue', padding: '10px', marginTop: '10px'}}>
      <h1>Página de Usuário</h1>
      <p>Olá, <strong>{nome}</strong>! Seja bem-vindo(a).</p>
    </div>
  )

}

export default App


