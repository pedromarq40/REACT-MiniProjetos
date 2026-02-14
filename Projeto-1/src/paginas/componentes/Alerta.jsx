import { useNavigate } from 'react-router-dom'

function Alerta(){

  const navigate = useNavigate()
  
  function Alertar(){
    alert('OI')
    navigate('/')
  }

  return (
    <div style={{border: '2px solid gray'}}>
      <button onClick={Alertar}>Alertar</button>
    </div>
  )
}

export default Alerta