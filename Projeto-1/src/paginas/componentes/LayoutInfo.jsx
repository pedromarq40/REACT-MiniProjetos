import { Outlet, Link } from 'react-router-dom';

function LayoutInfo() {
  return (
    <div style={{ background: '#f0f0f5', padding: '20px', border: '5px solid purple' }}>
      <h2> Área de Informações</h2>
      <nav>
        <Link to="/info">Resumo</Link> | <Link to="/info/contato">Contato</Link>
        <br />
        <Link to="/"> Voltar ao Site</Link>
      </nav>
      
      <hr />
    
      <div style={{ background: 'white', padding: '10px' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutInfo;